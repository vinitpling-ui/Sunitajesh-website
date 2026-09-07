"use client";

import { type ReactNode, useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

let instance: Lenis | null = null;

/**
 * Pause/resume page scrolling — used while the full-screen menu is open.
 * Lenis is not created on touch devices (see below), so both fall back to
 * locking the document directly.
 */
export const stopScroll = () => {
  if (instance) return instance.stop();
  // the document element is the scroller, and locking <body> instead is unreliable
  // on iOS — this mirrors what Lenis itself does via .lenis-stopped
  document.documentElement.style.overflow = "hidden";
};
export const startScroll = () => {
  if (instance) return instance.start();
  document.documentElement.style.overflow = "";
};

/** Clears the fixed nav, which overlays the top of the page. */
const ANCHOR_OFFSET = -112;

type SmoothScrollProviderProps = { children: ReactNode };

export const SmoothScrollProvider = ({ children }: SmoothScrollProviderProps) => {
  const pathname = usePathname();

  useEffect(() => {
    // Lenis exists to smooth *wheel* input. Touch scrolling stays native either
    // way, since syncTouch is off — so on a phone it was running a rAF callback
    // every frame and re-reading scroll state on every scroll event, in exchange
    // for nothing. Skip it there and let the browser scroll the page itself.
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });
    instance = lenis;

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      instance = null;
    };
  }, []);

  /**
   * Every route change starts at the top, unless it carries an anchor.
   *
   * Next resets the document scroll itself, but Lenis keeps its own position and
   * writes it back on the next frame, which drops you back where you were on the
   * page you just left — most obviously when following the next-project link at
   * the foot of a case study. Lenis also sets `scroll-behavior: auto !important`
   * and drives scrolling itself, so the browser's native jump to `#hash` is
   * either skipped or immediately overwritten; both cases are handled here.
   *
   * This provider lives in the root layout and does not remount between routes,
   * hence the pathname key.
   */
  useEffect(() => {
    const toTop = () => {
      if (instance) instance.scrollTo(0, { immediate: true, force: true });
      else window.scrollTo(0, 0);
    };

    const toAnchor = () => {
      const id = window.location.hash.slice(1);
      if (!id) return false;
      const target = document.getElementById(id);
      if (!target) return false;
      // a frame late, so the incoming route has laid out and the offset is real
      requestAnimationFrame(() =>
        instance
          ? instance.scrollTo(target, { offset: ANCHOR_OFFSET })
          : target.scrollIntoView(),
      );
      return true;
    };

    const go = () => {
      if (toAnchor()) return;
      // twice: once now, once after the router has done its own scroll handling,
      // so it does not matter which of the two runs first
      toTop();
      requestAnimationFrame(toTop);
    };

    go();
    window.addEventListener("hashchange", go);
    return () => window.removeEventListener("hashchange", go);
  }, [pathname]);

  return <>{children}</>;
};
