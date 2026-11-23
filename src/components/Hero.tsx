import React, { useEffect, useRef, useState } from 'react'
import { ArrowDown, MessageCircle } from 'lucide-react'
import { BRAND_INFO } from '../data/candlesData'
import { buildWhatsAppLink } from '../utils/security'

const MARQUEE_ROWS: { images: string[]; reverse: boolean; mobile: boolean }[] = [
  {
    reverse: false,
    mobile: true,
    images: [
      '/imagenes/web/8a8be692-1606-432e-98e0-8f1777ca4ab6.jpg',
      '/imagenes/web/63f9ad17-ac6f-48dd-a4d3-5600e9b8f3c2.jpg',
      '/imagenes/web/0e757099-0e00-439d-aeb8-79ea9e197951.jpg',
      '/imagenes/web/78a459f8-0b71-4fb3-9d3e-894cfddf52ee.jpg',
      '/imagenes/web/8021dced-a8b2-4767-9fcc-2e939269ff07.jpg',
      '/imagenes/web/5271559e-9f6d-4598-8ce4-1b85a9ed9a77.jpg',
      '/imagenes/web/125aeb7f-91a5-4ef4-8e0d-b4c3ee387de9.jpg',
    ],
  },
  {
    reverse: true,
    mobile: true,
    images: [
      '/imagenes/web/27bed076-cc0d-4e08-b6e0-5bdd4c8bf536.jpg',
      '/imagenes/web/1684d37a-7c5c-4749-a61d-2a5917895cd9.jpg',
      '/imagenes/web/d3e31690-aa15-4541-89b5-60a0453fb73d.jpg',
      '/imagenes/web/b45e2ab6-a442-48f0-b2aa-78fbc65ad591.jpg',
      '/imagenes/web/71cf6e28-3b5f-43f4-a2c8-513762bc1469.jpg',
      '/imagenes/web/96e8cdfd-34c1-4874-bb08-149d6d6c5da3.jpg',
      '/imagenes/web/058e26b3-1016-41f6-9a44-b1243bce05b4.jpg',
    ],
  },
  {
    reverse: false,
    mobile: false,
    images: [
      '/imagenes/web/1d94641e-403f-4a03-b52b-979276165394.jpg',
      '/imagenes/web/a5134a13-e217-4c69-91f2-008a392c572a.jpg',
      '/imagenes/web/30e58005-ce1e-4fa5-85fc-7e848742d3b9.jpg',
      '/imagenes/web/2f94006a-ea42-4945-8633-642eccdcef48.jpg',
      '/imagenes/web/b039b45f-fcf3-4794-8faf-c4e6bbe519e9.jpg',
      '/imagenes/web/1a4dcd72-bc76-4920-a0ea-8d26fd72d7ed.jpg',
      '/imagenes/web/0ca6a826-6398-4b1e-9dc4-73405d90a839.jpg',
    ],
  },
]

export const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting))
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const whatsappHeroUrl = buildWhatsAppLink(
    BRAND_INFO.phoneClean,
    'Hola Florencia! Quiero consultar por las velas artesanales de cera de soja de Esência Pura.'
  )

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12 sm:pt-24 sm:pb-16"
    >
      <div
        className={`absolute inset-0 pointer-events-none select-none flex flex-col justify-between py-4 sm:py-6 gap-4 sm:gap-6 ${
          isVisible ? '' : 'marquee-paused'
        }`}
        aria-hidden="true"
      >
        {MARQUEE_ROWS.map((row, rowIdx) => (
          <div key={rowIdx} className={`overflow-hidden w-full ${row.mobile ? '' : 'hidden sm:block'}`}>
            <div className={`marquee-track gap-3 sm:gap-5 ${row.reverse ? 'marquee-reverse' : ''}`}>
              {[...row.images, ...row.images].map((src, idx) => (
                <div
                  key={idx}
                  className="w-44 sm:w-60 md:w-72 h-32 sm:h-44 md:h-52 rounded-2xl overflow-hidden shrink-0 bg-brand-cream-dark"
                >
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover"
                    loading={rowIdx === 0 && idx < 7 ? 'eager' : 'lazy'}
                    decoding="async"
                    width="288"
                    height="208"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none hero-veil" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 sm:space-y-7">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-brand-olive leading-[1.15] tracking-tight hero-title">
          Velas de cera de soja, aromas naturales y diseños únicos
        </h1>

        <p className="text-sm sm:text-lg text-brand-charcoal max-w-xl mx-auto font-medium leading-relaxed hero-title">
          Creaciones botánicas modeladas a mano con cera vegetal pura y fragancias naturales para iluminar tus espacios y celebrar fechas especiales.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href="#catalogo"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-brand-olive hover:bg-brand-olive-dark text-white text-xs sm:text-sm font-semibold uppercase tracking-wider transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-brand-olive focus:ring-offset-2"
          >
            <span>Explorar catálogo</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>

          <a
            href={whatsappHeroUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-brand-gold hover:bg-brand-gold-dark text-white text-xs sm:text-sm font-semibold uppercase tracking-wider transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  )
}
