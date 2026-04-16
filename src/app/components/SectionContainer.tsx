"use client";

import { ReactNode, useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  fullHeight?: boolean;
}

export function SectionContainer({ children, className = "", fullHeight = true }: SectionContainerProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.92", "end 0.08"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.16, 0.86, 1], [0.5, 1, 1, 0.82]);
  const y = useTransform(scrollYProgress, [0, 0.22, 0.8, 1], [56, 0, 0, -20]);
  const scale = useTransform(scrollYProgress, [0, 0.22, 0.82, 1], [0.975, 1, 1, 0.992]);

  return (
    <motion.section
      ref={sectionRef}
      style={shouldReduceMotion ? undefined : { opacity, y, scale }}
      className={`relative will-change-transform [transform-origin:center_top] ${fullHeight ? "min-h-[100svh] md:min-h-screen" : ""} ${className}`}
    >
      {children}
    </motion.section>
  );
}
