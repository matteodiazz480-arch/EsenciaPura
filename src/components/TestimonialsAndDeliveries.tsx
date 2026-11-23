import React from 'react'
import { Star, MapPin } from 'lucide-react'
import { TESTIMONIALS, REAL_DELIVERIES } from '../data/candlesData'

export const TestimonialsAndDeliveries: React.FC = () => {
  const selectedTestimonials = TESTIMONIALS.slice(0, 3)

  return (
    <section id="testimonios" className="py-16 md:py-24 bg-brand-cream-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-brand-olive tracking-tight">
            Experiencias de clientes
          </h2>
          <p className="mt-3 text-sm sm:text-base text-brand-charcoal/75 leading-relaxed font-normal">
            Opiniones de quienes confiaron en Esência Pura para sus hogares y celebraciones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {selectedTestimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white p-5 sm:p-6 rounded-2xl border border-brand-sage/20 shadow-sm flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2.5">
                <div className="flex items-center gap-1 text-brand-gold">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-brand-charcoal/80 italic leading-relaxed">
                  "{t.text}"
                </p>
              </div>

              <div className="pt-3 border-t border-brand-sage/15 space-y-0.5">
                <h4 className="text-sm font-bold text-brand-olive">{t.name}</h4>
                <div className="flex items-center gap-1 text-[11px] text-brand-charcoal/60">
                  <MapPin className="w-3 h-3 text-brand-gold-dark shrink-0" />
                  <span>{t.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-brand-sage/20">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-brand-olive">
              Entregas desde el taller
            </h3>
            <p className="text-xs sm:text-sm text-brand-charcoal/70 mt-1">
              Pedidos preparados con empaque seguro y listos para regalar.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {REAL_DELIVERIES.map((del) => (
              <div
                key={del.id}
                className="group bg-white rounded-xl overflow-hidden border border-brand-sage/20 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="relative aspect-square overflow-hidden bg-brand-cream">
                  <img
                    src={del.image}
                    alt={del.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    width="300"
                    height="300"
                    loading="lazy"
                  />
                </div>
                <div className="p-3 sm:p-4">
                  <h4 className="text-xs font-bold text-brand-olive font-serif line-clamp-1">
                    {del.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
