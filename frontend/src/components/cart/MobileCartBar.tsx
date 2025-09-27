import React from 'react'
import { useCart } from '../../context/CartContext'
import { ShoppingCartIcon } from 'lucide-react'
export const MobileCartBar: React.FC = () => {
  const { totalItems, subtotal, toggleCart } = useCart()
  if (totalItems === 0) return null
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg md:hidden z-40">
      <button
        onClick={toggleCart}
        className="flex items-center justify-between w-full p-4 focus:outline-none"
      >
        <div className="flex items-center">
          <div className="relative">
            <ShoppingCartIcon
              size={24}
              className="text-maroon-700 dark:text-turmeric-400"
            />
            <span className="absolute -top-2 -right-2 bg-maroon-700 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {totalItems}
            </span>
          </div>
          <span className="ml-3 text-gray-900 dark:text-white font-medium">
            View Cart
          </span>
        </div>
        <span className="font-bold text-maroon-700 dark:text-turmeric-400">
          LKR {subtotal.toLocaleString()}
        </span>
      </button>
    </div>
  )
}
