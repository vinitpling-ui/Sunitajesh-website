import type { ReactNode } from "react";
import { CONTACT } from "../sunita-content";

export type SocialLink = {
  label: string;
  /** the handle shown after the label; omitted while there is no real one */
  value?: string;
  href: string;
  icon: ReactNode;
};

const ICON = "w-4 h-4 shrink-0";
const svg = {
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    label: "LinkedIn",
    href: "#", // TODO: real profile URL — not published on sunitajesh.com
    icon: (
      <svg className={ICON} {...svg}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-10h4v1.5" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    icon: (
      <svg className={ICON} {...svg}>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 10 6 10-6" />
      </svg>
    ),
  },
];
