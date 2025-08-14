import type React from "react"
import type { Metadata, Viewport } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"
import Analytics from "./analytics"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://alanis.dev'),
  title: {
    default: "Alanis Web Dev - Desarrollador Full Stack Profesional",
    template: "%s | Alanis Web Dev"
  },
  description:
    "Desarrollador Full Stack especializado en Next.js, React y TypeScript. Transformando ideas en soluciones digitales profesionales. Experto en desarrollo web moderno y escalable.",
  keywords: [
    "desarrollador full stack",
    "Next.js",
    "React",
    "TypeScript",
    "desarrollo web",
    "programador",
    "frontend",
    "backend",
    "PostgreSQL",
    "Tailwind CSS",
    "desarrollo de aplicaciones",
    "consultoría tecnológica"
  ],
  authors: [{ name: "Emmanuel Alanis", url: "https://alanis.dev" }],
  creator: "Emmanuel Alanis",
  publisher: "Alanis Web Dev",
  generator: "Next.js",
  applicationName: "Alanis Web Dev Portfolio",
  referrer: "origin-when-cross-origin",
  verification: {
    google: "tu-codigo-verificacion-google", // Reemplazar con tu código real
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://alanis.dev",
    languages: {
      "es-ES": "https://alanis.dev",
      "en-US": "https://alanis.dev/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://alanis.dev",
    siteName: "Alanis Web Dev",
    title: "Alanis Web Dev - Desarrollador Full Stack Profesional",
    description: "Desarrollador Full Stack especializado en Next.js, React y TypeScript. Transformando ideas en soluciones digitales profesionales.",
    images: [
      {
        url: "/images/clinica-dental-og.jpg",
        width: 1200,
        height: 630,
        alt: "Alanis Web Dev - Portfolio Profesional",
        type: "image/jpeg",
      },
      {
        url: "/logo.webp",
        width: 512,
        height: 512,
        alt: "Logo Alanis Web Dev",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ealanisln", // Reemplazar con tu handle real
    creator: "@ealanisln", // Reemplazar con tu handle real
    title: "Alanis Web Dev - Desarrollador Full Stack Profesional",
    description: "Desarrollador Full Stack especializado en Next.js, React y TypeScript. Transformando ideas en soluciones digitales profesionales.",
    images: ["/images/clinica-dental-twitter.jpg"],
  },
  category: "technology",
  classification: "Portfolio profesional de desarrollo web",
  other: {
    "msapplication-TileColor": "#000000",
    "msapplication-config": "/browserconfig.xml",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Alanis Web Dev",
    "format-detection": "telephone=no",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" }
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={dmSans.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo.webp" type="image/webp" />
        <link rel="apple-touch-icon" href="/logo.webp" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
