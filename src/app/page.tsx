import { Header } from "@/components/header";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { FooterSection } from "@/components/sections/footer-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Dra. Ofara Pacheco | Implantóloga y Periodoncista en Madrid",
  description:
    "Especialista en implantología avanzada y periodoncia. Transformamos sonrisas con tecnología de vanguardia y atención personalizada en Madrid.",
  keywords:
    "implantes dentales, periodoncia, implantología avanzada, dentista Madrid, Dra. Ofara Pacheco",
  openGraph: {
    title: "Dra. Ofara Pacheco | Implantóloga y Periodoncista en Madrid",
    description:
      "Especialista en implantología avanzada y periodoncia. Transformamos sonrisas con tecnología de vanguardia y atención personalizada.",
    url: "https://www.drapacheco.com",
    siteName: "Clínica Dental Dra. Ofara Pacheco",
    images: [
      {
        url: "https://www.drapacheco.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dra. Ofara Pacheco en su clínica dental",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dra. Ofara Pacheco | Implantóloga y Periodoncista en Madrid",
    description:
      "Especialista en implantología avanzada y periodoncia. Transformamos sonrisas con tecnología de vanguardia y atención personalizada.",
    images: ["https://www.drapacheco.com/twitter-image.jpg"],
  },
};

export default async function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
