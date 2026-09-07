"use client";

import { motion } from "motion/react";
import { ABOUT_MANIFESTO } from "../sunita-content";

const EASE = [0.16, 1, 0.3, 1] as const;

export const AboutManifesto = () => {
  const words = ABOUT_MANIFESTO.body.split(" ");

  return (
    <section className="py-24 sm:py-32 max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
      <motion.span
        className="text-[11px] uppercase tracking-[0.2em] text-white/25 font-[570] mb-12 block"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px 0px" }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        {ABOUT_MANIFESTO.eyebrow}
      </motion.span>

      <p className="text-[clamp(1.5rem,3vw,2.8rem)] font-[570] leading-[1.3] max-w-5xl">
        {words.map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            className="inline-block mr-[0.28em] text-white/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px 0px" }}
            transition={{ duration: 0.5, delay: i * 0.022, ease: EASE }}
          >
            {word}
          </motion.span>
        ))}
      </p>
    </section>
  );
};
