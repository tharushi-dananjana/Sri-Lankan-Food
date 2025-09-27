import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'
import { FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react'
export const Footer: React.FC = () => {
  const { language } = useLanguage()
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
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
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {language === 'en'
                ? 'Authentic Sri Lankan cuisine delivered to your doorstep.'
                : '本格的なスリランカ料理をご自宅までお届けします。'}
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="text-gray-500 hover:text-maroon-700 dark:hover:text-turmeric-400"
              >
                <FacebookIcon size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-maroon-700 dark:hover:text-turmeric-400"
              >
                <InstagramIcon size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-maroon-700 dark:hover:text-turmeric-400"
              >
                <TwitterIcon size={20} />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              {language === 'en' ? 'Quick Links' : 'クイックリンク'}
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-maroon-700 dark:hover:text-turmeric-400"
                >
                  {language === 'en' ? 'Home' : 'ホーム'}
                </Link>
              </li>
              <li>
                <Link
                  to="/menu"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-maroon-700 dark:hover:text-turmeric-400"
                >
                  {language === 'en' ? 'Menu' : 'メニュー'}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-maroon-700 dark:hover:text-turmeric-400"
                >
                  {language === 'en' ? 'About Us' : '私たちについて'}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-maroon-700 dark:hover:text-turmeric-400"
                >
                  {language === 'en' ? 'Contact' : 'お問い合わせ'}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              {language === 'en' ? 'Contact Us' : 'お問い合わせ'}
            </h3>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-gray-600 dark:text-gray-400">
                {language === 'en'
                  ? '123 Main Street, Colombo'
                  : 'コロンボ、メインストリート123'}
              </li>
              <li className="text-sm text-gray-600 dark:text-gray-400">
                +94 11 234 5678
              </li>
              <li className="text-sm text-gray-600 dark:text-gray-400">
                info@islandbites.lk
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Island Bites.{' '}
            {language === 'en'
              ? 'All rights reserved.'
              : 'すべての権利を保有します。'}
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <Link
              to="/terms"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-maroon-700 dark:hover:text-turmeric-400"
            >
              {language === 'en' ? 'Terms & Conditions' : '利用規約'}
            </Link>
            <Link
              to="/privacy"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-maroon-700 dark:hover:text-turmeric-400"
            >
              {language === 'en' ? 'Privacy Policy' : 'プライバシーポリシー'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
