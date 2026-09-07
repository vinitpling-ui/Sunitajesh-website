"use client";

import { motion } from "motion/react";
import { srcSetFor } from "../shared/image-srcset";

const EASE = [0.16, 1, 0.3, 1] as const;

export const ProjectClosing = ({ image, body, title }: { image: string; body: string; title: string }) => (
  <section className="pb-20 sm:pb-28 lg:pb-36">
    <motion.div
      className="relative w-full aspect-[21/9] overflow-hidden bg-white/5 group"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px 0px" }}
      transition={{ duration: 0.9, ease: EASE }}
    >
      <img
        src={image}
        srcSet={srcSetFor(image)}
        alt={`${title} — final`}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
    </motion.div>

    <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 pt-16 sm:pt-20 lg:pt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-start">
        <motion.p
          className="text-xs uppercase tracking-[0.14em] text-white/30 font-[570] pt-1"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px 0px" }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          Closing thoughts
        </motion.p>
        <motion.p
          className="text-[clamp(1.1rem,2vw,1.5rem)] font-[430] text-white/70 leading-[1.75]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px 0px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
        >
          {body}
        </motion.p>
      </div>
    </div>
  </section>
);
