import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Preloader } from "@/components/sunitajesh/preloader";
import { SiteNav } from "@/components/sunitajesh/site-nav";
import { SiteFooter } from "@/components/sunitajesh/site-footer";
import { ProjectHero } from "@/components/sunitajesh/work/project-hero";
import { ProjectMetaStrip } from "@/components/sunitajesh/work/project-meta";
import { ProjectOverview } from "@/components/sunitajesh/work/project-overview";
import { ProjectProcess } from "@/components/sunitajesh/work/project-process";
import { ProjectPanels } from "@/components/sunitajesh/work/project-panels";
import { ProjectClosing } from "@/components/sunitajesh/work/project-closing";
import { ProjectNext } from "@/components/sunitajesh/work/project-next";
import { WORK_PROJECTS } from "@/components/sunitajesh/sunita-content";

export const generateStaticParams = () => WORK_PROJECTS.map((p) => ({ slug: p.slug }));

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
  const { slug } = await params;
  const project = WORK_PROJECTS.find((p) => p.slug === slug);
  if (!project) return { title: "Work | Sunitajesh" };
  return { title: `${project.title} | Sunitajesh`, description: project.subtitle };
};

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = WORK_PROJECTS.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = WORK_PROJECTS[index];
  // wrap around so the last project points back at the first
  const next = WORK_PROJECTS[(index + 1) % WORK_PROJECTS.length];

  return (
    <div className="bg-darkgrey min-h-screen">
      <Preloader />
      <SiteNav />
      <ProjectHero project={project} index={index} total={WORK_PROJECTS.length} />
      <ProjectMetaStrip meta={project.meta} />
      <ProjectOverview overview={project.overview} stats={project.stats} />
      <ProjectProcess images={project.gallery} title={project.title} />
      <ProjectPanels panels={project.panels} />
      <ProjectClosing image={project.closingImage} body={project.closing} title={project.title} />
      <ProjectNext project={next} />
      <SiteFooter />
    </div>
  );
}
