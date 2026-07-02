"use client";

import { useEffect } from "react";
import Lenis from "lenis";

type WindowWithLenis = Window & {
  __lenis?: Lenis;
};

export function SmoothScroll() {
  useEffect(() => {
    const htmlElement = document.documentElement;
    const bodyElement = document.body;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // Touch devices keep native scrolling. Lenis syncTouch re-synthesizes
    // touch inertia in JS and can spike into sudden fast scrolls on mobile,
    // so smooth scrolling is desktop/wheel only.
    const isTouchDevice = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    if (isTouchDevice) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      syncTouch: false,
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
      htmlElement.classList.remove("lenis", "lenis-smooth", "lenis-stopped");
      bodyElement.classList.remove("lenis", "lenis-smooth", "lenis-stopped");
      delete (window as WindowWithLenis).__lenis;
    };
  }, []);

  return null;
}
