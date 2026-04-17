"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import {
  ArrowRight,
  BellRing,
  BookOpen,
  Code,
  Download,
  FileText,
  Home,
  Mail,
  MapPin,
  MessageCircle,
  PackageSearch,
  Phone,
  QrCode,
  Shield,
  Target,
  TrendingUp,
  Users,
  Video,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { SectionContainer } from "../components/SectionContainer";
import { Button } from "../components/Button";

const serviceData = {
  communication: {
    title: "Anonymous Communication Gateway",
    tagline: "",
    icon: Shield,
    imageSrc: "/service-comm.png",
    gradient: "from-sky-300 to-cyan-400",
    overview: "Scan2Call is a privacy-first lost-and-found service where owners tag belongings with QR labels and get anonymous finder communication when items are recovered.",
    branches: [
      "Scan2Call Platform",
      "QR Smart Tags",
      "Anonymous Finder Channel",
      "Recovery Notifications"
    ],
    capabilities: [
      {
        title: "QR Tag Purchase & Activation",
        description: "Users buy Scan2Call tags, assign each tag to a specific belonging, and activate them through a simple web setup flow."
      },
      {
        title: "Instant Scan Recovery Link",
        description: "When someone finds a lost item, scanning the tag opens a dedicated Scan2Call link that starts the recovery process immediately."
      },
      {
        title: "Anonymous Call, Text, or Report",
        description: "Finders can call, text, or submit a recovery report to the owner without exposing either party's personal contact details."
      },
      {
        title: "Owner Notification Relay",
        description: "Owners receive real-time alerts when their item is scanned so they can coordinate pickup quickly and safely."
      },
      {
        title: "Secure Recovery Tracking",
        description: "Each recovery interaction is logged in a clean timeline so users can track status from first scan to successful return."
      },
      {
        title: "Privacy-By-Design Controls",
        description: "Contact masking and controlled message relay keep identities protected while enabling direct, useful communication."
      }
    ],
    outcomes: [
      "Faster lost item recovery",
      "Anonymous owner-finder communication",
      "Lower replacement costs",
      "Higher trust in recovery workflows"
    ],
    proof: {
      stat: "Scan2Call",
      description: "Lost & Found Service Product",
      testimonial: "A simple QR scan that connects finder and owner privately is exactly what recovery should feel like."
    }
  },
  content: {
    title: "Video & Motion Content Studio",
    tagline: "",
    icon: Video,
    imageSrc: "/service-video.png",
    gradient: "from-amber-400 to-orange-500",
    overview: "Full-spectrum post-production for brands, creators, and businesses. Send raw clips, mixed footage, or even a chaotic folder of broken takes, and we deliver polished, production-ready videos tailored for every platform.",
    branches: [
      "Short-Form Social Editing",
      "Long-Form & Documentary Editing",
      "Post-Production & Finishing",
      "Platform-Specific Delivery"
    ],
    capabilities: [
      {
        title: "Facebook Video & Reels Editing",
        description: "Scroll-stopping Facebook edits built for feed retention, engagement pacing, and conversion-focused storytelling."
      },
      {
        title: "TikTok Video Editing",
        description: "Fast-cut, trend-aware TikTok edits with native pacing, hook-first openings, and platform-optimized formatting."
      },
      {
        title: "YouTube Video Editing",
        description: "Long-form and short-form YouTube edits, from talking-head cuts to documentary-style episodes and channel series."
      },
      {
        title: "Documentary & Story-Driven Edits",
        description: "Narrative structuring, pacing control, and emotional arc design for interviews, case studies, and documentary content."
      },
      {
        title: "Shorts, Reels & Vertical Repurposing",
        description: "One source shoot turned into platform-ready vertical assets for Instagram, Facebook, TikTok, and YouTube Shorts."
      },
      {
        title: "Ad Creative & Promo Editing",
        description: "High-performance video ad edits for paid campaigns, launches, offers, and product announcements."
      },
      {
        title: "Corporate & Brand Video Editing",
        description: "Professional internal and external brand communications, including explainers, culture reels, and executive messages."
      },
      {
        title: "Podcast & Interview Post-Production",
        description: "Multi-camera sync, jump-cut cleanup, visual consistency, and social cutdowns from long-form recordings."
      },
      {
        title: "Motion Graphics, Titles & Captions",
        description: "Clean branded typography, subtitle systems, lower thirds, and animated graphic overlays for clarity and impact."
      },
      {
        title: "Color Correction & Audio Cleanup",
        description: "Frame-by-frame polish with color balancing, cinematic grading, noise reduction, EQ, and broadcast-safe mastering."
      },
      {
        title: "Footage Rescue & Rebuild",
        description: "Damaged timelines, inconsistent clips, and messy media folders are rebuilt into coherent, professional final cuts."
      },
      {
        title: "Production-Ready Export Packages",
        description: "Final delivery in every required ratio, codec, and platform spec, ready for direct publishing or ad deployment."
      }
    ],
    outcomes: [
      "Higher watch-time and audience retention",
      "Faster publishing cycles across all platforms",
      "Consistent premium visual quality",
      "More content from existing raw footage"
    ],
    proof: {
      stat: "24-72h",
      description: "Typical turnaround for standard edits",
      testimonial: "We sent them a chaotic folder of clips and got back polished, production-ready edits for every channel."
    }
  },
  software: {
    title: "Software & Business Systems",
    tagline: "",
    icon: Code,
    imageSrc: "/service-software.png",
    gradient: "from-blue-500 to-cyan-500",
    overview: "A complete Web & Software solutions suite covering digital products, infrastructure, consulting, and enterprise business systems.",
    branches: [
      "Web & Digital Services",
      "Infrastructure & Consulting",
      "Enterprise Software Solutions"
    ],
    capabilities: [
      {
        title: "Website Development",
        description: "Professional, responsive, and high-performance websites tailored to your brand globally."
      },
      {
        title: "E-Commerce Solutions",
        description: "Scalable online stores with secure payments, smart inventory, and robust user experiences."
      },
      {
        title: "Mobile App Development",
        description: "Fast, responsive native and cross-platform mobile experiences for iOS and Android."
      },
      {
        title: "SEO & Digital Marketing",
        description: "Data-driven organic search strategies, campaign management, and digital presence growth."
      },
      {
        title: "Tech Consultancy",
        description: "Strategic guidance on tech stacks, digital transformation, and future-ready IT planning."
      },
      {
        title: "Database & Server Management",
        description: "Secure, reliable, and optimized backend infrastructure and scalable data warehousing."
      },
      {
        title: "Bug Fixing & Maintenance",
        description: "Ongoing technical support, performance enhancements, and codebase optimization."
      },
      {
        title: "Human Resource Management (HRMS)",
        description: "Centralized employee portals for attendance, payroll, appraisals, and recruitment workflows."
      },
      {
        title: "Customer Relationship Management (CRM)",
        description: "Intelligent platforms designed to track leads, manage customer interactions, and optimize sales funnels."
      },
      {
        title: "Enterprise Resource Planning (ERP)",
        description: "Holistic business management software unifying finance, supply chain, core operations, and reporting."
      },
      {
        title: "Inventory & Warehouse Management",
        description: "Real-time stock tracking engines designed to mitigate delays and synchronize supply channels."
      },
      {
        title: "Project Management Systems",
        description: "Collaborative tools built to assign tasks, follow project lifecycles, and measure team productivity."
      },
      {
        title: "Point of Sale Systems (POS)",
        description: "Intuitive transactional tools bridging physical retail hardware with synchronized cloud data."
      },
      {
        title: "Custom Software & Automation",
        description: "Bespoke software tools and seamless workflow automations built specifically for your operations."
      }
    ],
    outcomes: [
      "60% reduction in manual processes",
      "Enterprise-grade reliability",
      "Scalable architecture",
      "Competitive technical advantage"
    ],
    proof: {
      stat: "99.9% Uptime",
      description: "Across all deployed systems",
      testimonial: "Their software platform became the backbone of our entire operation."
    }
  },
  revenue: {
    title: "Short-Term Rental Accommodation Management Consultation",
    tagline: "",
    icon: TrendingUp,
    imageSrc: "/service-revenue2.jpg",
    gradient: "from-emerald-400 to-lime-500",
    overview: "",
    branches: [
      "STRA Launch & Setup",
      "Airbnb Listing Optimization",
      "Revenue & Occupancy Strategy",
      "On-Demand Done-For-You Delivery"
    ],
    capabilities: [
      {
        title: "Turn Your Property Vision Into a Profitable Reality",
        description:
          "Whether you are investing in a boutique motel or launching a spare room, we build a practical launch plan aligned to your property, budget, and goals."
      },
      {
        title: "For Hotel and Motel Investors: Feasibility First",
        description:
          "Before you sign a lease or purchase, we assess suburb demand, competitor occupancy, and average daily rates so you can make a confident investment decision."
      },
      {
        title: "Licensing and Red Tape Made Simple",
        description:
          "We map required permits, fire safety obligations, and insurance requirements so you can launch legally and avoid shutdown risk."
      },
      {
        title: "Operations From Day One",
        description:
          "Get ready-to-use operating systems including staff rosters, housekeeping checklists, booking setup, and guest communication templates."
      },
      {
        title: "Revenue Management That Protects Low Season",
        description:
          "We implement dynamic pricing, stay rules, and calendar strategy so you can protect occupancy and profit through seasonal demand shifts."
      },
      {
        title: "Avoid the Classic Investor Traps",
        description:
          "Avoid over-renovating, under-pricing, hiring the wrong manager, or creating conflict between long-term and short-term guest models."
      },
      {
        title: "For Homeowners: Is Your Home STRA-Ready?",
        description:
          "We assess your space, entry flow, noise exposure, and local STRA (Short term rental accommodation) council rules to confirm whether your property is suitable to launch."
      },
      {
        title: "Setup Without Overwhelm",
        description:
          "From smart locks and noise monitors to professional photography and high-converting listing copy, we make setup practical and manageable."
      },
      {
        title: "Pricing That Works",
        description:
          "We prevent the two common launch errors: rates set too high that kill bookings, or too low that attract poor-fit guests and weak returns."
      },
      {
        title: "House Rules and Launch Checklist",
        description:
          "We create clear, enforceable house rules and complete your launch checklist from tax basics to automation, messaging, and review management."
      }
    ],
    outcomes: [
      "Launch with confidence using a proven system",
      "Avoid expensive setup and compliance mistakes",
      "Operate with stronger occupancy and cleaner processes",
      "Build predictable short-stay income over time"
    ],
    proof: {
      stat: "No Experience Required",
      description: "Roadmap, templates, and ongoing support from first setup to launch",
      testimonial:
        "You do not need five years of hospitality experience. You need a proven system and clear next steps."
    }
  }
};

