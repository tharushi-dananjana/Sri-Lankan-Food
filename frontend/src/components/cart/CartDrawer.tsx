import React from 'react'
import { useCart } from '../../context/CartContext'
import { useLanguage } from '../../context/LanguageContext'
import { Button } from '../ui/Button'
import { XIcon, PlusIcon, MinusIcon, ShoppingCartIcon } from 'lucide-react'
export const CartDrawer: React.FC = () => {
  const {
    cartItems,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    subtotal,
    totalItems,
  } = useCart()
  const { t, language } = useLanguage()
  const tax = subtotal * 0.12 // 12% tax
  const shipping = subtotal > 0 ? 150 : 0 // LKR 150 shipping fee if cart is not empty
  const total = subtotal + tax + shipping
  return (
    <div
      className={`fixed inset-y-0 right-0 w-full sm:w-96 bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
            <ShoppingCartIcon size={20} className="mr-2" />
            {t('cart.title')} {totalItems > 0 && `(${totalItems})`}
          </h2>
          <button
            onClick={closeCart}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400"
            aria-label="Close cart"
          >
            <XIcon size={20} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500 dark:text-gray-400">
              <ShoppingCartIcon size={64} className="mb-4 opacity-50" />
              <p className="text-lg">{t('cart.empty')}</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.product.id}
                  className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                >
                  <div className="h-16 w-16 flex-shrink-0 rounded-full overflow-hidden mr-3">
                    <img
                      src={item.product.image}
                      alt={
                        language === 'en'
                          ? item.product.name
                          : item.product.nameJa || item.product.name
                      }
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white truncate">
                      {language === 'en'
                        ? item.product.name
                        : item.product.nameJa || item.product.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      LKR {item.product.price.toLocaleString()}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity - 1)
                      }
                      className="p-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
                      aria-label="Decrease quantity"
                    >
                      <MinusIcon size={16} />
                    </button>
                    <span className="text-sm font-medium w-6 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity + 1)
                      }
                      className="p-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
                      aria-label="Increase quantity"
                    >
                      <PlusIcon size={16} />
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="ml-3 p-1 text-gray-500 hover:text-maroon-700 dark:text-gray-400 dark:hover:text-maroon-400"
                    aria-label="Remove item"
                  >
                    <XIcon size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">
                {t('cart.subtotal')}
              </span>
              <span className="font-medium text-gray-900 dark:text-white">
                LKR {subtotal.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">
                {t('cart.tax')} (12%)
              </span>
              <span className="font-medium text-gray-900 dark:text-white">
                LKR {tax.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">
                {t('cart.shipping')}
              </span>
              <span className="font-medium text-gray-900 dark:text-white">
                LKR {shipping.toLocaleString()}
              </span>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 pt-2 mt-2">
              <div className="flex justify-between">
                <span className="font-bold text-gray-900 dark:text-white">
                  {t('cart.total')}
                </span>
                <span className="font-bold text-maroon-700 dark:text-turmeric-400">
                  LKR {total.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
          <Button
            variant="primary"
            size="lg"
            fullWidth
            disabled={cartItems.length === 0}
          >
            {t('cart.checkout')}
          </Button>
        </div>
      </div>
    </div>
  )
}
