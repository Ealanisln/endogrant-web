export function Footer() {
    return (
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
    )
  }
  