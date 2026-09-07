"use client";

import { motion } from "motion/react";
import type { ProjectMeta } from "../sunita-content";

const EASE = [0.16, 1, 0.3, 1] as const;

export const ProjectMetaStrip = ({ meta }: { meta: readonly ProjectMeta[] }) => (
  <section className="border-t border-b border-white/8 py-8">
    <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-0">
        {meta.map((m, i) => (
          <motion.div
            key={m.label}
            className={`flex flex-col gap-2 py-2 sm:py-0 ${
              i > 0 ? "sm:border-l border-white/8 sm:pl-8 lg:pl-12" : ""
            }`}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px 0px" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
          >
            <span className="text-[10px] uppercase tracking-[0.16em] text-white/30 font-[570]">
              {m.label}
            </span>
            <span className="text-[13px] text-white/70 font-[430] leading-snug">{m.value}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
