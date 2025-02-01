import { ServiceCard } from "./Card"

export function ServicesSection() {
    const services = ['Limpieza Dental', 'Blanqueamiento', 'Ortodoncia', 'Implantes', 'Endodoncia', 'Odontopediatría']
    
    return (
      <section id="servicios" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((servicio, index) => (
              <ServiceCard key={index} title={servicio} index={index} />
            ))}
          </div>
        </div>
      </section>
    )
  }