"use client";

import { motion } from "motion/react";
import { ABOUT_US, STATS } from "./sunita-content";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const AboutUsSection = () => (
  <section className="bg-darkgrey py-16 sm:py-20 md:py-24 px-4 sm:px-8 lg:px-12">
    <div className="max-w-[1600px] mx-auto">
      <div className="flex items-center justify-between border-b border-white/8 pb-6 mb-12 sm:mb-16">
        <span className="text-xs uppercase tracking-[0.12em] text-white/30 font-[570]">
          {ABOUT_US.eyebrow}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
        <motion.h2
          className="md:col-span-7 text-[clamp(1.75rem,4vw,3.5rem)] font-[790] text-white leading-[1.05] tracking-[-0.02em]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px 0px" }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          {ABOUT_US.heading}
        </motion.h2>

        <motion.div
          className="md:col-span-5 flex flex-col gap-10 md:pt-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px 0px" }}
          transition={{ duration: 0.8, delay: 0.12, ease: EASE }}
        >
          <p className="text-base text-white/50 leading-relaxed">{ABOUT_US.body}</p>

          <dl className="flex flex-col">
            {ABOUT_US.facts.map((fact) => (
              <div
                key={fact.label}
                className="border-t border-white/8 py-4 flex items-baseline justify-between gap-6"
              >
                <dt className="text-xs uppercase tracking-[0.14em] text-white/30 font-[570] shrink-0">
                  {fact.label}
                </dt>
                <dd className="text-sm text-white/60 text-right">{fact.value}</dd>
              </div>
            ))}
            <div className="border-t border-white/8" />
          </dl>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 mt-16 sm:mt-20 md:mt-24">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="border-t border-white/8 pt-8 pb-10 sm:pr-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px 0px" }}
            transition={{ duration: 0.7, delay: i * 0.12, ease: EASE }}
          >
            <span className="block text-[clamp(3.5rem,7vw,6rem)] font-black text-accent leading-none tracking-[-0.03em]">
              {/* inline-block + leading-normal reproduces the 1.5x line box of the original band */}
              <span className="tabular-nums inline-block leading-normal">{stat.value}</span>
            </span>
            <h3 className="text-base font-[570] text-white mt-4 mb-2">{stat.label}</h3>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">{stat.body}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
