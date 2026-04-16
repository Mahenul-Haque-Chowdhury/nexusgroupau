"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Home, ArrowLeft } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-[100svh] flex items-center justify-center px-5 sm:px-8 pt-24">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-sky-500/12 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-amber-400/12 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-2xl"
      >
        <div className="text-7xl sm:text-8xl md:text-9xl font-bold mb-8 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
          404
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
          Page Not Found
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/60 mb-10 md:mb-12">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-6 sm:px-8 py-4 rounded-xl bg-primary text-primary-foreground border border-primary/60 hover:brightness-110 transition-colors flex items-center justify-center gap-2"
            >
              <Home size={18} />
              <span>Go Home</span>
            </motion.button>
          </Link>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.history.back()}
            className="w-full sm:w-auto px-6 sm:px-8 py-4 rounded-xl bg-secondary/80 text-secondary-foreground border border-border hover:border-accent/60 hover:bg-secondary transition-colors flex items-center justify-center gap-2"
          >
            <ArrowLeft size={18} />
            <span>Go Back</span>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
