"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type WindowWithLenis = Window & {
  __lenis?: { on: (event: "scroll", cb: () => void) => void };
  __scrollFxReady?: boolean;
};

/**
 * Registers ScrollTrigger once and syncs it with the shared Lenis instance
 * created by SmoothScroll. Safe to call from every section component.
 */
export function ensureScrollFx() {
  if (typeof window === "undefined") return { gsap, ScrollTrigger };
  const win = window as WindowWithLenis;
  if (!win.__scrollFxReady) {
    win.__scrollFxReady = true;
    gsap.registerPlugin(ScrollTrigger);
    // SmoothScroll mounts after page sections; defer the Lenis hookup a frame.
    requestAnimationFrame(() => {
      win.__lenis?.on("scroll", ScrollTrigger.update);
    });
    document.fonts?.ready.then(() => ScrollTrigger.refresh());
  }
  return { gsap, ScrollTrigger };
}

export const FX_EASE = {
  out: "power3.out",
  inOut: "power2.inOut",
  expo: "expo.out",
} as const;

export const FX_DUR = { fast: 0.4, base: 0.8, slow: 1.2 } as const;

/**
 * Wraps each word of the element's text in an overflow-hidden mask so GSAP
 * can slide the words up into view. Returns the inner word spans.
 */
export function splitWords(el: HTMLElement): HTMLElement[] {
  const text = el.textContent ?? "";
  el.textContent = "";
  el.setAttribute("aria-label", text);
  return text.split(" ").map((word) => {
    const mask = document.createElement("span");
    mask.setAttribute("aria-hidden", "true");
    mask.style.cssText = "display:inline-block;overflow:hidden;vertical-align:bottom;";
    const inner = document.createElement("span");
    inner.style.display = "inline-block";
    inner.textContent = word;
    mask.appendChild(inner);
    el.appendChild(mask);
    el.appendChild(document.createTextNode(" "));
    return inner;
  });
}
