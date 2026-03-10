"use client";

import { motion } from "framer-motion";
import { Button } from "./Button";

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export function FooterCTA() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto grid max-w-7xl overflow-hidden rounded-2xl lg:grid-cols-2"
      >
        {/* Left block: dark green — headline, subtext, CTA */}
        <div className="flex flex-col justify-center bg-ascone-primary px-8 py-12 lg:px-12 lg:py-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Change the way you use your{" "}
            <span className="italic">money</span>
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Join over 1M+ people who choose Ascone to safe and secure money thing
          </p>
          <div className="mt-8">
            <Button href="#get-started">Get Started Now</Button>
          </div>
        </div>

        {/* Right block: white — decorative stars, money stack placeholder */}
        <div className="relative flex items-center justify-center bg-white p-8 lg:p-12">
          <div className="absolute right-6 top-6 flex gap-2 text-ascone-primary">
            <StarIcon className="h-8 w-8" />
            <StarIcon className="h-8 w-8" />
          </div>
          <div className="flex h-32 w-40 items-end justify-center gap-1 rounded-lg border border-ascone-light-grey bg-ascone-cream/30 p-4">
            <div className="h-8 w-12 rounded bg-ascone-primary/20" />
            <div className="h-10 w-12 rounded bg-ascone-primary/25" />
            <div className="h-6 w-12 rounded bg-ascone-primary/20" />
            <div className="h-4 w-8 rounded-full bg-ascone-navy/20" aria-hidden />
            <div className="h-5 w-6 rounded-full bg-ascone-navy/25" aria-hidden />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
