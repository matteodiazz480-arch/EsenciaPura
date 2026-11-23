import React, { useState } from 'react'
import { Sparkles, ArrowRight, MessageCircle } from 'lucide-react'
import { PRODUCTS, BRAND_INFO } from '../data/candlesData'
import { Product, ProductCategory } from '../types'
import { ProductModal } from './ProductModal'
import { buildWhatsAppLink } from '../utils/security'

interface ProductCatalogProps {
  initialCategory?: ProductCategory
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ initialCategory = 'all' }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>(initialCategory)
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null)

  const categories: { key: ProductCategory; label: string }[] = [
    { key: 'all', label: 'Todos' },
    { key: 'primavera', label: 'Primavera' },
    { key: 'aromaticas', label: 'Velas & Difusores' },
    { key: 'regalos', label: 'Regalos Especiales' },
    { key: 'souvenirs', label: 'Souvenirs' }
  ]

  const filteredProducts = selectedCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((item) => item.category === selectedCategory)

  return (
    <section id="catalogo" className="py-12 md:py-20 bg-brand-cream-light">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-brand-olive tracking-tight">
            Catálogo de creaciones
          </h2>
          <p className="mt-2 text-xs sm:text-base text-brand-charcoal/75 font-normal leading-relaxed">
            Modeladas a mano con cera vegetal pura de soja y fragancias botánicas.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 mb-8 sm:mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-wider transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-olive ${
                selectedCategory === cat.key
                  ? 'bg-brand-olive text-white shadow-xs'
                  : 'bg-white text-brand-charcoal/80 hover:bg-brand-sage/20 border border-brand-sage/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          {filteredProducts.map((product) => {
            const whatsappUrl = buildWhatsAppLink(
              BRAND_INFO.phoneClean,
              `Hola Florencia! Quiero consultar por ${product.name} (${product.scent}).`
            )

            return (
              <div
                key={product.id}
                className="group flex flex-col lg:flex-row bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-brand-sage/20 shadow-xs hover:shadow-md transition-all duration-300"
              >
                <div
                  className="relative w-full lg:w-44 xl:w-48 shrink-0 aspect-square lg:aspect-auto overflow-hidden bg-brand-cream cursor-pointer"
                  onClick={() => setActiveModalProduct(product)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    width="240"
                    height="240"
                    loading="lazy"
                  />
                  {product.badge && (
                    <span className="absolute top-2 left-2 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-white bg-brand-olive rounded-full shadow-xs">
                      {product.badge}
                    </span>
                  )}
                </div>

                <div className="p-3 sm:p-4 md:p-5 flex-1 flex flex-col justify-between space-y-2">
                  <div className="space-y-1">
                    <h3
                      className="text-xs sm:text-base font-serif font-bold text-brand-olive group-hover:text-brand-olive-dark transition-colors cursor-pointer line-clamp-1"
                      onClick={() => setActiveModalProduct(product)}
                    >
                      {product.name}
                    </h3>

                    <div className="flex items-center gap-1 text-[10px] sm:text-xs text-brand-gold-dark font-medium">
                      <Sparkles className="w-3 h-3 shrink-0" />
                      <span className="line-clamp-1">{product.scent}</span>
                    </div>

                    <p className="hidden sm:block text-xs text-brand-charcoal/70 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-brand-sage/15 flex items-center justify-between gap-1.5">
                    <button
                      type="button"
                      onClick={() => setActiveModalProduct(product)}
                      className="text-[11px] sm:text-xs font-semibold text-brand-olive hover:text-brand-olive-dark inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Detalle</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white bg-brand-gold hover:bg-brand-gold-dark transition-colors shadow-xs"
                      aria-label={`Consultar por ${product.name}`}
                    >
                      <MessageCircle className="w-3 h-3" />
                      <span className="hidden sm:inline">Consultar</span>
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <ProductModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
      />
    </section>
  )
}
