"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { SERVICE_CARDS, SERVICES_INTRO, type ServiceCard } from "./sunita-content";
import { ArrowUpRightIcon } from "./shared/icons";

/**
 * Desktop: the row scrolls horizontally while the section is pinned.
 * Section height = viewport + horizontal travel, so the vertical scroll distance
 * exactly equals the distance the row has to move — the row finishes precisely as
 * the section unpins, with no dead scroll at either end.
 */
const ServiceCardPanel = ({ card }: { card: ServiceCard }) => (
  <div className="h-screen min-w-[420px] max-w-[420px] relative flex flex-col shrink-0 overflow-hidden cursor-pointer group border-r border-white/[0.06]">
    <div className="absolute inset-0 pointer-events-none bg-accent/0 group-hover:bg-accent/[0.03] transition-colors duration-500" />

    {/* left progress rail */}
    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-out" />

    <div className="flex items-start justify-between pt-10 px-10">
      <span className="text-[140px] leading-[0.85] font-thin tabular-nums select-none text-white/[0.07] group-hover:text-white/[0.12] transition-colors duration-500">
        {card.number}
      </span>
      <span className="mt-4 text-xs sm:text-[11px] uppercase tracking-[0.14em] text-accent font-[570] border border-accent/30 rounded-full px-3 py-1">
        {card.tag}
      </span>
    </div>

    <div className="absolute bottom-0 left-0 right-0 px-10 pb-12">
      <div className="relative h-px w-full bg-white/8 mb-8 overflow-hidden">
        <div className="absolute inset-y-0 left-0 bg-accent/60 w-0 group-hover:w-full transition-[width] duration-700 ease-out" />
      </div>

      <h3 className="text-[44px] leading-[50px] font-[570]">
        {card.title[0]}
        <br />
        {card.title[1]}
      </h3>

      {/*
        The bottom block is anchored to the card's base, so any variation in the
        description's line count pushes the hairline rule up or down. line-clamp-3
        caps the maximum; this min-height pins the minimum, so every card reserves
        exactly three lines (14px x 1.625 x 3) and all six rules land on one line.
      */}
      <p className="text-sm text-white/40 leading-relaxed mt-5 line-clamp-3 min-h-[4.2656rem]">
        {card.description}
      </p>

      <div className="h-10 flex items-end">
        <div className="inline-flex items-center gap-2 text-[13px] font-[570] text-accent opacity-0 translate-y-2.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 ease-out">
          <span>Explore</span>
          <ArrowUpRightIcon width={13} height={13} />
        </div>
      </div>
    </div>
  </div>
);

export const ServicesPanels = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const [travel, setTravel] = useState(0);

  useEffect(() => {
    const measure = () => {
      const row = rowRef.current;
      if (!row) return;
      setTravel(Math.max(0, row.scrollWidth - window.innerWidth));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -travel]);

  return (
    <div
      ref={sectionRef}
      className="hidden md:block relative w-full bg-darkgrey"
      style={{ height: `calc(100vh + ${travel}px)` }}
    >
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        <motion.div
          ref={rowRef}
          className="flex items-stretch justify-start h-screen"
          style={{ x, willChange: "transform", backfaceVisibility: "hidden" }}
        >
          {/* intro panel */}
          <div className="min-w-[90vw] h-screen py-[120px] pr-4 sm:pr-8 lg:pr-12 pl-4 sm:pl-8 lg:pl-12 flex flex-col shrink-0 relative">
            <span className="text-xs uppercase tracking-[0.14em] text-white/30 font-[570] mb-8 block">
              {SERVICES_INTRO.eyebrow}
            </span>
            <h2 className="text-[clamp(2rem,3.2vw,3.5rem)] font-[570] max-w-[560px] leading-[1.1]">
              {SERVICES_INTRO.heading}
            </h2>
            <div className="flex items-center gap-3 mt-10">
              <div className="flex gap-1.5">
                {SERVICE_CARDS.map((c) => (
                  <div key={c.number} className="w-1 h-1 rounded-full bg-white/20" />
                ))}
              </div>
              <span className="text-xs text-white/30 tracking-widest uppercase font-[570]">
                {SERVICES_INTRO.scrollLabel}
              </span>
            </div>
            <p className="max-w-[440px] text-base text-white/50 leading-relaxed absolute bottom-[120px]">
              {SERVICES_INTRO.body}
            </p>
          </div>

          {SERVICE_CARDS.map((card) => (
            <ServiceCardPanel key={card.number} card={card} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

/** Mobile: same content, stacked, no pinning. */
export const ServicesPanelsMobile = () => (
  <section className="md:hidden py-16 sm:py-20 px-4 sm:px-8 lg:px-12 bg-darkgrey">
    <span className="text-xs uppercase tracking-[0.14em] text-white/30 font-[570] mb-8 block">
      {SERVICES_INTRO.eyebrow}
    </span>
    <h2 className="text-[clamp(2rem,7vw,3.5rem)] font-[570] leading-[1.1] mb-6">
      {SERVICES_INTRO.heading}
    </h2>
    <p className="text-base text-white/50 leading-relaxed mb-12">{SERVICES_INTRO.body}</p>

    <div className="flex flex-col gap-px bg-white/[0.06]">
      {SERVICE_CARDS.map((card) => (
        <div key={card.number} className="bg-darkgrey py-10">
          <div className="flex items-start justify-between">
            <span className="text-[96px] leading-[0.85] font-thin tabular-nums select-none text-white/[0.07]">
              {card.number}
            </span>
            <span className="mt-4 text-xs sm:text-[11px] uppercase tracking-[0.14em] text-accent font-[570] border border-accent/30 rounded-full px-3 py-1">
              {card.tag}
            </span>
          </div>
          <h3 className="text-[32px] leading-[38px] font-[570] mt-8">
            {card.title[0]} {card.title[1]}
          </h3>
          <p className="text-sm text-white/40 leading-relaxed mt-4">{card.description}</p>
        </div>
      ))}
    </div>
  </section>
);
