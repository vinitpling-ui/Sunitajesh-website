"use client";

import { motion } from "motion/react";
import type { ProjectStat } from "../sunita-content";

const EASE = [0.16, 1, 0.3, 1] as const;

export const ProjectOverview = ({
  overview,
  stats,
}: {
  overview: string;
  stats: readonly ProjectStat[];
}) => (
  <section className="py-20 sm:py-28 lg:py-36">
    <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <div className="flex flex-col gap-6">
          <motion.p
            className="text-xs uppercase tracking-[0.14em] text-white/30 font-[570]"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px 0px" }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            Overview
          </motion.p>
          <motion.p
            className="text-[clamp(1.1rem,2vw,1.5rem)] font-[430] text-white/75 leading-[1.7]"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px 0px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          >
            {overview}
          </motion.p>
        </div>

        <div className="flex flex-col gap-12 lg:justify-center">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px 0px" }}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.12, ease: EASE }}
            >
              <span className="block text-[clamp(2.5rem,5vw,4rem)] font-[790] text-white tracking-[-0.03em] leading-none">
                {s.value}
              </span>
              <p className="text-sm text-white/35 mt-3 leading-snug max-w-xs">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
