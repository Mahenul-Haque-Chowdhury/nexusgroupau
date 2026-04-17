"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { SectionContainer } from "../components/SectionContainer";
import { ArrowRight } from "lucide-react";
import { Button } from "../components/Button";

const caseStudies = [
  {
    title: "Enterprise Communication Platform",
    category: "Communication Gateway",
    challenge: "Global organization needed secure, private communication infrastructure compliant with international privacy regulations.",
    approach: "Deployed zero-knowledge encrypted platform with distributed architecture across 15 global nodes.",
    result: "100% regulatory compliance achieved. Zero security incidents. 50,000+ daily active users.",
    gradient: "from-blue-500 to-cyan-500",
    tags: ["Security", "Enterprise", "Privacy"]
  },
  {
    title: "Luxury Brand Campaign",
    category: "Video & Motion Content Studio",
    challenge: "Premium automotive brand required cinematic brand film to launch new flagship model globally.",
    approach: "Executed multi-location shoot with cinema-grade equipment and award-winning creative direction.",
    result: "25M+ views across platforms. Featured at Cannes Lions. 300% increase in brand engagement.",
    gradient: "from-amber-400 to-orange-500",
    tags: ["Video", "Branding", "Luxury"]
  },
  {
    title: "SaaS Platform Development",
    category: "Software & Business Systems",
    challenge: "Healthcare startup needed HIPAA-compliant patient management platform from concept to deployment.",
    approach: "Built custom cloud-native application with end-to-end encryption and real-time collaboration.",
    result: "Platform scaled to 100K+ users. $15M Series A funding secured. 99.99% uptime maintained.",
    gradient: "from-cyan-500 to-teal-500",
    tags: ["SaaS", "Healthcare", "Cloud"]
  },
  {
    title: "STRA Portfolio Optimization",
    category: "STRA Management Consultation",
    challenge: "Property management company with 200+ units experiencing suboptimal occupancy and pricing.",
    approach: "Implemented AI-powered dynamic pricing and automated operations across entire portfolio.",
    result: "42% revenue increase in year one. 75% reduction in management overhead. Portfolio expanded to 350 units.",
    gradient: "from-emerald-400 to-lime-500",
    tags: ["AI", "Optimization", "Real Estate"]
  },
  {
    title: "Government Secure Messaging",
    category: "Anonymous Communication Gateway",
    challenge: "Federal agency required unhackable communication system for classified operations.",
    approach: "Engineered custom protocol with quantum-resistant encryption and air-gapped architecture.",
    result: "Certified for Top Secret clearance level. Zero vulnerabilities detected in penetration testing.",
    gradient: "from-blue-500 to-cyan-500",
    tags: ["Government", "Security", "Custom"]
  },
  {
    title: "Tech Product Launch Film",
    category: "Video & Motion Content Studio",
    challenge: "Tech unicorn launching revolutionary product needed hero film for global press event.",
    approach: "Created cinematic product film with advanced VFX and motion graphics on accelerated timeline.",
    result: "Featured in TechCrunch, Wired, Verge. 15M+ organic reach. Stock price +22% post-launch.",
    gradient: "from-amber-400 to-orange-500",
    tags: ["Tech", "Product Launch", "VFX"]
  }
];

export function Portfolio() {
  return (
    <div className="relative pt-24">
      <SectionContainer fullHeight={false}>
        <div className="relative pt-12 pb-8 md:pt-20 md:pb-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-16"
          >
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="mb-8 text-[clamp(1.9rem,5vw,4.2rem)] font-bold leading-[1.1]">
                Portfolio
              </h1>
              <p className="text-lg md:text-xl text-white/60 leading-relaxed">
                Selected client work across communication platforms, software systems, content production,
                and STRA optimization programs.
              </p>
            </div>
          </motion.div>
        </div>
      </SectionContainer>

      <SectionContainer fullHeight={false}>
        <div className="relative pt-2 pb-14 md:pt-4 md:pb-16">
          <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Selected Case Studies</h2>
              <p className="text-lg text-white/60">Focused on measurable outcomes and execution quality.</p>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-2 md:gap-6">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="cinematic-panel rounded-2xl p-5 sm:p-6 md:p-8"
                >
                  <div className="mb-4">
                    <span className="inline-flex rounded-full bg-white/7 px-3 py-1 text-[11px] uppercase tracking-[0.08em] text-white/70">
                      {study.category}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold leading-tight mb-5">{study.title}</h3>

                  <div className="space-y-4">
                    <div>
                      <p className="mb-1 text-xs uppercase tracking-[0.08em] text-white/45">Challenge</p>
                      <p className="text-sm leading-relaxed text-white/65">{study.challenge}</p>
                    </div>
                    <div>
                      <p className="mb-1 text-xs uppercase tracking-[0.08em] text-white/45">Approach</p>
                      <p className="text-sm leading-relaxed text-white/65">{study.approach}</p>
                    </div>
                    <div>
                      <p className="mb-1 text-xs uppercase tracking-[0.08em] text-white/45">Result</p>
                      <p className="text-sm font-semibold leading-relaxed text-white/90">{study.result}</p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span
                        key={`${study.title}-${tag}`}
                        className="rounded-md bg-white/7 px-2.5 py-1 text-xs text-white/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 inline-flex items-center gap-2 text-sm text-white/80">
                    <span>Outcome-focused delivery</span>
                    <ArrowRight size={16} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer fullHeight={false}>
        <div className="relative py-16 md:py-20 border-y border-white/5">
          <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">By the Numbers</h2>
              <p className="text-lg text-white/60">Aggregate impact across our client portfolio.</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {[
                { value: "500+", label: "Projects Completed" },
                { value: "$2.5B", label: "Client Revenue Generated" },
                { value: "100M+", label: "Content Views" },
                { value: "99.9%", label: "Client Retention" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="cinematic-panel rounded-2xl p-6 text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-white/50">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer fullHeight={false}>
        <div className="relative py-20 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-8">Ready to Create Your Success Story?</h2>
            <p className="text-base sm:text-lg md:text-xl text-white/60 mb-10 md:mb-12">
              Let’s design and deliver a project that is measurable, scalable, and built for long-term value.
            </p>
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Start Your Project
              </Button>
            </Link>
          </motion.div>
        </div>
      </SectionContainer>
    </div>
  );
}
