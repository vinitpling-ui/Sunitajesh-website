"use client";

import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { ABOUT_PROCESS_INTRO, PROCESS_STEPS } from "../sunita-content";

const EASE = [0.16, 1, 0.3, 1] as const;
const COUNT = PROCESS_STEPS.length;

/**
 * Pinned step sequence. One viewport of scroll per step; the panel sticks for the
 * whole distance so scrolling advances the step rather than moving the panel.
 *
 * The feel comes from running two things at once:
 *   continuous  a spring-smoothed progress rail and a parallax drift on the
 *               numeral, both bound straight to scroll — so something is always
 *               responding and the section never feels frozen between steps
 *   discrete    the step content cross-fades at each threshold, with its title
 *               and bullets staggered so the swap has rhythm instead of popping
 */
export const AboutProcess = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  // a touch of lag makes the continuous parts feel fluid rather than glued to the wheel
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 26, restDelta: 0.001 });

  const railScale = useTransform(smooth, [0, 1], [0, 1]);
  const numeralY = useTransform(smooth, [0, 1], [50, -50]);
  const numeralOpacity = useTransform(smooth, [0, 0.06, 0.94, 1], [0.5, 1, 1, 0.5]);

  // only re-render when the index genuinely changes
  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const next = Math.max(0, Math.min(COUNT - 1, Math.floor(p * COUNT - 0.0001)));
    setActive((prev) => (prev === next ? prev : next));
  });

  const step = PROCESS_STEPS[active];

  return (
    <section className="bg-darkgrey">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 pt-24 pb-16">
        <motion.span
          className="text-[11px] uppercase tracking-[0.2em] text-white/25 font-[570] mb-6 block"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px 0px" }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          {ABOUT_PROCESS_INTRO.eyebrow}
        </motion.span>
        <motion.h2
          className="text-[clamp(2.5rem,6vw,5.5rem)] font-[790] tracking-[-0.03em] leading-none text-white"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px 0px" }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          {ABOUT_PROCESS_INTRO.heading}{" "}
          <span className="text-accent">{ABOUT_PROCESS_INTRO.headingAccent}</span>
        </motion.h2>
      </div>

      {/* svh, not vh: on a phone 100vh is the URL-bar-hidden height, so a 100vh
          panel is taller than what is actually on screen — the pinned content
          gets clipped and the step maths drifts against the real viewport. */}
      <div ref={ref} className="relative" style={{ height: `${COUNT * 100}svh` }}>
        <div className="sticky top-0 h-[100svh] overflow-hidden flex border-t border-white/6">
          {/* ── left: numeral + continuous rail ── */}
          <div className="relative hidden md:flex w-[42%] flex-col items-center justify-center border-r border-white/6 overflow-hidden">
            {/* track, then a fill bound to scroll — constant feedback while moving */}
            <div className="absolute left-8 top-28 bottom-16 w-px bg-white/6 pointer-events-none" />
            <motion.div
              className="absolute left-8 top-28 bottom-16 w-px bg-accent origin-top pointer-events-none"
              style={{ scaleY: railScale }}
            />

            <motion.div style={{ y: numeralY, opacity: numeralOpacity }} className="relative">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={step.number}
                  className="block text-[clamp(10rem,20vw,18rem)] font-[790] leading-none tabular-nums select-none text-white/[0.07]"
                  initial={{ opacity: 0, filter: "blur(14px)", scale: 0.94, y: 30 }}
                  animate={{ opacity: 1, filter: "blur(0px)", scale: 1, y: 0 }}
                  exit={{ opacity: 0, filter: "blur(14px)", scale: 1.05, y: -30 }}
                  transition={{ duration: 0.55, ease: EASE }}
                >
                  {step.number}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-2">
              {PROCESS_STEPS.map((s, i) => (
                <motion.span
                  key={s.number}
                  className="h-1 rounded-full block"
                  animate={{
                    width: i === active ? 34 : 14,
                    backgroundColor:
                      i === active ? "var(--color-accent)" : "rgba(255,255,255,0.15)",
                  }}
                  transition={{ type: "spring", stiffness: 320, damping: 30 }}
                />
              ))}
            </div>
          </div>

          {/* ── right: the step ── */}
          <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-16 xl:px-20">
              {/* The ghost numeral desktop keeps in its left column. That column is
                hidden below md, which left the top half of the pinned panel dead,
                so on mobile it runs inline above the rail instead. Fixed height +
                absolute glyph: popLayout swaps must not shift the step below. */}
            <motion.div
              style={{ y: numeralY, opacity: numeralOpacity }}
              className="md:hidden relative h-[46vw] max-h-52 mb-4"
              aria-hidden="true"
            >
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={step.number}
                  className="absolute inset-0 flex items-center text-[clamp(8rem,42vw,13rem)] font-[790] leading-none tabular-nums select-none text-white/[0.07]"
                  initial={{ opacity: 0, filter: "blur(14px)", scale: 0.94, y: 30 }}
                  animate={{ opacity: 1, filter: "blur(0px)", scale: 1, y: 0 }}
                  exit={{ opacity: 0, filter: "blur(14px)", scale: 1.05, y: -30 }}
                  transition={{ duration: 0.55, ease: EASE }}
                >
                  {step.number}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            <div className="flex gap-2 mb-8 md:hidden">
              {PROCESS_STEPS.map((s, i) => (
                <motion.span
                  key={s.number}
                  className="h-1 rounded-full block"
                  animate={{
                    width: i === active ? 34 : 14,
                    backgroundColor:
                      i === active ? "var(--color-accent)" : "rgba(255,255,255,0.15)",
                  }}
                  transition={{ type: "spring", stiffness: 320, damping: 30 }}
                />
              ))}
            </div>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={step.number}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.22, ease: "easeIn" } }}
                transition={{ duration: 0.1 }}
              >
                <motion.h3
                  className="text-[clamp(2rem,4.5vw,3.5rem)] font-[790] leading-[1.05] tracking-[-0.02em] text-white"
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: EASE }}
                >
                  {step.title}
                </motion.h3>

                <ul className="flex flex-col gap-4 mt-8 max-w-lg">
                  {step.points.map((point, i) => (
                    <motion.li
                      key={point}
                      className="flex gap-3 text-base text-white/45 leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.55, delay: 0.12 + i * 0.08, ease: EASE }}
                    >
                      <span
                        className="mt-[9px] w-1 h-1 rounded-full bg-accent/60 shrink-0"
                        aria-hidden="true"
                      />
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
