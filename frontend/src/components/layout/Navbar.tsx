import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'
import { useTheme } from '../../context/ThemeContext'
import { useCart } from '../../context/CartContext'
import {
  ShoppingCartIcon,
  MenuIcon,
  XIcon,
  SunIcon,
  MoonIcon,
} from 'lucide-react'
import { Button } from '../ui/Button'
export const Navbar: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const { totalItems, toggleCart } = useCart()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  return (
    <nav className="bg-white dark:bg-gray-900 sticky top-0 z-50 shadow-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1607330289024-1535c6b4e1c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64&q=80"
                alt="Island Bites Logo"
                className="h-8 w-8 mr-2 rounded-full"
              />
              <span className="text-maroon-700 dark:text-coconut-100 font-bold text-xl">
                Island Bites
              </span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/"
              className="text-gray-700 dark:text-gray-200 hover:text-maroon-700 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              {t('nav.home')}
            </Link>
            <Link
              to="/menu"
              className="text-gray-700 dark:text-gray-200 hover:text-maroon-700 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              {t('nav.menu')}
            </Link>
            <button
              onClick={toggleTheme}
              className="text-gray-700 dark:text-gray-200 hover:text-maroon-700 dark:hover:text-white p-2 rounded-full"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <MoonIcon size={20} />
              ) : (
                <SunIcon size={20} />
              )}
            </button>
            <button
              onClick={toggleLanguage}
              className="text-gray-700 dark:text-gray-200 hover:text-maroon-700 dark:hover:text-white px-3 py-1 rounded-md text-sm font-medium border border-gray-300 dark:border-gray-600 transition-all duration-300"
            >
              {language === 'en' ? '日本語' : 'English'}
            </button>
            <Button variant="outline" size="sm">
              {t('nav.login')}
            </Button>
            <Button variant="primary" size="sm">
              {t('nav.register')}
            </Button>
            <button
              onClick={toggleCart}
              className="relative p-2 text-maroon-700 dark:text-coconut-100 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
              aria-label="Cart"
            >
              <ShoppingCartIcon size={20} />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-maroon-700 rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleCart}
              className="relative p-2 mr-2 text-maroon-700 dark:text-coconut-100 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
              aria-label="Cart"
            >
              <ShoppingCartIcon size={20} />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-maroon-700 rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-maroon-700 dark:hover:text-white focus:outline-none"
              aria-label="Open menu"
            >
              {isMobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 shadow-lg">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-maroon-700 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.home')}
            </Link>
            <Link
              to="/menu"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-maroon-700 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.menu')}
            </Link>
            <div className="flex items-center justify-between px-3 py-2">
              <button
                onClick={toggleTheme}
                className="text-gray-700 dark:text-gray-200 hover:text-maroon-700 dark:hover:text-white p-2 rounded-full"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <MoonIcon size={20} />
                ) : (
                  <SunIcon size={20} />
                )}
              </button>
              <button
                onClick={toggleLanguage}
                className="text-gray-700 dark:text-gray-200 hover:text-maroon-700 dark:hover:text-white px-3 py-1 rounded-md text-sm font-medium border border-gray-300 dark:border-gray-600"
              >
                {language === 'en' ? '日本語' : 'English'}
              </button>
            </div>
            <div className="flex space-x-2 px-3 py-2">
              <Button variant="outline" size="sm" fullWidth>
                {t('nav.login')}
              </Button>
              <Button variant="primary" size="sm" fullWidth>
                {t('nav.register')}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
