import React from 'react'
import { 
  Brush,
  Shield,
  Sparkles,
  Scissors,
  Cog,
  Syringe,
  Star,
  Activity
} from 'lucide-react'

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

const iconComponents = {
  clean: Brush,
  shield: Shield,
  sparkles: Sparkles,
  tooth: Scissors,
  denture: Cog,
  implant: Syringe,
  braces: Star,
  root: Activity,
}

export function ServiceCard({ title, description, icon, index }: ServiceCardProps) {
  const IconComponent = iconComponents[icon as keyof typeof iconComponents] || Star;
  const gradients = [
    "from-blue-100 to-cyan-100 shadow-blue-200/50",
    "from-pink-100 to-rose-100 shadow-pink-200/50",
    "from-violet-100 to-purple-100 shadow-violet-200/50",
    "from-teal-100 to-green-100 shadow-teal-200/50",
    "from-amber-100 to-yellow-100 shadow-amber-200/50",
    "from-red-100 to-orange-100 shadow-red-200/50"
  ];
  
  const iconColors = [
    "text-blue-500",
    "text-pink-500",
    "text-violet-500",
    "text-teal-500",
    "text-amber-500",
    "text-red-500"
  ];

  const gradientClass = gradients[index % gradients.length];
  const iconColorClass = iconColors[index % iconColors.length];

  return (
    <div className={`p-8 rounded-3xl bg-gradient-to-br ${gradientClass} shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1`}>
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${iconColorClass} bg-white shadow-md`}>
        <IconComponent className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-gray-900">{title}</h3>
      <p className="text-gray-600 group-hover:text-gray-700">{description}</p>
    </div>
  )
}