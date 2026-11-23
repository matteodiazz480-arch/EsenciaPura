import React from 'react'
import { Star, MapPin } from 'lucide-react'
import { TESTIMONIALS, REAL_DELIVERIES } from '../data/candlesData'

export const TestimonialsAndDeliveries: React.FC = () => {
  const selectedTestimonials = TESTIMONIALS.slice(0, 3)

  return (
    <section id="testimonios" className="py-12 md:py-20 bg-brand-cream-light">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-brand-olive tracking-tight">
            Experiencias de clientes
          </h2>
          <p className="mt-2 text-xs sm:text-base text-brand-charcoal/75 leading-relaxed font-normal">
            Opiniones de quienes confiaron en Esência Pura para sus hogares y eventos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-6 mb-12 sm:mb-14">
          {selectedTestimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-brand-sage/20 shadow-xs flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-1 text-brand-gold">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-brand-charcoal/80 italic leading-relaxed">
                  "{t.text}"
                </p>
              </div>

              <div className="pt-2.5 border-t border-brand-sage/15 space-y-0.5">
                <h4 className="text-xs sm:text-sm font-bold text-brand-olive">{t.name}</h4>
                <div className="flex items-center gap-1 text-[10px] sm:text-[11px] text-brand-charcoal/60">
                  <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-brand-gold-dark shrink-0" />
                  <span>{t.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-6 sm:pt-8 border-t border-brand-sage/20">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-2xl font-serif font-bold text-brand-olive">
              Entregas desde el taller
            </h3>
            <p className="text-[11px] sm:text-xs text-brand-charcoal/70 mt-1">
              Preparadas con embalaje seguro y tarjetería artesanal.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4">
            {REAL_DELIVERIES.map((del) => (
              <div
                key={del.id}
                className="group bg-white rounded-xl overflow-hidden border border-brand-sage/20 shadow-xs hover:shadow-md transition-all duration-300"
              >
                <div className="relative aspect-square overflow-hidden bg-brand-cream">
                  <img
                    src={del.image}
                    alt={del.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    width="260"
                    height="260"
                    loading="lazy"
                  />
                </div>
                <div className="p-2.5 sm:p-3">
                  <h4 className="text-[11px] sm:text-xs font-bold text-brand-olive font-serif line-clamp-1">
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
