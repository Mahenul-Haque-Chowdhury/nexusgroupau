"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { Shield, Video, Code, TrendingUp, ChevronDown } from "lucide-react";
import { SectionContainer } from "../components/SectionContainer";
import { ServiceCard } from "../components/ServiceCard";
import { Button } from "../components/Button";
import BlurText from "../components/BlurText";
import { useEffect, useRef, useState } from "react";

const HERO_ROTATING_CTAS = [
  {
    label: "Explore Software Services",
    href: "/services/software",
    external: false,
    toneClassName:
      "bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 ring-cyan-200/40 shadow-[0_14px_35px_rgba(34,211,238,0.3)] hover:brightness-110",
  },
  {
    label: "Explore Video Services",
    href: "/services/content",
    external: false,
    toneClassName:
      "bg-gradient-to-r from-rose-500 to-orange-400 text-white ring-rose-200/35 shadow-[0_14px_35px_rgba(244,63,94,0.34)] hover:brightness-110",
  },
  {
    label: "Book a Consultation",
    href: "/services/revenue",
    external: false,
    toneClassName:
      "!bg-[rgb(0,209,148)] text-slate-950 ring-[#86efd1]/70 shadow-[0_14px_35px_rgba(0,209,148,0.34)] hover:!bg-[rgb(0,209,148)]",
  },
  {
    label: "Visit Scan2Call.net",
    href: "https://scan2call.net",
    external: true,
    toneClassName:
      "bg-[#FFC657] text-slate-950 ring-[#ffe3a6]/70 shadow-[0_14px_35px_rgba(255,198,87,0.34)] hover:bg-[#ffd173]",
  },
] as const;

const HERO_CTA_ROTATION_MS = 2800;

