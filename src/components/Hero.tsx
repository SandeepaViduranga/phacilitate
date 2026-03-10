"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "./Button";

function GlobeIcon() {
  return (
    <svg
      className="h-[100px] w-[100px] text-ascone-primary"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <clipPath id="globeClip">
          <circle cx="12" cy="12" r="9" />
        </clipPath>
      </defs>

      <g
        stroke="currentColor"
        strokeWidth="0.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Outer globe */}
        <circle cx="12" cy="12" r="9" />

        {/* Clip inner grid to globe */}
        <g clipPath="url(#globeClip)">
          {/* Vertical meridians */}
          <line x1="12" y1="3" x2="12" y2="21" />
          <ellipse cx="12" cy="12" rx="4.5" ry="9" />
          <ellipse cx="12" cy="12" rx="7" ry="9" />

          {/* Horizontal latitudes */}
          <ellipse cx="12" cy="12" rx="9" ry="4.2" />
          <ellipse cx="12" cy="12" rx="9" ry="7" />
        </g>
      </g>
    </svg>
  );
}

function DoubleSparkleIcon() {
  return (
    <svg
      width="135"
      height="75"
      viewBox="0 0 135 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M37.5 8
           C42 22, 53 33, 67 37.5
           C53 42, 42 53, 37.5 67
           C33 53, 22 42, 8 37.5
           C22 33, 33 22, 37.5 8Z"
        fill="currentColor"
      />
      <path
        d="M97.5 8
           C102 22, 113 33, 127 37.5
           C113 42, 102 53, 97.5 67
           C93 53, 82 42, 68 37.5
           C82 33, 93 22, 97.5 8Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
        {/* hero entrance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-xl"
        >
          <p className="text-lg font-medium text-ascone-primary/80 uppercase pb-6">Try it now!</p>
          <h1 className="text-7xl font-semibold/80 tracking-tight text-ascone-navy">
            Change the way you use your{" "}
            <span className="font-serif tracking-tight font-semibold/80 italic">money</span>
          </h1>
          <p className="mt-20 text-lg text-ascone-navy/50 pr-20">
            From your everyday spending, to planning for your future with savings and investments, Ascone helps you get more from your money.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="#get-started">Get Started Now</Button>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="flex gap-0.5 text-amber-500" aria-hidden="true">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </span>
                <span className="text-sm font-semibold text-ascone-navy">5.0</span>
              </div>
              <p className="text-sm text-ascone-navy/60">
                from 120+{" "}
                <Link href="#reviews" className="text-ascone-navy/80 underline hover:text-ascone-primary">
                  reviews
                </Link>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Hero 2×2 grid per design: phone top-left, 56+ top-right, stars bottom-left, saving + users bottom-right */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative grid grid-cols-2"
        >
          {/* Top left: hand + phone placeholder */}
          <div
            className="flex aspect-square flex-col items-center justify-end overflow-hidden border bg-ascone-light-grey/30 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/top-left.webp')" }}
          >
          </div>

          {/* Top right: 56+ Currencies + globe */}
          <div className="flex aspect-square flex-col justify-between rounded-bl-[50%] rounded-tl-[50%] bg-ascone-cream pr-4 pl-8 py-8">
            <span className="font-sans tracking-tight text-6xl font-semibold/50 text-ascone-primary mr-5 text-right">
              56+
            </span>
            <span className="text-xl font-medium text-ascone-primary mr-5">
              Currencies
            </span>
            <div className="self-end">
              <GlobeIcon />
            </div>
          </div>

          {/* Bottom left: two teal star icons */}
          <div className="flex aspect-square flex-col justify-between rounded-tr-[50%] gap-2 bg-ascone-light-grey p-8">
            <div className="flex gap-2 text-ascone-primary">
              <DoubleSparkleIcon />
            </div>
            <span className="text-xl font-medium text-ascone-primary mr-5 text-right">
              Users Active
            </span>
            <div className="flex items-center -space-x-5">
              {/* Three circular profile images - add your images to public/images/ as avatar-1.jpg, avatar-2.jpg, avatar-3.jpg */}
              <img
                src="/images/avatar-1.jpg"
                alt=""
                className="h-[60px] w-[60px] rounded-full border-2 border-white object-cover bg-ascone-light-grey"
              />
              <img
                src="/images/avatar-2.jpg"
                alt=""
                className="h-[60px] w-[60px] rounded-full border-2 border-white object-cover bg-ascone-light-grey"
              />
              <img
                src="/images/avatar-3.jpg"
                alt=""
                className="h-[60px] w-[60px] rounded-full border-2 border-white object-cover bg-ascone-light-grey"
              />
              {/* Arrow circle - dark green with white arrow */}
              <a
                href="#"
                className="flex h-[60px] w-[60px] flex-shrink-0 items-center justify-center rounded-full border-2 border-white bg-ascone-primary text-white transition-opacity hover:opacity-90"
                aria-label="View more"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M7 17L17 7M17 7h-6M17 7v6" />
                </svg>
              </a>
            </div>
          </div>

          {/* Bottom right: Saving card + Users Active below */}
          <div
            className="flex aspect-square flex-col items-center justify-end overflow-hidden border bg-ascone-light-grey/30 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/bottom-right.png')" }}
          >
          </div>
        </motion.div>
      </div>      
    </section>    
  );
}
