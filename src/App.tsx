import React, { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { FeaturedCollections } from './components/FeaturedCollections'
import { WhySoyWax } from './components/WhySoyWax'
import { ProductCatalog } from './components/ProductCatalog'
import { TestimonialsAndDeliveries } from './components/TestimonialsAndDeliveries'
import { ContactAndFooter } from './components/ContactAndFooter'
import { ProductCategory } from './types'

export const App: React.FC = () => {
  const [catalogCategory, setCatalogCategory] = useState<ProductCategory>('all')

  const handleSelectFeaturedCategory = (category: 'primavera' | 'aromaticas' | 'regalos') => {
    setCatalogCategory(category)
  }

  return (
    <div className="min-h-screen flex flex-col bg-brand-cream text-brand-charcoal">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedCollections onSelectCategory={handleSelectFeaturedCategory} />
        <ProductCatalog initialCategory={catalogCategory} />
        <WhySoyWax />
        <TestimonialsAndDeliveries />
      </main>
      <ContactAndFooter />
    </div>
  )
}
export default App
