import type { Metadata } from "next";
import { Header } from "@/components/header";
import ServicesHero from "@/components/sections/services-hero";
import { FooterSection } from "@/components/sections/footer-section";

import { TreatmentSelector } from "@/components/sections/treatment-selector";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Servicios de Implantología y Periodoncia | Dra. Ofara Pacheco",
  description:
    "Explore nuestros servicios especializados en implantología avanzada y periodoncia. Desde implantes de carga inmediata hasta regeneración ósea, ofrecemos soluciones personalizadas para su salud bucal.",
  keywords:
    "implantes dentales, periodoncia, regeneración ósea, carga inmediata, tratamientos dentales avanzados",
  openGraph: {
    title: "Servicios de Implantología y Periodoncia | Dra. Ofara Pacheco",
    description:
      "Explore nuestros servicios especializados en implantología avanzada y periodoncia. Soluciones personalizadas para su salud bucal.",
    url: "https://www.draofara.com/services",
    siteName: "Clínica Dental Dra. Ofara Pacheco",
    images: [
      {
        url: "https://www.draofara.com/services-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Servicios de implantología y periodoncia avanzada",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicios de Implantología y Periodoncia | Dra. Ofara Pacheco",
    description:
      "Explore nuestros servicios especializados en implantología avanzada y periodoncia. Soluciones personalizadas para su salud bucal.",
    images: ["https://www.draofara.com/services-twitter-image.jpg"],
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ServicesHero />

      <TreatmentSelector />
      <CtaSection />
      <FooterSection />
    </div>
  );
}
