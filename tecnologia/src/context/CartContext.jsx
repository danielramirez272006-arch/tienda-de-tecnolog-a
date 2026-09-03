import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      nombre: 'ProBook X15 Ultra',
      precioNum: 2499,
      precio: '$2,499',
      imagen: '/laptop.jpg',
      cantidad: 1,
    },
  ])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, cantidad: item.cantidad + 1 } : item
        )
      }
      return [...prev, { ...product, cantidad: 1 }]
    })
    setIsCartOpen(true)
  }

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const updateQuantity = (id, delta) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.cantidad + delta
            return newQty > 0 ? { ...item, cantidad: newQty } : null
          }
          return item
        })
        .filter(Boolean)
    )
  }

  const toggleCart = () => setIsCartOpen(!isCartOpen)
  const closeCart = () => setIsCartOpen(false)

  const totalCount = cartItems.reduce((acc, item) => acc + item.cantidad, 0)
  const totalPrice = cartItems.reduce((acc, item) => acc + item.precioNum * item.cantidad, 0)

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        toggleCart,
        closeCart,
        totalCount,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
