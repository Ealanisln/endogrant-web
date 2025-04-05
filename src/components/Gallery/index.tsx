import Image from 'next/image'

export function GallerySection() {
  // Imágenes de muestra de odontología
  const images = [
    {
      url: '/image1.jpg',
      alt: 'Consultorio moderno',
      caption: 'Instalaciones de vanguardia'
    },
    {
      url: '/image2.jpg',
      alt: 'Tratamiento dental',
      caption: 'Procedimientos con precisión'
    },
    {
      url: '/image3.jpg',
      alt: 'Sonrisa perfecta',
      caption: 'Resultados brillantes'
    },
    {
      url: '/image4.jpg',
      alt: 'Equipo dental',
      caption: 'Tecnología avanzada'
    },
    {
      url: '/image5.jpg',
      alt: 'Paciente feliz',
      caption: 'Satisfacción garantizada'
    },
    {
      url: '/image6.jpg',
      alt: 'Detalle dental',
      caption: 'Atención al detalle'
    }
  ];

  return (
    <section id="galeria" className="py-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Galería</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre nuestras instalaciones y algunos de los resultados que hemos logrado para nuestros pacientes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                <Image 
                  src={image.url} 
                  alt={image.alt} 
                  width={600} 
                  height={450} 
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white transform transition-transform duration-300">
                <h3 className="font-medium">{image.alt}</h3>
                <p className="text-sm text-gray-200">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}