const capabilityIconsByService: Record<keyof typeof serviceData, LucideIcon[]> = {
  communication: [Shield, Zap, Target, Users, FileText, BookOpen],
  content: [Video, Download, FileText, Target, Zap, TrendingUp, Users, BookOpen, ArrowRight, Shield],
  software: [
    Code,
    FileText,
    Download,
    TrendingUp,
    Target,
    Zap,
    Shield,
    Users,
    Mail,
    BookOpen,
    MapPin,
    Home,
    Phone,
    ArrowRight,
  ],
  revenue: [TrendingUp, Target, FileText, Zap, BookOpen, Users],
};

const scan2CallWorkflow: Array<{ title: string; description: string; icon: LucideIcon }> = [
  {
    title: "Buy & Activate Tags",
    description: "Owners purchase Scan2Call tags and assign each tag to a specific belonging from their account.",
    icon: QrCode,
  },
  {
    title: "Finder Scans the QR",
    description: "A person who finds the item scans the tag and lands on a secure Scan2Call recovery page.",
    icon: PackageSearch,
  },
  {
    title: "Anonymous Contact Options",
    description: "The finder can call, text, or submit a quick report to the owner without exposing private numbers or emails.",
    icon: MessageCircle,
  },
  {
    title: "Owner Gets Instant Alert",
    description: "The owner is notified in real time and can coordinate a safe return path with complete conversation context.",
    icon: BellRing,
  },
];

