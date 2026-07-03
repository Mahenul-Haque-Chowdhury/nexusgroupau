"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "motion/react";
import { SectionContainer } from "./SectionContainer";
import { CapabilitiesRail } from "./CapabilitiesRail";
import { LiveTelemetryConsole } from "./LiveTelemetryConsole";
import { DeliveryPipeline } from "./DeliveryPipeline";
import { OperationsDiff } from "./OperationsDiff";
import { Button } from "./Button";
import ScrollVelocity from "./ScrollVelocity";
import { engineeringTechStackIcons, marketingTechStack, toolsStack } from "./softwareTechStacks";

const EASE = [0.22, 1, 0.36, 1] as const;

const HEADLINE = ["Build", "the", "systems", "your", "business", "actually", "runs", "on."];

const heroBranches = ["Web & Digital", "Infrastructure", "Enterprise Systems"];

/** Terminal-styled hero CTA: notched corners, mono type, scan sweep on hover. */
function HeroCta({
  href,
  children,
  primary = false,
  telemetry,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
  telemetry?: string;
}) {
  return (
    <Link
      href={href}
      data-telemetry={telemetry}
      className={`group relative inline-flex min-h-12 w-full items-center justify-center gap-2.5 overflow-hidden px-7 py-3.5 font-mono text-[12px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 active:scale-[0.97] sm:w-auto [clip-path:polygon(0.7rem_0,100%_0,100%_calc(100%-0.7rem),calc(100%-0.7rem)_100%,0_100%,0_0.7rem)] ${
        primary
          ? "bg-gradient-to-r from-cyan-400 to-sky-500 text-[#04121d] shadow-[0_0_24px_rgba(99,211,255,0.35)] hover:shadow-[0_0_44px_rgba(99,211,255,0.6)] hover:brightness-110"
          : "border border-cyan-300/30 bg-cyan-400/[0.04] text-cyan-100/85 hover:border-cyan-300/60 hover:bg-cyan-400/[0.1] hover:text-white hover:shadow-[0_0_28px_rgba(99,211,255,0.2)]"
      }`}
    >
      {/* scan sweep */}
      <span
        aria-hidden
        className={`pointer-events-none absolute inset-y-0 -left-full w-full -skew-x-12 bg-gradient-to-r from-transparent to-transparent transition-[left] duration-500 ease-out group-hover:left-full ${
          primary ? "via-white/40" : "via-cyan-300/15"
        }`}
      />
      {/* corner ticks that light up on hover */}
      <span aria-hidden className={`pointer-events-none absolute left-1.5 top-1.5 h-2 w-2 border-l border-t transition-colors duration-300 ${primary ? "border-[#04121d]/25 group-hover:border-[#04121d]/60" : "border-cyan-300/0 group-hover:border-cyan-300/80"}`} />
      <span aria-hidden className={`pointer-events-none absolute bottom-1.5 right-1.5 h-2 w-2 border-b border-r transition-colors duration-300 ${primary ? "border-[#04121d]/25 group-hover:border-[#04121d]/60" : "border-cyan-300/0 group-hover:border-cyan-300/80"}`} />
      <span className={primary ? "text-[#04121d]/60" : "text-primary/80"}>$</span>
      <span className="relative z-[1]">{children}</span>
      <span aria-hidden className="relative z-[1] inline-block transition-transform duration-300 group-hover:translate-x-1">
        ▸
      </span>
    </Link>
  );
}

const wordVariants: Variants = {
  hidden: { opacity: 0, y: "0.5em", filter: "blur(12px)" },
  show: (i: number) => ({
    opacity: 1,
    y: "0em",
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: EASE, delay: 0.2 + i * 0.075 },
  }),
};

