"use client";

import { motion } from "framer-motion";
import { Card } from "./Card";

function IconBox() {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/20">
      <div className="h-6 w-6 border-2 border-white border-t-transparent rounded-full animate-spin" style={{ animationDuration: "3s" }} />
    </div>
  );
}

function IconDiamond() {
  return (
    <div className="h-10 w-10 rotate-45 rounded border-2 border-ascone-primary/40 bg-ascone-cream/50" />
  );
}

function IconLock() {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-ascone-primary/40">
      <div className="h-3 w-2 rounded-sm bg-ascone-primary/60" />
    </div>
  );
}

export function Features() {
  return (
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
            Save, send, and spend smarter with a single, secure platform.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          <div className="rounded-2xl bg-ascone-primary p-8 text-white">
            <h3 className="text-xl font-semibold">Grow savings faster</h3>
            <div className="mt-6 flex justify-center">
              <div className="flex flex-col items-center gap-2">
                <div className="h-16 w-8 rounded-t bg-white/30" />
                <div className="flex gap-1">
                  <div className="h-8 w-6 rounded bg-white/40" />
                  <div className="h-8 w-6 rounded bg-white/30" />
                  <div className="h-8 w-6 rounded bg-white/20" />
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-ascone-cream/80 p-8">
            <h3 className="text-xl font-semibold text-ascone-navy">Send across the globe</h3>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <div className="rounded-lg bg-white px-4 py-2 shadow-sm">
                <span className="text-lg font-bold text-ascone-primary">$25,000</span>
                <p className="text-xs text-ascone-navy/60">Received</p>
              </div>
              <div className="rounded-lg bg-white px-4 py-2 shadow-sm">
                <span className="text-lg font-bold text-ascone-primary">$40,000</span>
                <p className="text-xs text-ascone-navy/60">Pay Now</p>
              </div>
              <div className="flex gap-1 text-2xl">
                <span aria-hidden="true">🌍</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold text-ascone-navy">Make your spend, Well-spent</h3>
            <p className="mt-2 text-ascone-navy/70">
              Transparency, control, and growth—all in one place.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Card
                title="Transparency"
                description="See exactly where your money goes with clear breakdowns and insights."
                icon={<IconBox />}
              />
              <Card
                title="Creative expansion"
                description="Grow your wealth with tools designed for modern savers and investors."
                icon={<IconDiamond />}
              />
              <Card
                title="Private Grid Investments"
                description="Secure, private investment options tailored to your goals."
                variant="cream"
                icon={<IconLock />}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
