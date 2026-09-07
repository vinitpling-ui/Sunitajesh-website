"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { PORTFOLIO_INTRO } from "./sunita-content";
import type { MotionValue } from "motion/react";
import { srcSetFor } from "./shared/image-srcset";

type GalleryImage = {
  readonly src: string;
  readonly alt: string;
};

type GalleryRow = {
  readonly id: string;
  readonly cardClassName: string;
  readonly sizes: string;
  /** Inline transform the live site ships in SSR markup — also the scroll start value. */
  readonly from: string;
  readonly to: string;
  readonly images: readonly GalleryImage[];
};

const IMAGE_BASE = "/sunitajesh/images";

const ROW_ONE_CARD =
  "relative shrink-0 w-[300px] sm:w-[420px] lg:w-[500px] h-[190px] sm:h-[255px] lg:h-[310px] overflow-hidden rounded-xl";
const ROW_TWO_CARD =
  "relative shrink-0 w-[280px] sm:w-[390px] lg:w-[465px] h-[190px] sm:h-[255px] lg:h-[310px] overflow-hidden rounded-xl";
const ROW_THREE_CARD =
  "relative shrink-0 w-[290px] sm:w-[405px] lg:w-[480px] h-[190px] sm:h-[255px] lg:h-[310px] overflow-hidden rounded-xl";

const IMG_STYLE = {
  position: "absolute",
  height: "100%",
  width: "100%",
  left: 0,
  top: 0,
  right: 0,
  bottom: 0,
  color: "transparent",
} as const;

/* Three projects, cycled — and each row starts on a different one so the columns
   do not line up. They are the same files the featured cards already load, so the
   gallery costs no extra requests. */
const ROWS: readonly GalleryRow[] = [
  {
    id: "row-1",
    cardClassName: ROW_ONE_CARD,
    sizes: "(min-width: 1024px) 500px, (min-width: 640px) 420px, 300px",
    from: "2%",
    to: "-8%",
    images: [
      { src: `${IMAGE_BASE}/work-vinit-cover.webp`, alt: "Vinit Chaudhary portfolio" },
      { src: `${IMAGE_BASE}/work-recnet-cover.webp`, alt: "therecnet activity discovery" },
      { src: `${IMAGE_BASE}/work-gsc-cover.webp`, alt: "Grover S & Company website" },
      { src: `${IMAGE_BASE}/work-vinit-cover.webp`, alt: "Vinit Chaudhary portfolio" },
      { src: `${IMAGE_BASE}/work-recnet-cover.webp`, alt: "therecnet activity discovery" },
      { src: `${IMAGE_BASE}/work-pling-showcase.webp`, alt: "Pling sports platform" },
      { src: `${IMAGE_BASE}/work-vinit-cover.webp`, alt: "Vinit Chaudhary portfolio" },
    ],
  },
  {
    id: "row-2",
    cardClassName: ROW_TWO_CARD,
    sizes: "(min-width: 1024px) 465px, (min-width: 640px) 390px, 280px",
    from: "-4%",
    to: "6%",
    images: [
      { src: `${IMAGE_BASE}/work-recnet-cover.webp`, alt: "therecnet activity discovery" },
      { src: `${IMAGE_BASE}/work-gsc-cover.webp`, alt: "Grover S & Company website" },
      { src: `${IMAGE_BASE}/work-vinit-cover.webp`, alt: "Vinit Chaudhary portfolio" },
      { src: `${IMAGE_BASE}/work-recnet-cover.webp`, alt: "therecnet activity discovery" },
      { src: `${IMAGE_BASE}/work-pling-showcase.webp`, alt: "Pling sports platform" },
      { src: `${IMAGE_BASE}/work-vinit-cover.webp`, alt: "Vinit Chaudhary portfolio" },
    ],
  },
  {
    id: "row-3",
    cardClassName: ROW_THREE_CARD,
    sizes: "(min-width: 1024px) 480px, (min-width: 640px) 405px, 290px",
    from: "4%",
    to: "-6%",
    images: [
      { src: `${IMAGE_BASE}/work-gsc-cover.webp`, alt: "Grover S & Company website" },
      { src: `${IMAGE_BASE}/work-vinit-cover.webp`, alt: "Vinit Chaudhary portfolio" },
      { src: `${IMAGE_BASE}/work-recnet-cover.webp`, alt: "therecnet activity discovery" },
      { src: `${IMAGE_BASE}/work-pling-showcase.webp`, alt: "Pling sports platform" },
      { src: `${IMAGE_BASE}/work-vinit-cover.webp`, alt: "Vinit Chaudhary portfolio" },
      { src: `${IMAGE_BASE}/work-recnet-cover.webp`, alt: "therecnet activity discovery" },
    ],
  },
];

