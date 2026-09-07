"use client";

import { motion } from "motion/react";
import { srcSetFor } from "../shared/image-srcset";

const EASE = [0.16, 1, 0.3, 1] as const;

export const ProjectProcess = ({
  images,
  title,
}: {
  images: readonly string[];
  title: string;
}) => (
  <section className="py-4 sm:py-6">
    <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
      <motion.div
        className="flex items-center gap-4 mb-8"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px 0px" }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <span className="text-xs uppercase tracking-[0.14em] text-white/30 font-[570]">
          Process &amp; Deliverables
        </span>
        <div className="h-px flex-1 bg-white/8" />
      </motion.div>

      <div className="flex flex-col gap-2 sm:gap-3">
        {images.map((src, i) => (
          <motion.div
            key={`${src}-${i}`}
            className="relative w-full aspect-[21/9] overflow-hidden rounded-xl bg-white/5 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px 0px" }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: EASE }}
          >
            <img
              src={src}
              srcSet={srcSetFor(src)}
              alt={`${title} — process ${i + 1}`}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
