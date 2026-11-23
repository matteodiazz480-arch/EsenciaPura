import React, { useState, useEffect } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import { BRAND_INFO } from '../data/candlesData'
import { buildWhatsAppLink } from '../utils/security'

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Colecciones', href: '#colecciones' },
    { label: 'Catálogo', href: '#catalogo' },
    { label: 'Cera de Soja', href: '#beneficios' },
    { label: 'Contacto', href: '#contacto' },
  ]

  const whatsappNavUrl = buildWhatsAppLink(
    BRAND_INFO.phoneClean,
    'Hola Florencia! Quiero consultar por las velas de Esência Pura.'
  )

  const closeMenu = () => setIsOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-cream/95 backdrop-blur-md shadow-sm border-b border-brand-sage/20 py-2.5'
          : 'bg-brand-cream/80 backdrop-blur-sm py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <a
            href="#inicio"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-olive rounded-lg p-1"
            aria-label="Ir al inicio de Esência Pura"
          >
            <img
              src="/imagenes/logo.jpg"
              alt="Logo Esência Pura"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border border-brand-gold/40 shadow-sm transition-transform duration-300 group-hover:scale-105"
              width="44"
              height="44"
              loading="eager"
            />
            <div className="flex flex-col text-left">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-brand-olive leading-tight">
                {BRAND_INFO.name}
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-brand-gold font-medium">
                Velas & Aromas
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center space-x-7" aria-label="Navegación principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-brand-charcoal/85 hover:text-brand-olive transition-colors py-1 focus:outline-none focus:ring-1 focus:ring-brand-olive rounded"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <a
              href={whatsappNavUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-brand-olive hover:bg-brand-olive-dark transition-all duration-200 rounded-full shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-brand-olive"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-brand-olive hover:bg-brand-sage/20 focus:outline-none focus:ring-2 focus:ring-brand-olive transition-colors"
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-brand-cream border-b border-brand-sage/30 shadow-lg px-4 pt-3 pb-6 animate-fadeIn">
          <nav className="flex flex-col space-y-3" aria-label="Menú móvil">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-base font-medium text-brand-charcoal hover:text-brand-olive hover:bg-brand-sage/10 px-3 py-2 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href={whatsappNavUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-brand-olive hover:bg-brand-olive-dark rounded-full shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Consultar por WhatsApp</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
