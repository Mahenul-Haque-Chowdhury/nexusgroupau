"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import {
  Boxes,
  Bug,
  Code2,
  Database,
  Kanban,
  Lightbulb,
  MonitorSmartphone,
  Search,
  ShoppingCart,
  Smartphone,
  Store,
  Users,
  Warehouse,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { ensureScrollFx, FX_EASE, splitWords } from "./scrollFx";

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  /** Concrete deliverables clients ask about */
  scope: string[];
  /** Answer to the question clients most often ask about this service */
  note: string;
};

const slugify = (title: string) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const serviceGroups: Array<{ name: string; blurb: string; services: Service[] }> = [
  {
    name: "Web & Digital Services",
    blurb: "Your public-facing platforms: built fast, found easily, and ready to convert.",
    services: [
      {
        title: "Website Development",
        description: "Professional, responsive, and high-performance websites tailored to your brand globally.",
        icon: Code2,
        scope: ["UI/UX design", "CMS or headless build", "Performance & Core Web Vitals", "On-page SEO setup", "Analytics & tracking", "Hosting & deployment"],
        note: "We build from scratch or rebuild an existing site: content, domains, and redirects are migrated as part of the job.",
      },
      {
        title: "E-Commerce Solutions",
        description: "Scalable online stores with secure payments, smart inventory, and robust user experiences.",
        icon: ShoppingCart,
        scope: ["Storefront design & build", "Payment gateway integration", "Product & inventory setup", "Shipping & tax rules", "Order management", "Checkout optimization"],
        note: "Works with Shopify, WooCommerce, or a fully custom storefront, whichever fits your catalogue and margins.",
      },
      {
        title: "Mobile App Development",
        description: "Fast, responsive native and cross-platform mobile experiences for iOS and Android.",
        icon: Smartphone,
        scope: ["iOS & Android builds", "Cross-platform (React Native / Flutter)", "API & backend integration", "Push notifications", "App Store / Play Store submission", "Post-launch updates"],
        note: "One codebase can cover both platforms; we advise native only where performance genuinely demands it.",
      },
      {
        title: "SEO & Digital Marketing",
        description: "Data-driven organic search strategies, campaign management, and digital presence growth.",
        icon: Search,
        scope: ["Technical SEO audit", "Keyword & competitor research", "Content strategy", "Local SEO & Google Business", "Campaign management", "Monthly reporting"],
        note: "SEO is retained monthly rather than one-off: rankings compound, and reporting shows exactly what moved.",
      },
    ],
  },
  {
    name: "Infrastructure & Consulting",
    blurb: "The foundations underneath: stable backends, clear strategy, and systems that stay healthy.",
    services: [
      {
        title: "Tech Consultancy",
        description: "Strategic guidance on tech stacks, digital transformation, and future-ready IT planning.",
        icon: Lightbulb,
        scope: ["Stack & architecture review", "Digital transformation roadmap", "Vendor & platform selection", "Build vs. buy analysis", "Security & compliance guidance", "Team capability planning"],
        note: "Engagements start with a short discovery sprint; you get a written roadmap you can execute with us or in-house.",
      },
      {
        title: "Database & Server Management",
        description: "Secure, reliable, and optimized backend infrastructure and scalable data warehousing.",
        icon: Database,
        scope: ["Cloud setup (AWS / Azure / GCP)", "Database design & optimization", "Backups & disaster recovery", "Monitoring & alerting", "Security hardening", "Cost optimization"],
        note: "We can take over existing infrastructure without downtime: audits first, changes staged and reversible.",
      },
      {
        title: "Bug Fixing & Maintenance",
        description: "Ongoing technical support, performance enhancements, and codebase optimization.",
        icon: Bug,
        scope: ["Bug triage & fixes", "Dependency & security updates", "Performance tuning", "Uptime monitoring", "Codebase refactoring", "Priority support SLA"],
        note: "We work on codebases we did not build: a short code audit up front tells you the true state of the system.",
      },
    ],
  },
  {
    name: "Enterprise Software Solutions",
    blurb: "The operating core of your business: unified, automated, and built around how you actually work.",
    services: [
      {
        title: "Human Resource Management (HRMS)",
        description: "Centralized employee portals for attendance, payroll, appraisals, and recruitment workflows.",
        icon: Users,
        scope: ["Attendance & leave tracking", "Payroll integration", "Recruitment pipeline", "Appraisals & KPIs", "Employee self-service portal", "Role-based access"],
        note: "Configured around your award rules and approval chains, not the other way around.",
      },
      {
        title: "Customer Relationship Management (CRM)",
        description: "Intelligent platforms designed to track leads, manage customer interactions, and optimize sales funnels.",
        icon: MonitorSmartphone,
        scope: ["Lead capture & scoring", "Sales pipeline & stages", "Email & call logging", "Task & follow-up automation", "Reporting dashboards", "Third-party integrations"],
        note: "Existing customer data from spreadsheets or an old CRM is cleaned and migrated as part of delivery.",
      },
      {
        title: "Enterprise Resource Planning (ERP)",
        description: "Holistic business management software unifying finance, supply chain, core operations, and reporting.",
        icon: Boxes,
        scope: ["Finance & accounting modules", "Procurement & supply chain", "Operations workflows", "Consolidated reporting", "Multi-branch support", "Staff training & handover"],
        note: "Rolled out module by module so the business keeps running: no big-bang cutover.",
      },
      {
        title: "Inventory & Warehouse Management",
        description: "Real-time stock tracking engines designed to mitigate delays and synchronize supply channels.",
        icon: Warehouse,
        scope: ["Real-time stock levels", "Barcode / QR scanning", "Multi-location warehousing", "Reorder alerts", "Supplier management", "Sales channel sync"],
        note: "Syncs with your POS and e-commerce channels so stock counts stay accurate everywhere.",
      },
      {
        title: "Project Management Systems",
        description: "Collaborative tools built to assign tasks, follow project lifecycles, and measure team productivity.",
        icon: Kanban,
        scope: ["Task & milestone tracking", "Team workload views", "Time tracking", "Client-facing portals", "File & approval workflows", "Productivity reporting"],
        note: "Tailored to how your teams already plan: we do not force a new methodology on day one.",
      },
      {
        title: "Point of Sale Systems (POS)",
        description: "Intuitive transactional tools bridging physical retail hardware with synchronized cloud data.",
        icon: Store,
        scope: ["Register & terminal setup", "Receipt & barcode hardware", "Inventory sync", "Staff permissions", "End-of-day reporting", "Offline mode"],
        note: "Keeps trading through internet dropouts: sales queue offline and sync when the connection returns.",
      },
      {
        title: "Custom Software & Automation",
        description: "Bespoke software tools and seamless workflow automations built specifically for your operations.",
        icon: Workflow,
        scope: ["Process discovery & mapping", "Custom tool development", "System-to-system integrations", "Workflow automation", "AI-assisted processing", "Documentation & training"],
        note: "Starts from your requirement doc, however rough: we turn it into a scoped, fixed-milestone build plan.",
      },
    ],
  },
];

