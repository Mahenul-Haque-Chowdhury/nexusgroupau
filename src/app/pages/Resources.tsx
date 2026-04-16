"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { SectionContainer } from "../components/SectionContainer";

export function Resources() {
  return (
    <div className="relative pt-24">
      {/* Newsletter Section */}
      <SectionContainer fullHeight={false}>
        <div className="relative py-16 md:py-24 border-y border-white/5">
          <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Subscribe to Our Newsletter
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/60 mb-10 md:mb-12">
                Get practical digital strategy insights, product updates, and execution tips delivered monthly.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-primary/70 focus:outline-none transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 rounded-xl bg-primary text-primary-foreground border border-primary/60 hover:brightness-110 transition-colors"
                >
                  Subscribe
                </motion.button>
              </div>

              <p className="text-xs text-white/40 mt-4">
                No spam. Unsubscribe anytime.
              </p>
            </motion.div>
          </div>
        </div>
      </SectionContainer>

      {/* CTA Section */}
      <SectionContainer fullHeight={false}>
        <div className="relative py-20 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-8">
              Need Custom Insights?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/60 mb-10 md:mb-12">
              Our team can provide tailored research and analysis for your specific use case.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Link
                href="/contact"
                className="inline-block w-full sm:w-auto px-8 py-4 bg-white text-black hover:bg-white/90 transition-colors"
              >
                Request Custom Research
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </SectionContainer>
    </div>
  );
}
