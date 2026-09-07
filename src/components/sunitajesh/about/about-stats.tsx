"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { ABOUT_STATS_INTRO, STATS } from "../sunita-content";

const EASE = [0.16, 1, 0.3, 1] as const;

/** Counts the numeric part up once the cell scrolls in; prefix/suffix stay put. */
const StatValue = ({ value }: { value: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });
  const target = Number(value.match(/\d+/)?.[0] ?? 0);
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView || !target) return;
    const DURATION = 1400;
    let raf = 0;
    let started = 0;
    const tick = (t: number) => {
      if (!started) started = t;
      const p = Math.min(1, (t - started) / DURATION);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);

  return (
    <span
      ref={ref}
      className="block text-[clamp(3rem,6vw,5rem)] font-[790] text-white tracking-[-0.03em] leading-none"
    >
      {target ? value.replace(String(target), String(n)) : value}
    </span>
  );
};

export const AboutStats = () => (
  <section className="py-20 border-t border-white/8 max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
    <motion.span
      className="text-[11px] uppercase tracking-[0.2em] text-white/25 font-[570] mb-10 block"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px 0px" }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      {ABOUT_STATS_INTRO.eyebrow}
    </motion.span>

    <div className="grid grid-cols-1 sm:grid-cols-3">
      {STATS.map((stat, i) => (
        <motion.div
          key={stat.label}
          className="py-8 sm:px-8 sm:first:pl-0 border-b sm:border-b-0 sm:border-r last:border-r-0 border-white/6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px 0px" }}
          transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
        >
          <StatValue value={stat.value} />
          <p className="text-sm text-white/35 mt-3 leading-snug">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  </section>
);
