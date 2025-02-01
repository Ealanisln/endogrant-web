import Image from 'next/image'

interface ServiceCardProps {
  title: string;
  index: number;
}

export function ServiceCard({ title, index }: ServiceCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <Image src={`/placeholder.svg?height=50&width=50&text=${index + 1}`} alt={title} width={50} height={50} className="mb-4" />
      <h3 className="text-xl font-semibold mb-2 text-teal-600">{title}</h3>
      <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  )
}