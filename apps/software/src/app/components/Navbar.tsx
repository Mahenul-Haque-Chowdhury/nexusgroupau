"use client";

import { serviceLinks as enterpriseServiceLinks } from "@ztecgroup/content";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import {
  Boxes,
  ChevronDown,
  Code2,
  Database,
  Lightbulb,
  Menu,
  ShoppingCart,
  Smartphone,
  Terminal,
  Workflow,
  X,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { GlitchWordmark } from "./GlitchWordmark";

const serviceDomainLinks = {
  communication: enterpriseServiceLinks.find((service) => service.slug === "communication")?.url ?? "https://communication.ztecgroup.au",
  content: enterpriseServiceLinks.find((service) => service.slug === "content")?.url ?? "https://contentstudio.ztecgroup.au",
  software: enterpriseServiceLinks.find((service) => service.slug === "software")?.url ?? "https://software.ztecgroup.au",
  revenue: enterpriseServiceLinks.find((service) => service.slug === "revenue")?.url ?? "https://hospitality.ztecgroup.au",
} as const;

/** Software Lab's own services: deep-links into /services catalog anchors. */
const softwareServices: Array<{ code: string; label: string; hint: string; path: string; icon: LucideIcon }> = [
  { code: "AUT", label: "Custom Software & Automation", hint: "workflows · integrations · internal tools", path: "/services#custom-software-automation", icon: Workflow },
  { code: "WEB", label: "Website Development", hint: "next.js · high-performance sites", path: "/services#website-development", icon: Code2 },
  { code: "ECM", label: "E-Commerce Solutions", hint: "storefronts · secure payments", path: "/services#e-commerce-solutions", icon: ShoppingCart },
  { code: "APP", label: "Mobile App Development", hint: "ios · android · cross-platform", path: "/services#mobile-app-development", icon: Smartphone },
  { code: "SYS", label: "Business Systems", hint: "erp · crm · hrms · pos", path: "/services#enterprise-resource-planning-erp", icon: Boxes },
  { code: "DAT", label: "Database & Server Management", hint: "cloud · pipelines · security", path: "/services#database-server-management", icon: Database },
  { code: "ADV", label: "Tech Consultancy", hint: "architecture · strategy · roadmaps", path: "/services#tech-consultancy", icon: Lightbulb },
];

/** ZTEC Group subdomains: now under the ../group dropdown. */
const groupLinks = [
  { path: serviceDomainLinks.communication, key: "communication", label: "ZTEC Communications", branches: ["Anonymous Communication Gateway, Scan2Call & more."], logoSrc: "/communication.svg", logoAlt: "ZTEC Communication - Anonymous Communication Gateway logo" },
  { path: serviceDomainLinks.content, key: "content", label: "ZTEC Content Studio", branches: ["Video & Motion Content Studio, Video Editing, Cinematic Production & more"], logoSrc: "/contentstudio.svg", logoAlt: "ZTEC Content Studio - Video & Motion Content Studio logo" },
  { path: serviceDomainLinks.software, key: "software", label: "ZTEC Software Lab", branches: ["Software & Business Systems, Web Design, Mobile App, E-commerce & more"], logoSrc: "/software.svg", logoAlt: "ZTEC Software Lab - Software & Business Systems logo" },
  { path: serviceDomainLinks.revenue, key: "revenue", label: "ZTEC STRA & Hospitality Management", branches: ["STRA Management Consultation, Property Renting Consultation"], logoSrc: "/hospitality.svg", logoAlt: "ZTEC Hospitality Management Consultation - STRA Management Consultation logo" },
];

const primaryLinks = [
  { path: "/", label: "systems" },
  { path: "/contact", label: "contact" },
];

const activeServiceKey = "software";

/**
 * Software nav: left-aligned developer terminal bar. Monospace route tokens
 * rendered as `nav.home`, hairline cyan rule under a solid slab surface,
 * bracketed active markers, and a `$ run` styled CTA. No pill chrome.
 */
export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isGroupOpen, setIsGroupOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [condensed, setCondensed] = useState(false);

  const { scrollY, scrollYProgress } = useScroll();

  // Hide on scroll down, reveal on scroll up; condense once past the hero edge.
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setCondensed(latest > 48);
    const anyMenuOpen = isOpen || isServicesOpen || isGroupOpen;
    if (latest > 160 && latest > previous && !anyMenuOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    setIsServicesOpen(false);
    setIsGroupOpen(false);
  }, [pathname, isOpen]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: hidden ? "-100%" : 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`relative border-b transition-colors duration-500 ${
          condensed
            ? "border-white/14 bg-[rgba(6,10,19,0.92)] backdrop-blur-2xl"
            : "border-white/10 bg-[rgba(7,12,22,0.82)] backdrop-blur-xl"
        }`}
      >
        {/* live scroll progress: replaces the static scan accent */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/8" />
        <motion.div
          aria-hidden
          style={{ scaleX: scrollYProgress }}
          className="pointer-events-none absolute inset-x-0 top-0 h-[2px] origin-left bg-gradient-to-r from-[#63d3ff]/30 via-[#63d3ff] to-emerald-300 shadow-[0_0_8px_rgba(99,211,255,0.6)]"
        />
        <div
          className={`mx-auto flex max-w-[1480px] items-center gap-3 px-4 transition-[height] duration-500 sm:px-6 lg:px-10 ${
            condensed ? "h-12 sm:h-14" : "h-14 sm:h-16"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="group flex shrink-0 items-center" aria-label="ZTEC Software home">
            <motion.div whileHover={{ scale: 1.02 }} className="flex h-[2.1rem] items-center gap-0 sm:h-[2.4rem] lg:h-[2.7rem]">
              <div className="-translate-y-0.5 flex h-[78%] w-[3.1rem] items-center self-center overflow-hidden sm:w-[3.6rem] sm:-translate-y-0.5 lg:w-[4.1rem] lg:-translate-y-1">
                <Image src="/software.svg" alt="ZTEC Software" width={248} height={56} sizes="(max-width: 640px) 132px, (max-width: 1024px) 156px, 190px" priority loading="eager" className="h-full w-auto max-w-none origin-left scale-[1.78] object-contain" />
              </div>
              <GlitchWordmark />
            </motion.div>
          </Link>

          {/* divider */}
          <span className="hidden h-6 w-px bg-white/12 lg:block" aria-hidden />

          {/* Desktop terminal nav (left-aligned) */}
          <div className="hidden items-center gap-1 font-mono text-[13px] lg:flex">
            <Link
              href="/"
              className={`group inline-flex items-center gap-1 rounded-md px-3 py-1.5 transition-colors ${pathname === "/" ? "text-[#63d3ff]" : "text-white/60 hover:text-white"}`}
            >
              {pathname === "/" ? <span className="mr-0.5 text-[#63d3ff]/50">[</span> : null}
              <span className="text-white/25 group-hover:text-[#63d3ff]/70">nav.</span>home
              {pathname === "/" ? <span className="ml-0.5 text-[#63d3ff]/50">]</span> : null}
            </Link>

            <div className="relative" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
              <button
                type="button"
                onClick={() => setIsServicesOpen((p) => !p)}
                aria-haspopup="menu"
                aria-expanded={isServicesOpen}
                className={`group inline-flex items-center gap-1 rounded-md px-3 py-1.5 transition-colors ${isServicesOpen ? "text-[#63d3ff]" : "text-white/60 hover:text-white"}`}
              >
                <span className="text-white/25 group-hover:text-[#63d3ff]/70">nav.</span>services
                <ChevronDown size={13} className={`transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute left-0 top-[calc(100%+0.85rem)] z-40 w-[min(94vw,40rem)] overflow-hidden rounded-lg border border-[#63d3ff]/20 bg-[#080d18] shadow-[0_26px_60px_rgba(4,8,20,0.66)]"
                  >
                    <div className="flex items-center gap-2 border-b border-white/8 px-4 py-2 font-mono text-[11px] text-white/35">
                      <Terminal size={12} className="text-[#63d3ff]/70" />
                      <span>~/software/services</span>
                    </div>
                    <div className="grid grid-cols-1 gap-1 p-2 sm:grid-cols-2">
                      {softwareServices.map((service) => {
                        const Icon = service.icon;
                        return (
                          <Link
                            key={service.path}
                            href={service.path}
                            onClick={() => setIsServicesOpen(false)}
                            className="group/item block rounded-md px-3 py-2.5 text-white/72 transition-colors hover:bg-white/[0.05] hover:text-white"
                          >
                            <div className="flex items-center gap-3">
                              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-none bg-gradient-to-br from-blue-500/25 to-cyan-500/25 ring-1 ring-white/10 transition-colors group-hover/item:ring-[#63d3ff]/40">
                                <Icon size={18} className="text-[#8fdcff]" />
                              </div>
                              <div className="min-w-0">
                                <div className="text-[0.9rem] font-semibold leading-tight text-white">{service.label}</div>
                                <p className="mt-1 truncate font-mono text-[10px] text-white/40">
                                  <span className="text-[#63d3ff]/60">{service.code}</span> · {service.hint}
                                </p>
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                    <Link
                      href="/services"
                      onClick={() => setIsServicesOpen(false)}
                      className="block border-t border-white/8 px-4 py-2.5 font-mono text-[11px] text-white/45 transition-colors hover:bg-white/[0.04] hover:text-[#63d3ff]"
                    >
                      $ view --all services →
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {primaryLinks.slice(1).map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`group inline-flex items-center gap-1 rounded-md px-3 py-1.5 transition-colors ${pathname === link.path ? "text-[#63d3ff]" : "text-white/60 hover:text-white"}`}
              >
                {pathname === link.path ? <span className="mr-0.5 text-[#63d3ff]/50">[</span> : null}
                <span className="text-white/25 group-hover:text-[#63d3ff]/70">nav.</span>{link.label}
                {pathname === link.path ? <span className="ml-0.5 text-[#63d3ff]/50">]</span> : null}
              </Link>
            ))}
          </div>

          {/* right cluster */}
          <div className="ml-auto flex items-center gap-2">
            <div className="relative hidden lg:block" onMouseEnter={() => setIsGroupOpen(true)} onMouseLeave={() => setIsGroupOpen(false)}>
              <button
                type="button"
                onClick={() => setIsGroupOpen((p) => !p)}
                aria-haspopup="menu"
                aria-expanded={isGroupOpen}
                className={`inline-flex items-center gap-1 rounded-md px-2 py-1.5 font-mono text-[12px] transition-colors ${isGroupOpen ? "text-[#63d3ff]" : "text-white/45 hover:text-white"}`}
              >
                ztecGroup
                <ChevronDown size={12} className={`transition-transform duration-200 ${isGroupOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {isGroupOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute right-0 top-[calc(100%+0.85rem)] z-40 w-[min(94vw,26rem)] overflow-hidden rounded-lg border border-[#63d3ff]/20 bg-[#080d18] shadow-[0_26px_60px_rgba(4,8,20,0.66)]"
                  >
                    <div className="flex items-center gap-2 border-b border-white/8 px-4 py-2 font-mono text-[11px] text-white/35">
                      <Terminal size={12} className="text-[#63d3ff]/70" />
                      <span>~/ztec/group</span>
                    </div>
                    <div className="flex flex-col gap-1 p-2">
                      {groupLinks.map((service) => (
                        <a
                          key={service.path}
                          href={service.path}
                          onClick={() => setIsGroupOpen(false)}
                          className={`block rounded-md px-3 py-2.5 transition-colors ${activeServiceKey === service.key ? "bg-[#63d3ff]/10 text-white" : "text-white/72 hover:bg-white/[0.05] hover:text-white"}`}
                        >
                          <div className="flex items-center gap-3">
                            <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-none bg-white/8 p-1.5 ring-1 ring-white/8">
                              <Image src={service.logoSrc} alt={service.logoAlt} width={40} height={40} className="h-full w-full object-contain" />
                            </div>
                            <div className="min-w-0">
                              <div className="text-[0.9rem] font-semibold leading-tight text-white">{service.label}</div>
                              <p className="mt-1 truncate font-mono text-[10px] text-white/40">{service.branches.slice(0, 3).join(" | ")}</p>
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                    <a
                      href="https://ztecgroup.au"
                      className="block border-t border-white/8 px-4 py-2.5 font-mono text-[11px] text-white/45 transition-colors hover:bg-white/[0.04] hover:text-[#63d3ff]"
                    >
                      $ cd ztecgroup.au →
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link href="/contact" className="hidden lg:block">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-2 rounded-md border border-[#63d3ff]/40 bg-[#63d3ff]/10 px-4 py-2 font-mono text-[12px] text-[#bfeaff] transition-colors hover:bg-[#63d3ff]/18"
              >
                <span className="text-[#63d3ff]">$</span>
                <span>book_a_meeting</span>
                <span className="inline-block h-3.5 w-1.5 animate-pulse bg-[#63d3ff]" />
              </motion.button>
            </Link>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/12 bg-white/5 text-white lg:hidden"
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
              onClick={() => setIsOpen((c) => !c)}
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mx-3 mt-2 overflow-hidden rounded-lg border border-[#63d3ff]/20 bg-[#080d18] shadow-[0_16px_40px_rgba(4,8,20,0.5)] lg:hidden"
          >
            <div className="flex max-h-[calc(100svh-5.5rem)] flex-col gap-1 overflow-y-auto overscroll-contain p-3 font-mono text-sm">
              <Link href="/" onClick={() => setIsOpen(false)} className={`rounded-md px-3 py-2.5 transition-colors ${pathname === "/" ? "bg-[#63d3ff]/10 text-[#63d3ff]" : "text-white/65 hover:bg-white/5 hover:text-white"}`}>
                <span className="text-white/25">nav.</span>systems
              </Link>

              <div>
                <button
                  type="button"
                  onClick={() => setIsServicesOpen((p) => !p)}
                  aria-expanded={isServicesOpen}
                  className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-white/65 transition-colors hover:bg-white/5 hover:text-white"
                >
                  <span><span className="text-white/25">nav.</span>services</span>
                  <ChevronDown size={15} className={`transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence initial={false}>
                  {isServicesOpen && (
                    <motion.div
                      key="mobile-services"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="mt-1 space-y-1 pb-1 pl-2">
                        {softwareServices.map((service) => {
                          const Icon = service.icon;
                          return (
                            <Link key={service.path} href={service.path} onClick={() => setIsOpen(false)} className="block rounded-md px-3 py-2 text-white/65 transition-colors hover:bg-white/5 hover:text-white">
                              <div className="flex items-center gap-3">
                                <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-none bg-gradient-to-br from-blue-500/25 to-cyan-500/25 ring-1 ring-white/10">
                                  <Icon size={16} className="text-[#8fdcff]" />
                                </div>
                                <div className="min-w-0 font-sans">
                                  <div className="text-[0.88rem] font-medium leading-snug text-white">{service.label}</div>
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                        <Link href="/services" onClick={() => setIsOpen(false)} className="block rounded-md px-3 py-2 font-mono text-[11px] text-white/45 transition-colors hover:bg-white/5 hover:text-[#63d3ff]">
                          $ view --all services →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {primaryLinks.slice(1).map((link) => (
                <Link key={link.path} href={link.path} onClick={() => setIsOpen(false)} className={`rounded-md px-3 py-2.5 transition-colors ${pathname === link.path ? "bg-[#63d3ff]/10 text-[#63d3ff]" : "text-white/65 hover:bg-white/5 hover:text-white"}`}>
                  <span className="text-white/25">nav.</span>{link.label}
                </Link>
              ))}
              <div>
                <button
                  type="button"
                  onClick={() => setIsGroupOpen((p) => !p)}
                  aria-expanded={isGroupOpen}
                  className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-white/55 transition-colors hover:bg-white/5 hover:text-white"
                >
                  <span>ztecGroup</span>
                  <ChevronDown size={15} className={`transition-transform duration-200 ${isGroupOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence initial={false}>
                  {isGroupOpen && (
                    <motion.div
                      key="mobile-group"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="mt-1 space-y-1 pb-1 pl-2">
                        {groupLinks.map((service) => (
                          <a key={service.path} href={service.path} onClick={() => setIsOpen(false)} className={`block rounded-md px-3 py-2 transition-colors ${activeServiceKey === service.key ? "bg-[#63d3ff]/10 text-white" : "text-white/65 hover:bg-white/5 hover:text-white"}`}>
                            <div className="flex items-center gap-3">
                              <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-none bg-white/8 p-1.5 ring-1 ring-white/8">
                                <Image src={service.logoSrc} alt={service.logoAlt} width={36} height={36} className="h-full w-full object-contain" />
                              </div>
                              <div className="min-w-0 font-sans">
                                <div className="text-[0.88rem] font-medium leading-snug text-white">{service.label}</div>
                              </div>
                            </div>
                          </a>
                        ))}
                        <a href="https://ztecgroup.au" className="block rounded-md px-3 py-2 font-mono text-[11px] text-white/45 transition-colors hover:bg-white/5 hover:text-[#63d3ff]">
                          $ cd ztecgroup.au →
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="mt-1">
                <button className="flex w-full items-center justify-center gap-2 rounded-md border border-[#63d3ff]/40 bg-[#63d3ff]/10 px-4 py-2.5 text-[12px] text-[#bfeaff]">
                  <span className="text-[#63d3ff]">$</span> book_a_meeting
                </button>
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.nav>
  );
}
