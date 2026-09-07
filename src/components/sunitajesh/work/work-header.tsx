"use client";

import { motion } from "motion/react";
import { WORK_INTRO, WORK_PROJECTS } from "../sunita-content";

const EASE = [0.22, 1, 0.36, 1] as const;
const START = 1.65; // clears the preloader

const ALL_TAGS = [...new Set(WORK_PROJECTS.flatMap((p) => p.tags))];
const PROJECT_COUNT = WORK_PROJECTS.length;

export const WorkHeader = () => (
  <div className="mb-12 sm:mb-16">
    <motion.p
      className="text-xs uppercase tracking-[0.14em] text-white/30 font-[570] mb-4"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: START, ease: EASE }}
    >
      {WORK_INTRO.eyebrow}
    </motion.p>

    <motion.h1
      className="text-[clamp(3rem,8vw,8rem)] font-[790] tracking-[-0.03em] leading-none text-white mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: START + 0.08, ease: EASE }}
    >
      {WORK_INTRO.heading}
    </motion.h1>

    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pb-8 border-b border-white/8">
      <motion.span
        className="text-[13px] font-[570] text-white/40 tracking-[0.08em]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: START + 0.2, ease: EASE }}
      >
        {String(PROJECT_COUNT).padStart(2, "0")} Projects
      </motion.span>
      <span className="w-px h-3 bg-white/15" />
      {ALL_TAGS.map((tag, i) => (
        <motion.span
          key={tag}
          className="text-[11px] uppercase tracking-[0.12em] text-white/25 font-[570]"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: START + 0.26 + i * 0.05, ease: EASE }}
        >
          {tag}
        </motion.span>
      ))}
    </div>
  </div>
);
