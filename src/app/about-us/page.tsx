import type { Metadata } from "next";
import { Preloader } from "@/components/sunitajesh/preloader";
import { SiteNav } from "@/components/sunitajesh/site-nav";
import { AboutHero } from "@/components/sunitajesh/about/about-hero";
import { AboutMarquee } from "@/components/sunitajesh/about/about-marquee";
import { AboutManifesto } from "@/components/sunitajesh/about/about-manifesto";
import { AboutValues } from "@/components/sunitajesh/about/about-values";
import { AboutProcess } from "@/components/sunitajesh/about/about-process";
import { AboutStats } from "@/components/sunitajesh/about/about-stats";
import { CtaSection } from "@/components/sunitajesh/cta-section";
import { SiteFooter } from "@/components/sunitajesh/site-footer";

export const metadata: Metadata = {
  title: "About | Sunitajesh",
  description:
    "A technology and advisory firm that closes the gap between an idea and a working business. Strategy, engineering and finance under one roof.",
};

export default function AboutPage() {
  return (
    <div className="bg-darkgrey min-h-screen text-white">
      <Preloader />
      <SiteNav />
      <AboutHero />
      <AboutMarquee />
      <AboutManifesto />
      <AboutValues />
      <AboutProcess />
      <AboutStats />
      <CtaSection />
      <SiteFooter />
    </div>
  );
}
