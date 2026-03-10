"use client";

import Image from "next/image";
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
      <section id="features" className="bg-white px-4 py-8 sm:px-6 lg:px-8 ">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-md font-semibold text-ascone-primary/70 uppercase pb-2">About Us</p>
            <h2 className="text-6xl font-semibold/80 tracking-tight text-ascone-navy px-20">
              One app for all your money things
            </h2>
            <p className="mt-4 text-lg text-ascone-navy/50 px-20">
              Removes the friction that stand on the way of your money goals
            </p>
          </motion.div>

          <div className="mt-16 grid gap-4 grid-cols-10">
            <div className="col-span-4">
              <div className="w-full h-[600px] bg-ascone-primary p-10">
                <span className="text-white text-5xl font-semibold/80">Grow savings faster</span>
              </div>
            </div>
            <div className="col-span-6">
              <div className="w-full h-[600px] bg-ascone-light-grey p-10 rounded-bl-[20%]">
                <span className="text-ascone-primary ti text-5xl font-semibold/80 tracking-tight ">Send across the global</span>
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
            className="lg:grid lg:grid-cols-10 lg:gap-8"
          >
            <div className="lg:col-span-6">
              <p className="text-md font-semibold text-ascone-primary/70 uppercase pb-2">Values</p>
              <h2 className="text-6xl font-semibold/80 tracking-tight text-ascone-navy">
                Make your<br></br> spend, Well-spent
              </h2>
            </div>
            <p className="mt-4 text-lg text-ascone-navy/50 lg:col-span-4 lg:mt-0 lg:self-end">
              Manages a diversified group of specialized private credit brands with efficient tech-enabled processes.
            </p>
          </motion.div>

          <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
