"use client";

import { motion } from "motion/react";
import { CONTACT_HERO } from "../sunita-content";

const EASE = [0.22, 1, 0.36, 1] as const;
const START = 1.65;

const Word = ({ word, i, accent }: { word: string; i: number; accent?: boolean }) => (
  <motion.span
    className={`inline-block mr-[0.22em] ${accent ? "text-accent" : ""}`}
    initial={{ clipPath: "inset(0 0 100% 0)", y: "100%" }}
    animate={{ clipPath: "inset(0 0 0% 0)", y: "0%" }}
    transition={{ duration: 0.9, delay: START + i * 0.08, ease: EASE }}
  >
    {word}
  </motion.span>
);

export const ContactHero = () => (
  <section className="min-h-[78vh] relative flex flex-col overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
      <div
        className="contact-glow"
        style={{
          position: "absolute",
          top: "-18%",
          right: "-6%",
          width: 700,
          height: 620,
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(76,125,240,0.26) 0%, rgba(32,62,150,0.10) 48%, transparent 72%)",
          filter: "blur(78px)",
          borderRadius: "50%",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, transparent 45%, rgba(14,14,14,0.6) 82%, rgba(14,14,14,0.92) 100%)",
        }}
      />
    </div>

    <div className="relative flex-1 flex flex-col justify-center max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 w-full pt-32 sm:pt-36 pb-16">
      <motion.span
        className="text-[11px] uppercase tracking-[0.2em] text-white/30 font-[570] mb-8 block"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: START - 0.2, ease: EASE }}
      >
        {CONTACT_HERO.eyebrow}
      </motion.span>

      <h1 className="text-[clamp(3rem,8vw,7.5rem)] font-[790] leading-none tracking-[-0.03em] mb-14 sm:mb-16">
        <span className="block overflow-hidden">
          {CONTACT_HERO.titleLine1.map((w, i) => (
            <Word key={w} word={w} i={i} />
          ))}
        </span>
        <span className="block overflow-hidden">
          {CONTACT_HERO.titleLine2.map((w, i) => (
            <Word key={w} word={w} i={CONTACT_HERO.titleLine1.length + i} accent />
          ))}
        </span>
      </h1>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start border-t border-white/6 pt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: START + 0.45, ease: EASE }}
      >
        <p className="text-[clamp(1rem,1.4vw,1.15rem)] text-white/55 leading-[1.7] font-[430] max-w-lg">
          {CONTACT_HERO.body}
        </p>
        <div className="flex flex-wrap gap-3 md:justify-end">
          {CONTACT_HERO.chips.map((chip) => (
            <div
              key={chip}
              className="flex items-center gap-2.5 border border-white/6 rounded-full px-5 py-2.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              <span className="text-xs text-white/50 font-[570]">{chip}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
