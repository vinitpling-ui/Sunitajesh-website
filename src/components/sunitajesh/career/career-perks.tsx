"use client";

import { motion } from "motion/react";
import { CAREER_PERKS, CAREER_PERKS_INTRO } from "../sunita-content";

const EASE = [0.16, 1, 0.3, 1] as const;

export const CareerPerks = () => (
  <section className="py-20 max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
    <motion.span
      className="text-[11px] uppercase tracking-[0.2em] text-white/25 font-[570] mb-10 block"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px 0px" }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      {CAREER_PERKS_INTRO.eyebrow}
    </motion.span>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/6">
      {CAREER_PERKS.map((perk, i) => (
        <motion.div
          key={perk.title}
          className="group bg-darkgrey py-8 sm:p-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px 0px" }}
          transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: EASE }}
        >
          <span className="block w-1.5 h-1.5 rounded-full bg-accent mb-6 group-hover:scale-150 transition-transform duration-500" />
          <h3 className="text-base font-[670] text-white mb-2.5">{perk.title}</h3>
          <p className="text-sm text-white/40 leading-relaxed">{perk.body}</p>
        </motion.div>
      ))}
    </div>
  </section>
);
