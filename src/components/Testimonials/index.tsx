import Image from 'next/image';

interface TestimonialProps {
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

function Testimonial({ name, role, quote, avatar }: TestimonialProps) {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center border border-blue-50">
      <div className="w-20 h-20 relative mb-6">
        <Image 
          src={avatar} 
          alt={name} 
          fill 
          className="rounded-full object-cover border-4 border-blue-100"
        />
      </div>
      <div className="text-blue-400 mb-4">
        <svg 
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="opacity-80"
        >
          <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.48.11-.894.32-1.248.64l-.217.185.217-.187a2.678 2.678 0 0 0-.814 1.93c0 .693.164 1.256.493 1.69.33.434.824.713 1.485.713.968 0 1.69-.225 2.176-.675.485-.45.728-1.09.728-1.92zm-4.932 0c0-.606.123-1.11.368-1.515.246-.404.6-.706 1.065-.906.464-.2.934-.3 1.412-.3.893 0 1.63.28 2.206.84.578.56.866 1.27.866 2.14 0 .675-.14 1.203-.416 1.582-.277.38-.702.57-1.277.57-.1 0-.208-.02-.317-.056a.766.766 0 0 1-.306-.19.976.976 0 0 1-.22-.322c-.052-.13-.078-.294-.078-.492 0-.156.004-.305.013-.446.01-.14.013-.258.013-.352 0-.226-.04-.4-.12-.524-.08-.125-.194-.186-.345-.186-.222 0-.406.077-.55.23-.146.154-.222.358-.23.61-.008.26-.004.471.013.636zM15.56 15.56c0-.88-.23-1.618-.69-2.217-.326-.41-.767-.68-1.327-.81-.55-.13-1.07-.14-1.54-.03-.48.11-.894.32-1.248.64l-.217.19.217-.19c-.483.36-.754.82-.813 1.93 0 .7.164 1.26.493 1.7.33.43.824.71 1.485.71.97 0 1.69-.22 2.18-.67.48-.45.73-1.09.73-1.92zm-4.93 0c0-.6.12-1.11.37-1.51.25-.4.6-.7 1.07-.9.46-.2.93-.3 1.41-.3.9 0 1.63.28 2.21.85.58.56.87 1.27.87 2.14 0 .68-.14 1.2-.42 1.58-.28.38-.7.57-1.28.57-.1 0-.2-.02-.32-.05a.77.77 0 0 1-.3-.19.98.98 0 0 1-.22-.32c-.05-.13-.08-.29-.08-.49 0-.15.01-.3.02-.44.01-.14.01-.26.01-.35 0-.22-.04-.4-.12-.52-.08-.12-.19-.18-.34-.18-.22 0-.41.08-.55.23-.15.16-.22.36-.23.62-.01.26 0 .47.01.64z" />
        </svg>
      </div>
      <p className="text-gray-700 mb-6 text-center italic">{quote}</p>
      <h4 className="font-semibold text-gray-800">{name}</h4>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
  );
}

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "María López",
      role: "Paciente desde 2018",
      quote: "La Dra. ha transformado por completo mi sonrisa. Su profesionalidad y atención personalizada hacen que cada visita sea una experiencia agradable.",
      avatar: "/avatar-1.jpg",
    },
    {
      name: "Carlos Rodríguez",
      role: "Paciente desde 2020",
      quote: "Siempre había tenido miedo al dentista, pero desde mi primera consulta me sentí completamente a gusto. El tratamiento fue rápido y sin dolor.",
      avatar: "/avatar-2.jpg",
    },
    {
      name: "Ana García",
      role: "Paciente desde 2021",
      quote: "Mis hijos adoran venir a la consulta. El ambiente es cálido y acogedor, y los resultados han sido excelentes.",
      avatar: "/avatar-3.jpg",
    },
  ];

  return (
    <section id="testimonios" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Lo que dicen nuestros pacientes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nos enorgullece brindar atención dental de calidad y crear experiencias positivas para cada paciente.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              quote={testimonial.quote}
              avatar={testimonial.avatar}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 