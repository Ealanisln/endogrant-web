// src/app/page.tsx

import type { Metadata } from 'next'
import { Mail, Briefcase, Heart } from 'lucide-react'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "Alanis Web Dev - Full Stack Developer | Proyecto Clínica EndoGrant",
  description: "Sitio web desarrollado por Alanis Web Dev (Full Stack Developer) para Clínica EndoGrant. Proyecto no publicado por falta de acuerdo comercial. Desarrollo web profesional disponible.",
  keywords: ["desarrollo web", "full stack developer", "Next.js", "React", "TypeScript", "clínica dental", "Alanis Web Dev"],
  alternates: {
    canonical: 'https://alanis.dev',
    languages: {
      'es-MX': 'https://alanis.dev',
    },
  },
  authors: [
    { name: "Alanis Web Dev", url: "https://alanis.dev" }
  ],
  openGraph: {
    title: "Alanis Web Dev - Full Stack Developer | Proyecto Clínica EndoGrant",
    description: "Sitio web desarrollado por Alanis Web Dev para Clínica EndoGrant. Desarrollo web profesional disponible.",
    url: 'https://alanis.dev',
    siteName: 'Alanis Web Dev',
    images: [
      {
        url: '/alanis-logo.png',
        width: 1200,
        height: 630,
        alt: 'Alanis Web Dev Logo',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Alanis Web Dev - Full Stack Developer | Proyecto Clínica EndoGrant",
    description: "Sitio web desarrollado por Alanis Web Dev para Clínica EndoGrant. Desarrollo web profesional disponible.",
    images: ['/alanis-logo.png'],
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <a 
                href="https://alanis.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/alanis-logo.png"
                  alt="Alanis Web Dev Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <span className="text-xl font-bold text-slate-900">Alanis Web Dev</span>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="mailto:emmanuel@alanis.dev"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-slate-600 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contactar
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Proyecto{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Clínica EndoGrant
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Sitio web completo desarrollado por{' '}
              <a 
                href="https://alanis.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 hover:text-blue-700 underline"
              >
                Alanis Web Dev
              </a>{' '}
              (Full Stack Developer)
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <div className="text-left">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                <Briefcase className="w-6 h-6 mr-3 text-blue-600" />
                Estado del Proyecto
              </h2>
              <div className="space-y-4">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-800 font-medium">
                    ⚠️ Proyecto no publicado por falta de acuerdo comercial
                  </p>
                </div>
  
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Tecnologías Utilizadas
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Next.js 14', description: 'Framework React con App Router' },
              { name: 'React 18', description: 'Biblioteca de interfaz de usuario' },
              { name: 'TypeScript', description: 'Tipado estático para JavaScript' },
              { name: 'Tailwind CSS', description: 'Framework CSS utility-first' },
            ].map((tech) => (
              <div key={tech.name} className="text-center p-6 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                <h3 className="font-semibold text-slate-900 mb-2">{tech.name}</h3>
                <p className="text-sm text-slate-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            ¿Buscas desarrollo web profesional?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Contáctame para discutir tu próximo proyecto
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:emmanuel@alanis.dev"
              className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              emmanuel@alanis.dev
            </a>
            <a
              href="https://www.alanis.dev/portafolio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 border border-slate-300 text-lg font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-colors"
            >
              <Briefcase className="w-5 h-5 mr-2" />
              Visitar Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <a 
                href="https://alanis.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/alanis-logo.png"
                  alt="Alanis Web Dev Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <span className="text-lg font-semibold">Alanis Web Dev</span>
              </a>
            </div>
            <div className="text-center md:text-right">
              <p className="text-slate-400 mb-2">
                © 2024 Alanis Web Dev. Todos los derechos reservados.
              </p>
              <p className="text-sm text-slate-500">
                Desarrollado con <Heart className="inline w-4 h-4 text-red-500" /> y Next.js
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}