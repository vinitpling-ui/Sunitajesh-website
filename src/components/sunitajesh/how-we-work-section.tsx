"use client";

import { motion } from "motion/react";
import { PROCESS_INTRO, PROCESS_STEPS } from "./sunita-content";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const HowWeWorkSection = () => (
  <section className="bg-darkgrey py-16 sm:py-20 md:py-24 px-4 sm:px-8 lg:px-12">
    <div className="max-w-[1600px] mx-auto">
      <div className="flex items-center justify-between border-b border-white/8 pb-6 mb-12 sm:mb-16">
        <span className="text-xs uppercase tracking-[0.12em] text-white/30 font-[570]">
          {PROCESS_INTRO.eyebrow}
        </span>
      </div>

      <motion.h2
        className="text-[clamp(1.75rem,4vw,3.5rem)] font-[790] text-white leading-[1.05] tracking-[-0.02em] max-w-4xl mb-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px 0px" }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        {PROCESS_INTRO.heading}
      </motion.h2>

      <p className="text-base text-white/50 leading-relaxed max-w-xl mb-16 sm:mb-20">
        {PROCESS_INTRO.body}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
        {PROCESS_STEPS.map((step, i) => (
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

            <h3 className="text-[clamp(1.25rem,1.8vw,1.5rem)] font-[570] text-white mt-6 mb-5">
              {step.title}
            </h3>

            <ul className="flex flex-col gap-3">
              {step.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm text-white/40 leading-relaxed">
                  <span
                    className="mt-[7px] w-1 h-1 rounded-full bg-accent/50 shrink-0"
                    aria-hidden="true"
                  />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
