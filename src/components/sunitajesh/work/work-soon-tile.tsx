"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { WORK_INTRO } from "../sunita-content";

const EASE = [0.22, 1, 0.36, 1] as const;

/** A spotlight follows the cursor across the tile; CSS vars keep it off React. */
export const WorkSoonTile = () => {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef(0);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || frame.current) return;
    frame.current = requestAnimationFrame(() => {
      frame.current = 0;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--sx", `${e.clientX - r.left}px`);
      el.style.setProperty("--sy", `${e.clientY - r.top}px`);
    });
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      className="relative aspect-[4/3] overflow-hidden border border-white/[0.05] cursor-crosshair"
      style={{ background: "#080808" }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px 0px" }}
      transition={{ duration: 0.8, ease: EASE }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(650px circle at var(--sx, 50%) var(--sy, 50%), rgba(76,125,240,0.10), transparent 70%)",
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span
          className="text-[clamp(4rem,11vw,11rem)] font-[900] tracking-[-0.05em] text-white leading-none"
          style={{ opacity: 0.022 }}
        >
          SOON
        </span>
      </div>

      {WORK_INTRO.soonTags.map((tag, i) => (
        <motion.div
          key={tag.label}
          className="absolute text-[10px] sm:text-[11px] uppercase tracking-[0.1em] text-white/25 font-[570] border border-white/[0.07] rounded-full px-3 py-1.5 backdrop-blur-sm"
          style={{ left: tag.left, top: tag.top }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 + i * 0.07, ease: EASE }}
        >
          {tag.label}
        </motion.div>
      ))}

      <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 flex items-center gap-2.5 z-10">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        <span className="text-[11px] uppercase tracking-[0.14em] text-white/30 font-[570]">
          {WORK_INTRO.soonLabel}
        </span>
      </div>
    </motion.div>
  );
};
