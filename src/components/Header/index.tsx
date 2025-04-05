import Link from "next/link";
import Image from "next/image";
import { 
  Sheet, 
  SheetTrigger, 
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose
} from "@/src/components/ui/sheet";
import { Button } from "@/src/components/ui/button";
import { Phone, Search, Menu, Calendar } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="#inicio" className="flex items-center gap-3" prefetch={false}>
          <div className="relative h-10 w-10 overflow-hidden">
            <Image src="/logo.png" alt="Logo" width={40} height={40} className="rounded-md" />
          </div>
          <span className="text-xl font-bold text-gray-800">Endogrant</span>
        </Link>
        
        <nav className="hidden lg:flex items-center space-x-4">
          <Link
            href="#inicio"
            className="px-4 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
            prefetch={false}
          >
            Inicio
          </Link>
          <Link
            href="#servicios"
            className="px-4 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
            prefetch={false}
          >
            Servicios
          </Link>
          <Link
            href="#testimonios"
            className="px-4 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
            prefetch={false}
          >
            Testimonios
          </Link>
          <Link
            href="#galeria"
            className="px-4 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
            prefetch={false}
          >
            Galería
          </Link>
          <Link
            href="#contacto"
            className="px-4 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
            prefetch={false}
          >
            Contacto
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Link 
            href="tel:4773274282" 
            className="hidden md:flex items-center text-base text-gray-700 font-medium hover:text-blue-600"
          >
            <Phone className="h-5 w-5 text-blue-500 mr-2" />
            477-327-42-82
          </Link>
          
          <Button 
            asChild
            className="hidden md:flex h-10 px-5 text-base rounded-md bg-blue-500 hover:bg-blue-600 text-white"
          >
            <Link href="#contacto">
              <Calendar className="h-5 w-5 mr-2" />
              Agendar cita
            </Link>
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-10 w-10 rounded-md text-gray-500 hover:text-blue-500 hover:bg-blue-50"
          >
            <Search className="h-5 w-5" />
            <span className="sr-only">Buscar</span>
          </Button>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-md text-gray-500 hover:text-blue-500 hover:bg-blue-50 lg:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <SheetHeader className="text-left">
                <div className="flex items-center justify-between mb-6">
                  <SheetTitle className="text-xl font-bold">Menú</SheetTitle>
                  <SheetClose className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
                    <span className="sr-only">Cerrar</span>
                  </SheetClose>
                </div>
              </SheetHeader>
              <div className="flex flex-col">
                <Link href="#inicio" className="py-3 text-lg font-medium text-gray-800 hover:text-blue-600" prefetch={false}>
                  Inicio
                </Link>
                <Link href="#servicios" className="py-3 text-lg font-medium text-gray-800 hover:text-blue-600" prefetch={false}>
                  Servicios
                </Link>
                <Link href="#testimonios" className="py-3 text-lg font-medium text-gray-800 hover:text-blue-600" prefetch={false}>
                  Testimonios
                </Link>
                <Link href="#galeria" className="py-3 text-lg font-medium text-gray-800 hover:text-blue-600" prefetch={false}>
                  Galería
                </Link>
                <Link href="#contacto" className="py-3 text-lg font-medium text-gray-800 hover:text-blue-600" prefetch={false}>
                  Contacto
                </Link>
                
                <div className="pt-6 mt-6 border-t border-gray-100">
                  <div className="flex items-center py-3 text-gray-700">
                    <Phone className="h-5 w-5 text-blue-500 mr-3" />
                    477-327-42-82
                  </div>
                  <Button 
                    asChild
                    className="w-full mt-3 h-11 rounded-md bg-blue-500 hover:bg-blue-600 text-white text-base"
                  >
                    <Link href="#contacto">
                      <Calendar className="h-5 w-5 mr-2" />
                      Agendar cita
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}