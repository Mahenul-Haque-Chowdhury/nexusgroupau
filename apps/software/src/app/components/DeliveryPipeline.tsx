"use client";

import { useLayoutEffect, useRef } from "react";
import { Compass, DraftingCompass, Hammer, Rocket, Activity, type LucideIcon } from "lucide-react";
import { ensureScrollFx, FX_EASE, splitWords } from "./scrollFx";

const stages: Array<{
  code: string;
  title: string;
  description: string;
  icon: LucideIcon;
  meta: string;
}> = [
  {
    code: "01",
    title: "Discover",
    description: "We map how your business actually operates: workflows, bottlenecks, and the systems already in play.",
    icon: Compass,
    meta: "audit · requirements",
  },
  {
    code: "02",
    title: "Architect",
    description: "Stack selection and systems design decided up front, so what we build scales instead of boxing you in.",
    icon: DraftingCompass,
    meta: "stack · schema · infra",
  },
  {
    code: "03",
    title: "Build",
    description: "Iterative delivery in visible increments: you see working software early, not a reveal at the end.",
    icon: Hammer,
    meta: "sprints · reviews",
  },
  {
    code: "04",
    title: "Ship",
    description: "Hardened deployment with migrations, integrations, and training handled: cutover without chaos.",
    icon: Rocket,
    meta: "deploy · migrate · train",
  },
  {
    code: "05",
    title: "Operate",
    description: "Monitoring, maintenance, and steady improvement keep the system reliable long after launch.",
    icon: Activity,
    meta: "monitor · maintain · improve",
  },
];

/**
 * Scroll-scrubbed delivery pipeline: a progress line draws down the timeline
 * as you scroll, and each stage node lights up as it passes.
 */
export function DeliveryPipeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);
  const headingRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const { gsap } = ensureScrollFx();
    const section = sectionRef.current;
    if (!section) return;

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      if (headingRef.current) {
        const words = splitWords(headingRef.current);
        gsap.from(words, {
          yPercent: 110,
          duration: 0.9,
          ease: FX_EASE.expo,
          stagger: 0.05,
          scrollTrigger: { trigger: headingRef.current, start: "top 80%", once: true },
        });
      }

      // Progress line draws with scroll (scrub-linked, so ease is "none")
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: section.querySelector("[data-pipeline-list]"),
              start: "top 70%",
              end: "bottom 55%",
              scrub: 0.8,
              invalidateOnRefresh: true,
            },
          },
        );
      }

      // Each stage: node ignites + card slides in as it enters attention
      gsap.utils.toArray<HTMLElement>(section.querySelectorAll("[data-stage]")).forEach((stage) => {
        const node = stage.querySelector("[data-stage-node]");
        const card = stage.querySelector("[data-stage-card]");
        const tl = gsap.timeline({
          scrollTrigger: { trigger: stage, start: "top 78%", once: true },
        });
        tl.from(card, { x: 48, opacity: 0, duration: 0.7, ease: FX_EASE.out }).from(
          node,
          { scale: 0, duration: 0.5, ease: "back.out(2.2)" },
          "<0.1",
        );
        tl.eventCallback("onStart", () => stage.classList.add("is-lit"));
      });
    }, section);

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative">
      <div className="mx-auto grid max-w-[1320px] gap-14 px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-16">
        {/* Sticky intro */}
        <div className="lg:sticky lg:top-32 lg:h-fit">
          <span className="cinematic-kicker">Delivery Pipeline</span>
          <p
            ref={headingRef}
            className="mt-8 text-[clamp(1.7rem,3.6vw,2.9rem)] font-bold leading-[1.08] tracking-[-0.025em] text-white"
          >
            A build process you can watch move.
          </p>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/60">
            Five stages, no black box. Every engagement runs the same disciplined pipeline from
            first audit to long-term operations.
          </p>
          <div className="mt-8 hidden items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 lg:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            pipeline · continuous
          </div>
        </div>

        {/* Timeline */}
        <div data-pipeline-list className="relative pl-10 sm:pl-14">
          {/* Rail + scrubbed progress line */}
          <span aria-hidden className="absolute bottom-6 left-[15px] top-6 w-px bg-white/10 sm:left-[19px]" />
          <span
            ref={lineRef}
            aria-hidden
            className="absolute bottom-6 left-[15px] top-6 w-px origin-top bg-gradient-to-b from-primary via-cyan-300 to-blue-400 shadow-[0_0_12px_rgba(99,211,255,0.6)] sm:left-[19px]"
            style={{ transform: "scaleY(0)" }}
          />

          <div className="space-y-8 md:space-y-10">
            {stages.map((stage) => {
              const Icon = stage.icon;
              return (
                <div key={stage.code} data-stage className="group relative">
                  {/* Node */}
                  <span
                    data-stage-node
                    className="absolute -left-10 top-7 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-[#080d18] transition-colors duration-500 [.is-lit_&]:border-primary/60 [.is-lit_&]:shadow-[0_0_16px_rgba(99,211,255,0.45)] sm:-left-14 sm:h-10 sm:w-10"
                  >
                    <span className="h-2 w-2 rounded-full bg-white/25 transition-colors duration-500 [.is-lit_&]:bg-primary" />
                  </span>

                  {/* Card */}
                  <div
                    data-stage-card
                    className="cinematic-panel relative overflow-hidden rounded-[1.5rem] p-6 sm:p-8"
                  >
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -right-3 -top-7 select-none font-mono text-[4.5rem] font-bold leading-none text-white/[0.04] sm:text-[6rem]"
                    >
                      {stage.code}
                    </span>
                    <div className="relative z-[2]">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3.5">
                          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 ring-1 ring-white/15">
                            <Icon size={20} className="text-white" />
                          </span>
                          <h3 className="text-xl font-semibold text-white sm:text-2xl">{stage.title}</h3>
                        </div>
                        <span className="hidden font-mono text-[10px] uppercase tracking-[0.16em] text-white/35 sm:block">
                          {stage.meta}
                        </span>
                      </div>
                      <p className="mt-4 max-w-xl text-[0.96rem] leading-relaxed text-white/60">
                        {stage.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
