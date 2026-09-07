"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { MenuOverlay } from "./menu-overlay";
import { BRAND } from "./sunita-content";

const REVEAL_DELAY = 1.85; // clears the preloader
/* A few pixels of slack: iOS rubber-banding and sub-pixel rounding both leave
   scrollY a hair above zero at rest, which would strand the logo hidden. */
const AT_TOP = 6;
// bg-onprimary is the non-flipping white; see note above about mix-blend-difference
const BAR = "block h-0.5 w-7 bg-onprimary origin-center";

export const SiteNav = () => {
  const [open, setOpen] = useState(false);
  /* The wordmark belongs to the top of the page — the moment you leave it, the
     logo goes and only the menu control stays. It comes back at the top, not on
     scroll-up, so nothing pops in over the content mid-page. */
  const [atTop, setAtTop] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setAtTop(y <= AT_TOP));

  return (
    <>
      <MenuOverlay open={open} onNavigate={() => setOpen(false)} />

      <motion.nav
        className="flex fixed top-0 left-0 z-[9997] items-center justify-between py-8 px-4 sm:px-8 lg:px-12 w-full mix-blend-difference pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: REVEAL_DELAY, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-[1600px] mx-auto w-full flex items-center justify-between">
          <motion.div
            animate={{ opacity: atTop ? 1 : 0, y: atTop ? 0 : -10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            /* aria-hidden as well, so a screen reader does not offer a link the
               sighted visitor cannot see */
            aria-hidden={!atTop}
          >
            <Link
              href="/"
              aria-label={`${BRAND.name} home`}
              tabIndex={atTop ? undefined : -1}
              /* the faded-out wordmark must not stay clickable — the nav itself
                 is pointer-events-none, so this only re-enables it at the top */
              className={`cursor-pointer ${atTop ? "pointer-events-auto" : "pointer-events-none"}`}
            >
              {/* forced flat white so mix-blend-difference inverts it cleanly */}
              <img src={BRAND.wordmark} alt={BRAND.name} className="h-7 lg:h-8 w-auto brightness-0 invert" />
            </Link>
          </motion.div>

          {/* single control at every breakpoint — bars morph into a cross when open */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex flex-col gap-1.5 cursor-pointer pointer-events-auto p-2.5 -m-2.5"
          >
            <motion.span
              className={BAR}
              animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.span
              className={BAR}
              animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            />
            <motion.span
              className={BAR}
              animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </button>
        </div>
      </motion.nav>
    </>
  );
};
