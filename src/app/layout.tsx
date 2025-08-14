// src/app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/src/app/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alanis Web Dev - Full Stack Developer | Portfolio",
  description:
    "Alanis Web Dev es un Full Stack Developer especializado en Next.js, React, TypeScript y desarrollo web moderno. Portfolio y proyectos disponibles.",
  keywords: [
    "Alanis Web Dev",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "desarrollo web",
    "portfolio",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
