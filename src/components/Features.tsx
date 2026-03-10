"use client";

import { motion } from "framer-motion";
import { Card } from "./Card";
import { FEATURES_SPEND_ITEMS } from "@/lib/content";

function IconNetwork() {
  return (
    <div className="grid h-10 w-10 grid-cols-3 grid-rows-3 gap-0.5 rounded border-2 border-ascone-primary/40 bg-white p-1">
      {[...Array(9)].map((_, i) => (
        <div key={i} className="h-1.5 w-1.5 rounded-sm bg-ascone-primary/60" />
      ))}
    </div>
  );
}

function IconOverlappingCircles() {
  return (
    <div className="relative h-10 w-10">
      <div className="absolute left-0 top-0 h-5 w-5 rounded-full border-2 border-ascone-primary/50 bg-ascone-cream/50" />
      <div className="absolute left-2 top-2 h-5 w-5 rounded-full border-2 border-ascone-primary/50 bg-white" />
      <div className="absolute left-1 top-0 h-4 w-4 rounded-full border-2 border-ascone-primary/40 bg-ascone-light-grey/50" />
    </div>
  );
}

function IconArrowCircle() {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-ascone-primary/40 bg-ascone-cream/50">
      <svg className="h-5 w-5 text-ascone-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function GlobeIconSmall() {
  return (
    <svg className="h-6 w-6 text-ascone-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0v-6m0-6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3Zm0 0V9m0 6h.01" />
    </svg>
  );
}

const SPEND_ICONS: Record<string, React.ReactNode> = {
  network: <IconNetwork />,
  circles: <IconOverlappingCircles />,
  "arrow-circle": <IconArrowCircle />,
};

export function Features() {
  return (
    <>
      {/* One app for all your money things — two cards only */}
      <section id="features" className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-ascone-navy sm:text-4xl">
              One app for all your money things
            </h2>
            <p className="mt-4 text-lg text-ascone-navy/70">
              Removes the friction that stand on the way of your money goals
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {/* Card 1: Grow savings faster — dark green, arrow + bar chart, $12,000 */}
            <div className="rounded-2xl bg-ascone-primary p-8 text-white">
              <h3 className="text-xl font-semibold">Grow savings faster</h3>
              <div className="mt-6 flex flex-col items-center gap-4">
                <div className="flex items-end gap-1">
                  <div className="h-8 w-6 rounded-t bg-white/30" />
                  <div className="h-12 w-6 rounded-t bg-white/40" />
                  <div className="h-6 w-6 rounded-t bg-white/25" />
                  <div className="h-10 w-6 rounded-t bg-white/35" />
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-lg font-bold">$12,000</span>
                </div>
              </div>
            </div>

            {/* Card 2: Send across the global — beige, bills, amounts, globe, flags */}
            <div className="rounded-2xl bg-ascone-cream p-8">
              <h3 className="text-xl font-semibold text-ascone-navy">Send across the global</h3>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-ascone-primary">$25,000</span>
                  <span className="text-xs text-ascone-navy/60">Thailand</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-ascone-primary">$40,000</span>
                </div>
                <GlobeIconSmall />
                <div className="flex -space-x-2">
                  {[1, 2].map((i) => (
                    <div key={i} className="h-6 w-6 rounded-full border-2 border-white bg-ascone-primary/50" aria-hidden />
                  ))}
                </div>
                <div className="flex gap-1 text-lg" aria-hidden>
                  <span>🇩🇪</span>
                  <span>🇬🇧</span>
                  <span>🇺🇸</span>
                  <span>🇫🇷</span>
                </div>
              </div>
              {/* Stacked bills placeholder */}
              <div className="mt-4 flex h-16 w-24 items-end gap-0.5 rounded border border-ascone-primary/20 bg-white/50 p-1">
                <div className="h-4 w-full rounded bg-ascone-primary/20" />
                <div className="h-4 w-full rounded bg-ascone-primary/25" />
                <div className="h-4 w-full rounded bg-ascone-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Make your spend, Well-spent — heading left, subtext right, 3 cards */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:grid lg:grid-cols-12 lg:gap-8"
          >
            <div className="lg:col-span-5">
              <h2 className="text-3xl font-bold tracking-tight text-ascone-navy sm:text-4xl">
                Make your spend, Well-spent
              </h2>
            </div>
            <p className="mt-4 text-lg text-ascone-navy/70 lg:col-span-7 lg:mt-0">
              Transparency, control, and growth—all in one place.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES_SPEND_ITEMS.map((item) => (
              <Card
                key={item.title}
                title={item.title}
                description={item.description}
                icon={SPEND_ICONS[item.icon] ?? null}
                variant={item.variant ?? "default"}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
