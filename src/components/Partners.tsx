"use client";

import { motion } from "framer-motion";
import { PARTNERS } from "@/lib/content";

export function Partners() {
  return (
    <section className="border-y border-ascone-light-grey/50 bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
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
              className="text-lg font-medium text-ascone-navy"
            >
              {name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
