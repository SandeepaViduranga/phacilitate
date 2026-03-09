"use client";

import { motion } from "framer-motion";

export function Metrics() {
  return (
    <section className="relative overflow-hidden bg-ascone-primary px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_white_0%,_transparent_50%)]" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 md:flex-row"
      >
        <div className="text-center md:text-left">
          <p className="text-4xl font-bold text-white sm:text-5xl">$14B</p>
          <p className="mt-1 text-ascone-light-grey/90">Funds and years</p>
        </div>
        <div className="text-center md:text-left">
          <p className="text-4xl font-bold text-white sm:text-5xl">23k+</p>
          <p className="mt-1 text-ascone-light-grey/90">Trusted by active users</p>
        </div>
        <p className="max-w-sm text-center text-xl font-semibold text-white md:text-right">
          Market and build the solutions
        </p>
      </motion.div>
    </section>
  );
}