const MASK_STYLE = {
  top: "-10%",
  left: "-10%",
  width: "80%",
  height: "80%",
  background:
    "radial-gradient(ellipse at 15% 15%, rgba(14,14,14,1) 0%, rgba(14,14,14,1) 30%, rgba(14,14,14,0.96) 45%, rgba(14,14,14,0.65) 60%, rgba(14,14,14,0.20) 75%, transparent 88%)",
  filter: "blur(40px)",
} as const;

type ParallaxRowProps = {
  readonly row: GalleryRow;
  readonly progress: MotionValue<number>;
};

const ParallaxRow = ({ row, progress }: ParallaxRowProps) => {
  const x = useTransform(progress, [0, 1], [row.from, row.to]);

  return (
    <motion.div className="parallax-row flex gap-3 sm:gap-4" style={{ x }}>
      {row.images.map((image, index) => (
        <div key={`${row.id}-${index}`} className={row.cardClassName}>
          <img
            alt={image.alt}
            loading="lazy"
            decoding="async"
            className="object-cover"
            style={IMG_STYLE}
            sizes={row.sizes}
            src={image.src}
            srcSet={srcSetFor(image.src)}
          />
        </div>
      ))}
    </motion.div>
  );
};

export const ProjectGallery = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={sectionRef}
      className="relative bg-darkgrey overflow-hidden py-8 sm:py-10"
    >
      <div
        className="absolute top-1/3 left-0 w-px h-px pointer-events-none"
        aria-hidden="true"
      />

      <div className="block sm:hidden px-4 mb-8">
        <span className="text-xs uppercase tracking-[0.14em] text-white/30 font-[570] block mb-4">
          {PORTFOLIO_INTRO.eyebrow}
        </span>
        <h2 className="text-[clamp(2rem,8vw,3rem)] font-[790] text-white leading-none tracking-[-0.03em]">
          Featured
          <br />
          <span className="text-accent">Client Success.</span>
        </h2>
        <p className="text-sm text-white/50 leading-[1.7] mt-4">
          {PORTFOLIO_INTRO.short}
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:gap-4">
        {ROWS.map((row) => (
          <ParallaxRow key={row.id} row={row} progress={scrollYProgress} />
        ))}
      </div>

      <div
        className="gallery-mask hidden sm:block absolute pointer-events-none"
        style={MASK_STYLE}
      />

      <div
        className="hidden sm:block absolute top-14 sm:top-16 left-0 z-10 pointer-events-none"
        style={{ paddingLeft: "max(3rem, calc((100vw - 1600px) / 2))" }}
      >
        <span className="text-xs uppercase tracking-[0.14em] text-white/30 font-[570] block mb-5">
          {PORTFOLIO_INTRO.eyebrow}
        </span>
        <h2 className="text-[clamp(2rem,3.4vw,3.8rem)] font-[790] text-white leading-none tracking-[-0.03em] max-w-[480px]">
          Featured
          <br />
          <span className="text-accent">Client Success.</span>
        </h2>
        <p className="text-sm text-white/50 leading-[1.7] max-w-[280px] mt-5">
          {PORTFOLIO_INTRO.short}
        </p>
      </div>
    </section>
  );
};
