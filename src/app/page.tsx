import { Preloader } from "@/components/sunitajesh/preloader";
import { SiteNav } from "@/components/sunitajesh/site-nav";
import { HeroSection } from "@/components/sunitajesh/hero-section";
import { LogoWallSection } from "@/components/sunitajesh/logo-wall-section";
import { TickerStrip } from "@/components/sunitajesh/ticker-strip";
import { AboutUsSection } from "@/components/sunitajesh/about-us-section";
import { FeaturedWorkSection } from "@/components/sunitajesh/featured-work-section";
import { WhyUsSection } from "@/components/sunitajesh/why-us-section";
import { ServicesPanels, ServicesPanelsMobile } from "@/components/sunitajesh/services-panels";
import { HowWeWorkSection } from "@/components/sunitajesh/how-we-work-section";
import { FaqSection } from "@/components/sunitajesh/faq-section";
import { ProjectGallery } from "@/components/sunitajesh/project-gallery";
import { CtaSection } from "@/components/sunitajesh/cta-section";
import { SiteFooter } from "@/components/sunitajesh/site-footer";

export default function Home() {
  return (
    <>
      <Preloader />
      <SiteNav />
      <HeroSection />
      <LogoWallSection />
      <TickerStrip />
      {/* what we've shipped -> who we are */}
      <FeaturedWorkSection />
      <AboutUsSection />
      {/* what we offer (same content, two layouts) -> how we deliver it -> why us */}
      <ServicesPanelsMobile />
      <ServicesPanels />
      <HowWeWorkSection />
      <WhyUsSection />
      <FaqSection />
      <ProjectGallery />
      <CtaSection />
      <SiteFooter />
    </>
  );
}