export function SoftwareExperience() {
  const shouldReduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLDivElement>(null);

  // Phones get a static hero background: the scroll-linked parallax layers
  // are the main source of mobile compositing lag.
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  const staticHero = shouldReduceMotion || isMobile;

  // Scroll-driven hero parallax: content lifts + fades, background drifts.
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroContentY = useTransform(scrollYProgress, [0, 1], [0, staticHero ? 0 : -120]);
  const heroContentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, staticHero ? 1 : 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, staticHero ? 1 : 1.06]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, staticHero ? 0 : 80]);
  const orbCyanY = useTransform(scrollYProgress, [0, 1], [0, staticHero ? 0 : -140]);
  const orbAmberY = useTransform(scrollYProgress, [0, 1], [0, staticHero ? 0 : 120]);

  const renderLogoOnlyTechRow = (items: typeof engineeringTechStackIcons) => (
    <>
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <span
            key={`${item.label}-logo-${index}`}
            className="inline-flex items-center justify-center whitespace-nowrap px-2.5 py-1.5 sm:px-3"
          >
            <Icon
              size={38}
              aria-label={item.label}
              style={item.color ? { color: item.color } : undefined}
              className={item.className}
            />
          </span>
        );
      })}
    </>
  );

  const renderNamedTechRow = (items: typeof marketingTechStack) => (
    <>
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <span
            key={`${item.name}-${index}`}
            className="inline-flex items-center gap-4 whitespace-nowrap px-2.5 py-1.5 sm:gap-5 sm:px-3"
          >
            <Icon
              size={38}
              aria-hidden="true"
              style={item.color ? { color: item.color } : undefined}
              className={item.className}
            />
            <span>{item.name}</span>
          </span>
        );
      })}
    </>
  );

  const tickerTexts = [
    renderLogoOnlyTechRow(engineeringTechStackIcons),
    renderNamedTechRow([...marketingTechStack, ...toolsStack]),
  ];

  return (
    <div className="relative">
      {/* Preserved background image + cinematic overlays */}
      <div className="pointer-events-none fixed inset-x-0 top-0 h-[100svh] min-h-[100lvh] w-full z-0 md:inset-0 md:h-auto md:min-h-0">
        <Image
          src="/service-software.png"
          alt="ZTEC Software Lab"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top md:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/70 to-black/85" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-[0.12] md:opacity-20 md:mix-blend-screen" />
      </div>

      <div className="relative z-10">
        {/* ───────────────────────── Hero ───────────────────────── */}
        <SectionContainer fullHeight={false}>
          <div
            ref={heroRef}
            className="relative flex min-h-[94svh] items-center justify-center overflow-hidden px-5 pt-[calc(env(safe-area-inset-top)+7rem)] pb-16 sm:px-8 md:min-h-screen md:pt-32 lg:px-16"
          >
            {/* Aurora orbs (desktop only: giant blurred layers are too heavy
                for mobile GPUs) + animated dot-grid floor */}
            <motion.div
              aria-hidden
              style={{ y: orbCyanY, scale: heroScale }}
              className="pointer-events-none absolute -left-[10%] top-[8%] hidden h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(99,211,255,0.28),transparent_68%)] blur-3xl md:block"
            />
            <motion.div
              aria-hidden
              style={{ y: orbAmberY }}
              className="pointer-events-none absolute -right-[12%] bottom-[2%] hidden h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(240,180,79,0.2),transparent_68%)] blur-3xl md:block"
            />
            <motion.div
              aria-hidden
              style={{ y: gridY }}
              className="pointer-events-none absolute inset-x-0 bottom-[-20%] top-1/2 [background-image:linear-gradient(rgba(127,211,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(127,211,255,0.10)_1px,transparent_1px)] [background-size:54px_54px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000,transparent_75%)]"
            />

            {/* HUD corner brackets */}
            <div aria-hidden className="pointer-events-none absolute inset-5 z-[5] hidden md:inset-8 md:block lg:inset-12">
              {["left-0 top-0 border-l border-t", "right-0 top-0 border-r border-t", "left-0 bottom-0 border-l border-b", "right-0 bottom-0 border-r border-b"].map((pos) => (
                <span key={pos} className={`absolute h-10 w-10 rounded-[2px] border-white/20 ${pos}`} />
              ))}
            </div>

            <motion.div
              style={{ y: heroContentY, opacity: heroContentOpacity }}
              className="relative z-10 mx-auto grid w-full max-w-[1380px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16"
            >
              {/* Left: kinetic headline + CTAs */}
              <div className="text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: EASE }}
                  className="flex justify-center lg:justify-start"
                >
                  <span className="inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.22em] text-cyan-200/80">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/70" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                    </span>
                    <span className="text-primary/80">$</span> init ztec.software_lab
                    <span className="text-emerald-300/80">[ok]</span>
                  </span>
                </motion.div>

                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
                  className="mt-7 block select-none font-mono text-[13px] text-white/25"
                  aria-hidden
                >
                  &lt;systems&gt;
                </motion.span>

                <h1 className="mt-3 flex flex-wrap justify-center gap-x-[0.26em] gap-y-1 text-[clamp(2.3rem,5.4vw,4.6rem)] font-bold leading-[0.98] tracking-[-0.045em] text-white lg:justify-start">
                  <span className="sr-only">ZTEC Software Lab: custom software development and automation in Australia. </span>
                  {HEADLINE.map((word, i) => {
                    const accent = word === "systems" || word === "runs";
                    return (
                      <motion.span
                        key={`${word}-${i}`}
                        custom={i}
                        variants={wordVariants}
                        initial="hidden"
                        animate="show"
                        className={`inline-block ${accent ? "bg-gradient-to-br from-cyan-200 via-primary to-blue-400 bg-clip-text text-transparent" : ""}`}
                      >
                        {word}
                      </motion.span>
                    );
                  })}
                </h1>

                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, ease: EASE, delay: 0.9 }}
                  className="mt-3 block select-none font-mono text-[13px] text-white/25"
                  aria-hidden
                >
                  &lt;/systems&gt;
                </motion.span>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: EASE, delay: 0.95 }}
                  className="mx-auto mt-6 max-w-md text-base leading-relaxed text-white/62 sm:text-lg lg:mx-0"
                >
                  Software that removes operational drag and gives leadership cleaner control.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: EASE, delay: 1.05 }}
                  className="mt-8 flex flex-wrap justify-center gap-2.5 lg:justify-start"
                >
                  {heroBranches.map((branch) => (
                    <span
                      key={branch}
                      className="border border-cyan-300/20 bg-cyan-400/[0.05] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-100/75 [clip-path:polygon(0.55rem_0,100%_0,100%_calc(100%-0.55rem),calc(100%-0.55rem)_100%,0_100%,0_0.55rem)]"
                    >
                      {branch.toLowerCase().replace(/ & /g, ".").replace(/ /g, "_")}
                    </span>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: EASE, delay: 1.15 }}
                  className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start"
                >
                  <HeroCta href="/quotation" primary telemetry="cta.quote">
                    request_quotation
                  </HeroCta>
                  <HeroCta href="/services">explore_services</HeroCta>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, ease: EASE, delay: 1.35 }}
                  className="mt-9 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/40 lg:justify-start"
                >
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-1 w-1 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.9)]" />
                    build: passing
                  </span>
                  <span className="text-white/15">|</span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-1 w-1 rounded-full bg-cyan-300 shadow-[0_0_6px_rgba(99,211,255,0.9)]" />
                    deploy: continuous
                  </span>
                  <span className="text-white/15">|</span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-1 w-1 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.9)]" />
                    uptime: 24/7
                  </span>
                </motion.div>
              </div>

              {/* Right: live telemetry console: real metrics, not a mockup */}
              <motion.div
                initial={{ opacity: 0, x: 40, filter: "blur(10px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.5 }}
                className="relative mx-auto w-full max-w-md lg:max-w-none"
              >
                <LiveTelemetryConsole />
              </motion.div>
            </motion.div>

            {/* Scroll cue */}
            <motion.div
              aria-hidden
              style={{ opacity: heroContentOpacity }}
              className="pointer-events-none absolute bottom-7 left-1/2 -translate-x-1/2"
            >
              <motion.div
                animate={shouldReduceMotion ? undefined : { y: [0, 8, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 p-1"
              >
                <span className="h-2 w-0.5 rounded-full bg-white/55" />
              </motion.div>
            </motion.div>
          </div>
        </SectionContainer>

        {/* ────────────── Tech marquee (preserved intact) ────────────── */}
        <SectionContainer fullHeight={false}>
          <div className="relative py-16 md:py-24">
            <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-16">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: EASE }}
                className="relative z-10 overflow-hidden py-4 sm:py-5"
              >
                <div className="mb-9 flex justify-center px-5 text-center sm:px-6 lg:px-8">
                  <div className="inline-flex items-center text-[2.25rem] font-semibold uppercase tracking-[0.14em] text-white/72 sm:text-[2.75rem]">
                    Software Stack & Tooling
                  </div>
                </div>
                <div className="space-y-3 pb-1">
                  <ScrollVelocity
                    texts={tickerTexts}
                    velocity={24}
                    numCopies={isMobile ? 3 : 6}
                    className="px-3 text-[1.25rem] font-semibold uppercase leading-[1.3] tracking-[0.05em] text-white/90 sm:px-4 sm:text-[1.5rem]"
                    parallaxClassName="py-2"
                    scrollerClassName="items-center gap-7 sm:gap-8"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </SectionContainer>

        {/* ──── Capabilities: pinned horizontal rail (GSAP ScrollTrigger) ──── */}
        <CapabilitiesRail />

        {/* ──── Delivery pipeline: scroll-scrubbed progress line ──── */}
        <DeliveryPipeline />

        {/* ──── Operations migration diff (GSAP scroll-triggered) ──── */}
        <OperationsDiff />

        {/* ───────────────────────── CTA ───────────────────────── */}
        <SectionContainer fullHeight={false}>
          <div className="relative overflow-hidden py-24 md:py-36">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-[0.06] blur-3xl" />
            {/* Sweeping light beam */}
            <motion.div
              aria-hidden
              initial={{ x: "-120%" }}
              whileInView={shouldReduceMotion ? undefined : { x: "120%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: EASE, delay: 0.2 }}
              className="pointer-events-none absolute inset-y-0 left-0 w-1/3 skew-x-12 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent"
            />
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: EASE }}
              className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8"
            >
              <h2 className="text-[clamp(2rem,5vw,3.8rem)] font-bold leading-[1.04] tracking-[-0.035em] text-white">
                Need a tailored quote?
              </h2>
              <p className="mx-auto mt-7 max-w-lg text-lg leading-relaxed text-white/62">
                Share your requirements and get a custom quotation aligned to your stack.
              </p>
              <div className="mt-11 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="/quotation">
                  <Button variant="primary" size="lg">
                    Request Quotation
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" size="lg">
                    View All Services
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </SectionContainer>
      </div>
    </div>
  );
}
