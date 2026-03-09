"use client";

import { motion } from "framer-motion";
import { Button } from "./Button";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ascone-light-grey/30 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-xl"
        >
          <motion.h1
            variants={item}
            className="text-4xl font-bold tracking-tight text-ascone-navy sm:text-5xl lg:text-6xl"
          >
            Change the way you use your money.
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-6 text-lg text-ascone-navy/80"
          >
            Simple, fast, reliable financial applications. Manage savings, send
            money globally, and make every dollar count—all in one place.
          </motion.p>
          <motion.div variants={item} className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="#get-started">Get Started Now</Button>
            <div className="flex items-center gap-2 text-sm text-ascone-navy/70">
              <span className="flex gap-0.5 text-amber-500" aria-hidden="true">
                ★★★★★
              </span>
              <span>5.0 out of 500+ reviews</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative grid grid-cols-2 gap-4"
        >
          <div className="flex aspect-square items-center justify-center rounded-2xl bg-ascone-cream/80 shadow-lg">
            <div className="h-24 w-14 rounded-lg border-2 border-ascone-primary/30 bg-white shadow-inner" />
          </div>
          <div className="flex aspect-square items-center justify-center rounded-2xl bg-ascone-cream/80 shadow-lg">
            <span className="text-3xl font-bold text-ascone-primary">56+</span>
          </div>
          <div className="flex aspect-square flex-col items-center justify-center gap-1 rounded-2xl bg-ascone-cream/80 shadow-lg">
            <span className="text-xs font-medium text-ascone-navy/70">Learn About</span>
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-8 w-8 rounded-full border-2 border-white bg-ascone-primary/60"
                />
              ))}
            </div>
          </div>
          <div className="flex aspect-square flex-col items-center justify-center rounded-2xl bg-ascone-primary p-4 text-white shadow-lg">
            <span className="text-2xl font-bold">$196,000</span>
            <div className="mt-2 h-8 w-full rounded bg-white/20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
