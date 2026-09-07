"use client";

import { useEffect, useRef, useState } from "react";
import { preconnect } from "react-dom";

/**
 * Scenes are passed in as a runtime `.splinecode` URL, not an editor link.
 *
 * A community URL (app.spline.design/community/file/<id>) is an editor page —
 * requesting <id> against prod.spline.design returns 403, so it cannot be
 * embedded as-is. To point a page at a scene: open it in Spline, Remix it to
 * your own account, then Export → Web / Code and pass the
 * `prod.spline.design/<hash>/scene.splinecode` URL it gives you as `scene`.
 */
const VIEWER_SRC = "https://unpkg.com/@splinetool/viewer@1.10.79/build/spline-viewer.js";

// React 19 moved the JSX namespace under the react module, so the custom element
// has to be declared there rather than on a global JSX namespace. A namespace is
// the only form the compiler accepts here, hence the targeted disable.
declare module "react" {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "spline-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          url?: string;
          autoplay?: string;
          "loading-anim-type"?: string;
        },
        HTMLElement
      >;
    }
  }
}

/**
 * The scene download used to start only once the 2.2 MB viewer had parsed and
 * asked for it — two big transfers back to back. Warming it here puts both on
 * the wire at once, so the viewer finds it already in the HTTP cache.
 */
const warmed = new Set<string>();
const warmScene = (url: string) => {
  if (warmed.has(url)) return;
  warmed.add(url);
  fetch(url, { mode: "cors", cache: "force-cache" }).catch(() => undefined);
};

let scriptPromise: Promise<void> | null = null;
/** Load Spline's viewer once, from their CDN, so nothing enters our bundle. */
const loadViewer = () => {
  if (scriptPromise) return scriptPromise;
  scriptPromise = new Promise<void>((resolve, reject) => {
    if (customElements.get("spline-viewer")) return resolve();
    const s = document.createElement("script");
    s.type = "module";
    s.src = VIEWER_SRC;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("spline viewer failed to load"));
    document.head.appendChild(s);
  });
  return scriptPromise;
};

/**
 * The scene runs on phones too, but it still stays gated on:
 *   - reduced-motion, which opts out of the whole thing
 *   - being near the viewport, so it costs nothing above the fold elsewhere
 * Anything that does not qualify keeps the ambient gradient bed instead.
 */
type SplineStageProps = {
  /** runtime `.splinecode` URL — see the note above on which URL works */
  scene: string;
};

/*
 * Nothing here paints a background. The scene is authored with BG Color at 0%
 * alpha, so the canvas composites straight onto the hero and the ambient glow
 * shows through behind the model. Forcing a colour — even the page's own
 * surface token — puts an opaque rectangle back over that glow.
 */

export const SplineStage = ({ scene }: SplineStageProps) => {
  // both hosts are hit as soon as the stage is near the viewport; opening the
  // connections during render saves the DNS + TLS round trips off the critical path
  preconnect("https://unpkg.com");
  preconnect("https://prod.spline.design");

  const ref = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<HTMLElement>(null);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        warmScene(scene);
        loadViewer().then(() => setReady(true)).catch(() => setFailed(true));
      },
      { rootMargin: "200px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [scene]);

  /**
   * Spline renders its badge as `<a id="logo">` inside the element's shadow
   * root, which no stylesheet of ours can reach and which exposes no ::part.
   * The only way in is to append a sheet to the shadow root itself. The badge
   * is revealed later, once the scene resolves, so this only needs the root to
   * exist — the rule applies whenever the anchor shows up.
   */
  useEffect(() => {
    if (!ready) return;
    const el = viewerRef.current;
    if (!el) return;

    let raf = 0;
    const inject = () => {
      const root = el.shadowRoot;
      if (!root) {
        raf = requestAnimationFrame(inject);
        return;
      }
      if (root.querySelector("style[data-badge]")) return;
      const sheet = document.createElement("style");
      sheet.setAttribute("data-badge", "");
      sheet.textContent = "#logo { opacity: 0 !important; }";
      root.appendChild(sheet);
    };
    inject();
    return () => cancelAnimationFrame(raf);
  }, [ready]);


  return (
    <div ref={ref} className="relative w-full h-full">
      {/* the bed reads as intentional whether or not the scene ever arrives */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 55% 50%, rgba(76,125,240,0.16) 0%, rgba(32,62,150,0.06) 45%, transparent 72%)",
          filter: "blur(50px)",
        }}
      />

      {/* the element runs its own IntersectionObserver and pauses/resumes itself,
          so `autoplay` is all that is needed to keep the scene running.
          It is pointer-inert (see globals.css) because Spline's camera controls
          swallow wheel and touch, which hijacks page scroll into a camera zoom. */}
      {ready && !failed && (
        <spline-viewer
          ref={viewerRef}
          url={scene}
          autoplay=""
          loading-anim-type="none"
          className="absolute inset-0 w-full h-full animate-[fadeIn_1s_ease-out_forwards]"
          style={{ opacity: 0 }}
        />
      )}
    </div>
  );
};
