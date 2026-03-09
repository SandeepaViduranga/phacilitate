"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AccordionItem } from "./Accordion";
import { FAQ_ITEMS } from "@/lib/content";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-ascone-light-grey/20 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5"
        >
          <h2 className="text-3xl font-bold tracking-tight text-ascone-navy sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-ascone-navy/70">
            Quick answers to common questions about Ascone.
          </p>
        </motion.div>
        <div className="mt-10 lg:col-span-7 lg:mt-0">
          {FAQ_ITEMS.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
