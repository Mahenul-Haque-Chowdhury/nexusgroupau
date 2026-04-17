"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

export function CinematicAmbient() {
  const shouldReduceMotion = useReducedMotion();
  const [isMobileViewport, setIsMobileViewport] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const syncViewport = () => setIsMobileViewport(mediaQuery.matches);

    syncViewport();
    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", syncViewport);
      return () => mediaQuery.removeEventListener("change", syncViewport);
    }

    mediaQuery.addListener(syncViewport);
    return () => mediaQuery.removeListener(syncViewport);
  }, []);

  const spotlightX = useTransform(scrollYProgress, [0, 1], [-120, 180]);
  const spotlightY = useTransform(scrollYProgress, [0, 1], [-110, 150]);
  const auraX = useTransform(scrollYProgress, [0, 1], [110, -160]);
  const auraY = useTransform(scrollYProgress, [0, 1], [70, -70]);
  const spotlightOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.09, 0.18, 0.11]);
  const auraOpacity = useTransform(scrollYProgress, [0, 0.4, 1], [0.04, 0.12, 0.05]);
  const vignetteOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.42, 0.38]);
  const scanlineOpacity = useTransform(scrollYProgress, [0, 1], [0.03, 0.08]);
  const spotlightTransform = useMotionTemplate`translate3d(${spotlightX}px, ${spotlightY}px, 0)`;
  const auraTransform = useMotionTemplate`translate3d(${auraX}px, ${auraY}px, 0)`;

  if (shouldReduceMotion || isMobileViewport) {
    return (
      <div className="pointer-events-none fixed inset-0 z-[2]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/35" />
      </div>
    );
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[2] overflow-hidden">
      <motion.div
        className="absolute -top-1/3 -left-1/3 h-[140vh] w-[140vw] bg-[radial-gradient(circle_at_center,rgba(127,211,255,0.3),rgba(127,211,255,0.08)_34%,transparent_65%)] mix-blend-screen"
        style={{ opacity: spotlightOpacity, transform: spotlightTransform }}
      />

      <motion.div
        className="absolute -bottom-1/3 -right-1/3 h-[120vh] w-[120vw] bg-[radial-gradient(circle_at_center,rgba(240,180,79,0.22),rgba(240,180,79,0.03)_30%,transparent_60%)] mix-blend-screen"
        style={{ opacity: auraOpacity, transform: auraTransform }}
      />

      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/45"
        style={{ opacity: vignetteOpacity }}
      />

      <motion.div
        className="absolute inset-0 bg-[linear-gradient(transparent_0px,rgba(255,255,255,0.03)_1px,transparent_2px)] bg-[size:100%_3px]"
        style={{ opacity: scanlineOpacity }}
      />
    </div>
  );
}
