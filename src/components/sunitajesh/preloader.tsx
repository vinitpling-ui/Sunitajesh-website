"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { BRAND } from "./sunita-content";

// Timeline (was ~3.1s end to end, now ~1.95s):
//   0.00s  panel starts climbing in from below the fold  (0.45s)
//   0.45s  panel covers the viewport
//   0.35s+ logo crescents stagger in, label slides up behind its clip
//   1.40s  hold ends, panel keeps travelling up and off the top (0.55s)
//   1.95s  gone
const HOLD_MS = 1400;
const SWEEP_EASE = [0.76, 0, 0.24, 1] as const;

/* How far below the centred mark the tagline sits. The block is centred on the
   whole screen, so this padding is what pushes it under the logo rather than
   through it — nudge this, not the mark, to move the text. */
const TAGLINE_OFFSET = 225;

export const Preloader = () => {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setDone(true), HOLD_MS);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-9999 bg-primary"
          style={{ pointerEvents: "all" }}
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "-100%", transition: { duration: 0.55, ease: SWEEP_EASE } }}
          transition={{ duration: 0.45, ease: SWEEP_EASE }}
        >
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ transformOrigin: "center center" }}
          >
            <motion.img
              src={BRAND.mark}
              alt={BRAND.name}
              className="w-[220px] sm:w-[300px] h-auto brightness-0 invert"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{ paddingTop: TAGLINE_OFFSET }}
          >
            <div style={{ overflow: "hidden" }}>
              <motion.span
                /* not uppercased: the phrase is transliterated with diacritics
                   and its own capitalisation, which all-caps would flatten */
                /* tracking eased back from 0.28em: the phrase is far longer
                   than the wordmark it replaced, and at this size the wider
                   spacing pushed it past the mark on a phone */
                className="block text-onprimary/70 text-[16px] sm:text-[19px] mt-4 tracking-[0.18em] font-[570]"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.45, delay: 0.75, ease: [0.33, 1, 0.68, 1] }}
              >
                {BRAND.tagline}
              </motion.span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
