"use client";

import { motion } from "motion/react";
import { ABOUT_HERO } from "../sunita-content";

const EASE = [0.22, 1, 0.36, 1] as const;
const START = 1.65; // clears the preloader, same beat as the home hero

/** Each word rises out of its own clip mask, one after the next. */
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

export const AboutHero = () => (
  <section className="min-h-screen relative flex flex-col overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "160px 160px",
        }}
      />
      <div
        className="about-glow"
        style={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: 600,
          height: 600,
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(76,125,240,0.30) 0%, rgba(32,62,150,0.12) 45%, transparent 70%)",
          filter: "blur(70px)",
          borderRadius: "50%",
        }}
      />
      <div
        className="about-scrim"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, transparent 40%, rgba(14,14,14,0.55) 78%, rgba(14,14,14,0.9) 100%)",
        }}
      />
    </div>

    <div className="relative flex-1 flex flex-col justify-center max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 w-full pt-28 sm:pt-32">
      <motion.span
        className="text-[11px] uppercase tracking-[0.2em] text-white/30 font-[570] mb-8 block"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: START - 0.2, ease: EASE }}
      >
        {ABOUT_HERO.eyebrow}
      </motion.span>

      <h1 className="text-[clamp(3rem,8vw,8rem)] font-[790] leading-none tracking-[-0.03em] mb-16 sm:mb-20">
        <span className="block overflow-hidden">
          {ABOUT_HERO.titleLine1.map((w, i) => (
            <Word key={w} word={w} i={i} />
          ))}
        </span>
        <span className="block overflow-hidden">
          {ABOUT_HERO.titleLine2.map((w, i) => (
            <Word
              key={w}
              word={w}
              i={ABOUT_HERO.titleLine1.length + i}
              accent={i === ABOUT_HERO.titleLine2.length - 1}
            />
          ))}
        </span>
      </h1>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start border-t border-white/6 pt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: START + 0.55, ease: EASE }}
      >
        <p className="text-[clamp(1rem,1.4vw,1.15rem)] text-white/55 leading-[1.7] font-[430] max-w-lg">
          {ABOUT_HERO.body}
        </p>
        <div className="flex flex-wrap gap-3">
          {ABOUT_HERO.chips.map((chip) => (
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