/**
 * The single services page: a detailed catalog of everything Software Lab
 * delivers, grouped by branch, with scroll-triggered reveals.
 */
export function ServicesCatalog() {
  const rootRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const { gsap } = ensureScrollFx();
    const root = rootRef.current;
    if (!root) return;

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      if (headingRef.current) {
        const words = splitWords(headingRef.current);
        gsap.from(words, {
          yPercent: 110,
          duration: 0.9,
          ease: FX_EASE.expo,
          stagger: 0.06,
          delay: 0.15,
        });
      }

      root.querySelectorAll("[data-group-head]").forEach((head) => {
        gsap.from(head, {
          opacity: 0,
          y: 22,
          duration: 0.65,
          ease: FX_EASE.out,
          scrollTrigger: { trigger: head, start: "top 85%", once: true },
        });
      });

      root.querySelectorAll("[data-service-row]").forEach((row) => {
        gsap.from(row, {
          opacity: 0,
          y: 26,
          duration: 0.6,
          ease: FX_EASE.out,
          scrollTrigger: { trigger: row, start: "top 88%", once: true },
        });
      });
    }, root);

    return () => mm.revert();
  }, []);

  let counter = 0;

  return (
    <div ref={rootRef} className="relative z-10 px-5 pb-24 pt-[calc(env(safe-area-inset-top)+8rem)] sm:px-8 md:pb-32 lg:px-16">
      <div className="mx-auto max-w-[1100px]">
        {/* Page header */}
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.22em] text-cyan-200/80">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            ~/services
          </span>
          <h1
            ref={headingRef}
            className="mt-7 text-[clamp(2.2rem,5.5vw,4rem)] font-bold leading-[1.02] tracking-[-0.04em] text-white"
          >
            Everything we build and maintain.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/62 sm:text-lg">
            Fourteen services across web, infrastructure, and enterprise systems. Each one is
            delivered through the same disciplined pipeline: discover, architect, build, ship,
            operate.
          </p>
        </div>

        {/* Groups */}
        <div className="mt-16 space-y-16 md:mt-20 md:space-y-20">
          {serviceGroups.map((group, gi) => (
            <section key={group.name} aria-labelledby={slugify(group.name)}>
              <div data-group-head className="flex items-end gap-5">
                <span className="font-mono text-[12px] tracking-[0.2em] text-cyan-300/60">
                  0{gi + 1}
                </span>
                <div className="min-w-0">
                  <h2
                    id={slugify(group.name)}
                    className="text-[1.5rem] font-semibold leading-tight tracking-[-0.02em] text-white sm:text-[1.75rem]"
                  >
                    {group.name}
                  </h2>
                  <p className="mt-2 text-[0.95rem] text-white/50">{group.blurb}</p>
                </div>
                <span aria-hidden className="mb-2 hidden h-px flex-1 bg-gradient-to-r from-white/20 to-transparent sm:block" />
              </div>

              <div className="mt-8 divide-y divide-white/8 border-y border-white/8">
                {group.services.map((service) => {
                  const Icon = service.icon;
                  counter += 1;
                  const index = String(counter).padStart(2, "0");
                  return (
                    <div
                      key={service.title}
                      id={slugify(service.title)}
                      data-service-row
                      className="group flex scroll-mt-28 items-start gap-5 py-6 sm:gap-7 sm:py-7"
                    >
                      <span className="mt-1 hidden w-8 flex-shrink-0 font-mono text-[11px] text-white/30 sm:block">
                        {index}
                      </span>
                      <div className="relative flex-shrink-0">
                        <span className="absolute inset-0 rounded-xl bg-cyan-400/25 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100" />
                        <span className="relative flex h-11 w-11 items-center justify-center rounded-none bg-gradient-to-br from-blue-500 to-cyan-500 ring-1 ring-white/15 sm:h-12 sm:w-12">
                          <Icon className="text-white" size={21} />
                        </span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-lg font-semibold text-white sm:text-xl">{service.title}</h3>
                        <p className="mt-2 max-w-2xl text-[0.95rem] leading-relaxed text-white/58">
                          {service.description}
                        </p>

                        {/* Scope of work */}
                        <div className="mt-4">
                          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-200/60">
                            Scope of work
                          </span>
                          <div className="mt-2 flex flex-wrap gap-x-2 gap-y-1.5">
                            {service.scope.map((item) => (
                              <span
                                key={item}
                                className="border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[0.78rem] text-white/65 [clip-path:polygon(0.4rem_0,100%_0,100%_calc(100%-0.4rem),calc(100%-0.4rem)_100%,0_100%,0_0.4rem)]"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Good to know */}
                        <p className="mt-4 max-w-2xl border-l-2 border-cyan-300/30 pl-3 text-[0.85rem] leading-relaxed text-white/45">
                          <span className="text-cyan-200/70">Good to know:</span> {service.note}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        {/* Closing line */}
        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-10 sm:flex-row sm:items-center md:mt-20">
          <p className="max-w-md text-base leading-relaxed text-white/60">
            Not sure which service fits? Describe the problem and we&apos;ll map it to the right
            system.
          </p>
          <Link
            href="/quotation"
            data-telemetry="cta.quote"
            className="group inline-flex min-h-12 flex-shrink-0 items-center gap-2.5 bg-gradient-to-r from-cyan-400 to-sky-500 px-6 py-3 font-mono text-[12px] font-semibold uppercase tracking-[0.18em] text-[#04121d] shadow-[0_0_24px_rgba(99,211,255,0.3)] transition-all duration-300 hover:shadow-[0_0_44px_rgba(99,211,255,0.55)] hover:brightness-110 active:scale-[0.97] [clip-path:polygon(0.7rem_0,100%_0,100%_calc(100%-0.7rem),calc(100%-0.7rem)_100%,0_100%,0_0.7rem)]"
          >
            <span className="text-[#04121d]/60">$</span>
            send_your_requirements
            <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1">▸</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
