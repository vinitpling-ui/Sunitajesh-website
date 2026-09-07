import type { Metadata } from "next";
import { Preloader } from "@/components/sunitajesh/preloader";
import { SiteNav } from "@/components/sunitajesh/site-nav";
import { SiteFooter } from "@/components/sunitajesh/site-footer";
import { CtaSection } from "@/components/sunitajesh/cta-section";
import { WorkHeader } from "@/components/sunitajesh/work/work-header";
import { WorkCard } from "@/components/sunitajesh/work/work-card";
import { WorkSoonTile } from "@/components/sunitajesh/work/work-soon-tile";
import { WORK_PROJECTS } from "@/components/sunitajesh/sunita-content";

export const metadata: Metadata = {
  title: "Portfolio | Sunitajesh",
  description: "Selected projects — branding, product design and platform work.",
};

export default function WorkPage() {
  const [featured, ...rest] = WORK_PROJECTS;

  return (
    <div className="bg-darkgrey min-h-screen">
      <Preloader />
      <SiteNav />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 pt-32 sm:pt-36">
        <WorkHeader />

        <div className="mb-2 sm:mb-3">
          <WorkCard project={featured} wide />
        </div>

        {/* the in-progress tile is the last cell, not a band beneath the grid, so
            an odd number of projects still leaves a complete final row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-2 sm:mb-3">
          {rest.map((project, i) => (
            <WorkCard key={project.slug} project={project} delay={i * 0.1} />
          ))}
          <WorkSoonTile />
        </div>
      </div>

      <CtaSection />
      <SiteFooter />
    </div>
  );
}
