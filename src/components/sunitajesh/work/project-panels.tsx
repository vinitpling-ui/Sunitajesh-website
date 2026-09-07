"use client";

import { motion } from "motion/react";
import type { ProjectPanel } from "../sunita-content";

const EASE = [0.16, 1, 0.3, 1] as const;

export const ProjectPanels = ({ panels }: { panels: readonly ProjectPanel[] }) => (
  <section className="py-20 sm:py-28 lg:py-36">
    <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
      {/* gap-px over a hairline background paints the dividers between panels */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/8">
        {panels.map((panel, i) => (
          <motion.div
            key={panel.eyebrow}
            className="bg-darkgrey py-10 sm:p-14 lg:p-16 flex flex-col gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px 0px" }}
            transition={{ duration: 0.8, delay: i * 0.12, ease: EASE }}
          >
            <span className="text-xs uppercase tracking-[0.14em] text-accent/70 font-[570]">
              {panel.eyebrow}
            </span>
            <h2 className="text-[clamp(1.5rem,2.6vw,2.2rem)] font-[790] text-white leading-[1.2] tracking-[-0.02em]">
              {panel.title}
            </h2>
            <p className="text-base text-white/45 leading-[1.75]">{panel.body}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
