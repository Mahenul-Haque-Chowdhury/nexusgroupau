"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { Shield, Video, Code, TrendingUp } from "lucide-react";
import { SectionContainer } from "../components/SectionContainer";
import { Button } from "../components/Button";

const services = [
  {
    id: "communication",
    number: "01",
    title: "Anonymous Communication Gateway",
    tagline: "Privacy-First Infrastructure",
    description: "Enterprise-grade encrypted communication systems designed for organizations that prioritize security and anonymity.",
    features: [
      "End-to-end encrypted messaging",
      "Zero-knowledge architecture",
      "Distributed infrastructure",
      "Military-grade security protocols"
    ],
    icon: Shield,
    imageSrc: "/service-comm.png",
    gradient: "from-blue-500 to-cyan-500",
    color: "purple"
  },
  {
    id: "content",
    number: "02",
    title: "Video & Motion Content Studio",
    tagline: "Cinematic Excellence",
    description: "Premium video production and motion graphics that elevate brand storytelling to award-winning caliber.",
    features: [
      "Cinematic video production",
      "Motion graphics & animation",
      "Brand storytelling",
      "Post-production mastery"
    ],
    icon: Video,
    imageSrc: "/service-video.png",
    gradient: "from-amber-400 to-orange-500",
    color: "blue"
  },
  {
    id: "software",
    number: "03",
    title: "Software & Business Systems",
    tagline: "Enterprise Solutions",
    description: "Custom software development and business automation platforms that scale with your organization.",
    features: [
      "Custom software development",
      "API & integration services",
      "Process automation",
      "Scalable architectures"
    ],
    icon: Code,
    imageSrc: "/service-software.png",
    gradient: "from-cyan-500 to-teal-500",
    color: "cyan"
  },
  {
    id: "revenue",
    number: "04",
    title: "STRA Management Consultation",
    tagline: "Advisory & Optimization",
    description: "Strategic management consultation and optimization frameworks for STRA (Short term rental accommodation) portfolios.",
    features: [
      "Dynamic pricing algorithms",
      "Market analysis & forecasting",
      "Portfolio optimization",
      "Automated management"
    ],
    icon: TrendingUp,
    imageSrc: "/service-revenue2.jpg",
    gradient: "from-emerald-400 to-lime-500",
    color: "teal"
  }
];

export function ServicesHub() {
  return (
    <div className="relative pt-24">
      {/* Hero Section */}
      <SectionContainer>
        <div className="relative min-h-[86svh] md:min-h-screen flex items-center justify-center pt-10 md:pt-0">
          {/* Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/45" />
            <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl" />
            <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-amber-400/15 rounded-full blur-3xl" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 text-center"
          >
            <div className="cinematic-kicker mb-8">
              Our Services
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-[1.1]">
              Integrated Solutions
              <br />
              <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                Architecture
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              Four specialized divisions engineered to work in perfect synchronization, 
              delivering comprehensive digital infrastructure for modern organizations.
            </p>
          </motion.div>
        </div>
      </SectionContainer>

      {/* Services Grid */}
      <div className="relative py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16">
          <div className="space-y-16 md:space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Link href={`/services/${service.id}`}>
                  <div className={`group relative grid gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                  }`}>
                    {/* Content */}
                    <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                      <div className="mb-6">
                        <span className="text-5xl sm:text-6xl md:text-7xl font-bold text-white/10 group-hover:text-white/20 transition-colors">
                          {service.number}
                        </span>
                      </div>
                      
                      <div className="cinematic-kicker mb-6">
                        {service.tagline}
                      </div>

                      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 group-hover:text-white transition-colors">
                        {service.title}
                      </h2>

                      <p className="text-base sm:text-lg text-white/60 mb-8 leading-relaxed">
                        {service.description}
                      </p>

                      <ul className="space-y-4 mb-10">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-3 text-white/70">
                            <div className="w-1.5 h-1.5 bg-white/40 rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <motion.div
                        whileHover={{ x: 4 }}
                        className="inline-flex items-center gap-2 text-white group-hover:text-white transition-colors"
                      >
                        <span className="text-sm tracking-wide">{"Explore vertical ->"}</span>
                      </motion.div>
                    </div>

                    {/* Visual Element */}
                    <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                      <div className="relative aspect-[4/3] sm:aspect-square">
                        {/* Gradient Background */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20 blur-3xl group-hover:opacity-30 transition-opacity duration-500`} />
                        
                        {/* Card */}
                        <div className="relative h-full overflow-hidden rounded-3xl bg-[linear-gradient(160deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] shadow-[0_24px_56px_rgba(4,8,20,0.55),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-[16px] transition-all duration-500">
                          <Image
                            src={service.imageSrc}
                            alt={service.title}
                            fill
                            sizes="(max-width: 1024px) 90vw, 40vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <SectionContainer fullHeight={false}>
        <div className="relative py-20 md:py-32">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-8">
                Need a Custom Solution?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/60 mb-10 md:mb-12 max-w-2xl mx-auto">
                Our team can architect bespoke systems tailored to your unique requirements.
              </p>
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Discuss Your Project
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
