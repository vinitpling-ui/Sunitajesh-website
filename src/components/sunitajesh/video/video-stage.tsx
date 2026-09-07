"use client";

import { useEffect, useRef } from "react";

export type VideoSources = {
  /** full-size clip, used from the md breakpoint up */
  mp4: string;
  /** narrower re-encode for phones; falls back to `mp4` when absent */
  mp4Small?: string;
  poster: string;
};

/* fades the frame's edges so the clip never reads as a rectangle laid over the
   hero; the subject sits well inside the opaque middle */
const MASK = "radial-gradient(ellipse 62% 62% at 50% 50%, #000 60%, transparent 88%)";

/**
 * Phones on a metered or slow connection keep the poster instead of pulling a
 * multi-megabyte clip. Both fields are Chromium-only, so everywhere else this
 * reads as "no objection" and the video plays as normal.
 */
const connectionRefuses = () => {
  const c = (
    navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    }
  ).connection;
  if (!c) return false;
  return c.saveData === true || /^(slow-)?2g$/.test(c.effectiveType ?? "");
};

type VideoStageProps = {
  sources: VideoSources;
  /** the subject rarely fills its frame; scale crops the empty bed, not the subject */
  scale?: number;
  /** vertical nudge, as a percentage of the frame */
  lift?: string;
};

/**
 * A looping clip, playing itself.
 *
 * No controls, no click target, nothing for a visitor to operate — it is a
 * moving picture, not a player. `muted` is what makes that legal: every browser
 * blocks autoplay of anything with a soundtrack, so muting is the requirement
 * rather than a preference. `playsInline` stops iOS from throwing it into the
 * native fullscreen player the moment it starts.
 *
 * The clips have no alpha — they sit on a near-black bed, close enough to the
 * page's own surface to disappear on their own. Blending that away with
 * `screen` was tried and was worse: the bed is not pure black, so screen lifted
 * the whole frame into a visibly lighter rectangle. The radial mask instead
 * fades the edges, which hides the box wherever the hero's glow passes behind.
 */
export const VideoStage = ({ sources, scale = 1.55, lift = "-11%" }: VideoStageProps) => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // a looping animation is exactly what these two ask to be spared
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || connectionRefuses()) {
      el.pause();
      el.removeAttribute("autoplay");
      // set on the element, not through state: re-rendering the <video> to
      // change one attribute would tear down the element that was just paused
      el.preload = "none";
      return;
    }

    /**
     * Autoplay can still be refused — iOS in Low Power Mode is the common case,
     * and it rejects the promise rather than throwing. The retry is bound to the
     * first interaction anywhere on the page, since the video itself is
     * pointer-inert and can never receive one.
     */
    const play = () => el.play().catch(() => undefined);
    play();

    const onFirstInput = () => play();
    window.addEventListener("pointerdown", onFirstInput, { once: true });
    window.addEventListener("touchstart", onFirstInput, { once: true });
    return () => {
      window.removeEventListener("pointerdown", onFirstInput);
      window.removeEventListener("touchstart", onFirstInput);
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      {/* the bed reads as intentional before the first frame paints */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 55% 50%, rgba(76,125,240,0.16) 0%, rgba(32,62,150,0.06) 45%, transparent 72%)",
          filter: "blur(50px)",
        }}
      />

      <video
        ref={ref}
        autoPlay
        loop
        muted
        playsInline
        poster={sources.poster}
        /* metadata, not auto: the poster carries the first paint, so there is no
           reason to race the clip against the rest of the page */
        preload="metadata"
        // nothing here is operable — no controls, no context menu, no PiP,
        // and pointer-inert so it never swallows a scroll or a click
        disablePictureInPicture
        controlsList="nodownload noplaybackrate"
        onContextMenu={(e) => e.preventDefault()}
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
        style={{
          transform: `translateY(${lift}) scale(${scale})`,
          maskImage: MASK,
          WebkitMaskImage: MASK,
        }}
      >
        {/* `media` is read once, at load — the small file is for phones, and a
            desktop window narrowed after load keeps whichever it already has */}
        {sources.mp4Small && (
          <source src={sources.mp4} type="video/mp4" media="(min-width: 768px)" />
        )}
        <source src={sources.mp4Small ?? sources.mp4} type="video/mp4" />
      </video>
    </div>
  );
};
