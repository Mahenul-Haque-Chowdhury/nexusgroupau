"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { SectionContainer } from "../components/SectionContainer";
import { Target, Zap, Shield, Users } from "lucide-react";
import { Button } from "../components/Button";

const values = [
  {
    icon: Target,
    title: "Precision Engineering",
    description: "Every system we build is architected with meticulous attention to detail and performance."
  },
  {
    icon: Zap,
    title: "Innovation First",
    description: "We push boundaries and leverage cutting-edge technology to deliver competitive advantages."
  },
  {
    icon: Shield,
    title: "Security by Design",
    description: "Privacy and security are foundational principles, not afterthoughts."
  },
  {
    icon: Users,
    title: "Client Partnership",
    description: "We become an extension of your team, invested in your long-term success."
  }
];

const executiveTeamMembers = [
  {
    id: 1,
    name: "To Be Announced",
    designation: "Group Chief Executive Officer",
    portfolioHref: "/portfolio",
  },
  {
    id: 2,
    name: "To Be Announced",
    designation: "Chief Operating Officer",
    portfolioHref: "/portfolio",
  },
  {
    id: 3,
    name: "To Be Announced",
    designation: "Chief Technology Officer",
    portfolioHref: "/portfolio",
  },
  {
    id: 4,
    name: "To Be Announced",
    designation: "Chief Strategy Officer",
    portfolioHref: "/portfolio",
  },
  {
    id: 5,
    name: "To Be Announced",
    designation: "Chief Growth Officer",
    portfolioHref: "/portfolio",
  },
];

export function About() {
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
                About NEXUS Group
              </h1>
              <p className="text-lg md:text-xl text-white/60 leading-relaxed">
                We design and deliver integrated digital infrastructure across communication, content,
                software systems, and revenue services so organizations can scale with one trusted partner.
              </p>
            </div>
          </motion.div>
        </div>
      </SectionContainer>

      <SectionContainer fullHeight={false}>
        <div className="relative pt-2 pb-12 md:pt-4 md:pb-14">
          <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="cinematic-panel rounded-3xl p-6 sm:p-8 md:p-10"
            >
              <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <h2 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">Unified Solutions, Single Partner</h2>
                  <p className="mt-5 text-base sm:text-lg leading-relaxed text-white/65">
                    NEXUS Group was founded in 2025 to eliminate fragmented vendor stacks. Instead of managing separate agencies for strategy,
                    development, production, and optimization, our clients work with one coordinated team.
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-white/55">
                    We combine strategic consulting with practical delivery support, so ideas move from planning to execution with speed,
                    consistency, and measurable impact.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  <div className="rounded-2xl bg-white/6 p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]">
                    <div className="text-5xl font-bold text-white/90">2025</div>
                    <p className="mt-2 text-sm uppercase tracking-[0.08em] text-white/60">Founded</p>
                  </div>
                  {[
                    "Communication, content, software, and STRA (Short term rental accommodation) expertise under one group.",
                    "Strategy-first delivery model with optional hands-on execution support.",
                    "Continuous optimization focused on long-term operational performance.",
                  ].map((point) => (
                    <div
                      key={point}
                      className="rounded-2xl bg-white/6 p-4 text-sm leading-relaxed text-white/65 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]"
                    >
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer fullHeight={false}>
        <div className="relative pb-12 md:pb-16">
          <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-10 md:mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Executive Team Members</h2>
              <p className="text-base md:text-lg text-white/62 max-w-3xl mx-auto">
                Leadership profiles are being finalized. Names will be updated soon.
              </p>
            </motion.div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
              {executiveTeamMembers.map((member, index) => (
                <motion.article
                  key={member.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="cinematic-panel rounded-2xl p-4"
                >
                  <div className="mb-4 overflow-hidden rounded-xl border border-white/12 bg-[linear-gradient(145deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]">
                    <div className="aspect-[4/5] w-full grid place-items-center text-[11px] uppercase tracking-[0.16em] text-white/45">
                      Image Box
                    </div>
                  </div>

                  <p className="text-[10px] uppercase tracking-[0.16em] text-white/45">Name</p>
                  <h3 className="mt-1 text-lg font-semibold text-white/92">{member.name}</h3>
                  <p className="mt-2 text-sm text-white/62">{member.designation}</p>

                  <Link
                    href={member.portfolioHref}
                    className="mt-5 inline-flex w-full items-center justify-center rounded-xl border border-white/18 px-3 py-2 text-[11px] uppercase tracking-[0.12em] text-white/82 transition-colors hover:border-white/35 hover:bg-white/8"
                  >
                    Visit Personal Portfolio
                  </Link>
                </motion.article>
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
              className="text-center mb-14"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">What Drives Us</h2>
              <p className="text-lg text-white/60 max-w-3xl mx-auto">
                Core values behind every strategy, build, and optimization cycle.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="cinematic-panel rounded-2xl p-6 transition-all duration-300 hover:border-white/25"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/7 text-white/85 mb-5">
                    <value.icon size={22} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-white/60">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer fullHeight={false}>
        <div className="relative py-16 md:py-20">
          <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-14"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">How We Work</h2>
              <p className="text-lg text-white/60">A simple, repeatable operating model built for execution speed.</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  number: "01",
                  title: "Discover",
                  description: "We map your business goals, technical constraints, and growth priorities into a clear implementation path.",
                },
                {
                  number: "02",
                  title: "Build & Launch",
                  description: "Our teams deliver strategy and production in sync, so your roadmap moves quickly into market-ready execution.",
                },
                {
                  number: "03",
                  title: "Optimize",
                  description: "After launch, we track performance and refine systems continuously to protect long-term outcomes.",
                },
              ].map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="cinematic-panel rounded-2xl p-6"
                >
                  <div className="text-4xl font-bold text-white/20 mb-4">{step.number}</div>
                  <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-white/60">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer fullHeight={false}>
        <div className="relative py-16 md:py-20 border-y border-white/5">
          <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Global Team, Local Understanding</h2>
              <p className="text-lg text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed">
                Experienced specialists across multiple markets, aligned around one quality standard.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { value: "50+", label: "Team Members" },
                  { value: "12", label: "Countries" },
                  { value: "100+", label: "Years Combined Experience" },
                  { value: "24/7", label: "Global Coverage" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.08 }}
                    className="cinematic-panel rounded-2xl p-6"
                  >
                    <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                    <div className="text-sm text-white/50">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
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
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-8">Join Leading Organizations</h2>
            <p className="text-base sm:text-lg md:text-xl text-white/60 mb-10 md:mb-12">
              Partner with NEXUS Group to build digital infrastructure that supports long-term growth.
            </p>
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Start a Conversation
              </Button>
            </Link>
          </motion.div>
        </div>
      </SectionContainer>
    </div>
  );
}
