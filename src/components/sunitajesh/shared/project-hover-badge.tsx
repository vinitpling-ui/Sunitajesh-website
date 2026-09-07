"use client";

import { useId } from "react";
import { ArrowUpRightIcon } from "./icons";

/**
 * The circular plate that fades in over a project image on hover.
 *
 * The ring text is an SVG `textPath`, so it needs a path to reference. That id
 * has to be unique per instance — two cards sharing one would both bind to
 * whichever path rendered first — so it comes from `useId()` rather than from
 * caller-supplied data. Colons are stripped because `useId` emits `:r0:`, which
 * is a legal id but an awkward fragment reference.
 *
 * Expects a `group` ancestor to drive the hover, and no pointer of its own so
 * the parent link stays clickable through it.
 */
export const ProjectHoverBadge = () => {
  const pathId = `ring-${useId().replace(/:/g, "")}`;

  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
      <div className="relative flex items-center justify-center w-[136px] h-[136px]">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: "rgba(20,20,20,0.58)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
        />
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 136 136" aria-hidden="true">
          <defs>
            <path id={pathId} d="M 68,68 m -50,0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0" />
          </defs>
          <text fill="white" fontSize="10" fontWeight="600" letterSpacing="3" opacity="0.9">
            <textPath href={`#${pathId}`}>VIEW PROJECT • VIEW PROJECT • </textPath>
          </text>
        </svg>
        <ArrowUpRightIcon
          width={22}
          height={22}
          strokeWidth={1.8}
          className="relative z-10 text-white"
        />
      </div>
    </div>
  );
};
