import { Button } from "@/src/components/ui/button";
import Image from "next/image";
import { Smile, Shield, Clock, Award } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-gradient-to-br from-blue-500 to-teal-400 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full opacity-20 blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-300 rounded-full opacity-20 blur-3xl translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-white rounded-full opacity-10 blur-2xl" />
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-white rounded-full opacity-10 blur-2xl" />

      {/* Main content */}
      <div className="container mx-auto px-6 py-20 min-h-screen flex items-center">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-8">
            <div className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-2">
              Dra. Gloria Z. Castañeda Grant · Especialista en Endodoncia
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Clínica <br />
              <span className="text-blue-100">EndoGrant</span>
            </h1>
            <p className="text-xl text-blue-50 md:pr-12">
              Cuidamos de tu salud dental con tecnología de vanguardia y un
              equipo experto comprometido con tu bienestar y comodidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white/95 text-blue-600 hover:bg-white font-semibold px-8 py-6 text-lg rounded-full shadow-lg shadow-blue-900/20 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                Agenda tu cita
              </Button>
              <Button
                variant="outline"
                className="bg-blue-600/20 backdrop-blur-sm border-2 border-blue-200 text-white hover:text-white hover:bg-blue-600/30 hover:border-white font-semibold px-8 py-6 text-lg rounded-full shadow-lg shadow-blue-900/10 transition-all duration-300"
              >
                Conoce más
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                <div className="flex justify-center mb-2">
                  <Smile className="w-6 h-6 text-blue-100" />
                </div>
                <div className="text-2xl font-bold text-white">2000+</div>
                <div className="text-xs text-blue-100">Pacientes satisfechos</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                <div className="flex justify-center mb-2">
                  <Shield className="w-6 h-6 text-blue-100" />
                </div>
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-xs text-blue-100">Calidad garantizada</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                <div className="flex justify-center mb-2">
                  <Clock className="w-6 h-6 text-blue-100" />
                </div>
                <div className="text-2xl font-bold text-white">10+</div>
                <div className="text-xs text-blue-100">Años de experiencia</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                <div className="flex justify-center mb-2">
                  <Award className="w-6 h-6 text-blue-100" />
                </div>
                <div className="text-2xl font-bold text-white">Marca</div>
                <div className="text-xs text-blue-100">GTO Guanajuato</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-teal-300 rounded-full blur-3xl opacity-30" />
            <div className="relative z-10 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm p-3 rounded-3xl border border-white/20 shadow-2xl">
              <Image
                src="/hero.png"
                alt="Dra. Ana Martínez"
                width={600}
                height={600}
                className="relative rounded-2xl shadow-inner"
              />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl z-20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-gray-800 font-semibold">
                    Trato personalizado
                  </div>
                  <div className="text-gray-500 text-sm">
                    Experiencia sin dolor
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          className="w-full h-auto fill-white"
          preserveAspectRatio="none"
        >
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
}
