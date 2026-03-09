"use client";

import { motion } from "framer-motion";
import { Button } from "./Button";

export function FooterCTA() {
  return (
    <section className="bg-ascone-primary px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 md:flex-row"
      >
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Change the way you use your money.
          </h2>
          <div className="mt-6">
            <Button href="#get-started">
              Get Started Now
            </Button>
          </div>
        </div>
        <div className="flex h-24 w-32 items-center justify-center rounded-lg bg-white/10">
          <span className="text-4xl text-white/80">$</span>
        </div>
      </motion.div>
    </section>
  );
}
