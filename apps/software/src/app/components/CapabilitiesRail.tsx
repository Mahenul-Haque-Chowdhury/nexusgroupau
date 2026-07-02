"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Boxes,
  Code2,
  Database,
  Lightbulb,
  Smartphone,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { ensureScrollFx, FX_EASE, splitWords } from "./scrollFx";

const featuredCapabilities: Array<{
  code: string;
  title: string;
  description: string;
  icon: LucideIcon;
  specs: string[];
}> = [
  {
    code: "AUT",
    title: "Custom Software & Automation",
    description: "Bespoke tools and workflow automation built around how your business actually runs.",
    icon: Workflow,
    specs: ["Workflows", "Integrations", "Internal Tools"],
  },
  {
    code: "WEB",
    title: "Web & E-Commerce",
    description: "High-performance sites and scalable stores with secure payments built in.",
    icon: Code2,
    specs: ["Next.js", "Storefronts", "Payments"],
  },
  {
    code: "APP",
    title: "Mobile Apps",
    description: "Fast native and cross-platform experiences for iOS and Android.",
    icon: Smartphone,
    specs: ["iOS", "Android", "Cross-Platform"],
  },
  {
    code: "SYS",
    title: "Business Systems",
    description: "ERP, CRM, HRMS, and POS platforms that unify operations.",
    icon: Boxes,
    specs: ["ERP", "CRM", "HRMS · POS"],
  },
  {
    code: "DAT",
    title: "Data & Infrastructure",
    description: "Secure, optimized backends and scalable data warehousing.",
    icon: Database,
    specs: ["Databases", "Cloud", "Pipelines"],
  },
  {
    code: "ADV",
    title: "Tech Consultancy",
    description: "Strategic guidance on stacks, transformation, and future-ready planning.",
    icon: Lightbulb,
    specs: ["Architecture", "Strategy", "Roadmaps"],
  },
];

const alsoDelivers = [
  "Inventory & Warehouse",
  "Project Management",
  "Point of Sale",
  "SEO & Digital Marketing",
  "Bug Fixing & Maintenance",
  "Systems Integration",
];

/**
 * Signature section: on desktop the module cards ride a pinned, scroll-scrubbed
 * horizontal rail with a live progress readout; on mobile/tablet they reveal
 * vertically with clip-path masks.
 */
