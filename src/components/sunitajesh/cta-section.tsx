"use client";

import { motion } from "motion/react";
import { CONTACT } from "./sunita-content";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Section 12 — closing CTA.
 *
 * The SSR markup ships both columns at `opacity:0` with a Y offset; those are
 * Framer Motion's pre-animation styles, reproduced here as `initial` states
 * that resolve on scroll-in (once).
 */
export const CtaSection = () => (
  <section className="bg-darkgrey py-16 sm:py-20 md:py-24 px-4 sm:px-8 lg:px-12">
    <div className="max-w-[1600px] mx-auto">
      <div className="border-t border-white/8 pt-12 sm:pt-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end">
        <motion.div
          className="md:col-span-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <span className="text-xs uppercase tracking-[0.12em] text-white/30 font-[570] block mb-6">
            {CONTACT.eyebrow}
          </span>
          <h2 className="text-[clamp(2.5rem,7vw,7rem)] font-[790] leading-none tracking-[-0.03em] text-white">
            {CONTACT.heading}
            <br />
            <span className="text-accent">{CONTACT.headingAccent}</span>
          </h2>
        </motion.div>

        <motion.div
          className="md:col-span-4 flex flex-col gap-6 md:pb-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
        >
          <p className="text-sm text-white/40 leading-relaxed max-w-xs">
            {CONTACT.note}
          </p>
          <a
            href={`mailto:${CONTACT.email}`}
            className="group inline-flex items-center gap-2.5 bg-white text-darkgrey text-sm font-[650] px-6 py-3 rounded-full relative overflow-hidden w-fit"
          >
            <span className="absolute inset-0 bg-primary translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-380 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            <span className="relative z-10 group-hover:text-onprimary transition-[color] duration-200">
              Send message
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-up-right relative z-10 group-hover:text-onprimary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-[color,transform] duration-200"
              aria-hidden="true"
            >
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);
