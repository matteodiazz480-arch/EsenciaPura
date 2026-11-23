import React, { useEffect } from 'react'
import { X, MessageCircle, Sparkles, Check, ShieldCheck } from 'lucide-react'
import { Product } from '../types'
import { BRAND_INFO } from '../data/candlesData'
import { buildWhatsAppLink } from '../utils/security'

interface ProductModalProps {
  product: Product | null
  onClose: () => void
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (product) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [product, onClose])

  if (!product) return null

  const whatsappMessage = `Hola Florencia! Quiero consultar por el modelo "${product.name}" (${product.scent}). ¿Podrías brindarme más información sobre disponibilidad y tiempos de elaboración?`
  const whatsappUrl = buildWhatsAppLink(BRAND_INFO.phoneClean, whatsappMessage)

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-brand-charcoal/60 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-brand-sage/30 z-10 my-8">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-brand-charcoal flex items-center justify-center shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-brand-olive"
          aria-label="Cerrar ventana"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-[4/5] md:aspect-auto h-72 md:h-full bg-brand-cream overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              width="600"
              height="600"
            />
            {product.badge && (
              <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white bg-brand-olive rounded-full shadow-sm">
                {product.badge}
              </span>
            )}
          </div>

          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div>
                <h3 id="modal-product-title" className="text-2xl sm:text-3xl font-serif font-bold text-brand-olive">
                  {product.name}
                </h3>
                <div className="mt-2 flex items-center gap-2 text-xs font-medium text-brand-gold-dark">
                  <Sparkles className="w-4 h-4 shrink-0" />
                  <span>{product.scent}</span>
                </div>
              </div>

              <p className="text-sm text-brand-charcoal/80 leading-relaxed font-normal">
                {product.description}
              </p>

              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-charcoal/60">
                  Características artesanales
                </h4>
                <ul className="space-y-1.5">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-brand-charcoal/80">
                      <Check className="w-3.5 h-3.5 text-brand-olive shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3 rounded-xl bg-brand-cream-light border border-brand-sage/20 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-brand-olive shrink-0" />
                <p className="text-[11px] text-brand-charcoal/80 leading-tight">
                  Hecho a mano en San Martín, Buenos Aires. Podés pedirlo en colores o aromas a elección.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-brand-sage/20 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brand-olive hover:bg-brand-olive-dark text-white text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brand-olive"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Consultar por WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-3 rounded-full border border-brand-sage/40 hover:bg-brand-cream text-brand-charcoal text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
