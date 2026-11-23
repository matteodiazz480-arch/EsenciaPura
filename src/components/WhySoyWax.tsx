import React from 'react'
import { Flame, Leaf, HeartHandshake } from 'lucide-react'

export const WhySoyWax: React.FC = () => {
  const benefits = [
    {
      icon: <Flame className="w-5 h-5 text-brand-gold" />,
      title: 'Combustión limpia',
      description: 'Funde a menor temperatura, quema de forma pareja y dura hasta un 50% más sin emitir humo negro.'
    },
    {
      icon: <Leaf className="w-5 h-5 text-brand-olive" />,
      title: '100% Natural y vegetal',
      description: 'Elaborada con aceite de soja biodegradable, libre de parafinas y derivados del petróleo.'
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-brand-gold" />,
      title: 'Dedicación artesanal',
      description: 'Vertidas y esculpidas a mano en nuestro taller de San Martín con pabilos de algodón puro.'
    }
  ]

  return (
    <section id="beneficios" className="py-16 md:py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-brand-olive tracking-tight leading-tight">
                Por qué elegir cera de soja
              </h2>
              <p className="text-sm sm:text-base text-brand-charcoal/75 leading-relaxed font-normal">
                Una opción noble y sustentable que aromatiza tus ambientes cuidando el aire que respirás.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {benefits.map((b, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-white border border-brand-sage/20 shadow-sm flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-cream-light flex items-center justify-center shrink-0 border border-brand-sage/20">
                    {b.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-serif font-bold text-brand-olive">
                      {b.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-charcoal/70 leading-relaxed">
                      {b.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-white bg-white">
              <img
                src="/imagenes/27bed076-cc0d-4e08-b6e0-5bdd4c8bf536.jpg"
                alt="Elaboración artesanal de velas de cera de soja"
                className="w-full h-[320px] sm:h-[400px] object-cover"
                width="600"
                height="400"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
