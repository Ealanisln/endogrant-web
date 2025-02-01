import { Button } from "@/src/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-gradient-to-br from-teal-500 to-teal-700 overflow-hidden"
    >
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-400 rounded-full opacity-20 blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-300 rounded-full opacity-20 blur-3xl translate-x-1/2 translate-y-1/2" />

      {/* Main content */}
      <div className="container mx-auto px-6 py-20 min-h-screen flex items-center">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Sonrisas brillantes,{" "}
              <span className="text-teal-200">vidas felices</span>
            </h1>
            <p className="text-xl text-teal-50 md:pr-12">
              Cuidamos de tu salud dental con tecnología de vanguardia y un
              equipo experto comprometido con tu bienestar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white/95 text-teal-700 hover:bg-white font-semibold px-8 py-6 text-lg rounded-full shadow-lg shadow-teal-900/20 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                Agenda tu cita
              </Button>
              <Button
                variant="outline"
                className="bg-teal-600/20 backdrop-blur-sm border-2 border-teal-200 text-white hover:text-white hover:bg-teal-600/30 hover:border-white font-semibold px-8 py-6 text-lg rounded-full shadow-lg shadow-teal-900/10 transition-all duration-300"
              >
                Conoce más
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex gap-8 pt-8">
              <div className="text-teal-50">
                <div className="text-3xl font-bold">1000+</div>
                <div className="text-sm opacity-90">Pacientes felices</div>
              </div>
              <div className="text-teal-50">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm opacity-90">Años de experiencia</div>
              </div>
              <div className="text-teal-50">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm opacity-90">Satisfacción</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-teal-600 rounded-full blur-3xl opacity-30" />
            <Image
              src="/hero.png"
              alt="Clínica Dental Moderna"
              width={600}
              height={600}
              className="relative rounded-3xl shadow-2xl"
            />

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center">
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
                    Tecnología avanzada
                  </div>
                  <div className="text-gray-500 text-sm">
                    Equipamiento de última generación
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
