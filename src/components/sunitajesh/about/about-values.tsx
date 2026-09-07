"use client";

import { motion } from "motion/react";
import { ABOUT_VALUES, ABOUT_VALUES_INTRO } from "../sunita-content";

const EASE = [0.16, 1, 0.3, 1] as const;

export const AboutValues = () => (
  <section className="py-20 max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
    <motion.span
      className="text-[11px] uppercase tracking-[0.2em] text-white/25 font-[570] mb-10 block"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px 0px" }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      {ABOUT_VALUES_INTRO.eyebrow}
    </motion.span>

    <div className="grid grid-cols-1 sm:grid-cols-2">
      {ABOUT_VALUES.map((value, i) => (
        <motion.div
          key={value.numeral}
          className="group relative overflow-hidden border border-white/6 p-8 sm:p-10 cursor-default"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px 0px" }}
          transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
        >
          {/* glow rises from the bottom-left corner on hover */}
          <div
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background:
                "radial-gradient(ellipse at 0% 100%, rgba(76,125,240,0.10) 0%, transparent 60%)",
            }}
          />
          {/* accent rail draws down the left edge */}
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-out" />

          <span className="text-[120px] font-[790] text-white/4 leading-none absolute top-4 right-6 select-none pointer-events-none">
            {value.numeral}
          </span>

          <div className="relative z-10">
            <span className="text-[11px] uppercase tracking-widest text-accent/70 font-[570]">
              {value.numeral}
            </span>
            <h3 className="text-xl font-[790] text-white mt-3 mb-4">{value.title}</h3>
            <p className="text-sm text-white/40 leading-relaxed">{value.body}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);
