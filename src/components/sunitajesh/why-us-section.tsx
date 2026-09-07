"use client";

import { motion } from "motion/react";
import { WHY_US, WHY_US_INTRO } from "./sunita-content";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/**
 * Three reasons across a three-column grid, each led by its oversized index so the
 * row reads as a sequence rather than three unrelated cards.
 */
export const WhyUsSection = () => (
  <section className="bg-darkgrey py-16 sm:py-20 md:py-24 px-4 sm:px-8 lg:px-12">
    <div className="max-w-[1600px] mx-auto">
      <div className="flex items-center justify-between border-b border-white/8 pb-6 mb-12 sm:mb-16">
        <span className="text-xs uppercase tracking-[0.12em] text-white/30 font-[570]">
          {WHY_US_INTRO.eyebrow}
        </span>
      </div>

      <motion.h2
        className="text-[clamp(1.75rem,4vw,3.5rem)] font-[790] text-white leading-[1.05] tracking-[-0.02em] max-w-4xl mb-16 sm:mb-20 md:mb-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px 0px" }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        {WHY_US_INTRO.heading}
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
        {WHY_US.map((reason, i) => (
          <motion.div
            key={reason.number}
            className="border-t border-white/8 pt-8 pb-10 sm:pr-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px 0px" }}
            transition={{ duration: 0.7, delay: i * 0.12, ease: EASE }}
          >
            <span className="block text-[clamp(3.5rem,7vw,6rem)] font-black text-accent leading-none tracking-[-0.03em]">
              {/* inline-block + leading-normal keeps the 1.5x line box the original had */}
              <span className="tabular-nums inline-block leading-normal">{reason.number}</span>
            </span>
            <h3 className="text-base font-[570] text-white mt-4 mb-2">{reason.title}</h3>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">{reason.body}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
