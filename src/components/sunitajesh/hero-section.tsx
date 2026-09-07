"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRightIcon } from "./shared/icons";
import { usePointerParallax } from "./shared/use-pointer-parallax";
import { VideoStage } from "./video/video-stage";
import { HERO } from "./sunita-content";

const EASE = [0.22, 1, 0.36, 1] as const;
const START_DELAY = 1.65; // overlaps the preloader's exit sweep

/* Two encodes of the same clip: the phone one is a third of the weight, and the
   source frame has a lot of empty bed around the subject, hence the crop-in.
   Both are a 12-second seamless loop cut from a 49-second source — the shorter
   the clip, the more bits per frame it can carry at the same download. */
const CLIP = {
  mp4: "/sunitajesh/video/framer-cube.mp4",
  mp4Small: "/sunitajesh/video/framer-cube-1080.mp4",
  poster: "/sunitajesh/video/framer-cube-poster.jpg",
} as const;

export const HeroSection = () => {
  const parallaxRef = usePointerParallax<HTMLElement>();

  return (
    <section
      ref={parallaxRef}
      className="min-h-screen relative w-full bg-darkgrey flex flex-col overflow-hidden"
    >
    {/* layered ambient gradient blobs */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute hero-glow hero-glow-near" aria-hidden="true">
        <div
          className="glow-a"
          style={{
            position: "absolute",
            width: 820,
            height: 620,
            top: -140,
            left: "calc(50% - 80px)",
            background:
              "radial-gradient(ellipse at 42% 42%, rgba(60,120,240,0.62) 0%, rgba(32,62,150,0.38) 32%, transparent 65%)",
            filter: "blur(64px)",
            borderRadius: "50%",
          }}
        />
        <div
          className="glow-b"
          style={{
            position: "absolute",
            width: 700,
            height: 560,
            top: -100,
            left: "calc(22% - 120px)",
            background:
              "radial-gradient(ellipse at 55% 48%, rgba(92,64,200,0.58) 0%, rgba(52,28,132,0.26) 42%, transparent 68%)",
            filter: "blur(78px)",
            borderRadius: "50%",
          }}
        />
      </div>
      <div className="absolute hero-glow hero-glow-far" aria-hidden="true">
        <div
          className="glow-c"
          style={{
            position: "absolute",
            width: 480,
            height: 400,
            top: 20,
            left: "calc(68% - 60px)",
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(76,125,240,0.32) 0%, rgba(32,62,150,0.12) 48%, transparent 70%)",
            filter: "blur(56px)",
            borderRadius: "50%",
          }}
        />
        <div
          className="glow-d"
          style={{
            position: "absolute",
            width: 380,
            height: 300,
            top: 100,
            left: "calc(28% - 20px)",
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(20,150,200,0.22) 0%, transparent 65%)",
            filter: "blur(60px)",
            borderRadius: "50%",
          }}
        />
      </div>
      <div
        className="hero-scrim-fade"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, transparent 25%, rgba(18,18,18,0.50) 55%, rgba(18,18,18,0.95) 100%)",
        }}
      />
      <div
        className="hero-scrim-vignette"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 52% 38%, transparent 45%, rgba(18,18,18,0.65) 100%)",
        }}
      />
    </div>

    <div className="relative flex-1 flex flex-col justify-center pb-12 sm:pb-16 px-4 sm:px-8 lg:px-12 max-w-[1600px] mx-auto w-full pt-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
        {/* ── left: the copy ── */}
        <div className="flex flex-col">
          <motion.h1
            className="text-[clamp(2.5rem,5vw,4.5rem)] font-[790] text-white leading-none tracking-[-0.02em]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: START_DELAY, ease: EASE }}
          >
            {HERO.title}
            <br />
            <span className="text-accent">{HERO.titleAccent}</span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg text-white/60 leading-relaxed max-w-md mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: START_DELAY + 0.15, ease: EASE }}
          >
            {HERO.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: START_DELAY + 0.3, ease: EASE }}
            className="w-fit"
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 mt-8 py-2.5 -my-2.5 text-sm font-[570] text-white group cursor-pointer"
            >
              <span className="border-b border-white/30 group-hover:border-white transition-[border-color] duration-300 pb-0.5">
                {HERO.cta}
              </span>
              <ArrowUpRightIcon className="transition-[transform] duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>

        {/* ── right: the looping clip ── */}
        <motion.div
          className="relative w-full h-[360px] sm:h-[460px] md:h-[560px] lg:h-[640px]"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: START_DELAY + 0.2, ease: EASE }}
        >
          <VideoStage sources={CLIP} scale={1.35} lift="-4%" />
        </motion.div>
      </div>
    </div>

    <motion.div
      className="hidden sm:block relative border-t border-white/8 px-4 sm:px-8 lg:px-12 py-5 max-w-[1600px] mx-auto w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: START_DELAY + 0.45, ease: EASE }}
    >
      <div className="flex flex-wrap gap-x-8 gap-y-2 text-xs uppercase tracking-[0.12em] text-white/30 font-[570]">
        <span>{HERO.strip}</span>
      </div>
    </motion.div>
  </section>
  );
};
