import type { Metadata } from "next";
import { Preloader } from "@/components/sunitajesh/preloader";
import { SiteNav } from "@/components/sunitajesh/site-nav";
import { SiteFooter } from "@/components/sunitajesh/site-footer";
import { ModelHero } from "@/components/sunitajesh/model/model-hero";

/* The scene this page loads. ModelHero holds the layout, SplineStage the
   viewer; both are scene-agnostic, so another page only needs its own URL. */
const SCENE = "https://prod.spline.design/4yjgTdskrC6YJ1Au/scene.splinecode";

export const metadata: Metadata = {
  title: "3D Framer | Sunitajesh",
  robots: { index: false, follow: false }, // scratch page, keep it out of search
};

export default function FramerPage() {
  return (
    <div className="bg-darkgrey min-h-screen text-white">
      <Preloader />
      <SiteNav />
      <ModelHero scene={SCENE} />
      <SiteFooter />
    </div>
  );
}
