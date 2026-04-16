"use client";

import { motion, type Transition } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";

type AnimationSnapshot = Record<string, string | number>;

type BlurTextProps = {
  text?: string;
  delay?: number;
  className?: string;
  segmentClassName?: string;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  threshold?: number;
  rootMargin?: string;
  animationFrom?: AnimationSnapshot;
  animationTo?: AnimationSnapshot[];
  easing?: Transition["ease"];
  onAnimationComplete?: () => void;
  stepDuration?: number;
};

const buildKeyframes = (
  from: AnimationSnapshot,
  steps: AnimationSnapshot[]
): Record<string, Array<string | number>> => {
  const keys = new Set<string>([...Object.keys(from), ...steps.flatMap((step) => Object.keys(step))]);

  const keyframes: Record<string, Array<string | number>> = {};
  keys.forEach((key) => {
    const fromValue = from[key] ?? steps[0]?.[key] ?? 0;
    keyframes[key] = [fromValue, ...steps.map((step) => step[key] ?? fromValue)];
  });

  return keyframes;
};

export default function BlurText({
  text = "",
  delay = 200,
  className = "",
  segmentClassName = "",
  animateBy = "words",
  direction = "top",
  threshold = 0.1,
  rootMargin = "0px",
  animationFrom,
  animationTo,
  easing = [0.22, 1, 0.36, 1],
  onAnimationComplete,
  stepDuration = 0.35,
}: BlurTextProps) {
  const segments = useMemo(
    () => (animateBy === "words" ? text.split(" ") : text.split("")),
    [animateBy, text]
  );
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  const defaultFrom = useMemo(
    () =>
      direction === "top"
        ? { filter: "blur(10px)", opacity: 0, y: -50 }
        : { filter: "blur(10px)", opacity: 0, y: 50 },
    [direction]
  );

  const defaultTo = useMemo(
    () => [
      {
        filter: "blur(5px)",
        opacity: 0.5,
        y: direction === "top" ? 5 : -5,
      },
      { filter: "blur(0px)", opacity: 1, y: 0 },
    ],
    [direction]
  );

  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshots = animationTo ?? defaultTo;

  const keyframes = useMemo(() => buildKeyframes(fromSnapshot, toSnapshots), [fromSnapshot, toSnapshots]);

  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);
  const times = Array.from({ length: stepCount }, (_, index) =>
    stepCount === 1 ? 0 : index / (stepCount - 1)
  );

  return (
    <p ref={ref} className={`blur-text flex flex-wrap ${className}`}>
      {segments.map((segment, index) => {
        const spanTransition: Transition = {
          duration: totalDuration,
          times,
          delay: (index * delay) / 1000,
          ease: easing,
        };

        return (
          <motion.span
            key={`${segment}-${index}`}
            initial={fromSnapshot}
            animate={inView ? keyframes : fromSnapshot}
            transition={spanTransition}
            onAnimationComplete={index === segments.length - 1 ? onAnimationComplete : undefined}
            className={segmentClassName}
            style={{
              display: "inline-block",
              willChange: "transform, filter, opacity",
            }}
          >
            {segment === " " ? "\u00A0" : segment}
            {animateBy === "words" && index < segments.length - 1 && "\u00A0"}
          </motion.span>
        );
      })}
    </p>
  );
}