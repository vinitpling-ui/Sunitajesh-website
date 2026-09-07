"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRightIcon } from "../shared/icons";
import { CAREER_ROLES, CAREER_ROLES_INTRO, type Role } from "../sunita-content";
import { ApplyModal } from "./apply-modal";

const EASE = [0.16, 1, 0.3, 1] as const;

/** Accordion: one role open at a time, height animated so nothing jumps. */
export const CareerRoles = () => {
  const [open, setOpen] = useState<string | null>(CAREER_ROLES[0]?.slug ?? null);
  const [applying, setApplying] = useState<Role | null>(null);

  return (
    <section
      id="openings"
      className="py-20 sm:py-24 max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 scroll-mt-24"
    >
      <motion.span
        className="text-[11px] uppercase tracking-[0.2em] text-white/25 font-[570] mb-6 block"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px 0px" }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        {CAREER_ROLES_INTRO.eyebrow}
      </motion.span>

      <motion.h2
        className="text-[clamp(2rem,5vw,4rem)] font-[790] tracking-[-0.03em] leading-none text-white mb-12 sm:mb-16"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px 0px" }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        {CAREER_ROLES_INTRO.heading}
      </motion.h2>

      {CAREER_ROLES.length === 0 ? (
        <p className="text-white/40">{CAREER_ROLES_INTRO.empty}</p>
      ) : (
        <div className="border-t border-white/8">
          {CAREER_ROLES.map((role, i) => {
            const isOpen = open === role.slug;
            return (
              <motion.div
                key={role.slug}
                className="border-b border-white/8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px 0px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : role.slug)}
                  aria-expanded={isOpen}
                  className="group w-full flex items-center justify-between gap-6 py-7 sm:py-8 text-left cursor-pointer"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 min-w-0">
                    <h3
                      className={`text-[clamp(1.35rem,2.6vw,2rem)] font-[670] leading-tight transition-colors duration-300 ${
                        isOpen ? "text-accent" : "text-white group-hover:text-accent"
                      }`}
                    >
                      {role.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] uppercase tracking-[0.12em] text-white/30 font-[570]">
                      <span>{role.type}</span>
                      <span className="w-px h-3 bg-white/15" />
                      <span>{role.location}</span>
                      <span className="w-px h-3 bg-white/15" />
                      <span>{role.experience}</span>
                    </div>
                  </div>

                  <span
                    className={`shrink-0 w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-400 ${
                      isOpen
                        ? "border-accent text-accent rotate-45"
                        : "border-white/15 text-white/40 group-hover:border-accent/60 group-hover:text-accent"
                    }`}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                      <path d="M12 5v14" /><path d="M5 12h14" />
                    </svg>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                        <p className="lg:col-span-5 text-base text-white/55 leading-[1.7]">
                          {role.summary}
                        </p>

                        <div className="lg:col-span-4">
                          <span className="text-[11px] uppercase tracking-[0.14em] text-white/30 font-[570] block mb-4">
                            What you will do
                          </span>
                          <ul className="flex flex-col gap-2.5">
                            {role.responsibilities.map((r) => (
                              <li key={r} className="flex gap-3 text-sm text-white/40 leading-relaxed">
                                <span className="mt-[7px] w-1 h-1 rounded-full bg-accent/60 shrink-0" aria-hidden="true" />
                                {r}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="lg:col-span-3">
                          <span className="text-[11px] uppercase tracking-[0.14em] text-white/30 font-[570] block mb-4">
                            What we look for
                          </span>
                          <ul className="flex flex-col gap-2.5 mb-8">
                            {role.requirements.map((r) => (
                              <li key={r} className="flex gap-3 text-sm text-white/40 leading-relaxed">
                                <span className="mt-[7px] w-1 h-1 rounded-full bg-accent/60 shrink-0" aria-hidden="true" />
                                {r}
                              </li>
                            ))}
                          </ul>
                          <button
                            type="button"
                            onClick={() => setApplying(role)}
                            className="group/apply inline-flex items-center gap-2 py-2 -my-2 text-sm font-[570] text-white cursor-pointer"
                          >
                            <span className="border-b border-white/30 group-hover/apply:border-accent group-hover/apply:text-accent transition-colors duration-300 pb-0.5">
                              Apply now
                            </span>
                            <ArrowUpRightIcon className="group-hover/apply:text-accent group-hover/apply:translate-x-0.5 group-hover/apply:-translate-y-0.5 transition-all duration-300" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      )}

      <ApplyModal role={applying} onClose={() => setApplying(null)} />
    </section>
  );
};
