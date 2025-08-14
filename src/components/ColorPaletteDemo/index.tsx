import React from 'react';

export default function ColorPaletteDemo() {
  return (
    <div className="p-8 bg-background">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-foreground">
          Nueva Paleta de Colores - Alanis Web Dev
        </h1>
        
        {/* Primary Colors */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-foreground">Colores Primarios</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'].map((shade) => (
              <div key={shade} className="text-center">
                <div 
                  className={`w-20 h-20 rounded-lg mx-auto mb-2 border shadow-sm bg-primary-${shade}`}
                />
                <p className="text-sm font-medium text-foreground">primary-{shade}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Accent Colors */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-foreground">Colores de Acento</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'].map((shade) => (
              <div key={shade} className="text-center">
                <div 
                  className={`w-20 h-20 rounded-lg mx-auto mb-2 border shadow-sm bg-accent-${shade}`}
                />
                <p className="text-sm font-medium text-foreground">accent-{shade}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Neutral Colors */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-foreground">Colores Neutrales</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'].map((shade) => (
              <div key={shade} className="text-center">
                <div 
                  className={`w-20 h-20 rounded-lg mx-auto mb-2 border shadow-sm bg-neutral-${shade}`}
                />
                <p className="text-sm font-medium text-foreground">neutral-{shade}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Semantic Colors */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-foreground">Colores Semánticos</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-24 h-24 rounded-lg mx-auto mb-2 border shadow-sm bg-success-500" />
              <p className="text-sm font-medium text-foreground">Success</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 rounded-lg mx-auto mb-2 border shadow-sm bg-danger-500" />
              <p className="text-sm font-medium text-foreground">Danger</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 rounded-lg mx-auto mb-2 border shadow-sm bg-warning-500" />
              <p className="text-sm font-medium text-foreground">Warning</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 rounded-lg mx-auto mb-2 border shadow-sm bg-info-500" />
              <p className="text-sm font-medium text-foreground">Info</p>
            </div>
          </div>
        </section>

        {/* Legacy Color Names */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-foreground">Nombres de Colores Legacy</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-24 h-24 rounded-lg mx-auto mb-2 border shadow-sm bg-yellow" />
              <p className="text-sm font-medium text-foreground">yellow</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 rounded-lg mx-auto mb-2 border shadow-sm bg-body-color" />
              <p className="text-sm font-medium text-foreground">body-color</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 rounded-lg mx-auto mb-2 border shadow-sm bg-gray-dark" />
              <p className="text-sm font-medium text-foreground">gray-dark</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 rounded-lg mx-auto mb-2 border shadow-sm bg-gray-light" />
              <p className="text-sm font-medium text-foreground">gray-light</p>
            </div>
          </div>
        </section>

        {/* Usage Examples */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-foreground">Ejemplos de Uso</h2>
          <div className="space-y-4">
            <div className="p-6 bg-primary-50 border border-primary-200 rounded-lg">
              <h3 className="text-lg font-semibold text-primary-900 mb-2">Card con Primary</h3>
              <p className="text-primary-700">Este es un ejemplo de uso del color primary en diferentes tonos.</p>
            </div>
            
            <div className="p-6 bg-accent-50 border border-accent-200 rounded-lg">
              <h3 className="text-lg font-semibold text-accent-900 mb-2">Card con Accent</h3>
              <p className="text-accent-700">Este es un ejemplo de uso del color accent en diferentes tonos.</p>
            </div>
            
            <div className="p-6 bg-neutral-50 border border-neutral-200 rounded-lg">
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">Card con Neutral</h3>
              <p className="text-neutral-700">Este es un ejemplo de uso del color neutral en diferentes tonos.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
