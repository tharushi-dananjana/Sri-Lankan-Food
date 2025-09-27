import React, { useState, createContext, useContext } from 'react'
type Language = 'en' | 'ja'
interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string
}
const translations = {
  en: {
    'nav.home': 'Home',
    'nav.menu': 'Menu',
    'nav.login': 'Login',
    'nav.register': 'Register',
    'hero.orderNow': 'Order Now',
    'product.addToCart': 'Add to Cart',
    'cart.title': 'Your Cart',
    'cart.empty': 'Your cart is empty',
    'cart.subtotal': 'Subtotal',
    'cart.tax': 'Tax',
    'cart.shipping': 'Shipping',
    'cart.total': 'Total',
    'cart.checkout': 'Checkout',
    'admin.title': 'Admin Dashboard',
    'admin.addProduct': 'Add Product',
    'admin.productName': 'Product Name',
    'admin.productDesc': 'Description',
    'admin.productPrice': 'Price',
    'admin.productImage': 'Upload Image',
    'admin.submit': 'Submit',
  },
  ja: {
    'nav.home': 'ホーム',
    'nav.menu': 'メニュー',
    'nav.login': 'ログイン',
    'nav.register': '登録',
    'hero.orderNow': '今すぐ注文',
    'product.addToCart': 'カートに追加',
    'cart.title': 'カート',
    'cart.empty': 'カートは空です',
    'cart.subtotal': '小計',
    'cart.tax': '税金',
    'cart.shipping': '配送料',
    'cart.total': '合計',
    'cart.checkout': 'チェックアウト',
    'admin.title': '管理ダッシュボード',
    'admin.addProduct': '商品を追加',
    'admin.productName': '商品名',
    'admin.productDesc': '説明',
    'admin.productPrice': '価格',
    'admin.productImage': '画像をアップロード',
    'admin.submit': '送信',
  },
}
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
)
export const LanguageProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en')
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ja' : 'en'))
  }
  const t = (key: string): string => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    )
  }
  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
