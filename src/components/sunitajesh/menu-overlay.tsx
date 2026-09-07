"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { SOCIAL_LINKS } from "./shared/social-links";
import { startScroll, stopScroll } from "./shared/smooth-scroll-provider";
import { CONTACT, MENU_LINKS } from "./sunita-content";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Rows cascade top -> bottom; the left column and meta settle in afterwards. */
const ROW_DELAY = 0.07;
const TAIL_DELAY = MENU_LINKS.length * ROW_DELAY + 0.1;

type MenuOverlayProps = {
  open: boolean;
  onNavigate: () => void;
};

export const MenuOverlay = ({ open, onNavigate }: MenuOverlayProps) => {
  useEffect(() => {
    if (open) stopScroll();
    else startScroll();
    return startScroll;
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9990] bg-darkgrey"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          {/* vertical seam between the two halves, drawn from the top */}
          <motion.span
            className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-white/[0.08] origin-top"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          />

          <div className="h-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2">
            {/* ---- left: connect ---- */}
            <motion.div
              className="hidden md:flex flex-col justify-end pb-16 pr-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: TAIL_DELAY, ease: EASE }}
            >
              <span className="text-xs sm:text-[11px] uppercase tracking-[0.2em] text-white/25 font-[570] mb-6">
                Connect
              </span>
              <ul className="flex flex-col gap-3">
                {SOCIAL_LINKS.map(({ label, value, href, icon }) => {
                  const external = href.startsWith("http");
                  return (
                    <li key={label}>
                      <a
                        href={href}
                        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="group inline-flex items-center gap-3 text-sm text-white/35 hover:text-white transition-colors duration-300"
                      >
                        <span className="text-white/25 group-hover:text-accent transition-colors duration-300">
                          {icon}
                        </span>
                        <span className="w-20 shrink-0">{label}</span>
                        {value && (
                          <span className="text-white/20 group-hover:text-white/50 transition-colors duration-300">
                            {value}
                          </span>
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </motion.div>

            {/* ---- right: the menu itself ---- */}
            <nav className="flex flex-col justify-center md:pl-16 pt-28 md:pt-0">
              {MENU_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={onNavigate}
                  className="group block border-t border-white/[0.08] py-5 sm:py-6"
                  initial={{ opacity: 0, y: 26 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.55, delay: 0.12 + i * ROW_DELAY, ease: EASE }}
                >
                  <span className="block text-xs sm:text-[10px] uppercase tracking-[0.22em] text-white/25 font-[570] mb-2">
                    {link.eyebrow}
                  </span>
                  <span className="block text-[clamp(2rem,4.5vw,3.5rem)] font-[790] leading-[1.05] tracking-[-0.02em] text-white group-hover:text-accent transition-colors duration-300">
                    {link.label}
                  </span>
                </motion.a>
              ))}
              <div className="border-t border-white/[0.08]" />


              <motion.div
                className="flex items-center justify-between gap-6 pt-6 text-xs text-white/25"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: TAIL_DELAY, ease: EASE }}
              >
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="hover:text-white/60 transition-colors duration-300"
                >
                  {CONTACT.email}
                </a>
                <span>© {new Date().getFullYear()}</span>
              </motion.div>
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
