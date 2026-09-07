import type { CSSProperties } from "react";
import { TICKER_ITEMS } from "../sunita-content";

/** Rendered twice so the -50% translate lands seamlessly. */
const rowStyle: CSSProperties = {
  width: "max-content",
  animation: "marquee-x 45s linear infinite",
  willChange: "transform",
};

export const AboutMarquee = () => (
  <div className="border-y border-white/6 py-4 overflow-hidden">
    <div className="flex items-center whitespace-nowrap" style={rowStyle} aria-hidden="true">
      {[0, 1].map((copy) =>
        TICKER_ITEMS.map((item) => (
          <span key={`${copy}-${item}`} className="flex items-center shrink-0">
            <span className="text-[11px] uppercase tracking-[0.2em] text-white/25 font-[570]">
              {item}
            </span>
            <span className="w-1 h-1 rounded-full bg-accent/50 mx-5 shrink-0" />
          </span>
        )),
      )}
    </div>
  </div>
);
