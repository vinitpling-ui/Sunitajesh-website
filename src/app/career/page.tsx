import type { Metadata } from "next";
import { Preloader } from "@/components/sunitajesh/preloader";
import { SiteNav } from "@/components/sunitajesh/site-nav";
import { SiteFooter } from "@/components/sunitajesh/site-footer";
import { CareerHero } from "@/components/sunitajesh/career/career-hero";
import { CareerValues } from "@/components/sunitajesh/career/career-values";
import { CareerRoles } from "@/components/sunitajesh/career/career-roles";
import { CareerPerks } from "@/components/sunitajesh/career/career-perks";
import { CareerProcess } from "@/components/sunitajesh/career/career-process";
import { CareerCta } from "@/components/sunitajesh/career/career-cta";

export const metadata: Metadata = {
  title: "Careers | Sunitajesh",
  description:
    "At Sunitajesh work isn't just about tasks, it's about growth, collaboration, and impact.",
};

export default function CareerPage() {
  return (
    <div className="bg-darkgrey min-h-screen text-white">
      <Preloader />
      <SiteNav />
      <CareerHero />
      <CareerValues />
      {/* the openings are the reason people land here, so they sit above the perks */}
      <CareerRoles />
      <CareerProcess />
      <CareerPerks />
      <CareerCta />
      <SiteFooter />
    </div>
  );
}
