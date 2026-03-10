"use client";

import { motion } from "framer-motion";

export function Metrics() {
  return (
    <section className="relative overflow-hidden bg-ascone-primary px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      {/* Subtle wavy/fabric texture */}
      <div className="absolute inset-0 opacity-[0.06]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_white_0%,_transparent_50%)]" />
        <svg className="absolute inset-0 h-full w-full opacity-50" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="fabric" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 20 Q10 15 20 20 T40 20" fill="none" stroke="white" strokeWidth="0.5" />
              <path d="M0 30 Q10 25 20 30 T40 30" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#fabric)" />
        </svg>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 md:flex-row"
      >
        <div className="text-center md:text-left">
          <p className="text-4xl font-bold text-white sm:text-5xl">$14B</p>
          <p className="mt-1 text-ascone-light-grey/90">Funds and syndicates</p>
        </div>
        <div className="text-center md:text-left">
          <p className="text-4xl font-bold text-white sm:text-5xl">23k+</p>
          <p className="mt-1 text-ascone-light-grey/90">Power by active startups</p>
        </div>
        <p className="max-w-sm text-center text-xl font-semibold text-white md:text-right">
          Market and build the solutions
        </p>
      </motion.div>
    </section>
  );
}
