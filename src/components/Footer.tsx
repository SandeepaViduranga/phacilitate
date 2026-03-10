"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { FOOTER_LINKS } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-ascone-light-grey/50 bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Logo className="text-3xl sm:text-4xl" />
          </div>
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-ascone-navy/80">
                {heading}
              </h3>
              <ul className="mt-4 space-y-2">
                {links.map((label) => (
                  <li key={label}>
                    <Link
                      href="#"
                      className="text-sm text-ascone-navy/70 hover:text-ascone-primary"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ascone-light-grey/50 pt-8 sm:flex-row">
          <p className="text-sm text-ascone-navy/60">
            Ascone Finance, Inc. 2026
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-ascone-navy/60 hover:text-ascone-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="text-ascone-navy/60 hover:text-ascone-primary">
              Terms of Use
            </Link>
            <Link href="#" className="text-ascone-navy/60 hover:text-ascone-primary">
              Disclosure
            </Link>
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <button
            type="button"
            className="flex items-center gap-2 rounded-lg border border-ascone-light-grey/50 px-3 py-2 text-sm text-ascone-navy/70 hover:bg-ascone-light-grey/30"
          >
            <span aria-hidden="true">🇺🇸</span>
            English
          </button>
        </div>
      </div>
    </footer>
  );
}
