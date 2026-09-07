"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRightIcon } from "../shared/icons";
import { ProjectHoverBadge } from "../shared/project-hover-badge";
import type { WorkProject } from "../sunita-content";
import { srcSetFor } from "../shared/image-srcset";

const EASE = [0.22, 1, 0.36, 1] as const;

export const WorkCard = ({
  project,
  delay = 0,
  wide = false,
}: {
  project: WorkProject;
  delay?: number;
  wide?: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px 0px" }}
    transition={{ duration: 0.8, delay, ease: EASE }}
  >
    <Link href={`/portfolio/${project.slug}`} className="flex flex-col gap-3 cursor-pointer group">
      <div
        className={`relative w-full overflow-hidden bg-white/5 ${
          wide ? "aspect-[4/3] sm:aspect-[21/9]" : "aspect-[4/3]"
        }`}
      >
        <img
          src={project.cover}
          srcSet={srcSetFor(project.cover)}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
        <ProjectHoverBadge />
      </div>

      <div className="flex items-start justify-between gap-4 px-0.5">
        <div className="flex flex-col gap-1">
          <span className="text-base sm:text-lg font-[670] text-white group-hover:text-accent transition-colors duration-300">
            {project.title}
          </span>
          <span className="text-[11px] uppercase tracking-[0.12em] text-white/30 font-[570]">
            {project.tags.join(" · ")}
          </span>
        </div>
        <ArrowUpRightIcon
          width={16}
          height={16}
          className="mt-1.5 shrink-0 text-white/25 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
        />
      </div>
    </Link>
  </motion.div>
);
