"use client";

import { motion } from "motion/react";
import { CONTACT_NEXT, CONTACT_NEXT_INTRO } from "../sunita-content";

const EASE = [0.16, 1, 0.3, 1] as const;

export const ContactNext = () => (
  <section className="py-20 sm:py-24 max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
    <motion.span
      className="text-[11px] uppercase tracking-[0.2em] text-white/25 font-[570] mb-6 block"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px 0px" }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      {CONTACT_NEXT_INTRO.eyebrow}
    </motion.span>

    <motion.h2
      className="text-[clamp(2rem,5vw,4rem)] font-[790] tracking-[-0.03em] leading-none text-white mb-14 sm:mb-20"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px 0px" }}
      transition={{ duration: 0.8, ease: EASE }}
    >
      {CONTACT_NEXT_INTRO.heading}
    </motion.h2>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
      {CONTACT_NEXT.map((step, i) => (
        <motion.div
          key={step.number}
          className="group border-t border-white/8 pt-8 pb-10 sm:pr-10 lg:pr-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px 0px" }}
          transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
        >
          <span className="block text-[clamp(3rem,5vw,4.5rem)] font-thin tabular-nums leading-none text-white/[0.09] group-hover:text-accent/50 transition-colors duration-500 select-none">
            {step.number}
          </span>
          <h3 className="text-[clamp(1.25rem,1.8vw,1.5rem)] font-[570] text-white mt-6 mb-4">
            {step.title}
          </h3>
          <p className="text-sm text-white/40 leading-relaxed">{step.body}</p>
        </motion.div>
      ))}
    </div>
  </section>
);
