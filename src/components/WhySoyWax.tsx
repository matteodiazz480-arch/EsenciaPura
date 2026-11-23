import React from 'react'
import { Flame, Leaf, HeartHandshake } from 'lucide-react'

export const WhySoyWax: React.FC = () => {
  const benefits = [
    {
      icon: <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-brand-gold shrink-0" />,
      title: 'Combustión limpia',
      description: 'Funde a menor temperatura, quema parejo y dura hasta 50% más sin humo negro.'
    },
    {
      icon: <Leaf className="w-4 h-4 sm:w-5 sm:h-5 text-brand-olive shrink-0" />,
      title: '100% Vegetal',
      description: 'Elaborada con aceite de soja natural, biodegradable y libre de parafinas.'
    },
    {
      icon: <HeartHandshake className="w-4 h-4 sm:w-5 sm:h-5 text-brand-gold shrink-0" />,
      title: 'Artesanal',
      description: 'Modelada a mano en nuestro taller de San Martín con pabilo de algodón puro.'
    }
  ]

  return (
    <section id="beneficios" className="cv-auto py-12 md:py-20 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-brand-olive tracking-tight">
            Por qué elegir cera de soja
          </h2>
          <p className="mt-2 text-xs sm:text-base text-brand-charcoal/75 font-normal leading-relaxed">
            Una elección natural que aromatiza y cuida el aire de tu hogar.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-3 sm:gap-6 items-stretch">
          <div className="col-span-5 md:col-span-5 relative rounded-xl sm:rounded-2xl overflow-hidden shadow-sm border border-brand-sage/20 bg-brand-cream-dark">
            <img
              src="/imagenes/web/27bed076-cc0d-4e08-b6e0-5bdd4c8bf536.jpg"
              alt="Velas y difusores artesanales de cera de soja"
              className="w-full h-full min-h-[220px] sm:min-h-[280px] md:min-h-[340px] object-cover"
              width="450"
              height="340"
              loading="lazy" decoding="async"
            />
          </div>

          <div className="col-span-7 md:col-span-7 flex flex-col justify-between space-y-2 sm:space-y-3">
            {benefits.map((b, idx) => (
              <div
                key={idx}
                className="p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-brand-sage/20 shadow-sm flex items-start gap-2.5 sm:gap-3.5"
              >
                <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-brand-cream-light flex items-center justify-center shrink-0 border border-brand-sage/20">
                  {b.icon}
                </div>
                <div className="space-y-0.5 sm:space-y-1">
                  <h3 className="text-xs sm:text-base font-serif font-bold text-brand-olive leading-tight">
                    {b.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-brand-charcoal/70 leading-snug">
                    {b.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
