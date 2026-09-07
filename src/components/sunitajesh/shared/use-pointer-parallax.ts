"use client";

import { useEffect, useRef } from "react";

/**
 * Writes the pointer's position within the element to two CSS custom properties
 * (--mx / --my, each roughly -0.5..0.5). CSS does the actual moving, so nothing
 * re-renders on mouse move and the work stays on the compositor.
 *
 * Disabled for coarse pointers (phones/tablets, where there is no cursor to
 * follow) and whenever the visitor has asked for reduced motion.
 */
export const usePointerParallax = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const onMove = (e: PointerEvent) => {
      if (frame) return; // coalesce to one write per frame
      frame = requestAnimationFrame(() => {
        frame = 0;
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", String((e.clientX - r.left) / r.width - 0.5));
        el.style.setProperty("--my", String((e.clientY - r.top) / r.height - 0.5));
      });
    };
    const onLeave = () => {
      el.style.setProperty("--mx", "0");
      el.style.setProperty("--my", "0");
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    el.addEventListener("pointerleave", onLeave);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return ref;
};
