"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ProjectHoverBadge } from "./shared/project-hover-badge";
import { srcSetFor } from "./shared/image-srcset";
import { PORTFOLIO_INTRO } from "./sunita-content";

const EASE = [0.22, 1, 0.36, 1] as const;
const IMG_BASE = "/sunitajesh/images";

type Project = {
  id: string;
  /** the case study this card opens; must match a WORK_PROJECTS slug */
  slug: string;
  title: string;
  tags: string;
  src: string;
  sizes: string;
  aspectClassName: string;
};

/* Home shows a three-project cut of the portfolio page: Pling leads wide, then a
   two-up grid. Vinit Chaudhary is held back for the portfolio page — three cards
   fill both rows exactly, where a fourth would sit half-width against an empty
   cell. "See all partners" below carries the rest. */
const LEAD_PROJECT: Project = {
  id: "s-pling",
  slug: "pling",
  title: "Pling, Inc.",
  tags: "Branding, Web App, Platform Design",
  src: `${IMG_BASE}/work-pling-showcase.webp`,
  sizes: "(min-width: 1600px) 1600px, 100vw",
  aspectClassName: "relative w-full aspect-[4/3] sm:aspect-[16/8] overflow-hidden bg-white/5",
};

const GRID_PROJECTS: readonly Project[] = [
  {
    id: "s-gsc",
    slug: "gsc",
    title: "Grover S & Company",
    tags: "Website, Content Strategy, SEO",
    src: `${IMG_BASE}/work-gsc-cover.webp`,
    sizes: "(min-width: 640px) 50vw, 100vw",
    aspectClassName: "relative w-full aspect-[4/3] overflow-hidden bg-white/5",
  },
  {
    id: "s-recnet",
    slug: "therecnet",
    title: "therecnet",
    tags: "Product Design, Web App",
    src: `${IMG_BASE}/work-recnet-cover.webp`,
    sizes: "(min-width: 640px) 50vw, 100vw",
    aspectClassName: "relative w-full aspect-[4/3] overflow-hidden bg-white/5",
  },
];

const ProjectCard = ({ project, delay }: { project: Project; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8, ease: EASE, delay }}
  >
    <Link href={`/portfolio/${project.slug}`} className="flex flex-col gap-2.5 cursor-pointer group">
    <div className={project.aspectClassName}>
      <img
        alt={project.title}
        loading="lazy"
        decoding="async"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          color: "transparent",
        }}
        sizes={project.sizes}
        src={project.src}
        srcSet={srcSetFor(project.src)}
      />
      <ProjectHoverBadge />
    </div>

    <div className="flex items-start justify-between gap-4 px-0.5">
      <span className="text-xs sm:text-[11px] uppercase tracking-[0.12em] text-white/55 font-[570]">
        {project.title}
      </span>
      <span className="text-xs sm:text-[11px] text-white/35 text-right leading-relaxed">
        ({project.tags})
      </span>
    </div>
    </Link>
  </motion.div>
);

export const FeaturedWorkSection = () => (
  <section className="w-full bg-darkgrey py-16 sm:py-20 md:py-24 px-4 sm:px-8 lg:px-12">
    <div className="max-w-[1600px] mx-auto">
      <div className="flex items-end justify-between border-b border-white/8 pb-6 mb-12 sm:mb-16">
        <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-[790] text-white tracking-[-0.02em] uppercase">
          Portfolio
        </h2>
        <span className="hidden sm:flex items-center gap-1.5 text-xs sm:text-[11px] uppercase tracking-[0.14em] text-white/30 font-[570]">
          <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
          Selected Projects
        </span>
      </div>

      <div className="mb-2 sm:mb-3">
        <ProjectCard project={LEAD_PROJECT} delay={0} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
        {GRID_PROJECTS.map((project, index) => (
          <ProjectCard key={project.id} project={project} delay={0.08 * (index + 1)} />
        ))}
      </div>

      <motion.div
        className="mt-12 flex justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
      >
        <Link
          href="/portfolio"
          className="group inline-flex items-center gap-2 py-2 -my-2 text-base font-[570] text-white border-b border-white pb-0.5 hover:text-accent hover:border-accent transition-colors duration-300 cursor-pointer"
          style={{ transitionProperty: "color, border-color" }}
        >
          {PORTFOLIO_INTRO.cta}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-up-right transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
            style={{ transitionProperty: "transform" }}
          >
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
          </svg>
        </Link>
      </motion.div>
    </div>
  </section>
);
