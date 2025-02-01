import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { Textarea } from "@/src/components/ui/textarea"

export function ContactForm() {
  return (
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
  )
}
