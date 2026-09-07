"use client";

import { motion } from "motion/react";
import { FAQS, FAQ_INTRO } from "./sunita-content";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** Numbered question list; each row expands in place on click. */
export const FaqSection = () => (
  <section className="bg-darkgrey py-16 sm:py-20 md:py-24 px-4 sm:px-8 lg:px-12">
    <div className="max-w-[1600px] mx-auto">
      <div className="flex items-center justify-between border-b border-white/8 pb-6 mb-12 sm:mb-16">
        <span className="text-xs uppercase tracking-[0.12em] text-white/30 font-[570]">
          {FAQ_INTRO.eyebrow}
        </span>
      </div>

      <motion.h2
        className="text-[clamp(1.75rem,4vw,3.5rem)] font-[790] text-white leading-[1.05] tracking-[-0.02em] max-w-4xl mb-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px 0px" }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        {FAQ_INTRO.heading}
      </motion.h2>

      <p className="text-base text-white/50 leading-relaxed max-w-xl mb-16 sm:mb-20">
        {FAQ_INTRO.body}
      </p>

      <div className="flex flex-col">
        {FAQS.map((faq, i) => (
          <motion.div
            key={faq.number}
            className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 border-t border-white/8 py-8 sm:py-10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px 0px" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
          >
            <span className="md:col-span-1 text-xs uppercase tracking-[0.14em] text-white/30 font-[570] pt-2">
              {faq.number}
            </span>
            <h3 className="md:col-span-5 text-[clamp(1.25rem,2.2vw,1.75rem)] font-[570] leading-[1.2] group-hover:text-accent transition-colors duration-300">
              {faq.question}
            </h3>
            <p className="md:col-span-6 text-sm text-white/40 leading-relaxed">{faq.answer}</p>
          </motion.div>
        ))}
        <div className="border-t border-white/8" />
      </div>
    </div>
  </section>
);
