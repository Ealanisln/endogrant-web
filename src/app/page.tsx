import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Github, Linkedin, ExternalLink, Code, Database, Globe, AlertTriangle } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Schema Markup para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Emmanuel Alanis",
            "jobTitle": "Desarrollador Full Stack",
            "description": "Desarrollador Full Stack especializado en Next.js, React y TypeScript",
            "url": "https://alanis.dev",
            "sameAs": [
              "https://github.com/ealanisln",
              "https://www.linkedin.com/in/ealanis/"
            ],
            "knowsAbout": [
              "Next.js",
              "React",
              "TypeScript",
              "Node.js",
              "PostgreSQL",
              "Tailwind CSS",
              "Desarrollo Web",
              "Full Stack Development"
            ],
            "worksFor": {
              "@type": "Organization",
              "name": "Alanis Web Dev"
            },
            "image": "https://alanis.dev/logo.webp",
            "email": "emmanuel@alanis.dev",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "MX"
            }
          })
        }}
      />

      {/* Schema Markup para la organización */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Alanis Web Dev",
            "description": "Empresa de desarrollo web especializada en soluciones digitales modernas",
            "url": "https://alanis.dev",
            "logo": "https://alanis.dev/logo.webp",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "email": "emmanuel@alanis.dev"
            },
            "sameAs": [
              "https://github.com/ealanisln",
              "https://www.linkedin.com/in/ealanis/"
            ]
          })
        }}
      />

      {/* Schema Markup para el proyecto Clínica EndoGrant */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": "Proyecto Clínica EndoGrant",
            "description": "Sitio web completo desarrollado para clínica dental especializada",
            "creator": {
              "@type": "Person",
              "name": "Emmanuel Alanis"
            },
            "dateCreated": "2024",
            "genre": "Sitio Web",
            "keywords": ["clínica dental", "sistema de citas", "panel administrativo", "Next.js", "React"],
            "image": "https://alanis.dev/images/clinica-dental-og.jpg"
          })
        }}
      />

      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-primary-foreground" aria-hidden="true" />
            </div>
            <span className="text-xl font-bold text-foreground">Alanis Web Dev</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6" role="navigation" aria-label="Navegación principal">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              Sobre mí
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Proyectos
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contacto
            </a>
          </nav>
          <Button asChild>
            <a href="#contact">Trabajemos juntos</a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4" role="banner" aria-labelledby="hero-title">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 id="hero-title" className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Transformando Ideas en Soluciones Digitales
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Desarrollador Full Stack especializado en crear aplicaciones web modernas y escalables con Next.js, React y
            TypeScript
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="#projects">Ver mi trabajo</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Contactar</a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-muted/30" aria-labelledby="about-title">
        <div className="container mx-auto max-w-6xl">
          <h2 id="about-title" className="text-3xl md:text-4xl font-bold text-center mb-12">Sobre mí</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Soy un desarrollador Full Stack apasionado por crear experiencias digitales excepcionales. Me
                especializo en tecnologías modernas como Next.js, React, TypeScript y Tailwind CSS.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Mi enfoque se centra en entregar soluciones de alta calidad que no solo cumplan con los requisitos
                técnicos, sino que también proporcionen una experiencia de usuario excepcional.
              </p>
              <div className="flex flex-wrap gap-2" role="list" aria-label="Tecnologías dominadas">
                <Badge variant="secondary" role="listitem">Next.js 14</Badge>
                <Badge variant="secondary" role="listitem">React 18</Badge>
                <Badge variant="secondary" role="listitem">TypeScript</Badge>
                <Badge variant="secondary" role="listitem">Tailwind CSS</Badge>
                <Badge variant="secondary" role="listitem">Node.js</Badge>
                <Badge variant="secondary" role="listitem">PostgreSQL</Badge>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card>
                <CardHeader className="pb-3">
                  <Globe className="w-8 h-8 text-primary mb-2" aria-hidden="true" />
                  <CardTitle className="text-lg">Frontend</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Interfaces modernas y responsivas</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <Database className="w-8 h-8 text-primary mb-2" aria-hidden="true" />
                  <CardTitle className="text-lg">Backend</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">APIs robustas y escalables</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4" aria-labelledby="projects-title">
        <div className="container mx-auto max-w-6xl">
          <h2 id="projects-title" className="text-3xl md:text-4xl font-bold text-center mb-12">Proyectos Destacados</h2>

          {/* Featured Project - Clínica EndoGrant */}
          <Card className="mb-8 border-2 border-primary/20">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl mb-2">Proyecto Clínica EndoGrant</CardTitle>
                  <CardDescription className="text-lg">
                    Sitio web completo desarrollado para clínica dental especializada
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2 text-amber-600">
                  <AlertTriangle className="w-5 h-5" aria-hidden="true" />
                  <Badge variant="outline" className="border-amber-600 text-amber-600">
                    No publicado
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-3 text-lg">Características del proyecto:</h4>
                  <ul className="space-y-2 text-muted-foreground mb-6" role="list" aria-label="Características del proyecto">
                    <li role="listitem">• Sistema de citas online integrado</li>
                    <li role="listitem">• Panel administrativo completo</li>
                    <li role="listitem">• Diseño responsive y moderno</li>
                    <li role="listitem">• Optimización SEO avanzada</li>
                    <li role="listitem">• Integración con sistemas de pago</li>
                  </ul>

                  <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600" aria-hidden="true" />
                      <span className="font-medium text-amber-800 dark:text-amber-200">Estado del Proyecto</span>
                    </div>
                    <p className="text-sm text-amber-700 dark:text-amber-300">
                      Proyecto completado pero no publicado por falta de acuerdo comercial. Disponible para demostración
                      bajo solicitud.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-lg">Tecnologías utilizadas:</h4>
                  <div className="grid grid-cols-2 gap-3 mb-6" role="list" aria-label="Tecnologías utilizadas">
                    <div className="flex items-center gap-2" role="listitem">
                      <div className="w-2 h-2 bg-primary rounded-full" aria-hidden="true"></div>
                      <span className="text-sm">Next.js 14</span>
                    </div>
                    <div className="flex items-center gap-2" role="listitem">
                      <div className="w-2 h-2 bg-primary rounded-full" aria-hidden="true"></div>
                      <span className="text-sm">React 18</span>
                    </div>
                    <div className="flex items-center gap-2" role="listitem">
                      <div className="w-2 h-2 bg-primary rounded-full" aria-hidden="true"></div>
                      <span className="text-sm">TypeScript</span>
                    </div>
                    <div className="flex items-center gap-2" role="listitem">
                      <div className="w-2 h-2 bg-primary rounded-full" aria-hidden="true"></div>
                      <span className="text-sm">Tailwind CSS</span>
                    </div>
                  </div>

                  <blockquote className="text-sm text-muted-foreground italic">
                    &ldquo;Este proyecto demuestra mi capacidad para crear soluciones completas y profesionales, desde el
                    diseño hasta la implementación técnica.&rdquo;
                  </blockquote>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-muted/30" aria-labelledby="contact-title">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 id="contact-title" className="text-3xl md:text-4xl font-bold mb-6">¿Listo para tu próximo proyecto?</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Contacta conmigo para discutir cómo puedo ayudarte a llevar tu idea al siguiente nivel
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Mail className="w-8 h-8 text-primary mx-auto mb-2" aria-hidden="true" />
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="mailto:emmanuel@alanis.dev" className="text-primary hover:underline">
                  emmanuel@alanis.dev
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Github className="w-8 h-8 text-primary mx-auto mb-2" aria-hidden="true" />
                <CardTitle>GitHub</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="https://github.com/ealanisln" className="text-primary hover:underline flex items-center justify-center gap-1">
                  Ver repositorios <ExternalLink className="w-4 h-4" aria-hidden="true" />
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Linkedin className="w-8 h-8 text-primary mx-auto mb-2" aria-hidden="true" />
                <CardTitle>LinkedIn</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="https://www.linkedin.com/in/ealanis/" className="text-primary hover:underline flex items-center justify-center gap-1">
                  Conectar <ExternalLink className="w-4 h-4" aria-hidden="true" />
                </a>
              </CardContent>
            </Card>
          </div>

          <Button size="lg" asChild>
            <a href="mailto:emmanuel@alanis.dev">Iniciar conversación</a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4" role="contentinfo">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-primary rounded-lg flex items-center justify-center">
              <Code className="w-4 h-4 text-primary-foreground" aria-hidden="true" />
            </div>
            <span className="font-bold">Alanis Web Dev</span>
          </div>
          <p className="text-muted-foreground text-sm mb-2">© 2024 Alanis Web Dev. Todos los derechos reservados.</p>
          <p className="text-muted-foreground text-sm">Desarrollado con ❤️ y Next.js</p>
        </div>
      </footer>
    </div>
  )
}
