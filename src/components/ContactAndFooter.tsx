import React, { useState } from 'react'
import { Phone, Mail, MapPin, Send, MessageCircle, Heart } from 'lucide-react'
import { BRAND_INFO } from '../data/candlesData'
import { sanitizeInput, buildWhatsAppLink } from '../utils/security'
import { ContactFormData } from '../types'
import { InstagramIcon } from './Icons'

export const ContactAndFooter: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    interest: 'Colección Primavera',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const cleanName = sanitizeInput(formData.name)
    const cleanPhone = sanitizeInput(formData.phone)
    const cleanInterest = sanitizeInput(formData.interest)
    const cleanMsg = sanitizeInput(formData.message)

    if (!cleanName || !cleanPhone) {
      setStatusMessage('Por favor completá tu nombre y teléfono.')
      setIsSubmitting(false)
      return
    }

    const compiledText = `Hola Florencia! Mi nombre es ${cleanName} (${cleanPhone}). Quiero consultar por ${cleanInterest}. ${cleanMsg ? `Detalle: ${cleanMsg}` : ''}`
    const finalUrl = buildWhatsAppLink(BRAND_INFO.phoneClean, compiledText)

    setStatusMessage('Abriendo WhatsApp...')
    setTimeout(() => {
      window.open(finalUrl, '_blank', 'noopener,noreferrer')
      setIsSubmitting(false)
      setStatusMessage('¡Consulta enviada! Muchas gracias.')
      setFormData({
        name: '',
        phone: '',
        interest: 'Colección Primavera',
        message: ''
      })
    }, 500)
  }

  return (
    <>
      <section id="contacto" className="cv-auto py-12 md:py-20 bg-brand-cream relative">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-brand-olive tracking-tight">
              Contacto y presupuestos
            </h2>
            <p className="mt-2 text-xs sm:text-base text-brand-charcoal/75 leading-relaxed font-normal">
              Escribinos para encargar ramos personalizados o consultar fechas para souvenirs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-4 sm:space-y-5">
              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-brand-sage/20 shadow-sm space-y-4">
                <h3 className="text-base sm:text-lg font-serif font-bold text-brand-olive">
                  Datos del taller
                </h3>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-cream flex items-center justify-center shrink-0 text-brand-olive border border-brand-sage/20">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-charcoal/60">WhatsApp</p>
                      <a
                        href={buildWhatsAppLink(BRAND_INFO.phoneClean, 'Hola Florencia, quiero consultar por Esência Pura.')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm font-medium text-brand-charcoal hover:text-brand-olive transition-colors"
                      >
                        {BRAND_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-cream flex items-center justify-center shrink-0 text-brand-gold-dark border border-brand-sage/20">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-charcoal/60">Email</p>
                      <a
                        href={`mailto:${BRAND_INFO.email}`}
                        className="text-xs sm:text-sm font-medium text-brand-charcoal hover:text-brand-olive transition-colors break-all"
                      >
                        {BRAND_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-cream flex items-center justify-center shrink-0 text-brand-olive border border-brand-sage/20">
                      <InstagramIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-charcoal/60">Instagram</p>
                      <a
                        href={BRAND_INFO.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm font-medium text-brand-charcoal hover:text-brand-olive transition-colors"
                      >
                        @{BRAND_INFO.instagram}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-cream flex items-center justify-center shrink-0 text-brand-gold-dark border border-brand-sage/20">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-charcoal/60">Ubicación</p>
                      <p className="text-xs sm:text-sm font-medium text-brand-charcoal">
                        {BRAND_INFO.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-brand-sage/15 border border-brand-sage/25 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-olive text-white flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-brand-olive uppercase tracking-wider">Atención personalizada</h4>
                  <p className="text-[11px] sm:text-xs text-brand-charcoal/80 mt-0.5">
                    Coordinamos envíos protegidos a todo el país.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <form
                onSubmit={handleSubmit}
                className="bg-white p-4 sm:p-6 md:p-7 rounded-2xl border border-brand-sage/20 shadow-sm space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-1">
                    <label htmlFor="name" className="text-[11px] font-semibold uppercase tracking-wider text-brand-charcoal/80">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className="w-full px-3 py-2 rounded-xl border border-brand-sage/30 focus:border-brand-olive text-xs sm:text-sm bg-brand-cream-light/30 transition-colors outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="phone" className="text-[11px] font-semibold uppercase tracking-wider text-brand-charcoal/80">
                      WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Tu número"
                      className="w-full px-3 py-2 rounded-xl border border-brand-sage/30 focus:border-brand-olive text-xs sm:text-sm bg-brand-cream-light/30 transition-colors outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="interest" className="text-[11px] font-semibold uppercase tracking-wider text-brand-charcoal/80">
                    Interés
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-xl border border-brand-sage/30 focus:border-brand-olive text-xs sm:text-sm bg-brand-cream-light/30 transition-colors outline-none"
                  >
                    <option value="Colección Primavera">Colección Primavera (Ramos y flores)</option>
                    <option value="Velas y Difusores">Velas y Difusores Cerámicos</option>
                    <option value="Regalo Especial">Regalo Especial con Dedicatoria</option>
                    <option value="Souvenirs de Eventos">Souvenirs (Bodas, 15 Años, Bautismos)</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label htmlFor="message" className="text-[11px] font-semibold uppercase tracking-wider text-brand-charcoal/80">
                    Mensaje o consulta
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Contanos qué fecha tenés en mente o cantidad..."
                    className="w-full px-3 py-2 rounded-xl border border-brand-sage/30 focus:border-brand-olive text-xs sm:text-sm bg-brand-cream-light/30 transition-colors outline-none resize-none"
                  />
                </div>

                {statusMessage && (
                  <div className="p-2.5 rounded-xl bg-brand-sage/20 text-xs font-medium text-brand-olive">
                    {statusMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 sm:py-3 px-5 rounded-full bg-brand-olive hover:bg-brand-olive-dark text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-brand-olive disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Enviando...' : 'Enviar consulta por WhatsApp'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-brand-charcoal text-brand-cream pt-10 pb-6 border-t border-brand-sage/20">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between pb-6 border-b border-brand-sage/20 gap-4">
            <div className="flex items-center gap-3">
              <img
                src="/imagenes/logo.jpg"
                alt="Esência Pura Logo"
                className="w-9 h-9 rounded-full object-cover border border-brand-gold"
                width="36"
                height="36"
                loading="lazy" decoding="async"
              />
              <div>
                <span className="font-serif text-base font-bold text-white block">
                  {BRAND_INFO.name}
                </span>
                <span className="text-[9px] text-brand-gold uppercase tracking-wider block">
                  Cera de Soja & Aromas
                </span>
              </div>
            </div>

            <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-brand-cream/80">
              <a href="#inicio" className="hover:text-white transition-colors">Inicio</a>
              <a href="#colecciones" className="hover:text-white transition-colors">Colecciones</a>
              <a href="#catalogo" className="hover:text-white transition-colors">Catálogo</a>
              <a href="#beneficios" className="hover:text-white transition-colors">Cera de Soja</a>
              <a href="#testimonios" className="hover:text-white transition-colors">Testimonios</a>
              <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
            </nav>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] text-brand-cream/60 gap-2">
            <p>
              © {new Date().getFullYear()} {BRAND_INFO.name}. San Martín, Buenos Aires.
            </p>
            <p className="flex items-center gap-1.5 text-brand-cream/70">
              <span>Elaboración artesanal</span>
              <Heart className="w-3 h-3 text-brand-gold fill-current" />
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