const strConsultationContent = {
  headingOne: "Turn Your Property Vision into a Profitable Reality",
  introParagraphOne:
    "You know the opportunity is there - short-term accommodation demand is strong, and both travellers and business guests are booking every night. But without hands-on experience, the risks feel overwhelming. Licensing confusion, pricing mistakes, terrible first reviews, or even losing money on a property you thought would be a goldmine. We remove the guesswork.",
  introParagraphTwo:
    "Whether you're an investor eyeing a boutique motel or a homeowner with a spare bedroom, we give you a clear, step-by-step launch plan tailored to your specific property, budget, and goals.",
  headingTwo: "No Experiences For Hotel & Motel Investors? We can Help",
  investorPoints: [
    "Feasibility first: We analyse your target suburb, competitor occupancy rates, and average daily rates before you sign a lease or purchase.",
    "Licensing and red tape made simple: We map out every council permit, fire safety requirement, and insurance obligation so you don't get fined or shut down.",
    "Operations from day one: Staff rosters, housekeeping checklists, booking system setup, and guest communication templates - all pre-built.",
    "Revenue management: Learn how to adjust nightly rates dynamically to beat OTAs and maximise profit, even in low season.",
    "Avoid the classic traps: Over-renovating, under-pricing, hiring the wrong manager, or mixing long-term and short-term guests badly.",
  ],
  headingThree: "For Homeowners Turning Your House into an Airbnb",
  homeownerPoints: [
    "Is your home suitable? We assess your space, entry points, noise levels, and local council rules for STRA (Short term rental accommodation).",
    "Setup without overwhelm: From smart locks and noise monitors to professional photography and listing descriptions that convert.",
    "Pricing that works: Avoid the two biggest mistakes - setting rates too high (zero bookings) or too low (losses and bad guests).",
    "House rules that protect you: We write clear, enforceable rules that reduce parties, pet damage, and neighbour complaints.",
    "Launch checklist: Everything from tax implications (GST, occupancy tax) to automated messaging and review management - done for you.",
  ],
  bottomLineHeading: "The Bottom Line",
  bottomLineParagraph:
    "You don't need five years of hospitality experience. You just need a proven system. We provide the roadmap, the templates, and the ongoing support so you can open confidently, operate profitably, and sleep well knowing your property is in good hands.",
};

