"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "./Button";

function GlobeIcon() {
  return (
    <svg
      className="h-8 w-8 text-ascone-primary"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0v-6m0-6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3Zm0 0V9m0 6h.01"
      />
    </svg>
  );
}

function DiamondIcon() {
  return (
    <svg
      className="h-6 w-6 text-ascone-primary"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2L2 8l4 14h12l4-14L12 2Zm0 3.5L18 9l-1.5 10h-9L6 9l6-3.5Z" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
        {/* hero entrance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-xl"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-ascone-primary">
            TRY IT NOW!
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-ascone-navy sm:text-5xl lg:text-6xl">
            Change the way you use your{" "}
            <span className="font-serif italic">money</span>.
          </h1>
          <p className="mt-6 text-lg text-ascone-navy/80">
            From your everyday spending, to planning for your future with savings
            and investments, Ascone helps you get more from your money.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="#get-started">Get Started Now</Button>
            <div className="flex items-center gap-2 text-sm text-ascone-navy/70">
              <span className="flex gap-0.5 text-amber-500" aria-hidden="true">
                ★★★★★
              </span>
              <span>5.0</span>
              <span>
                from 120+{" "}
                <Link
                  href="#reviews"
                  className="underline hover:text-ascone-primary"
                >
                  reviews
                </Link>
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative grid grid-cols-2 gap-4"
        >
          <div className="flex aspect-square flex-col items-center justify-end overflow-hidden rounded-2xl border border-ascone-light-grey bg-white pb-6">
            <div className="absolute left-6 top-6 flex gap-2">
              <div className="h-2 w-12 rounded-full bg-ascone-light-grey" />
              <div className="h-2 w-8 rounded-full bg-ascone-light-grey" />
            </div>
            <div className="h-32 w-20 rounded-lg border-2 border-ascone-primary/20 bg-white shadow-md" />
          </div>

          <div className="flex aspect-square flex-col items-center justify-center gap-2 rounded-l-2xl rounded-r-lg bg-ascone-cream p-4 shadow-lg">
            <span className="text-3xl font-bold text-ascone-primary sm:text-4xl">
              56+
            </span>
            <span className="text-sm font-medium text-ascone-primary">
              Currencies
            </span>
            <div className="mt-2">
              <GlobeIcon />
            </div>
          </div>

          <div className="flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl bg-ascone-light-grey p-4 shadow-lg">
            <div className="flex gap-1">
              <DiamondIcon />
              <DiamondIcon />
            </div>
            <span className="text-sm font-medium text-ascone-primary">
              Users Active
            </span>
            <div className="mt-2 flex items-center -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-8 w-8 rounded-full border-2 border-white bg-ascone-primary/60"
                />
              ))}
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-ascone-primary text-white">
                <span className="text-xs" aria-hidden>→</span>
              </div>
            </div>
          </div>

          <div className="flex aspect-square flex-col justify-between rounded-2xl bg-ascone-primary p-4 text-white shadow-lg">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold sm:text-3xl">$196,000</span>
              <span className="text-lg" aria-hidden>↑</span>
            </div>
            <svg
              className="h-12 w-full flex-shrink-0"
              viewBox="0 0 120 40"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path
                d="M0 35 Q15 30 30 28 T60 22 T90 15 T120 8 L120 40 L0 40 Z"
                fill="rgba(255,255,255,0.2)"
              />
              <path
                d="M0 35 Q15 30 30 28 T60 22 T90 15 T120 8"
                stroke="white"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm font-medium text-white/90">Saving</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
