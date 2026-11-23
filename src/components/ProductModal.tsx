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
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [product, onClose])

  if (!product) return null

  const whatsappMessage = `Hola Florencia! Quiero consultar por "${product.name}" (${product.scent}). ¿Podrías brindarme más información sobre disponibilidad y tiempos de entrega?`
  const whatsappUrl = buildWhatsAppLink(BRAND_INFO.phoneClean, whatsappMessage)

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto bg-brand-charcoal/60 modal-enter"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-xl md:max-w-3xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-brand-sage/30 z-10 my-auto max-h-[92vh] flex flex-col">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 hover:bg-white text-brand-charcoal flex items-center justify-center shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-brand-olive"
          aria-label="Cerrar ventana"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="overflow-y-auto flex-1">
          <div className="hidden md:grid md:grid-cols-2">
            <div className="relative aspect-square bg-brand-cream overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                width="450"
                height="450"
              />
              {product.badge && (
                <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white bg-brand-olive rounded-full shadow-sm">
                  {product.badge}
                </span>
              )}
            </div>

            <div className="p-7 flex flex-col justify-between space-y-5">
              <div className="space-y-3.5">
                <div>
                  <h3 id="modal-product-title" className="text-2xl font-serif font-bold text-brand-olive leading-tight">
                    {product.name}
                  </h3>
                  <div className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-brand-gold-dark">
                    <Sparkles className="w-3.5 h-3.5 shrink-0" />
                    <span>{product.scent}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed font-normal">
                  {product.description}
                </p>

                <div className="space-y-1.5 pt-1">
                  <h4 className="text-[11px] font-semibold uppercase tracking-wider text-brand-charcoal/60">
                    Características artesanales
                  </h4>
                  <ul className="space-y-1">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-brand-charcoal/80">
                        <Check className="w-3 h-3 text-brand-olive shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 rounded-xl bg-brand-cream-light border border-brand-sage/20 flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-brand-olive shrink-0" />
                  <p className="text-[11px] text-brand-charcoal/80 leading-tight">
                    Elaboración artesanal en San Martín, Buenos Aires.
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-brand-sage/20 flex items-center gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-brand-olive hover:bg-brand-olive-dark text-white text-xs font-semibold uppercase tracking-wider transition-colors duration-200 shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Consultar por WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-full border border-brand-sage/40 hover:bg-brand-cream text-brand-charcoal text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>

          <div className="md:hidden p-4 space-y-4">
            <div className="flex items-start gap-3.5 pr-8">
              <div className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 rounded-2xl overflow-hidden bg-brand-cream shadow-sm border border-brand-sage/20">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  width="120"
                  height="120"
                />
              </div>

              <div className="space-y-1 flex-1">
                {product.badge && (
                  <span className="inline-block px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-white bg-brand-olive rounded-full">
                    {product.badge}
                  </span>
                )}
                <h3 className="text-base sm:text-lg font-serif font-bold text-brand-olive leading-tight">
                  {product.name}
                </h3>
                <div className="flex items-center gap-1 text-[11px] font-medium text-brand-gold-dark">
                  <Sparkles className="w-3 h-3 shrink-0" />
                  <span className="line-clamp-1">{product.scent}</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-brand-charcoal/80 leading-relaxed font-normal">
              {product.description}
            </p>

            <div className="p-3 rounded-xl bg-brand-cream-light border border-brand-sage/20 space-y-1.5">
              <h4 className="text-[10px] font-semibold uppercase tracking-wider text-brand-charcoal/60">
                Detalles del producto
              </h4>
              <ul className="space-y-1">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-1.5 text-[11px] text-brand-charcoal/80">
                    <Check className="w-3 h-3 text-brand-olive shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-full bg-brand-olive hover:bg-brand-olive-dark text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Consultar por WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={onClose}
                className="w-full py-2 rounded-full border border-brand-sage/30 text-brand-charcoal text-xs font-semibold uppercase tracking-wider hover:bg-brand-cream transition-colors"
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
