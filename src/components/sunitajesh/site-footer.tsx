"use client";

import { type CSSProperties, type ReactNode } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { BRAND, CONTACT, HERO, NAV_LINKS } from "./sunita-content";
import { ArrowUpRightIcon } from "./shared/icons";

/**
 * Section 13 — site footer.
 *
 * One rounded "card" sitting on the dark page: a layered radial-gradient bed
 * (navy glow top-right, accent-blue bloom bottom-left) + an SVG noise wash, then
 * two stacked bands — link grid, legal bar — separated by a hairline rule.
 */

const CARD_BACKGROUND: CSSProperties = {
  background: `radial-gradient(ellipse 90% 55% at 88% -5%, rgba(24,48,120,0.72) 0%, rgba(16,32,84,0.35) 45%, transparent 65%),
            radial-gradient(ellipse 65% 65% at 8% 95%, rgba(76,125,240,0.28) 0%, rgba(40,70,170,0.12) 45%, transparent 65%),
            radial-gradient(ellipse 55% 65% at 52% 62%, rgba(2,3,6,0.95) 0%, transparent 60%),
            radial-gradient(ellipse 80% 40% at 40% 105%, rgba(4,6,12,0.9) 0%, transparent 55%),
            #0A0D16`,
};

const NOISE_LAYER: CSSProperties = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
  backgroundSize: "160px 160px",
};

const NAVY_BLOB: CSSProperties = {
  top: "-15%",
  right: "5%",
  width: "52%",
  height: "90%",
  background: "radial-gradient(ellipse, rgba(32,62,150,0.45) 0%, transparent 70%)",
  filter: "blur(60px)",
};

const PRIMARY_BLOB: CSSProperties = {
  bottom: "-20%",
  left: "-5%",
  width: "45%",
  height: "85%",
  background: "radial-gradient(ellipse, rgba(76,125,240,0.22) 0%, transparent 68%)",
  filter: "blur(50px)",
};

/** Every service points at the contact form; there are no per-service pages. */
const SERVICES_HREF = "/contact-us#get-in-touch";

const SERVICE_LINKS: readonly string[] = [
  "Technology Consulting",
  "Custom Applications",
  "Mobile App Development",
  "DevOps & Automations",
  "Direct & Indirect Tax",
  "Financial Advisory",
];

const LINK_CLASS =
  "group relative inline-flex items-center py-1.5 -my-1.5 text-sm text-white/35 hover:text-white transition-colors duration-300";
/* Nothing here may change the link's measured width. The dash used to animate
   `width` and `margin-right` from 0, which is real layout: the widest link in a
   column grew by 16px on hover, the column grew with it, and the flex row pushed
   the next column sideways. So the dash is positioned out of flow and the label
   moves by transform — both invisible to layout, same look, no shove. */
const LINK_DASH_CLASS =
  "absolute left-0 top-1/2 -translate-y-1/2 w-2.5 h-px bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300";
const LINK_LABEL_CLASS = "transition-transform duration-300 group-hover:translate-x-4";

const SOCIAL_ICON = "w-4 h-4 shrink-0";

const SOCIAL_LINKS: readonly { label: string; href: string; icon: ReactNode }[] = [
  {
    label: "LinkedIn",
    href: "#", // TODO: real profile URL — not published on sunitajesh.com
    icon: (
      <svg className={SOCIAL_ICON} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-10h4v1.5" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    icon: (
      <svg className={SOCIAL_ICON} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 10 6 10-6" />
      </svg>
    ),
  },
];
const HEADING_CLASS =
  "text-xs sm:text-[11px] uppercase tracking-widest text-white/20 mb-5 font-[570]";

const REVEAL = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px 0px" },
} as const;

export const SiteFooter = () => {
  return (
    <footer className="bg-darkgrey px-4 sm:px-6 lg:px-8 pb-6 pt-2">
      <div className="max-w-[1600px] mx-auto rounded-3xl border border-white/[0.07]">
        <div className="footer-card relative rounded-[23px] overflow-hidden" style={CARD_BACKGROUND}>
          {/* Atmosphere: grain + two blurred colour blooms. */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="footer-noise absolute inset-0 pointer-events-none opacity-[0.025]"
              style={NOISE_LAYER}
            />
            <div className="footer-blob-a absolute pointer-events-none rounded-full" style={NAVY_BLOB} />
            <div className="footer-blob-b absolute pointer-events-none rounded-full" style={PRIMARY_BLOB} />
          </div>

          {/* Band 1 — brand blurb + link columns */}
          <div className="px-6 sm:px-12 lg:px-16 pt-12 sm:pt-14 pb-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 border-b border-white/[0.07]">
            <motion.div
              className="md:col-span-4"
              {...REVEAL}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <img src={BRAND.wordmark} alt={BRAND.name} className="logo-flip h-6 sm:h-7 lg:h-8 w-auto mb-4" />
              <p className="text-sm text-white/30 max-w-[260px] leading-relaxed">
                {HERO.subtitle}
              </p>
              <address className="not-italic mt-6 text-sm text-white/30">
                {CONTACT.office}
              </address>
            </motion.div>

            <motion.div
              className="md:col-span-4"
              {...REVEAL}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <h4 className={HEADING_CLASS}>Services</h4>
              <ul className="space-y-2.5">
                {SERVICE_LINKS.map((label) => (
                  <li key={label}>
                    <Link href={SERVICES_HREF} className={LINK_CLASS}>
                      <span className={LINK_DASH_CLASS} aria-hidden="true" />
                      <span className={LINK_LABEL_CLASS}>{label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="md:col-span-4"
              {...REVEAL}
              transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex gap-10 sm:gap-16">
                <div>
                  <h4 className={HEADING_CLASS}>Company</h4>
                  <ul className="space-y-2.5">
                    {NAV_LINKS.map(({ label, href }) => (
                      <li key={label}>
                        <Link href={href} className={LINK_CLASS}>
                          <span className={LINK_DASH_CLASS} aria-hidden="true" />
                          <span className={LINK_LABEL_CLASS}>{label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className={HEADING_CLASS}>Connect</h4>
                  <div className="flex flex-col gap-2.5">
                    {SOCIAL_LINKS.map(({ label, href, icon }) => {
                      const external = href.startsWith("http");
                      return (
                        <a
                          key={label}
                          href={href}
                          {...(external
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                          className="group inline-flex items-center gap-2 py-1.5 -my-1.5 text-sm text-white/35 hover:text-white transition-colors duration-300"
                        >
                          <span className="text-white/25 group-hover:text-accent transition-colors duration-300">
                            {icon}
                          </span>
                          {label}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Band 2 — legal bar */}
          <div className="px-8 sm:px-12 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <motion.p
              className="text-xs text-white/18"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px 0px" }}
              transition={{ duration: 0.6 }}
            >
              {CONTACT.copyright}
            </motion.p>
            <motion.a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center gap-1.5 py-2 -my-2 text-xs text-white/25 hover:text-white/60 transition-colors duration-300 group"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px 0px" }}
              transition={{ duration: 0.6, delay: 0.08 }}
            >
              {CONTACT.email}
              <ArrowUpRightIcon
                width={10}
                height={10}
                className="lucide lucide-arrow-up-right opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};
