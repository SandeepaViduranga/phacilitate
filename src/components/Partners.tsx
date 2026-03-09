"use client";

import { motion } from "framer-motion";
import { PARTNERS } from "@/lib/content";

export function Partners() {
  return (
    <section className="border-y border-ascone-light-grey/50 bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-ascone-navy/60">
          Trusted by
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-12"
        >
          {PARTNERS.map((name) => (
            <span
              key={name}
              className="text-lg font-semibold text-ascone-navy/70"
            >
              {name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
