import React from 'react'
import { ArrowDown, MessageCircle } from 'lucide-react'
import { BRAND_INFO } from '../data/candlesData'
import { buildWhatsAppLink } from '../utils/security'

const ROW_ONE_IMAGES = [
  '/imagenes/8a8be692-1606-432e-98e0-8f1777ca4ab6.jpg',
  '/imagenes/63f9ad17-ac6f-48dd-a4d3-5600e9b8f3c2.jpg',
  '/imagenes/0e757099-0e00-439d-aeb8-79ea9e197951.jpg',
  '/imagenes/78a459f8-0b71-4fb3-9d3e-894cfddf52ee.jpg',
  '/imagenes/8021dced-a8b2-4767-9fcc-2e939269ff07.jpg',
  '/imagenes/5271559e-9f6d-4598-8ce4-1b85a9ed9a77.jpg',
  '/imagenes/125aeb7f-91a5-4ef4-8e0d-b4c3ee387de9.jpg',
]

const ROW_TWO_IMAGES = [
  '/imagenes/27bed076-cc0d-4e08-b6e0-5bdd4c8bf536.jpg',
  '/imagenes/1684d37a-7c5c-4749-a61d-2a5917895cd9.jpg',
  '/imagenes/d3e31690-aa15-4541-89b5-60a0453fb73d.jpg',
  '/imagenes/b45e2ab6-a442-48f0-b2aa-78fbc65ad591.jpg',
  '/imagenes/71cf6e28-3b5f-43f4-a2c8-513762bc1469.jpg',
  '/imagenes/96e8cdfd-34c1-4874-bb08-149d6d6c5da3.jpg',
  '/imagenes/058e26b3-1016-41f6-9a44-b1243bce05b4.jpg',
]

const ROW_THREE_IMAGES = [
  '/imagenes/1d94641e-403f-4a03-b52b-979276165394.jpg',
  '/imagenes/a5134a13-e217-4c69-91f2-008a392c572a.jpg',
  '/imagenes/30e58005-ce1e-4fa5-85fc-7e848742d3b9.jpg',
  '/imagenes/2f94006a-ea42-4945-8633-642eccdcef48.jpg',
  '/imagenes/b039b45f-fcf3-4794-8faf-c4e6bbe519e9.jpg',
  '/imagenes/1a4dcd72-bc76-4920-a0ea-8d26fd72d7ed.jpg',
  '/imagenes/0ca6a826-6398-4b1e-9dc4-73405d90a839.jpg',
]

export const Hero: React.FC = () => {
  const whatsappHeroUrl = buildWhatsAppLink(
    BRAND_INFO.phoneClean,
    'Hola Florencia! Quiero consultar por las velas artesanales de cera de soja de Esência Pura.'
  )

  const marqueeRow1 = [...ROW_ONE_IMAGES, ...ROW_ONE_IMAGES]
  const marqueeRow2 = [...ROW_TWO_IMAGES, ...ROW_TWO_IMAGES]
  const marqueeRow3 = [...ROW_THREE_IMAGES, ...ROW_THREE_IMAGES]

  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0 flex flex-col justify-between py-6 gap-5 sm:gap-6 opacity-30">
        <div className="overflow-hidden w-full">
          <div className="animate-marquee flex gap-4 sm:gap-6">
            {marqueeRow1.map((src, idx) => (
              <div
                key={`r1-${idx}`}
                className="w-48 sm:w-64 md:w-72 h-36 sm:h-44 md:h-52 rounded-2xl overflow-hidden shadow-sm shrink-0 bg-brand-cream-dark"
              >
                <img
                  src={src}
                  alt="Esência Pura Vela"
                  className="w-full h-full object-cover"
                  loading="eager"
                  width="288"
                  height="208"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden w-full">
          <div className="animate-marquee-reverse flex gap-4 sm:gap-6">
            {marqueeRow2.map((src, idx) => (
              <div
                key={`r2-${idx}`}
                className="w-48 sm:w-64 md:w-72 h-36 sm:h-44 md:h-52 rounded-2xl overflow-hidden shadow-sm shrink-0 bg-brand-cream-dark"
              >
                <img
                  src={src}
                  alt="Esência Pura Vela"
                  className="w-full h-full object-cover"
                  loading="eager"
                  width="288"
                  height="208"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden w-full hidden sm:block">
          <div className="animate-marquee flex gap-4 sm:gap-6">
            {marqueeRow3.map((src, idx) => (
              <div
                key={`r3-${idx}`}
                className="w-48 sm:w-64 md:w-72 h-36 sm:h-44 md:h-52 rounded-2xl overflow-hidden shadow-sm shrink-0 bg-brand-cream-dark"
              >
                <img
                  src={src}
                  alt="Esência Pura Vela"
                  className="w-full h-full object-cover"
                  loading="eager"
                  width="288"
                  height="208"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-brand-cream-light/85 via-brand-cream/80 to-brand-cream/95 backdrop-blur-[1px] pointer-events-none z-1" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-7 md:space-y-9">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-brand-olive leading-[1.15] tracking-tight">
          Velas de cera de soja, aromas naturales y diseños únicos
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-brand-charcoal/85 max-w-2xl mx-auto font-normal leading-relaxed">
          Creaciones botánicas modeladas a mano con cera vegetal pura y fragancias naturales para iluminar tus espacios y celebrar fechas especiales.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href="#catalogo"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-brand-olive hover:bg-brand-olive-dark text-white text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-olive focus:ring-offset-2"
          >
            <span>Explorar catálogo</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>

          <a
            href={whatsappHeroUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-brand-gold hover:bg-brand-gold-dark text-white text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  )
}
