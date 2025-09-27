import React, { useEffect, useState, createContext, useContext } from 'react'
export interface Product {
  id: string
  name: string
  nameJa?: string
  description: string
  descriptionJa?: string
  price: number
  image: string
  category: string
}
export interface CartItem {
  product: Product
  quantity: number
}
interface CartContextType {
  cartItems: CartItem[]
  isCartOpen: boolean
  addToCart: (product: Product) => void
  removeFromCart: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  toggleCart: () => void
  closeCart: () => void
  openCart: () => void
  totalItems: number
  subtotal: number
}
const CartContext = createContext<CartContextType | undefined>(undefined)
export const CartProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      setCartItems(JSON.parse(savedCart))
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems))
  }, [cartItems])
  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.product.id === product.id,
      )
      if (existingItem) {
        return prevItems.map((item) =>
          item.product.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        )
      }
      return [
        ...prevItems,
        {
          product,
          quantity: 1,
        },
      ]
    })
    openCart()
  }
  const removeFromCart = (productId: string) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.product.id !== productId),
    )
  }
  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId
          ? {
              ...item,
              quantity,
            }
          : item,
      ),
    )
  }
  const clearCart = () => {
    setCartItems([])
  }
  const toggleCart = () => {
    setIsCartOpen((prev) => !prev)
  }
  const closeCart = () => {
    setIsCartOpen(false)
  }
  const openCart = () => {
    setIsCartOpen(true)
  }
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)
  const subtotal = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  )
  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleCart,
        closeCart,
        openCart,
        totalItems,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
export const useCart = (): CartContextType => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
