import Image from 'next/image'

export function GallerySection() {
  return (
    <section id="galeria" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Galería</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(8)].map((_, index) => (
            <Image 
              key={index} 
              src={`/placeholder.svg?height=200&width=300&text=Imagen ${index + 1}`} 
              alt={`Imagen ${index + 1}`} 
              width={300} 
              height={200} 
              className="rounded-lg shadow-md hover:shadow-lg transition-shadow" 
            />
          ))}
        </div>
      </div>
    </section>
  )
}