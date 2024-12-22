import { createContext, useState } from "react";
import Toastify from 'toastify-js'

const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const addProductInCart = (newProduct) => {
    const condicion = isInCart(newProduct.id)
    if (condicion) {
      const newCart = cart.map((productCart) => {
        if (productCart.id === newProduct.id) {
          
          const newQuantity = productCart.quantity + newProduct.quantity
          if(newQuantity > newProduct.stock){
            Toastify({
              text: "No poseemos mas productos en stock.",
              duration: 3000,
              close: true,
              gravity: "top",
              position: "center",
              stopOnFocus: true,
              style: {
                background: "linear-gradient(16deg, rgba(170,93,66,1) 0%, rgba(238,0,0,1) 100%)",
              },
            }).showToast();
            return productCart
          }else{
            return { ...productCart, quantity: newQuantity }
          }

        } else {
          return productCart
        }
      })

      setCart(newCart)
    } else {
      setCart([...cart, newProduct])
    }
  }

  const isInCart = (idProduct) => {
    return cart.some((productCart) => productCart.id === idProduct)
  }

  const deleteProductInCart = (idProduct) => {
    const productsFilter = cart.filter((productCart) => productCart.id !== idProduct)
    setCart(productsFilter)
  }

  const totalQuantity = () => {
    const quantity = cart.reduce((total, productCart) => total + productCart.quantity, 0)
    return quantity
  }

  const totalPrice = () => {
    const price = cart.reduce((total, productCart) => total + (productCart.precioAlt * productCart.quantity), 0)
    return price.toLocaleString("es-AR")
  }

  const deleteCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{ cart, addProductInCart, totalQuantity, totalPrice, deleteProductInCart, deleteCart }} >
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }