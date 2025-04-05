import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { Textarea } from "@/src/components/ui/textarea"
import { Mail, MapPin, Phone, Clock } from "lucide-react"

export function ContactForm() {
  return (
    <section id="contacto" className="py-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Contáctanos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aquí para responder tus preguntas y ayudarte a programar tu cita.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Información de contacto</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Dirección</h4>
                    <p className="text-gray-600">Av. Panorama 205 Col. Panorama, 37160 León, Gto.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Teléfono</h4>
                    <p className="text-gray-600">477-327-42-82</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">endogrant@yahoo.com.mx</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Horario</h4>
                    <p className="text-gray-600">Previa cita y urgencias</p>
                    <p className="text-gray-600">477-327-42-82</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mapa o imagen de ubicación */}
            <div className="aspect-video w-full bg-gray-100 rounded-lg overflow-hidden">
              {/* Aquí puedes agregar un mapa o una imagen de la ubicación */}
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Envíanos un mensaje</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre
                  </label>
                  <Input id="nombre" placeholder="Tu nombre" />
                </div>
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <Input id="telefono" placeholder="Tu teléfono" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <Input id="email" type="email" placeholder="Tu email" />
              </div>
              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje
                </label>
                <Textarea
                  id="mensaje"
                  placeholder="¿En qué podemos ayudarte?"
                  className="min-h-[120px]"
                />
              </div>
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                Enviar mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
