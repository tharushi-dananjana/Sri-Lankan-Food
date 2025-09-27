import React from 'react'
import { Hero } from '../components/home/Hero'
import { ProductGrid } from '../components/home/ProductGrid'
import { useLanguage } from '../context/LanguageContext'
export const Home: React.FC = () => {
  const { t } = useLanguage()
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <Hero />
      <ProductGrid title={t('nav.menu')} />
    </div>
  )
}
