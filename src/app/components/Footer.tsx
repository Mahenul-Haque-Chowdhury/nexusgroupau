"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { Mail, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-auto">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
      
      <div className="relative max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 pt-10 sm:pt-14 md:pt-16 pb-0">
        <div className="cinematic-panel relative overflow-hidden rounded-t-3xl rounded-b-none p-6 sm:p-8 md:p-10 lg:p-14">
          <div className="grid grid-cols-1 gap-10 mb-10 sm:gap-12 sm:mb-14 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <div className="relative h-[2.24rem] w-[10.24rem] overflow-hidden">
                <Image
                  src="/nexuslogo.png"
                  alt="NEXUS Group"
                  fill
                  sizes="(max-width: 768px) 141px, 164px"
                  className="object-contain scale-[1.62]"
                />
              </div>
            </Link>
            <p className="text-white/55 max-w-sm mb-8 leading-relaxed">
              Connecting advanced digital systems, communication, and media into one unified solution ecosystem.
            </p>
            <div className="mb-8 space-y-4 text-sm">
              <div>
                <p className="text-[11px] uppercase tracking-[0.14em] text-white/55">Email</p>
                <a
                  href="mailto:contact@nexusgroup.ltd"
                  className="text-white/75 transition-colors hover:text-white"
                >
                  contact@nexusgroup.ltd
                </a>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.14em] text-white/55">Phone</p>
                <a
                  href="tel:+61451994192"
                  className="text-white/75 transition-colors hover:text-white"
                >
                  +61451994192
                </a>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.14em] text-white/55">Address</p>
                <p className="max-w-sm leading-relaxed text-white/75">1 Silas Street, East Fremantle, Perth WA 6158</p>
              </div>
            </div>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="mailto:contact@nexusgroup.ltd"
                className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg hover:border-primary/60 hover:bg-primary/10 transition-colors"
              >
                <Mail size={18} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg hover:border-primary/60 hover:bg-primary/10 transition-colors"
              >
                <Linkedin size={18} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg hover:border-primary/60 hover:bg-primary/10 transition-colors"
              >
                <Twitter size={18} />
              </motion.a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-6 text-xs tracking-[0.18em] uppercase text-white/80">Services</h3>
            <ul className="space-y-4">
              <li><Link href="/services/communication" className="text-white/50 hover:text-white transition-colors">Anonymous Communication Gateway</Link></li>
              <li><Link href="/services/content" className="text-white/50 hover:text-white transition-colors">Video & Motion Content Studio</Link></li>
              <li><Link href="/services/software" className="text-white/50 hover:text-white transition-colors">Software & Business Systems</Link></li>
              <li><Link href="/services/revenue" className="text-white/50 hover:text-white transition-colors">STR Management Consultation</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-6 text-xs tracking-[0.18em] uppercase text-white/80">Company</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-white/50 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/portfolio" className="text-white/50 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/resources" className="text-white/50 hover:text-white transition-colors">Resources</Link></li>
              <li><Link href="/contact" className="text-white/50 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-6 text-xs tracking-[0.18em] uppercase text-white/80">Legal</h3>
            <ul className="space-y-4">
              <li><Link href="/privacy-policy" className="text-white/50 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-white/50 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/cookie-policy" className="text-white/50 hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

          {/* Bottom Bar */}
          <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <p className="text-white/40 text-sm">
            © {currentYear} NEXUS Group. All rights reserved.
          </p>
          <p className="text-white/40 text-sm">
            nexusgroup.ltd
          </p>
        </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-background/95 to-transparent" />
    </footer>
  );
}