interface ServiceDetailProps {
  serviceId: string;
}

export function ServiceDetail({ serviceId }: ServiceDetailProps) {
  const service = serviceData[serviceId as keyof typeof serviceData];
  const isSoftwareService = serviceId === "software";
  const isContentService = serviceId === "content";
  const isCommunicationService = serviceId === "communication";
  const isRevenueService = serviceId === "revenue";
  const isCleanLayoutService = isSoftwareService || isCommunicationService || isContentService || isRevenueService;
  const capabilityIcons = capabilityIconsByService[serviceId as keyof typeof capabilityIconsByService] ?? [service.icon];
  const heroTintOpacityClass = isContentService ? "opacity-[0.12]" : "opacity-20";
  const ctaGlowOpacityClass = isContentService ? "opacity-[0.03]" : "opacity-5";

  const heroCtaLabel = isSoftwareService
    ? "Request Quotation"
    : isCommunicationService
      ? "Visit Scan2Call"
      : isContentService
        ? "Get Editing Quote"
        : isRevenueService
          ? "Book Free 20-minute Discovery Call"
      : "Request Consultation";

  return (
    <div className="relative">
      <div className="pointer-events-none fixed inset-x-0 top-0 h-[100svh] min-h-[100lvh] w-full z-0 md:inset-0 md:h-auto md:min-h-0">
        <Image
          src={service.imageSrc}
          alt={service.title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-top md:object-center"
        />
        {isRevenueService ? (
          <div className="absolute inset-0 bg-gradient-to-b from-black/18 via-black/30 to-black/46" />
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/70 to-black/85" />
            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} ${heroTintOpacityClass} mix-blend-screen`} />
          </>
        )}
      </div>

      <div className="relative z-10">
      {/* Hero Section */}
      <SectionContainer fullHeight={!isCleanLayoutService}>
        <div
          className={`relative flex justify-center ${
            isCleanLayoutService
              ? "items-start pt-[calc(env(safe-area-inset-top)+6rem)] pb-4 sm:pt-[calc(env(safe-area-inset-top)+6.5rem)] md:pt-[8.5rem] md:pb-4"
              : "min-h-screen items-center pt-[calc(env(safe-area-inset-top)+5rem)] md:pt-0"
          }`}
        >

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 w-full max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-16"
          >
            <div
              className={
                isCleanLayoutService
                  ? `${isRevenueService ? "max-w-6xl" : "max-w-5xl"} mx-auto text-center`
                  : "max-w-4xl"
              }
            >
                {service.tagline ? (
                  <div className="cinematic-kicker mb-8">
                    {service.tagline}
                  </div>
                ) : null}
                <h1
                  className="mb-8 text-[clamp(1.45rem,4.1vw,3.15rem)] font-bold leading-[1.06] tracking-tight"
                >
                  {isRevenueService ? (
                    <>
                      <span className="block sm:whitespace-nowrap">Short-Term Rental Accommodation</span>
                      <span className="block md:mt-1">Management Consultation</span>
                    </>
                  ) : (
                    service.title
                  )}
                </h1>
                {service.overview ? (
                  <p
                    className={
                      isCleanLayoutService
                        ? "text-lg md:text-xl text-white/60 mb-6 leading-relaxed"
                        : "text-lg md:text-xl text-white/60 mb-12 leading-relaxed"
                    }
                  >
                    {service.overview}
                  </p>
                ) : null}
                {!isCleanLayoutService && (
                  <div className="mb-10">
                    <div className="text-xs uppercase tracking-[0.14em] text-white/55 mb-4">
                      Branches
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {service.branches.map((branch) => (
                        <span
                          key={branch}
                          className="px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-sm text-white/80"
                        >
                          {branch}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {!isRevenueService ? (
                  isCommunicationService ? (
                    <a
                      href="https://scan2call.net"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="primary" size="lg">
                        {heroCtaLabel}
                      </Button>
                    </a>
                  ) : (
                    <Link href="/contact" className={isSoftwareService ? "lg:hidden" : ""}>
                      <Button variant="primary" size="lg">
                        {heroCtaLabel}
                      </Button>
                    </Link>
                  )
                ) : null}
            </div>
          </motion.div>
        </div>
      </SectionContainer>

      {isCommunicationService ? (
        <SectionContainer fullHeight={false}>
          <div className="relative pt-3 pb-10 md:pt-4 md:pb-12">
            <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-16">
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="cinematic-panel rounded-3xl p-8 md:p-10"
              >
                <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
                  <div>
                    <div className="inline-block rounded-full bg-white/7 px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-white/70">
                      Featured Product
                    </div>
                    <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">Scan2Call</h2>
                    <p className="mt-5 text-lg leading-relaxed text-white/65">
                      Scan2Call is a website-based Lost & Found service. Users buy QR tags and place them on belongings. If
                      something gets lost, a finder scans the tag and gets anonymous communication options to help return the item.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-white/55">
                      The scan link lets finders call, text, or submit a report to the owner while keeping personal identity private.
                    </p>
                    <p className="mt-6 text-sm text-white/45">
                      Logo and direct product link can be added here when you share them.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-2.5">
                      {[
                        "Website Product",
                        "QR Tag Based",
                        "Lost & Found",
                        "Anonymous Communication",
                      ].map((badge) => (
                        <span key={badge} className="rounded-full bg-white/7 px-3 py-1.5 text-[11px] uppercase tracking-[0.08em] text-white/75">
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                    {scan2CallWorkflow.map((step) => (
                      <div key={step.title} className="rounded-2xl bg-white/6 p-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]">
                        <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white/85">
                          <step.icon size={18} />
                        </div>
                        <h3 className="text-base font-semibold text-white/90">{step.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-white/60">{step.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </SectionContainer>
      ) : null}

      {isRevenueService ? (
        <SectionContainer fullHeight={false}>
          <div className="relative pt-4 pb-14 md:pt-6 md:pb-20">
            <div className="max-w-[1120px] mx-auto px-5 sm:px-8 lg:px-16">
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-7 md:space-y-8"
              >
                <section className="cinematic-panel rounded-3xl p-6 sm:p-8 md:p-12">
                  <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">{strConsultationContent.headingOne}</h2>
                    <p className="mt-6 text-lg leading-relaxed text-white/72">{strConsultationContent.introParagraphOne}</p>
                    <p className="mt-4 text-lg leading-relaxed text-white/72">{strConsultationContent.introParagraphTwo}</p>
                  </div>
                </section>

                <section className="cinematic-panel rounded-3xl p-6 sm:p-8 md:p-10">
                  <div className="mx-auto max-w-4xl">
                    <h3 className="text-left text-2xl font-semibold leading-tight text-white md:text-3xl">{strConsultationContent.headingTwo}</h3>
                    <div className="mt-6 space-y-3">
                      {strConsultationContent.investorPoints.map((point) => (
                        <p key={point} className="rounded-2xl bg-white/6 p-4 text-left text-lg leading-relaxed text-white/72 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]">
                          {point}
                        </p>
                      ))}
                    </div>
                  </div>
                </section>

                <section className="cinematic-panel rounded-3xl p-6 sm:p-8 md:p-10">
                  <div className="mx-auto max-w-4xl">
                    <h3 className="text-left text-2xl font-semibold leading-tight text-white md:text-3xl">{strConsultationContent.headingThree}</h3>
                    <div className="mt-6 space-y-3">
                      {strConsultationContent.homeownerPoints.map((point) => (
                        <p key={point} className="rounded-2xl bg-white/6 p-4 text-left text-lg leading-relaxed text-white/72 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]">
                          {point}
                        </p>
                      ))}
                    </div>
                  </div>
                </section>

                <section className="cinematic-panel flex min-h-[280px] flex-col items-center justify-center rounded-3xl p-6 text-center sm:p-8 md:min-h-[330px] md:p-12">
                  <h3 className="max-w-3xl text-2xl font-semibold leading-tight text-white md:text-3xl">{strConsultationContent.bottomLineHeading}</h3>
                  <p className="mt-5 max-w-4xl text-lg leading-relaxed text-white/72">{strConsultationContent.bottomLineParagraph}</p>
                  <p className="mt-4 max-w-4xl text-lg leading-relaxed text-white/72">
                    Ready to start? Book a free 20-minute Discovery Call or email at{" "}
                    <a href="mailto:enquiry@nexusgroup.ltd" className="text-white underline decoration-white/40 underline-offset-2 transition-colors hover:text-primary">
                      enquiry@nexusgroup.ltd
                    </a>
                    . Tell us about your property - we'll tell you exactly what steps come next.
                  </p>
                  <Link href="/contact" className="mt-8">
                    <Button variant="primary" size="lg">
                      Book a 20 min Consultation Now.
                    </Button>
                  </Link>
                </section>
              </motion.div>
            </div>
          </div>
        </SectionContainer>
      ) : null}

      {!isCommunicationService && !isRevenueService ? (
        <SectionContainer fullHeight={false}>
          <div className={`relative ${isCleanLayoutService ? "pt-2 pb-10 md:pt-3 md:pb-12" : "py-20 md:py-32"}`}>
            <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16">
              {!isCleanLayoutService && (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="text-center mb-24"
                >
                  <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs tracking-wider text-white/60 mb-8 uppercase">
                    Capabilities
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold mb-6">
                    What We Deliver
                  </h2>
                  <p className="text-xl text-white/60 max-w-2xl mx-auto">
                    Comprehensive solutions engineered for excellence
                  </p>
                </motion.div>
              )}

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {service.capabilities.map((capability, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className={`cinematic-panel group relative rounded-2xl p-8 transition-all duration-300 hover:border-white/25 ${
                      isSoftwareService ? "overflow-hidden pb-16" : ""
                    }`}
                  >
                    {(() => {
                      const CapabilityIcon = capabilityIcons[i % capabilityIcons.length] ?? service.icon;
                      return <CapabilityIcon className="text-white/40 mb-4" size={24} />;
                    })()}
                    <h3 className="text-xl font-semibold mb-3">{capability.title}</h3>
                    <p className="text-white/60 leading-relaxed">{capability.description}</p>
                    {isSoftwareService ? (
                      <Link
                        href="/contact"
                        className="pointer-events-none absolute bottom-5 right-5 translate-y-2 opacity-0 transition-all duration-200 lg:group-hover:pointer-events-auto lg:group-hover:translate-y-0 lg:group-hover:opacity-100"
                      >
                        <span className="inline-flex items-center rounded-lg bg-primary px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-primary-foreground shadow-[0_10px_22px_rgba(240,180,79,0.25)]">
                          Request Quotation
                        </span>
                      </Link>
                    ) : null}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </SectionContainer>
      ) : null}

      {!isCommunicationService && !isRevenueService ? (
        <SectionContainer fullHeight={false}>
          <div className="relative py-20 md:py-32 border-y border-white/5">
            <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs tracking-wider text-white/60 mb-8 uppercase">
                    Expected Outcomes
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Measurable Results
                  </h2>
                  <p className="text-xl text-white/60 mb-8">
                    Client outcomes that validate our approach
                  </p>
                  <ul className="space-y-4">
                    {service.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-center gap-3 text-lg">
                        <div className="w-2 h-2 bg-white/60 rounded-full" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="cinematic-panel rounded-3xl p-12"
                >
                  <div className="text-6xl font-bold mb-4">{service.proof.stat}</div>
                  <div className="text-white/60 mb-8">{service.proof.description}</div>
                  <div className="pt-6 border-t border-white/10">
                    <p className="text-lg italic text-white/70">"{service.proof.testimonial}"</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </SectionContainer>
      ) : null}

      {/* CTA Section */}
      {!isRevenueService ? (
        <SectionContainer fullHeight={false}>
          <div className="relative py-20 md:py-32">
            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} ${ctaGlowOpacityClass} blur-3xl`} />
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                {isSoftwareService
                  ? "Need a Tailored Quote?"
                  : isCommunicationService
                    ? "Need Scan2Call for Your Community?"
                    : isContentService
                      ? "Need Professional Video Editing at Scale?"
                    : "Ready to Get Started?"}
              </h2>
              {!isCommunicationService ? (
                <p className="text-xl text-white/60 mb-12">
                  {isSoftwareService
                    ? "Share your requirements and get a custom quotation aligned to your service stack."
                    : isContentService
                      ? "Send your footage and brief. We will turn it into production-ready edits for YouTube, TikTok, Facebook, Reels, ads, and documentaries."
                      : "Schedule a consultation to discuss how this solution can transform your operations."}
                </p>
              ) : null}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {isCommunicationService ? (
                  <a
                    href="https://scan2call.net"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="primary" size="lg">
                      Visit Now
                    </Button>
                  </a>
                ) : (
                  <>
                    <Link href="/contact" className={isSoftwareService ? "lg:hidden" : ""}>
                      <Button variant="primary" size="lg">
                        {isSoftwareService
                          ? "Request Quotation"
                          : isContentService
                            ? "Get Editing Quote"
                          : "Schedule Consultation"}
                      </Button>
                    </Link>
                    <Link href="/services">
                      <Button variant="outline" size="lg">
                        View All Services
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </SectionContainer>
      ) : null}
      </div>
    </div>
  );
}
