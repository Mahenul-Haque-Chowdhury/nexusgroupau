"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "nexus_preloader_seen";

const GREETINGS = [
  "Hello",
  "こんにちは",
  "你好",
  "안녕하세요",
  "Bonjour",
  "Hola",
  "Hallo",
  "Ciao",
  "Привет",
  "مرحبا",
  "नमस्ते",
  "Olá",
];

// 12 words * 240ms + 640ms exit = 3520ms total (under 4s).
const WORD_STEP_MS = 240;
const OVERLAY_EXIT_MS = 640;

export function Preloader() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasCheckedStorage, setHasCheckedStorage] = useState(false);

  // Read localStorage only on client to avoid hydration mismatch.
  useEffect(() => {
    try {
      const hasSeenPreloader = window.localStorage.getItem(STORAGE_KEY) === "true";

      if (hasSeenPreloader) {
        setIsVisible(false);
        setIsComplete(true);
        setHasCheckedStorage(true);
        return;
      }

      setIsVisible(true);
      setIsComplete(false);
      setCurrentIndex(0);
      setHasCheckedStorage(true);
    } catch {
      // Fallback: still show the preloader if storage is unavailable.
      setIsVisible(true);
      setIsComplete(false);
      setCurrentIndex(0);
      setHasCheckedStorage(true);
    }
  }, []);

  // Timed word sequence. Uses setTimeout with cleanup to avoid timer leaks.
  useEffect(() => {
    if (!hasCheckedStorage || !isVisible || isComplete) {
      return;
    }

    const sequenceTimer = window.setTimeout(() => {
      setCurrentIndex((previousIndex) => {
        if (previousIndex >= GREETINGS.length - 1) {
          setIsComplete(true);
          return previousIndex;
        }

        return previousIndex + 1;
      });
    }, WORD_STEP_MS);

    return () => window.clearTimeout(sequenceTimer);
  }, [currentIndex, hasCheckedStorage, isComplete, isVisible]);

  // Mark as seen and unmount after slide-up exit completes.
  useEffect(() => {
    if (!isComplete) {
      return;
    }

    try {
      window.localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // Ignore storage write errors.
    }

    const hideTimer = window.setTimeout(() => {
      setIsVisible(false);
    }, OVERLAY_EXIT_MS + 20);

    return () => window.clearTimeout(hideTimer);
  }, [isComplete]);

  const currentGreeting = useMemo(() => GREETINGS[currentIndex] ?? GREETINGS[0], [currentIndex]);

  // Do not render preloader at all until storage check is done.
  // Returning visitors get no overlay and no flicker.
  if (!hasCheckedStorage || !isVisible) {
    return null;
  }

  const isFirstWord = currentIndex === 0;
  const isLastWord = currentIndex === GREETINGS.length - 1;

  return (
    <motion.div
      className="fixed inset-0 z-[120] bg-black"
      initial={{ y: 0 }}
      animate={isComplete ? { y: "-100%" } : { y: 0 }}
      transition={{
        duration: 0.64,
        ease: [0.76, 0, 0.24, 1],
      }}
      style={{ willChange: "transform" }}
      aria-live="polite"
      aria-label="Page loading animation"
    >
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden px-6">
        <div className="relative h-16 w-[16ch] md:h-20 md:w-[18ch]">
        <AnimatePresence mode="sync" initial={false}>
          <motion.span
            key={`${currentGreeting}-${currentIndex}`}
            className="absolute inset-0 flex items-center justify-center text-center text-3xl font-semibold text-white md:text-4xl lg:text-5xl"
            initial={{
              opacity: 0,
              scale: 0.985,
              filter: "blur(5px)",
              letterSpacing: "0.05em",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
              letterSpacing: "0.03em",
            }}
            exit={{
              opacity: 0,
              scale: 1.01,
              filter: "blur(4px)",
              letterSpacing: "0.045em",
            }}
            transition={{
              // Stable center-locked crossfade with a soft cadence.
              duration: isFirstWord ? 0.26 : isLastWord ? 0.24 : 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              willChange: "opacity, transform, filter, letter-spacing",
              transformOrigin: "center center",
            }}
          >
            {currentGreeting}
          </motion.span>
        </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}