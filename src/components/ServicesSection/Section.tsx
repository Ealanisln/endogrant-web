import { ServiceCard } from "./Card"

export function ServicesSection() {
    const services = [
      {
        title: 'Limpieza Dental',
        description: 'Mantenimiento profesional de tu salud bucal con técnicas avanzadas de limpieza.',
        icon: 'clean'
      },
      {
        title: 'Odontología Preventiva',
        description: 'Cuidado preventivo para mantener tu sonrisa saludable y evitar problemas futuros.',
        icon: 'shield'
      },
      {
        title: 'Resinas',
        description: 'Restauraciones estéticas del color de tus dientes para una sonrisa natural.',
        icon: 'sparkles'
      },
      {
        title: 'Extracciones',
        description: 'Procedimientos seguros y profesionales para extracciones dentales cuando son necesarias.',
        icon: 'tooth'
      },
      {
        title: 'Prótesis fija y Removible',
        description: 'Soluciones personalizadas para reemplazar dientes perdidos y restaurar tu sonrisa.',
        icon: 'denture'
      },
      {
        title: 'Implantes',
        description: 'Restauraciones permanentes que lucen y funcionan como dientes naturales.',
        icon: 'implant'
      },
      {
        title: 'Ortodoncia',
        description: 'Tratamientos de alineación dental para una sonrisa perfecta y funcional.',
        icon: 'braces'
      },
      {
        title: 'Endodoncia',
        description: 'Especialistas en el tratamiento de conductos con tecnología avanzada.',
        icon: 'root'
      }
    ];
    
    return (
      <section id="servicios" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos una amplia gama de servicios dentales especializados para el cuidado integral de tu salud bucal.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index} 
                title={service.title} 
                description={service.description}
                icon={service.icon}
                index={index} 
              />
            ))}
          </div>
        </div>
      </section>
    )
  }