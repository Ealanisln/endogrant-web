// src/app/page.tsx

import type { Metadata } from 'next'

import { ContactForm } from "@/src/components/Contact";
import { Footer } from "@/src/components/Footer";
import { GallerySection } from "@/src/components/Gallery";
import HeroSection from "@/src/components/Hero";
import { ServicesSection } from "@/src/components/ServicesSection/Section";
import Header from "@/src/components/Header";
import { TestimonialsSection } from "@/src/components/Testimonials";

export const metadata: Metadata = {
  title: "Clínica EndoGrant | Dra. Gloria Z. Castañeda Grant | Especialista en Endodoncia",
  description: "Centro odontológico especializado en endodoncia, limpieza dental, odontología preventiva, resinas, extracciones, prótesis, implantes y ortodoncia en León, Guanajuato. ¡Agenda tu cita ahora!",
  keywords: ["endodoncia", "limpieza dental", "odontología preventiva", "resinas", "extracciones", "prótesis dental", "implantes dentales", "ortodoncia", "León Guanajuato", "Dra. Gloria Z. Castañeda Grant", "Clínica EndoGrant"],
  alternates: {
    canonical: 'https://clinicaendogrant.com',
    languages: {
      'es-MX': 'https://clinicaendogrant.com',
    },
  },
  authors: [
    { name: "Clínica EndoGrant", url: "https://clinicaendogrant.com/equipo" }
  ],
  creator: "Clínica EndoGrant",
  publisher: "Clínica EndoGrant",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Clínica EndoGrant | Dra. Gloria Z. Castañeda Grant | Especialista en Endodoncia",
    description: "Atención dental profesional: limpieza dental, odontología preventiva, resinas, extracciones, prótesis fija y removible, implantes y ortodoncia. ¡Agenda tu cita ahora!",
    url: 'https://clinicaendogrant.com',
    siteName: 'Clínica EndoGrant',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: 'https://clinicaendogrant.com/images/clinica-dental-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Clínica EndoGrant - Especialistas en Endodoncia y Tratamientos Dentales',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clínica EndoGrant | Especialistas en Endodoncia',
    description: 'Transforma tu sonrisa con nuestros tratamientos personalizados en León, Guanajuato. Primera consulta gratuita este mes.',
    creator: '@ClinicaEndoGrant',
    images: ['https://clinicaendogrant.com/images/clinica-dental-twitter.jpg'],
  },
  category: 'Servicios de salud dental',
  applicationName: 'Clínica EndoGrant',
  other: {
    'fb:app_id': '123456789',
    'og:priceRange': '$$',
    'business:contact_data:street_address': 'Av. Panorama 205 Col. Panorama',
    'business:contact_data:locality': 'León',
    'business:contact_data:region': 'Guanajuato',
    'business:contact_data:postal_code': '37160',
    'business:contact_data:country_name': 'México',
    'business:contact_data:email': 'endogrant@yahoo.com.mx',
    'business:contact_data:phone_number': '+52 477 327 4282',
    'place:location:latitude': '21.1213',
    'place:location:longitude': '-101.6812',
  }
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <HeroSection />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ServicesSection />
        <TestimonialsSection />
        <GallerySection />
        <ContactForm />
      </div>
      <Footer />
    </div>
  )
}