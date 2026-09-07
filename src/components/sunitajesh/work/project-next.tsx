"use client";

import Link from "next/link";
import type { WorkProject } from "../sunita-content";
import { srcSetFor } from "../shared/image-srcset";

export const ProjectNext = ({ project }: { project: WorkProject }) => (
  <Link
    href={`/portfolio/${project.slug}`}
    className="relative w-full min-h-[60vh] flex items-end overflow-hidden cursor-pointer group"
  >
    <img
      src={project.cover}
      srcSet={srcSetFor(project.cover)}
      alt={project.title}
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
    />
    <div className="absolute inset-0 bg-black/60" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

    <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 pb-16 sm:pb-20">
      <div className="flex items-end justify-between gap-8">
        <div className="flex flex-col gap-3">
          <span className="text-[11px] uppercase tracking-[0.16em] text-white/40 font-[570]">
            Next project
          </span>
          <span className="text-[clamp(2rem,5vw,4rem)] font-[790] tracking-[-0.03em] leading-none text-white group-hover:text-accent transition-colors duration-500">
            {project.title}
          </span>
          <span className="text-[11px] uppercase tracking-[0.12em] text-white/30 font-[570]">
            {project.tags.join(" · ")}
          </span>
        </div>
        <span className="shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-white/20 flex items-center justify-center text-white/60 group-hover:border-accent group-hover:text-accent group-hover:rotate-45 transition-all duration-500">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M7 7h10v10" /><path d="M7 17 17 7" />
          </svg>
        </span>
      </div>
    </div>
  </Link>
);
