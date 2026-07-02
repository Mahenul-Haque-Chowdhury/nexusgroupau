"use client";

import { useLayoutEffect, useRef } from "react";
import { Bot, Eye, TrendingUp, type LucideIcon } from "lucide-react";
import { ensureScrollFx, FX_EASE, splitWords } from "./scrollFx";

const aiFeatures: Array<{ title: string; description: string; icon: LucideIcon }> = [
  {
    title: "AI-driven automation",
    description:
      "Repetitive tasks, approvals, and data entry are handled by intelligent workflows that never sleep, so your team spends time on decisions, not busywork.",
    icon: Bot,
  },
  {
    title: "AI-optimized visibility",
    description:
      "From search presence to internal dashboards, AI keeps your business visible and your leadership informed with live insight instead of guesswork.",
    icon: Eye,
  },
  {
    title: "Always-on optimization",
    description:
      "Your systems learn from every cycle, continuously tuning performance and processes as the business grows.",
    icon: TrendingUp,
  },
];

const checklist = [
  "Enterprise-grade reliability",
  "Architecture built to scale",
  "Cleaner operational control",
  "A real technical edge",
];

/**
 * AI-integrated operations: scroll-triggered story of how AI removes manual
 * work and sharpens business visibility, anchored by the 60% counter.
 */
export function OperationsDiff() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLParagraphElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

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

      // Headline stat: counter runs up as the panel reveals
      const stat = section.querySelector("[data-stat]");
      if (stat) {
        const tl = gsap.timeline({
          scrollTrigger: { trigger: stat, start: "top 78%", once: true },
        });
        tl.from(stat, { opacity: 0, y: 24, duration: 0.7, ease: FX_EASE.out });
        const counterState = { v: 0 };
        tl.to(
          counterState,
          {
            v: 60,
            duration: 1.6,
            ease: "power2.out",
            onUpdate: () => {
              if (counterRef.current) counterRef.current.textContent = String(Math.round(counterState.v));
            },
          },
          0.25,
        );
      }

      // Feature rows sequence in
      section.querySelectorAll("[data-feature]").forEach((row) => {
        gsap.from(row, {
          opacity: 0,
          y: 28,
          duration: 0.65,
          ease: FX_EASE.out,
          scrollTrigger: { trigger: row, start: "top 85%", once: true },
        });
      });

      // Outcome checklist staggers in
      gsap.from(section.querySelectorAll("[data-check]"), {
        opacity: 0,
        x: -14,
        duration: 0.45,
        ease: FX_EASE.out,
        stagger: 0.1,
        scrollTrigger: { trigger: section.querySelector("[data-checklist]"), start: "top 88%", once: true },
      });
    }, section);

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative">
      <div className="mx-auto grid max-w-[1320px] gap-12 px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-16">
        {/* Sticky intro */}
        <div className="lg:sticky lg:top-32 lg:h-fit">
          <span className="text-[11px] uppercase tracking-[0.24em] text-cyan-200/70">
            AI-Integrated Operations
          </span>
          <p
            ref={headingRef}
            className="mt-8 text-[clamp(1.6rem,3.4vw,2.7rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-white"
          >
            We integrate AI to run the busywork, so your team doesn&apos;t have to.
          </p>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/60">
            Intelligent automation clears the repetitive work while AI-driven insight sharpens your
            business visibility, giving leadership calm, control, and room to scale.
          </p>
        </div>

        {/* AI story */}
        <div className="min-w-0">
          {/* Headline stat */}
          <div data-stat className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-8 -z-10 bg-[radial-gradient(ellipse_55%_60%_at_30%_40%,rgba(30,110,160,0.2),transparent_70%)] blur-2xl"
            />
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
              <span className="bg-gradient-to-br from-white to-cyan-200 bg-clip-text text-[clamp(3.4rem,8vw,5.6rem)] font-bold leading-none tracking-tight text-transparent">
                <span ref={counterRef}>60</span>%
              </span>
              <span className="max-w-[16rem] text-lg leading-snug text-white/72">
                less manual work across day-to-day operations
              </span>
            </div>
          </div>

          {/* AI feature rows */}
          <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
            {aiFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} data-feature className="group flex gap-5 py-7 sm:gap-7">
                  <div className="relative flex-shrink-0">
                    <span className="absolute inset-0 rounded-2xl bg-cyan-400/25 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
                    <span className="relative flex h-12 w-12 items-center justify-center rounded-none bg-gradient-to-br from-blue-500 to-cyan-500 ring-1 ring-white/15 shadow-[0_14px_28px_rgba(15,23,42,0.35)] sm:h-14 sm:w-14">
                      <Icon className="text-white" size={24} />
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xl font-semibold text-white sm:text-[1.35rem]">{feature.title}</h3>
                    <p className="mt-2.5 max-w-xl text-[0.98rem] leading-relaxed text-white/60">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Outcome checklist */}
          <div data-checklist className="mt-9 grid gap-x-10 gap-y-3.5 sm:grid-cols-2">
            {checklist.map((item) => (
              <div key={item} data-check className="flex items-center gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-emerald-300/30 bg-emerald-400/10 text-[11px] text-emerald-300">
                  ✓
                </span>
                <span className="text-[0.98rem] text-white/78">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
