"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { WorkProject } from "../sunita-content";
import { srcSetFor } from "../shared/image-srcset";

const EASE = [0.22, 1, 0.36, 1] as const;
const START = 1.65;

export const ProjectHero = ({
  project,
  index,
  total,
}: {
  project: WorkProject;
  index: number;
  total: number;
}) => (
  <>
    {/* back to the index, pinned clear of the nav */}
    <Link
      href="/portfolio"
      className="group fixed top-26 left-4 sm:left-8 lg:left-12 z-50 flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-white/50 hover:text-white font-[570] transition-colors duration-300"
    >
      <span className="w-7 h-7 rounded-full border border-white/15 flex items-center justify-center group-hover:border-white/40 transition-colors duration-300">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M19 12H5" />
          <path d="m12 19-7-7 7-7" />
        </svg>
      </span>
      <span className="hidden sm:inline">Portfolio</span>
    </Link>

    <section className="relative w-full h-[100svh] overflow-hidden">
      <img
        src={project.cover}
        srcSet={srcSetFor(project.cover)}
        alt={project.title}
        className="absolute inset-0 h-full w-full object-cover scale-[1.04]"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-8 lg:px-12 pb-24 sm:pb-20">
        <div className="max-w-[1600px] mx-auto">
          <motion.p
            className="text-xs uppercase tracking-[0.14em] text-white/40 font-[570] mb-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: START, ease: EASE }}
          >
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </motion.p>
          <motion.h1
            className="text-[clamp(3rem,8vw,7rem)] font-[790] tracking-[-0.03em] leading-none text-white mb-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: START + 0.08, ease: EASE }}
          >
            {project.title}
          </motion.h1>
          <motion.p
            className="text-[clamp(0.95rem,2vw,1.25rem)] text-white/50 font-[430] max-w-2xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: START + 0.18, ease: EASE }}
          >
            {project.subtitle}
          </motion.p>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/40"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: START + 0.4, ease: EASE }}
      >
        <span className="text-[10px] uppercase tracking-[0.16em] font-[570]">Scroll</span>
        <motion.svg
          width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M12 5v14" /><path d="m19 12-7 7-7-7" />
        </motion.svg>
      </motion.div>
    </section>
  </>
);