export function CapabilitiesRail() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const { gsap } = ensureScrollFx();
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        isMobile: "(max-width: 1023px) and (prefers-reduced-motion: no-preference)",
      },
      (ctx) => {
        const { isDesktop } = ctx.conditions as { isDesktop: boolean; isMobile: boolean };

        // Masked split-word heading reveal (both breakpoints)
        if (headingRef.current) {
          const words = splitWords(headingRef.current);
          gsap.from(words, {
            yPercent: 110,
            duration: 0.9,
            ease: FX_EASE.expo,
            stagger: 0.06,
            scrollTrigger: { trigger: headingRef.current, start: "top 80%", once: true },
          });
        }

        const cards = gsap.utils.toArray<HTMLElement>(track.querySelectorAll("[data-rail-card]"));

        if (isDesktop) {
          const getDistance = () => track.scrollWidth - window.innerWidth;
          const tween = gsap.to(track, {
            x: () => -getDistance(),
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: () => `+=${getDistance()}`,
              pin: true,
              scrub: 1,
              invalidateOnRefresh: true,
              anticipatePin: 1,
              onUpdate: (self) => {
                if (progressRef.current) {
                  progressRef.current.style.transform = `scaleX(${self.progress})`;
                }
                if (counterRef.current) {
                  const idx = Math.min(
                    featuredCapabilities.length,
                    Math.max(1, Math.ceil(self.progress * featuredCapabilities.length)),
                  );
                  counterRef.current.textContent = String(idx).padStart(2, "0");
                }
              },
            },
          });

          // Cards drift in with a slight settle as the rail carries them
          cards.forEach((card) => {
            gsap.from(card, {
              y: 60,
              opacity: 0,
              scale: 0.96,
              duration: 0.8,
              ease: FX_EASE.out,
              scrollTrigger: {
                trigger: card,
                containerAnimation: tween,
                start: "left 95%",
                once: true,
              },
            });
          });
        } else {
          // Mobile: vertical clip-mask reveals, no pin
          cards.forEach((card) => {
            gsap.from(card, {
              y: 40,
              opacity: 0,
              clipPath: "inset(0% 0% 18% 0%)",
              duration: 0.7,
              ease: FX_EASE.out,
              scrollTrigger: { trigger: card, start: "top 88%", once: true },
            });
          });
        }
      },
      section,
    );

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      <div className="flex flex-col justify-center py-20 md:py-28 lg:min-h-screen lg:py-0">
        {/* Header row */}
        <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-16">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="cinematic-kicker">Capabilities</span>
              <h2
                ref={headingRef}
                className="mt-6 text-[clamp(1.9rem,4.2vw,3.4rem)] font-bold leading-[1.05] tracking-[-0.03em] text-white"
              >
                What we deliver
              </h2>
            </div>
            {/* Rail progress readout (desktop) */}
            <div className="hidden items-center gap-4 lg:flex">
              <span className="font-mono text-[11px] tracking-[0.2em] text-white/45">
                <span ref={counterRef}>01</span>
                <span className="text-white/25"> / {String(featuredCapabilities.length).padStart(2, "0")}</span>
              </span>
              <span className="relative h-px w-40 overflow-hidden bg-white/12">
                <span
                  ref={progressRef}
                  className="absolute inset-0 origin-left bg-gradient-to-r from-primary to-cyan-300"
                  style={{ transform: "scaleX(0)" }}
                />
              </span>
            </div>
          </div>
        </div>

        {/* Rail track */}
        <div
          ref={trackRef}
          className="mt-12 flex flex-col gap-5 px-5 will-change-transform sm:px-8 lg:mt-14 lg:flex-row lg:flex-nowrap lg:gap-6 lg:pl-[max(4rem,calc((100vw-1320px)/2+4rem))] lg:pr-0"
        >
          {featuredCapabilities.map((capability, i) => {
            const Icon = capability.icon;
            const moduleId = String(i + 1).padStart(2, "0");
            return (
              <article
                key={capability.title}
                data-rail-card
                className="group relative isolate flex-shrink-0 overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#080d18]/90 p-7 backdrop-blur-sm transition-colors duration-500 hover:border-cyan-300/25 hover:bg-[#0b1322] lg:w-[420px] lg:p-9 xl:w-[460px]"
              >
                {/* giant index watermark */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-2 -top-6 select-none font-mono text-[3.5rem] font-bold leading-none text-white/[0.03] transition-all duration-500 group-hover:text-cyan-300/[0.07] sm:text-[7rem]"
                >
                  {moduleId}
                </span>

                {/* scanning light sweep on hover */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-cyan-300/[0.07] to-transparent opacity-0 transition-all duration-700 ease-out group-hover:left-[120%] group-hover:opacity-100"
                />

                {/* animated corner brackets */}
                <span aria-hidden className="pointer-events-none absolute left-5 top-5 h-4 w-4 rounded-tl-[3px] border-l border-t border-cyan-300/0 transition-all duration-500 group-hover:border-cyan-300/50 lg:left-6 lg:top-6" />
                <span aria-hidden className="pointer-events-none absolute bottom-5 right-5 h-4 w-4 rounded-br-[3px] border-b border-r border-cyan-300/0 transition-all duration-500 group-hover:border-cyan-300/50 lg:bottom-6 lg:right-6" />

                <div className="relative z-[2] flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] tracking-[0.2em] text-white/35">
                      MOD_{capability.code} · {moduleId}/06
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-emerald-300/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                      active
                    </span>
                  </div>

                  <div className="mt-7 flex items-center gap-4">
                    <div className="relative">
                      <span className="absolute inset-0 rounded-2xl bg-cyan-400/30 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
                      <div className="relative flex h-14 w-14 items-center justify-center rounded-none bg-gradient-to-br from-blue-500 to-cyan-500 shadow-[0_18px_32px_rgba(15,23,42,0.4)] ring-1 ring-white/15 transition-transform duration-500 group-hover:-translate-y-0.5">
                        <Icon className="text-white" size={26} />
                      </div>
                    </div>
                    <span aria-hidden className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent transition-all duration-500 group-hover:from-cyan-300/50" />
                  </div>

                  <h3 className="mt-6 text-[1.4rem] font-semibold leading-tight text-white/95">
                    {capability.title}
                  </h3>
                  <p className="mt-3 text-[0.96rem] leading-relaxed text-white/58">
                    {capability.description}
                  </p>

                  <div className="mt-auto flex items-center justify-between gap-3 border-t border-white/8 pt-5 lg:mt-7">
                    <div className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[0.1em] text-white/40">
                      {capability.specs.map((spec, si) => (
                        <span key={spec} className="inline-flex items-center gap-3">
                          {si > 0 ? <span className="text-white/20">/</span> : null}
                          <span className="transition-colors duration-300 group-hover:text-white/65">{spec}</span>
                        </span>
                      ))}
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="flex-shrink-0 text-white/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan-300"
                    />
                  </div>
                </div>
              </article>
            );
          })}

          {/* End-of-rail CTA */}
          <div
            data-rail-card
            className="group relative flex flex-shrink-0 flex-col items-start justify-center overflow-hidden rounded-[1.6rem] border border-cyan-300/25 bg-gradient-to-br from-cyan-400/[0.09] to-blue-500/[0.05] p-8 backdrop-blur-sm transition-colors duration-500 hover:border-cyan-300/50 lg:w-[400px] lg:p-10"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-cyan-300/[0.09] to-transparent opacity-0 transition-all duration-700 ease-out group-hover:left-[120%] group-hover:opacity-100"
            />
            <span className="font-mono text-[11px] tracking-[0.2em] text-cyan-200/60">MOD_YOU · ??/06</span>
            <h3 className="mt-5 text-[1.7rem] font-bold leading-tight text-white">
              Something custom in mind?
            </h3>
            <p className="mt-3 text-[0.96rem] leading-relaxed text-white/60">
              Every system here started as a requirement doc. Send us yours.
            </p>
            <Link
              href="/quotation"
              data-telemetry="cta.quote"
              className="mt-8 inline-flex min-h-12 items-center gap-2.5 bg-gradient-to-r from-cyan-400 to-sky-500 px-6 py-3 font-mono text-[12px] font-semibold uppercase tracking-[0.18em] text-[#04121d] shadow-[0_0_24px_rgba(99,211,255,0.3)] transition-all duration-300 hover:shadow-[0_0_44px_rgba(99,211,255,0.55)] hover:brightness-110 active:scale-[0.97] [clip-path:polygon(0.7rem_0,100%_0,100%_calc(100%-0.7rem),calc(100%-0.7rem)_100%,0_100%,0_0.7rem)]"
            >
              <span className="text-[#04121d]/60">$</span>
              send_your_requirements
              <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1">▸</span>
            </Link>
          </div>

          {/* End spacer: real element so scrollWidth includes the end gap
              (trailing padding is unreliable in overflow measurements) */}
          <div aria-hidden className="hidden w-[18vw] flex-shrink-0 lg:block" />
        </div>

        {/* Also delivers */}
        <div className="mx-auto mt-12 flex w-full max-w-[1320px] flex-wrap items-center justify-center gap-3 px-5 sm:px-8 lg:px-16">
          <span className="text-[11px] uppercase tracking-[0.18em] text-white/40">Also</span>
          {alsoDelivers.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-white/68"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
