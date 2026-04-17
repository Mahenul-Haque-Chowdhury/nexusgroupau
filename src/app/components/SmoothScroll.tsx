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

    const desktopQuery = window.matchMedia("(min-width: 1025px) and (hover: hover) and (pointer: fine)");
    if (!desktopQuery.matches) {
      htmlElement.classList.remove("lenis", "lenis-smooth", "lenis-stopped");
      bodyElement.classList.remove("lenis", "lenis-smooth", "lenis-stopped");
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
      delete (window as WindowWithLenis).__lenis;
    };
  }, []);

  return null;
}
