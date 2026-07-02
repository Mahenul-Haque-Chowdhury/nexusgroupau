"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

/**
 * The "ZTEC" wordmark periodically corrupts into a glitch burst and reforms
 * as "SOFTWARE LAB": the header briefly reveals its full identity, then
 * settles back to the brand mark. Fires on an interval and on hover.
 */

const GLITCH_INTERVAL_MS = 9000;
const GLITCH_DURATION_MS = 1000;

type Phase = "idle" | "out" | "reveal" | "in";

export function GlitchWordmark() {
  const shouldReduceMotion = useReducedMotion();
  const [phase, setPhase] = useState<Phase>("idle");
  const timers = useRef<number[]>([]);

  const runGlitch = () => {
    if (shouldReduceMotion) return;
    setPhase((p) => (p === "idle" ? "out" : p));
  };

  useEffect(() => {
    if (shouldReduceMotion) return;
    const loop = window.setInterval(runGlitch, GLITCH_INTERVAL_MS);
    return () => window.clearInterval(loop);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldReduceMotion]);

  useEffect(() => {
    if (phase === "out") {
      const t = window.setTimeout(() => setPhase("reveal"), 180);
      timers.current.push(t);
    } else if (phase === "reveal") {
      const t = window.setTimeout(() => setPhase("in"), GLITCH_DURATION_MS);
      timers.current.push(t);
    } else if (phase === "in") {
      const t = window.setTimeout(() => setPhase("idle"), 200);
      timers.current.push(t);
    }
    return () => {
      timers.current.forEach(window.clearTimeout);
      timers.current = [];
    };
  }, [phase]);

  const glitching = phase !== "idle";

  return (
    <div
      onMouseEnter={runGlitch}
      className="-ml-2 translate-y-1 flex h-[86%] w-[5.7rem] items-center self-center overflow-hidden sm:-ml-2.5 sm:w-[6.6rem] sm:translate-y-1 lg:-ml-3 lg:w-[8rem] lg:translate-y-[0.3rem]"
    >
      <div className="relative h-full w-full">
        {/* Base wordmark: fades out during the glitch, back in after */}
        <div
          className="absolute inset-0 flex items-center transition-opacity duration-150"
          style={{ opacity: phase === "out" || phase === "reveal" ? 0 : 1 }}
        >
          <Image
            src="/ztecgroup-logo.svg"
            alt="ZTEC Group"
            width={376}
            height={56}
            sizes="(max-width: 640px) 228px, (max-width: 1024px) 264px, 320px"
            loading="eager"
            className="h-full w-auto max-w-none origin-left scale-[3] object-contain opacity-100 brightness-125 contrast-125"
          />
          {/* RGB-split glitch slices over the base mark during "out" */}
          {phase === "out" && (
            <>
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 mix-blend-screen"
                style={{
                  clipPath: "inset(10% 0 60% 0)",
                  transform: "translateX(-3px)",
                  filter: "drop-shadow(2px 0 0 rgba(255,60,90,0.85))",
                }}
              />
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 mix-blend-screen"
                style={{
                  clipPath: "inset(55% 0 15% 0)",
                  transform: "translateX(3px)",
                  filter: "drop-shadow(-2px 0 0 rgba(99,211,255,0.85))",
                }}
              />
            </>
          )}
        </div>

        {/* Full identity reveal: "SOFTWARE LAB" */}
        <div
          aria-hidden={!glitching}
          className="absolute inset-0 flex items-center whitespace-nowrap font-mono text-[0.62rem] font-bold uppercase leading-none tracking-[0.08em] text-cyan-100 sm:text-[0.72rem] lg:text-[0.8rem]"
          style={{
            opacity: phase === "reveal" ? 1 : 0,
            transition: phase === "reveal" ? "opacity 90ms ease-out" : "opacity 220ms ease-in",
            textShadow: "0 0 12px rgba(99,211,255,0.7)",
          }}
        >
          {phase === "reveal" ? (
            <>
              <span
                aria-hidden
                className="absolute -translate-x-[2px] text-rose-400/70 mix-blend-screen"
                style={{ clipPath: "inset(0 0 45% 0)" }}
              >
                Software Lab
              </span>
              <span
                aria-hidden
                className="absolute translate-x-[2px] text-cyan-300/80 mix-blend-screen"
                style={{ clipPath: "inset(45% 0 0 0)" }}
              >
                Software Lab
              </span>
              <span className="relative">Software Lab</span>
            </>
          ) : (
            "Software Lab"
          )}
        </div>

        {/* Scanline sweep across the whole mark during the transition */}
        {glitching && (
          <span
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 w-full bg-gradient-to-r from-transparent via-white/50 to-transparent"
            style={{
              animation: `wordmarkScan ${GLITCH_DURATION_MS + 380}ms linear 1`,
            }}
          />
        )}
      </div>

      <style jsx>{`
        @keyframes wordmarkScan {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          8% {
            opacity: 1;
          }
          92% {
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
