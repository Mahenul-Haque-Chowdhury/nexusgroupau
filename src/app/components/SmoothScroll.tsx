"use client";

import { useEffect } from "react";
import Lenis from "lenis";

type WindowWithLenis = Window & {
  __lenis?: Lenis;
};

export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      syncTouch: true,
      touchMultiplier: 1.06,
      wheelMultiplier: 0.9,
      autoRaf: false,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    (window as WindowWithLenis).__lenis = lenis;

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(raf);
    };

    rafId = window.requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(rafId);
      lenis.destroy();
      delete (window as WindowWithLenis).__lenis;
    };
  }, []);

  return null;
}
