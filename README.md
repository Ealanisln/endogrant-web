# EndoGrant Web - Landing Page Profesional

Un landing page moderno y profesional desarrollado con Next.js 15, React 19, TypeScript y Tailwind CSS.

## 🎨 Nueva Paleta de Colores

### Colores Principales

- **Primary (Azul moderno)**: `#4F7AFA` - Color principal para botones, enlaces y elementos destacados
- **Accent (Naranja/Ámbar)**: `#F79433` - Color de acento para llamadas a la acción y elementos secundarios
- **Neutral (Escala de grises)**: `#64748B` - Colores neutrales para texto y fondos

### Uso de Colores

```tsx
// Colores primarios
<button className="bg-primary text-primary-foreground hover:bg-primary/90">
  Botón Principal
</button>

// Colores de acento
<div className="bg-accent-50 border-accent-200 text-accent-900">
  Elemento de acento
</div>

// Colores neutrales
<p className="text-neutral-600 bg-neutral-50">
  Texto secundario
</p>

// Colores semánticos
<div className="bg-success-500 text-white">Éxito</div>
<div className="bg-danger-500 text-white">Error</div>
<div className="bg-warning-500 text-white">Advertencia</div>
<div className="bg-info-500 text-white">Información</div>
```

### Nombres Legacy (Compatibilidad)

Para mantener compatibilidad con código existente, se mantienen estos nombres:

- `yellow` → `#F79433` (naranja/ámbar)
- `body-color` → `#64748B` (neutral-500)
- `gray-dark` → `#1E293B` (neutral-800)
- `gray-light` → `#F8FAFC` (neutral-50)

## 🚀 Tecnologías

- **Framework**: Next.js 15 con App Router
- **Lenguaje**: TypeScript 5
- **UI**: React 19 + Tailwind CSS 3.4
- **Componentes**: Radix UI + shadcn/ui
- **Animaciones**: Framer Motion + tailwindcss-animate
- **Iconos**: Lucide React

## 📦 Instalación

```bash
# Instalar dependencias
pnpm install

# Ejecutar en desarrollo
pnpm dev

# Construir para producción
pnpm build

# Ejecutar en producción
pnpm start
```

## 🏗️ Estructura del Proyecto

```
src/
├── app/                    # App Router de Next.js
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página principal
├── components/             # Componentes reutilizables
│   ├── ui/                # Componentes base (shadcn/ui)
│   ├── Header/            # Componente de navegación
│   ├── Hero/              # Sección hero
│   ├── ServicesSection/   # Sección de servicios
│   ├── Gallery/           # Galería de imágenes
│   ├── Testimonials/      # Testimonios
│   ├── Contact/           # Formulario de contacto
│   └── Footer/            # Pie de página
└── lib/                   # Utilidades y helpers
    └── utils.ts           # Funciones de utilidad
```

## 🎯 Características

- ✅ **Diseño Responsive**: Optimizado para todos los dispositivos
- ✅ **Modo Oscuro**: Soporte completo para tema oscuro
- ✅ **Accesibilidad**: Cumple con estándares WCAG
- ✅ **SEO Optimizado**: Meta tags y estructura semántica
- ✅ **Performance**: Lazy loading y optimizaciones
- ✅ **TypeScript**: Tipado completo y seguro

## 🎨 Personalización

### Modificar Colores

Los colores se pueden personalizar en `tailwind.config.ts`:

```ts
colors: {
  primary: {
    DEFAULT: "#4F7AFA",
    50: "#F0F4FF",
    // ... más tonos
  },
  accent: {
    DEFAULT: "#F79433",
    // ... más tonos
  }
}
```

### Agregar Nuevos Colores

```ts
colors: {
  // ... colores existentes
  custom: {
    DEFAULT: "#FF6B6B",
    50: "#FFF5F5",
    500: "#FF6B6B",
    900: "#CC5555"
  }
}
```

## 📱 Componentes Disponibles

- **Button**: Botones con múltiples variantes
- **Card**: Tarjetas para contenido
- **Badge**: Etiquetas y badges
- **Input**: Campos de entrada
- **Textarea**: Áreas de texto
- **Sheet**: Paneles deslizables
- **Dropdown**: Menús desplegables
- **Toggle**: Interruptores

## 🔧 Scripts Disponibles

- `pnpm dev` - Servidor de desarrollo
- `pnpm build` - Construcción para producción
- `pnpm start` - Servidor de producción
- `pnpm lint` - Verificación de código

## 📄 Licencia

Este proyecto es privado y pertenece a Alanis Web Dev.

## 👨‍💻 Autor

**Emmanuel Alanis** - [alanis.dev](https://alanis.dev)

---

Desarrollado con ❤️ usando Next.js y Tailwind CSS
