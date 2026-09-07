import type { Metadata } from "next";
import { Preloader } from "@/components/sunitajesh/preloader";
import { SiteNav } from "@/components/sunitajesh/site-nav";
import { SiteFooter } from "@/components/sunitajesh/site-footer";
import { ContactHero } from "@/components/sunitajesh/contact/contact-hero";
import { ContactForm } from "@/components/sunitajesh/contact/contact-form";
import { ContactNext } from "@/components/sunitajesh/contact/contact-next";
import { FaqSection } from "@/components/sunitajesh/faq-section";

export const metadata: Metadata = {
  title: "Contact | Sunitajesh",
  description:
    "Let's discuss your goals and ideas. Our team is ready to craft solutions that work for you.",
};

export default function ContactPage() {
  return (
    <div className="bg-darkgrey min-h-screen text-white">
      <Preloader />
      <SiteNav />
      <ContactHero />
      <ContactForm />
      <ContactNext />
      <FaqSection />
      <SiteFooter />
    </div>
  );
}
