"use client";

import { motion } from "motion/react";
import { ArrowUpRightIcon } from "../shared/icons";
import { CAREER_CTA, CONTACT } from "../sunita-content";

const EASE = [0.22, 1, 0.36, 1] as const;

export const CareerCta = () => (
  <section className="py-20 sm:py-28 px-4 sm:px-8 lg:px-12">
    <div className="max-w-[1600px] mx-auto">
      <div className="border-t border-white/8 pt-12 sm:pt-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end">
        <motion.div
          className="md:col-span-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <span className="text-xs uppercase tracking-[0.12em] text-white/30 font-[570] block mb-6">
            {CAREER_CTA.eyebrow}
          </span>
          <h2 className="text-[clamp(2.5rem,7vw,6rem)] font-[790] leading-none tracking-[-0.03em] text-white">
            {CAREER_CTA.heading}
          </h2>
        </motion.div>

        <motion.div
          className="md:col-span-4 flex flex-col gap-6 md:pb-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
        >
          <p className="text-sm text-white/40 leading-relaxed max-w-xs">{CAREER_CTA.body}</p>
          <a
            href={`mailto:${CONTACT.email}?subject=${encodeURIComponent("Introduction")}`}
            className="group inline-flex items-center gap-2.5 bg-white text-darkgrey text-sm font-[650] px-6 py-3 rounded-full relative overflow-hidden w-fit"
          >
            <span className="absolute inset-0 bg-primary translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-380 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            <span className="relative z-10 group-hover:text-onprimary transition-[color] duration-200">
              {CAREER_CTA.cta}
            </span>
            <ArrowUpRightIcon className="relative z-10 group-hover:text-onprimary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-[color,transform] duration-200" />
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);
