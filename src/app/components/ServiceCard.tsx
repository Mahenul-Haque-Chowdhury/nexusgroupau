"use client";

import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  imageSrc?: string;
  href: string;
  gradient: string;
  tags?: string[];
}

export function ServiceCard({ number, title, description, icon: Icon, imageSrc, href, gradient, tags = [] }: ServiceCardProps) {
  const previewTags = tags.slice(0, 3);

  return (
    <Link href={href} className="block h-full">
      <motion.div
        initial={{ opacity: 0, y: 44, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -10, scale: 1.01 }}
        className="group relative h-full"
      >
        {/* Card Background with Layered Framer-Inspired Surface */}
        <div className="narrative-surface narrative-surface-no-border relative flex h-full flex-col overflow-hidden rounded-3xl p-5 transition-all duration-500 group-hover:-translate-y-1 sm:p-6 lg:p-12">
          <span className="narrative-glint" aria-hidden />

          {/* Gradient Accent */}
          <div 
            className={`absolute -right-8 -top-10 h-64 w-64 ${gradient} opacity-28 blur-3xl transition-opacity duration-500 group-hover:opacity-42`}
          />
          
          {/* Number */}
          <div className="relative z-[2] mb-6">
            <span className="text-5xl font-bold text-white/12 transition-colors duration-500 group-hover:text-white/20 sm:text-6xl">
              {number}
            </span>
          </div>

          {/* Icon */}
          <div className="relative z-[2] mb-8">
            {imageSrc ? (
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-white/5 transition-all duration-500">
                <Image
                  src={imageSrc}
                  alt={title}
                  fill
                  sizes="(max-width: 768px) 100vw, 42vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
              </div>
            ) : (
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/5 transition-all duration-500 group-hover:bg-white/10">
                <Icon size={24} className="text-white" />
              </div>
            )}
          </div>

          {/* Content */}
          <div className="relative z-[2] flex flex-1 flex-col">
            <h3 className="mb-4 text-xl font-bold transition-colors group-hover:text-white sm:text-2xl">
              {title}
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-white/60 sm:text-base">
              {description}
            </p>

            {previewTags.length > 0 ? (
              <div className="mb-7 flex flex-wrap gap-2">
                {previewTags.map((tag) => (
                  <span key={tag} className="narrative-chip">
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}

            <div className="mt-auto inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-white/80 transition-colors group-hover:text-white">
              <span>Explore vertical</span>
              <span aria-hidden>{">"}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
