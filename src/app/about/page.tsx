"use client"

import { Header } from "@/components/header"
import { FooterSection } from "@/components/sections/footer-section"
import { AboutHero } from "@/components/sections/about-hero"
import { DoctorProfile } from "@/components/sections/doctor-profile"
import { Expertise } from "@/components/sections/expertise"
import { Timeline } from "@/components/sections/timeline"
import { Testimonials } from "@/components/sections/testimonials"
import { CtaSection } from "@/components/sections/cta-section"

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
  )
}

