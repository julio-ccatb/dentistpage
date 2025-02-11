import { Header } from "@/components/header";
import { AboutHero } from "@/components/sections/about-hero";
import { CtaSection } from "@/components/sections/cta-section";
import { DoctorProfile } from "@/components/sections/doctor-profile";
import { Expertise } from "@/components/sections/expertise";
import { FooterSection } from "@/components/sections/footer-section";
import { Testimonials } from "@/components/sections/testimonials";
import { Timeline } from "@/components/sections/timeline";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre la Dra. Ofara Pacheco | Experta en Implantología Avanzada",
  description:
    "Conozca a la Dra. Ofara Pacheco, implantóloga y periodoncista con más de una década de experiencia. Especializada en implantes de carga inmediata y regeneración ósea.",
  keywords:
    "Dra. Ofara Pacheco, implantóloga, periodoncista, implantes dentales avanzados, regeneración ósea, Santo Domingo",
  openGraph: {
    title: "Sobre la Dra. Ofara Pacheco | Experta en Implantología Avanzada",
    description:
      "Conozca a la Dra. Ofara Pacheco, implantóloga y periodoncista con más de una década de experiencia. Especializada en implantes de carga inmediata y regeneración ósea.",
    url: "https://www.drapacheco.com/about",
    siteName: "Clínica Dental Dra. Ofara Pacheco",
    images: [
      {
        url: "https://www.drapacheco.com/dra2.jpg",
        width: 1200,
        height: 630,
        alt: "Dra. Ofara Pacheco realizando un procedimiento de implantología",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre la Dra. Ofara Pacheco | Experta en Implantología Avanzada",
    description:
      "Conozca a la Dra. Ofara Pacheco, implantóloga y periodoncista con más de una década de experiencia. Especializada en implantes de carga inmediata y regeneración ósea.",
    images: ["https://www.drapacheco.com/dra.jpg"],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <AboutHero />
      <DoctorProfile />
      <Expertise />
      <Timeline />
      <Testimonials />
      <CtaSection />
      <FooterSection />
    </div>
  );
}
