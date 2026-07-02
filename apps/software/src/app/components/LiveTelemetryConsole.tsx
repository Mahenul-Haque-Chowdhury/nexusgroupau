"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

/**
 * "The Honest Machine": live telemetry rendered as a floating hologram of
 * JavaScript code. No panel, no box: just syntax-highlighted source whose
 * values are real and mutate in place: live FPS, this page load's network
 * latency, the visitor's viewport, session uptime, and a log of their own
 * interactions. Nothing is stored or sent.
 */

const MAX_LOG_LINES = 4;

function formatUptime(seconds: number) {
  const m = String(Math.floor(seconds / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  return `${m}:${s}`;
}

function deviceClass(width: number) {
  if (width < 768) return "mobile";
  if (width < 1024) return "tablet";
  return "desktop";
}

/* Syntax palette (holographic night-owl-ish) */
const T = {
  keyword: "text-[#c792ea]",
  prop: "text-[#7fdbca]",
  string: "text-[#ecc48d]",
  number: "text-[#f78c6c]",
  fn: "text-[#82aaff]",
  punct: "text-white/40",
  comment: "text-white/35",
} as const;

/** A value that flashes cyan for a beat whenever it changes. */
function Live({ children, k, className = "" }: { children: React.ReactNode; k: string | number; className?: string }) {
  return (
    <motion.span
      key={k}
      initial={{ filter: "brightness(2.2)", textShadow: "0 0 14px rgba(99,211,255,0.9)" }}
      animate={{ filter: "brightness(1)", textShadow: "0 0 0px rgba(99,211,255,0)" }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className={`inline-block tabular-nums ${className}`}
    >
      {children}
    </motion.span>
  );
}

/** A single numbered code line. `no` is an explicit static index, never a
 * mutable counter, so server and client always agree on the number. */
function Ln({ no, children, className = "" }: { no: number; children?: React.ReactNode; className?: string }) {
  return (
    <div className={`group/line flex items-baseline gap-4 transition-colors ${className}`}>
      <span className="w-5 flex-shrink-0 select-none text-right text-[10px] text-cyan-200/25">
        {String(no).padStart(2, "0")}
      </span>
      <span className="min-w-0 whitespace-pre-wrap">{children}</span>
    </div>
  );
}

export function LiveTelemetryConsole() {
  const shouldReduceMotion = useReducedMotion();

  const [fps, setFps] = useState<number | null>(null);
  const [latency, setLatency] = useState<number | null>(null);
  const [vw, setVw] = useState<{ w: number; h: number } | null>(null);
  const [uptime, setUptime] = useState(0);
  const [log, setLog] = useState<Array<{ id: number; text: string; accent?: boolean }>>([]);

  const loggedKeys = useRef(new Set<string>());
  const logId = useRef(0);
  const lastLogAt = useRef(0);

  const pushLog = (key: string, text: string, accent = false) => {
    if (loggedKeys.current.has(key)) return;
    // Throttle: keep the log calm: at most one line per second
    const now = performance.now();
    if (now - lastLogAt.current < 1000 && loggedKeys.current.size > 0) return;
    lastLogAt.current = now;
    loggedKeys.current.add(key);
    logId.current += 1;
    const id = logId.current;
    setLog((prev) => [...prev, { id, text, accent }].slice(-MAX_LOG_LINES));
  };

  // Real network latency from this page's own navigation timing
  useEffect(() => {
    const nav = performance.getEntriesByType("navigation")[0] as
      | PerformanceNavigationTiming
      | undefined;
    if (nav && nav.responseStart > 0) {
      setLatency(Math.max(1, Math.round(nav.responseStart - nav.requestStart)));
    }
  }, []);

  // Real viewport, kept in sync on resize
  useEffect(() => {
    const update = () => setVw({ w: window.innerWidth, h: window.innerHeight });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Real session uptime
  useEffect(() => {
    const timer = window.setInterval(() => setUptime((s) => s + 1), 1000);
    return () => window.clearInterval(timer);
  }, []);

  // Real FPS via rAF frame counting (updated twice a second)
  useEffect(() => {
    if (shouldReduceMotion) return;
    let frames = 0;
    let last = performance.now();
    let rafId = 0;
    const tick = (now: number) => {
      frames += 1;
      if (now - last >= 500) {
        setFps(Math.min(120, Math.round((frames * 1000) / (now - last))));
        frames = 0;
        last = now;
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [shouldReduceMotion]);

  // Boot lines, then log the visitor's own behavior as system events
  useEffect(() => {
    const boots = [
      window.setTimeout(() => pushLog("boot", "telemetry.online: this code is real"), 600),
      window.setTimeout(() => pushLog("session", "session.start logged"), 1800),
    ];

    const onPointer = () => pushLog("pointer", "pointer.move captured");
    const onScroll = () => {
      pushLog("scroll", "scroll.intent detected");
      if (window.scrollY > window.innerHeight * 0.6) {
        pushLog("handoff", "handoff → capabilities.rail", true);
      }
    };
    const onOver = (e: Event) => {
      const target = (e.target as HTMLElement).closest?.("[data-telemetry]");
      if (!target) return;
      const key = target.getAttribute("data-telemetry");
      if (key === "cta.quote") pushLog("lead", "cta.hover: lead.signal detected", true);
      else if (key) pushLog(key, `${key}.hover captured`);
    };
    const onClick = (e: Event) => {
      const target = (e.target as HTMLElement).closest?.("[data-telemetry='cta.quote']");
      if (target) pushLog("lead-click", "cta.click: intent confirmed", true);
    };

    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("pointerover", onOver, true);
    document.addEventListener("click", onClick, true);
    return () => {
      boots.forEach(window.clearTimeout);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("pointerover", onOver, true);
      document.removeEventListener("click", onClick, true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fpsValue = fps ?? 60;
  const fpsHealthy = fpsValue >= 48;

  return (
    <div className="relative mx-auto w-full max-w-[30rem] text-left font-mono text-[0.8rem] leading-[1.95] sm:text-[0.86rem] lg:mr-0 lg:ml-auto lg:translate-x-6 xl:translate-x-10">
      {/* holographic ambience: soft glow behind the code, no container */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-10 -z-10 bg-[radial-gradient(ellipse_60%_55%_at_45%_40%,rgba(30,110,160,0.22),transparent_70%)] blur-2xl"
      />
      {/* projection scan: a thin light line drifting down the code */}
      {!shouldReduceMotion && (
        <motion.div
          aria-hidden
          initial={{ top: "-4%" }}
          animate={{ top: "104%" }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
          className="pointer-events-none absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent"
        />
      )}

      <div style={{ textShadow: "0 0 22px rgba(99,211,255,0.16)" }}>
        {/* header comment */}
        <Ln no={1}>
          <span className={T.comment}>{"//"} ztec.telemetry · live · not a mockup</span>
        </Ln>

        <Ln no={2}>
          <span className={T.keyword}>const</span> <span className="text-white/90">telemetry</span>{" "}
          <span className={T.punct}>=</span> <span className={T.punct}>{"{"}</span>
        </Ln>
        <Ln no={3}>
          {"  "}
          <span className={T.prop}>render</span>
          <span className={T.punct}>:</span>{" "}
          <Live k={fpsValue} className={T.number}>{fpsValue}</Live>
          <span className={T.punct}>,</span>{" "}
          <span className={T.comment}>
            {"//"} fps ·{" "}
            <span className={fpsHealthy ? "text-emerald-300/80" : "text-amber-300/80"}>
              {fpsHealthy ? "smooth" : "busy"}
            </span>
          </span>
        </Ln>
        <Ln no={4}>
          {"  "}
          <span className={T.prop}>latency</span>
          <span className={T.punct}>:</span>{" "}
          <Live k={latency ?? "x"} className={T.number}>{latency ?? "--"}</Live>
          <span className={T.punct}>,</span> <span className={T.comment}>{"//"} ms · measured</span>
        </Ln>
        <Ln no={5}>
          {"  "}
          <span className={T.prop}>viewport</span>
          <span className={T.punct}>:</span>{" "}
          <Live k={vw ? `${vw.w}x${vw.h}` : "x"} className={T.string}>
            &quot;{vw ? `${vw.w}×${vw.h}` : "--"}&quot;
          </Live>
          <span className={T.punct}>,</span>{" "}
          <span className={T.comment}>{"//"} {vw ? deviceClass(vw.w) : "detecting"}</span>
        </Ln>
        <Ln no={6}>
          {"  "}
          <span className={T.prop}>session</span>
          <span className={T.punct}>:</span>{" "}
          <Live k={uptime} className={T.string}>&quot;{formatUptime(uptime)}&quot;</Live>
          <span className={T.punct}>,</span> <span className={T.comment}>{"//"} uptime</span>
        </Ln>
        <Ln no={7}>
          {"  "}
          <span className={T.prop}>impact</span>
          <span className={T.punct}>:</span> <span className={T.string}>&quot;60% less manual work&quot;</span>
          <span className={T.punct}>,</span>
        </Ln>
        <Ln no={8}>
          <span className={T.punct}>{"}"};</span>
        </Ln>

        <Ln no={9}>{null}</Ln>

        <Ln no={10}>
          <span className="text-white/90">telemetry</span>
          <span className={T.punct}>.</span>
          <span className={T.fn}>watch</span>
          <span className={T.punct}>((</span>
          <span className="text-white/80">you</span>
          <span className={T.punct}>)</span> <span className={T.keyword}>=&gt;</span>{" "}
          <span className={T.punct}>{"{"}</span>
        </Ln>

        {/* living event log inside the watch block */}
        <div className="min-h-[8.2rem]">
          <AnimatePresence initial={false}>
            {log.length === 0 ? (
              <motion.div key="idle" exit={{ opacity: 0 }}>
                <div className="flex items-baseline gap-4">
                  <span className="w-5 flex-shrink-0" />
                  <span className={T.comment}>
                    {"  //"} awaiting input
                    <span className="ml-1 inline-block h-3 w-1.5 animate-pulse bg-cyan-300/70 align-middle" />
                  </span>
                </div>
              </motion.div>
            ) : null}
            {log.map((line) => (
              <motion.div
                key={line.id}
                initial={shouldReduceMotion ? false : { opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-baseline gap-4">
                  <span className="w-5 flex-shrink-0 select-none text-right text-[10px] text-cyan-200/25">··</span>
                  <span className={line.accent ? "text-cyan-200" : T.comment} style={line.accent ? { textShadow: "0 0 12px rgba(99,211,255,0.5)" } : undefined}>
                    {"  //"} <span className={line.accent ? "text-primary" : ""}>&gt;</span> {line.text}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <Ln no={11}>
          <span className={T.punct}>{"}"});</span>
          <span className="ml-2 inline-block h-[1em] w-[0.55em] translate-y-[0.15em] animate-pulse bg-cyan-300/80" />
        </Ln>
      </div>
    </div>
  );
}