export function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const solutionsRef = useRef<HTMLDivElement>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeHeroCtaIndex, setActiveHeroCtaIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  useEffect(() => {
    const rotationTimer = window.setInterval(() => {
      setActiveHeroCtaIndex((previousIndex) =>
        (previousIndex + 1) % HERO_ROTATING_CTAS.length
      );
    }, HERO_CTA_ROTATION_MS);

    return () => window.clearInterval(rotationTimer);
  }, []);

  const { scrollYProgress: solutionsProgress } = useScroll({
    target: solutionsRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -120]);
  const gridPatternOpacity = useTransform(scrollYProgress, [0, 0.5], [0.85, 0.28]);
  const blobPrimaryY = useTransform(scrollYProgress, [0, 0.5], [0, -130]);
  const blobSecondaryY = useTransform(scrollYProgress, [0, 0.5], [0, 130]);
  const blobPrimaryScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  const blobSecondaryScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.15]);
  const tickerDriftY = useTransform(solutionsProgress, [0, 1], [16, -16]);
  const orbPrimaryY = useTransform(solutionsProgress, [0, 1], [26, -26]);
  const orbSecondaryY = useTransform(solutionsProgress, [0, 1], [-22, 22]);
  const activeHeroCta = HERO_ROTATING_CTAS[activeHeroCtaIndex] ?? HERO_ROTATING_CTAS[0];

  const tickerItems = [
    "Anonymous Communication Gateway",
    "Website Development",
    "E-Commerce Solutions",
    "Mobile App Development",
    "SEO & Digital Marketing",
    "CRM",
    "HRMS",
    "Documentary & Story-Driven Video Edits",
    "Shorts",
    "Reels & Vertical Repurposing",
    "Ad Creative & Promo Editing",
    "Facebook-TikTok-YouTube",
    "Video & Reels Editing",
    "Short Term Rental Management Consultation",
  ];

  const comprehensiveServices = [
    {
      number: "01",
      title: "Anonymous Communication Gateway",
      description: "Secure, encrypted communication infrastructure for privacy-first organizations and individuals.",
      icon: Shield,
      imageSrc: "/service-comm.png",
      href: "/services/communication",
      gradient: "bg-gradient-to-br from-blue-500 to-cyan-500",
      tags: ["Secure Messaging", "Anonymous Identity", "Encrypted Exchange"],
    },
    {
      number: "02",
      title: "Video & Motion Content Studio",
      description: "Premium video production, motion graphics, and cinematic storytelling for brands that demand excellence.",
      icon: Video,
      imageSrc: "/service-video.png",
      href: "/services/content",
      gradient: "bg-gradient-to-br from-amber-400 to-orange-500",
      tags: ["Cinematic Production", "Motion Graphics", "Story Systems"],
    },
    {
      number: "03",
      title: "Software & Business Systems",
      description: "Enterprise-grade software solutions and custom business automation platforms.",
      icon: Code,
      imageSrc: "/service-software.png",
      href: "/services/software",
      gradient: "bg-gradient-to-br from-cyan-500 to-teal-500",
      tags: ["Applications", "Integrations", "Automation"],
    },
    {
      number: "04",
      title: "STR Management Consultation",
      description: "Strategic short-term rental management consultation and optimization frameworks.",
      icon: TrendingUp,
      imageSrc: "/service-revenue.jpg",
      href: "/services/revenue",
      gradient: "bg-gradient-to-br from-emerald-400 to-lime-500",
      tags: ["Dynamic Pricing", "Forecasting", "Portfolio Ops"],
    },
  ];

  const faqItems = [
    {
      question: "How do your four divisions collaborate on one engagement?",
      answer: "Each project starts with a shared roadmap, then we assign a lead division while the other teams plug in at mapped milestones for communication, media, systems, and growth outcomes.",
    },
    {
      question: "Can we launch with one service first and expand later?",
      answer: "Yes. Most clients begin with one priority track, then add additional divisions once the first deployment reaches measurable traction.",
    },
    {
      question: "What happens during the kickoff sprint?",
      answer: "We align goals, define KPIs, audit current infrastructure, and deliver an execution blueprint with timelines, owners, and phased delivery checkpoints.",
    },
    {
      question: "How fast can you ship a first usable release?",
      answer: "Depending on scope, we typically deliver a validated first release within 3-6 weeks, including design, build, and real-world feedback loops.",
    },
    {
      question: "Do you integrate with our existing tools and platforms?",
      answer: "Absolutely. We integrate with existing CRMs, analytics stacks, communication tools, and internal workflows to avoid disruption and accelerate adoption.",
    },
    {
      question: "What support do we get after go-live?",
      answer: "You can choose a continuous support model covering optimization, monitoring, monthly performance reviews, and iterative feature upgrades.",
    },
  ];

  return (
    <div className="relative">
      <div className="pointer-events-none fixed inset-0 z-0">
        <Image
          src="/nexushero.webp"
          alt="Cinematic background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/70 to-black/85" />
      </div>

      <div className="relative z-10">
      {/* Hero Section */}
      <SectionContainer fullHeight={false}>
        <div ref={heroRef} className="relative min-h-[80svh] md:min-h-[76vh] pt-24 sm:pt-28 md:pt-20 flex items-center justify-center overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />
            <motion.div
              style={{ y: blobPrimaryY, scale: blobPrimaryScale }}
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"
            />
            <motion.div
              style={{ y: blobSecondaryY, scale: blobSecondaryScale, animationDelay: "1s" }}
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"
            />
          </div>

          {/* Grid Pattern */}
          <motion.div
            style={{ opacity: gridPatternOpacity }}
            className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"
          />

          <motion.div 
            style={{ opacity, scale, y: heroY }}
            className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 text-center"
          >
            {/* Main Headline */}
            <h1 className="sr-only">Unified Ecosystem of Digital Services for Secure Growth</h1>
            <div aria-hidden className="mb-8 space-y-1">
              <BlurText
                text="Unified Ecosystem of Digital"
                delay={190}
                stepDuration={0.62}
                animateBy="words"
                direction="top"
                className="w-full justify-center text-[clamp(2.3rem,10.4vw,3.25rem)] font-bold tracking-tight leading-[1.08] sm:text-[2.9rem] md:text-[3.6rem] lg:text-[4.35rem]"
              />
              <BlurText
                text="Services for Secure Growth"
                delay={170}
                stepDuration={0.62}
                animateBy="words"
                direction="bottom"
                className="w-full justify-center text-[clamp(2.3rem,10.4vw,3.25rem)] font-bold tracking-tight leading-[1.08] sm:text-[2.9rem] md:text-[3.6rem] lg:text-[4.35rem]"
                segmentClassName="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent"
              />
            </div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base sm:text-lg md:text-xl text-white/60 max-w-3xl mx-auto mb-10 md:mb-12 leading-relaxed"
            >
              We connect advanced digital systems, communication, and media 
              into one seamless solution platform.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mx-auto flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center sm:items-center"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeHeroCta.label}
                  initial={{ opacity: 0, rotateX: 92, y: 10, scale: 0.98, filter: "saturate(70%)" }}
                  animate={{ opacity: 1, rotateX: 0, y: 0, scale: 1, filter: "saturate(100%)" }}
                  exit={{ opacity: 0, rotateX: -92, y: -10, scale: 0.98, filter: "saturate(70%)" }}
                  transition={{ duration: 0.46, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full [perspective:1200px] sm:w-auto"
                  style={{ transformOrigin: "center center", transformStyle: "preserve-3d", willChange: "transform, opacity, filter" }}
                >
                  {activeHeroCta.external ? (
                    <a href={activeHeroCta.href} target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="primary"
                        size="lg"
                        className={`w-full px-4 py-3 text-[0.75rem] normal-case tracking-[0.01em] sm:w-[14.5rem] sm:text-[0.8rem] md:w-[15.5rem] md:text-[0.82rem] ${activeHeroCta.toneClassName}`}
                      >
                        <span className="inline-flex min-h-[1.25rem] w-full items-center justify-center whitespace-nowrap">
                          {activeHeroCta.label}
                        </span>
                      </Button>
                    </a>
                  ) : (
                    <Link href={activeHeroCta.href}>
                      <Button
                        variant="primary"
                        size="lg"
                        className={`w-full px-4 py-3 text-[0.75rem] normal-case tracking-[0.01em] sm:w-[14.5rem] sm:text-[0.8rem] md:w-[15.5rem] md:text-[0.82rem] ${activeHeroCta.toneClassName}`}
                      >
                        <span className="inline-flex min-h-[1.25rem] w-full items-center justify-center whitespace-nowrap">
                          {activeHeroCta.label}
                        </span>
                      </Button>
                    </Link>
                  )}
                </motion.div>
              </AnimatePresence>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Get in Touch
                </Button>
              </Link>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="mt-8 hidden justify-center md:mt-12 md:flex"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2"
              >
                <div className="w-1 h-2 bg-white/60 rounded-full" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </SectionContainer>

      {/* Services Preview Section */}
      <SectionContainer fullHeight={false}>
        <div ref={solutionsRef} className="relative overflow-hidden pt-2 pb-16 md:pb-20 md:pt-4">
          <motion.div
            style={{ y: orbPrimaryY }}
            className="narrative-orb narrative-orb-cyan -left-24 top-4"
            aria-hidden
          />
          <motion.div
            style={{ y: orbSecondaryY }}
            className="narrative-orb narrative-orb-amber -right-24 bottom-4"
            aria-hidden
          />

          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16">
            <motion.div
              style={{ y: tickerDriftY }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="narrative-surface relative z-10 -mt-2 mb-8 overflow-hidden rounded-2xl px-2 py-3 sm:-mt-4 sm:mb-10 sm:rounded-full sm:px-2 sm:py-3 md:-mt-6"
            >
              <div className="narrative-ticker">
                <div className="narrative-ticker-track text-[10px] leading-[1.35] uppercase tracking-[0.12em] text-white/68 sm:text-[12px] sm:tracking-[0.18em]">
                  {Array.from({ length: 2 }).map((_, loopIndex) => (
                    tickerItems.map((item, itemIndex) => (
                      <span key={`${loopIndex}-${itemIndex}`} className="inline-flex items-center gap-2.5 whitespace-nowrap sm:gap-3">
                        <span>{item}</span>
                        <span className="h-1 w-1 rounded-full bg-primary/75" />
                      </span>
                    ))
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 text-center mb-10 md:mb-14"
            >
              <div className="narrative-surface inline-flex items-center rounded-full px-4 py-2 text-[11px] tracking-[0.16em] text-white/70 mb-8 uppercase">
                Core Capabilities
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-[1.08]">
                Comprehensive
                <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent"> Solutions</span>
              </h2>
              <p className="mx-auto max-w-3xl text-base sm:text-lg md:text-xl text-white/62 leading-relaxed">
                Framer-inspired motion language with layered depth, kinetic rhythm, and coordinated service flows.
              </p>
            </motion.div>

            {/* Service Cards Grid */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="narrative-surface narrative-surface-no-border relative z-10 rounded-[2rem] p-2.5 md:p-4"
            >
              <div className="grid gap-4 md:grid-cols-2 md:gap-5">
                {comprehensiveServices.map((service) => (
                  <ServiceCard
                    key={service.number}
                    number={service.number}
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    imageSrc={service.imageSrc}
                    href={service.href}
                    gradient={service.gradient}
                    tags={service.tags}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </SectionContainer>

      {/* FAQ Section */}
      <SectionContainer fullHeight={false}>
        <div className="relative py-16 md:py-24">
          <div className="max-w-[1120px] mx-auto px-5 sm:px-8 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-9 md:mb-12"
            >
              <h2 className="text-2xl font-semibold tracking-tight text-white/95 sm:text-3xl md:text-4xl">FAQ</h2>
            </motion.div>

            <div className="space-y-3 md:space-y-4">
              {faqItems.map((item, index) => {
                const isOpen = openFaqIndex === index;

                return (
                  <motion.div
                    key={item.question}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    className={`overflow-hidden rounded-[1.35rem] border transition-all duration-300 ${
                      isOpen
                        ? "border-white/20 bg-[linear-gradient(112deg,rgba(44,51,62,0.96),rgba(33,39,49,0.95))]"
                        : "border-white/12 bg-[linear-gradient(112deg,rgba(31,37,47,0.94),rgba(24,29,37,0.93))] hover:border-white/20"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-[1.05rem]"
                    >
                      <span className="text-base font-medium leading-snug text-white/90 sm:text-lg md:text-xl md:leading-snug">
                        {item.question}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                        className="shrink-0 text-white/65"
                      >
                        <ChevronDown size={20} />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          key="faq-answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 pb-4 text-sm leading-relaxed text-white/68 md:px-6 md:pb-5 md:text-base">
                            {item.answer}
                          </p>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Credibility Section */}
      <SectionContainer fullHeight={false}>
        <div className="relative py-16 md:py-24 border-y border-white/5">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-white/60">
                Organizations worldwide rely on this infrastructure
              </p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {[
                { value: "500+", label: "Projects Delivered" },
                { value: "99.9%", label: "Uptime Guaranteed" },
                { value: "50+", label: "Enterprise Clients" },
                { value: "24/7", label: "Global Support" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="cinematic-panel rounded-2xl text-center px-3 py-6 sm:px-4 sm:py-8"
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="text-white/50">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Final CTA Section */}
      <SectionContainer>
        <div className="relative min-h-[74svh] md:min-h-screen flex items-center justify-center">
          {/* Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-400/12 rounded-full blur-3xl" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center cinematic-panel rounded-3xl py-10 sm:py-12 md:py-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 md:mb-8 leading-tight">
              Ready to Transform Your
              <br />
              Digital Infrastructure?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/60 mb-9 md:mb-12 leading-relaxed">
              Join forward-thinking organizations leveraging the NEXUS ecosystem for competitive advantage.
            </p>
            <Link href="/contact">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Start Your Project
              </Button>
            </Link>
          </motion.div>
        </div>
      </SectionContainer>
      </div>
    </div>
  );
}