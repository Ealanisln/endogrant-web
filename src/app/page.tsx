// src/app/page.tsx

import { ContactForm } from "@/src/components/Contact";
import { Footer } from "@/src/components/Footer";
import { GallerySection } from "@/src/components/Gallery";
import HeroSection from "@/src/components/Hero";
import { ServicesSection } from "@/src/components/ServicesSection/Section";
import Header from "@/src/components/Header";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <ContactForm />
      <Footer />
    </div>
  )
}