import type { CSSProperties } from "react";
import { TICKER_ITEMS } from "./sunita-content";

/**
 * Section 05 — infinite horizontal marquee of capability phrases.
 *
 * The `marquee-x` keyframe in globals.css translates the row from 0 to -50%,
 * so the item set is rendered TWICE: once the first copy has scrolled fully
 * out, the second copy sits exactly where the first started and the loop
 * restarts with no visible seam.
 */

const PHRASES: readonly string[] = TICKER_ITEMS;

/** Row must be content-width for the -50% translate to equal one full item set. */
const rowStyle: CSSProperties = {
  width: "max-content",
  animation: "marquee-x 40s linear infinite",
  willChange: "transform",
};

export const TickerStrip = () => (
  <section className="py-8 sm:py-12 border-y border-white/[0.06] overflow-hidden bg-darkgrey">
    <div
      className="flex gap-8 sm:gap-12 whitespace-nowrap"
      style={rowStyle}
      aria-hidden="true"
    >
      {[0, 1].map((copy) =>
        PHRASES.map((phrase) => (
          <span
            key={`${copy}-${phrase}`}
            className="text-xl sm:text-2xl md:text-3xl font-[570] text-white/15 flex items-center gap-8 sm:gap-12 shrink-0"
          >
            {phrase}
            <span className="w-2 h-2 rounded-full bg-accent/30" />
          </span>
        )),
      )}
    </div>
  </section>
);
