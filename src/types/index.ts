export type ProductCategory = 'all' | 'primavera' | 'aromaticas' | 'regalos' | 'souvenirs'

export interface Product {
  id: string
  name: string
  category: ProductCategory
  description: string
  scent: string
  image: string
  priceFormatted: string
  features: string[]
  badge?: string
}

export interface Testimonial {
  id: string
  name: string
  location: string
  text: string
  rating: number
  occasion: string
  image: string
}

export interface BenefitItem {
  id: string
  title: string
  description: string
  highlight: string
}

export interface ContactFormData {
  name: string
  phone: string
  interest: string
  message: string
}
