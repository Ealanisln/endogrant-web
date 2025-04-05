import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-900 to-blue-950 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="Endogrant Logo" width={48} height={48} className="bg-white p-1 rounded-full" />
              <h3 className="text-2xl font-bold text-white">Clínica EndoGrant</h3>
            </div>
            <p className="text-blue-200 pr-8">
              Especialistas en endodoncia y servicios dentales integrales. Cuidamos tu salud bucal con tecnología de vanguardia y profesionalismo.
            </p>
            <div className="flex items-center gap-2 text-blue-200">
              <Phone className="w-5 h-5" />
              <span>477-327-42-82</span>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white border-b border-blue-700 pb-2 mb-4">Enlaces rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#inicio" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#testimonios" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                  Testimonios
                </Link>
              </li>
              <li>
                <Link href="#galeria" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                  Galería
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white border-b border-blue-700 pb-2 mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-blue-200">
                <MapPin className="w-5 h-5 text-blue-300 flex-shrink-0 mt-1" />
                <span>Av. Panorama 205 Col. Panorama, 37160 León, Gto.</span>
              </li>
              <li className="flex items-center gap-3 text-blue-200">
                <Phone className="w-5 h-5 text-blue-300 flex-shrink-0" />
                <span>477-327-42-82</span>
              </li>
              <li className="flex items-center gap-3 text-blue-200">
                <Mail className="w-5 h-5 text-blue-300 flex-shrink-0" />
                <span>endogrant@yahoo.com.mx</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white border-b border-blue-700 pb-2 mb-4">Horario</h3>
            <ul className="space-y-3 text-blue-200">
              <li className="flex justify-between">
                <span>Previa cita y urgencias</span>
                <span>477-327-42-82</span>
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-white pt-4 border-b border-blue-700 pb-2 mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-800 p-2 rounded-full hover:bg-blue-700 transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-blue-800 p-2 rounded-full hover:bg-blue-700 transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-blue-800 p-2 rounded-full hover:bg-blue-700 transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-blue-800 text-center text-blue-300">
          <p>&copy; {new Date().getFullYear()} Endogrant. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
  