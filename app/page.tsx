import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Image src="/placeholder.svg?height=40&width=40" alt="Logo" width={40} height={40} className="rounded-full" />
            <span className="text-xl font-bold text-teal-600">Endogrant</span>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#inicio" className="text-gray-600 hover:text-teal-600">Inicio</a></li>
              <li><a href="#servicios" className="text-gray-600 hover:text-teal-600">Servicios</a></li>
              <li><a href="#galeria" className="text-gray-600 hover:text-teal-600">Galería</a></li>
              <li><a href="#contacto" className="text-gray-600 hover:text-teal-600">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="bg-teal-500 text-white py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sonrisas brillantes, vidas felices</h1>
            <p className="text-xl mb-6">Cuidamos de tu salud dental con tecnología de vanguardia y un equipo experto.</p>
            <Button className="bg-white text-teal-600 hover:bg-teal-100">Agenda tu cita</Button>
          </div>
          <div className="md:w-1/2">
            <Image src="/placeholder.svg?height=400&width=600" alt="Clínica Dental" width={600} height={400} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Limpieza Dental', 'Blanqueamiento', 'Ortodoncia', 'Implantes', 'Endodoncia', 'Odontopediatría'].map((servicio, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Image src={`/placeholder.svg?height=50&width=50&text=${index + 1}`} alt={servicio} width={50} height={50} className="mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-teal-600">{servicio}</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Galería</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(8)].map((_, index) => (
              <Image key={index} src={`/placeholder.svg?height=200&width=300&text=Imagen ${index + 1}`} alt={`Imagen ${index + 1}`} width={300} height={200} className="rounded-lg shadow-md hover:shadow-lg transition-shadow" />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contacto" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Contáctanos</h2>
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <Input type="text" placeholder="Nombre completo" />
            </div>
            <div className="mb-4">
              <Input type="email" placeholder="Correo electrónico" />
            </div>
            <div className="mb-4">
              <Input type="tel" placeholder="Teléfono" />
            </div>
            <div className="mb-4">
              <Textarea placeholder="Mensaje" />
            </div>
            <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white">Enviar mensaje</Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-2">Endogrant</h3>
              <p>Cuidando tu sonrisa desde 2005</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-2">Contacto</h3>
              <p>123 Calle Principal, Ciudad</p>
              <p>Teléfono: (123) 456-7890</p>
              <p>Email: info@Endogrant.com</p>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-xl font-semibold mb-2">Síguenos</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-teal-400">Facebook</a>
                <a href="#" className="hover:text-teal-400">Instagram</a>
                <a href="#" className="hover:text-teal-400">Twitter</a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2023 Endogrant. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}