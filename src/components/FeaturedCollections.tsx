import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { buildWhatsAppLink } from '../utils/security'
import { BRAND_INFO } from '../data/candlesData'

interface FeaturedCollectionsProps {
  onSelectCategory?: (category: 'primavera' | 'aromaticas' | 'regalos') => void
}

export const FeaturedCollections: React.FC<FeaturedCollectionsProps> = ({ onSelectCategory }) => {
  const collections = [
    {
      id: 'primavera' as const,
      title: 'Colección Primavera',
      description: 'Bouquets y flores botánicas modeladas a mano.',
      image: '/imagenes/63f9ad17-ac6f-48dd-a4d3-5600e9b8f3c2.jpg',
      alt: 'Colección Primavera Esência Pura',
      whatsappMessage: 'Hola Florencia! Quiero consultar por los ramos de la Colección Primavera.'
    },
    {
      id: 'aromaticas' as const,
      title: 'Velas & Difusores',
      description: 'Sets de cerámica artesanal para ambientar el hogar.',
      image: '/imagenes/78a459f8-0b71-4fb3-9d3e-894cfddf52ee.jpg',
      alt: 'Velas Aromáticas y Difusores',
      whatsappMessage: 'Hola Florencia! Quiero consultar por los sets de velas y difusores cerámicos.'
    },
    {
      id: 'regalos' as const,
      title: 'Regalos Especiales',
      description: 'Ramos con dedicatorias en cinta y cajas de regalo.',
      image: '/imagenes/8021dced-a8b2-4767-9fcc-2e939269ff07.jpg',
      alt: 'Regalos Especiales Personalizados',
      whatsappMessage: 'Hola Florencia! Quiero encargar un regalo especial personalizado.'
    }
  ]

  return (
    <section id="colecciones" className="py-12 md:py-20 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-brand-olive tracking-tight">
            Colecciones destacadas
          </h2>
          <p className="mt-2 text-xs sm:text-base text-brand-charcoal/75 leading-relaxed font-normal">
            Líneas pensadas para disfrutar a diario o sorprender con un detalle único.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-6">
          {collections.map((item) => {
            const whatsappUrl = buildWhatsAppLink(BRAND_INFO.phoneClean, item.whatsappMessage)

            return (
              <div
                key={item.id}
                className="group flex flex-row md:flex-col bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-brand-sage/20 shadow-xs hover:shadow-md transition-all duration-300"
              >
                <div className="relative w-28 sm:w-36 md:w-full shrink-0 aspect-square md:aspect-[4/3] overflow-hidden bg-brand-cream">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    width="320"
                    height="240"
                    loading="lazy"
                  />
                </div>

                <div className="p-3 sm:p-5 flex-1 flex flex-col justify-between space-y-2">
                  <div className="space-y-1">
                    <h3 className="text-sm sm:text-lg md:text-xl font-serif font-bold text-brand-olive leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-brand-charcoal/75 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between gap-2 border-t border-brand-sage/15">
                    <button
                      type="button"
                      onClick={() => {
                        if (onSelectCategory) {
                          onSelectCategory(item.id)
                          const catElem = document.getElementById('catalogo')
                          if (catElem) catElem.scrollIntoView({ behavior: 'smooth' })
                        }
                      }}
                      className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-brand-olive hover:text-brand-olive-dark transition-colors inline-flex items-center gap-1"
                    >
                      <span>Ver modelos</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </button>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 sm:px-3 sm:py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-brand-olive bg-brand-sage/20 hover:bg-brand-olive hover:text-white rounded-full transition-colors"
                    >
                      Consultar
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
