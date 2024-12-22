import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import "./cart.css"
import { BsFillTrash3Fill } from "react-icons/bs"

const Cart = () => {
  const { cart, totalPrice, deleteProductInCart, deleteCart} = useContext(CartContext)

  if( cart.length === 0 ){
    return(
      <div className="empty-cart">
        <div className="empty-cart-div">
          <h2>No hay productos en el carrito.</h2>
          <Link to="/" className="buttonAlt " >Volver al inicio</Link>
        </div>
        <img src="/svg/empty.svg" alt="" width={400} />
      </div>
    )
  }

  return (
    <div className="containerCart">
      <h2 className='titleInfo'>Carrito</h2>
      <div className="cart" >
        <div className="items">
        {
          cart.map( (productCart) => (
            <div className="item-cart" key={productCart.id}>
              <img className="img-item-cart" src={productCart.imagen} width={100} alt="" />
              <p>{productCart.nombre}</p>
              <p>Precio por unidad: ${productCart.precio}</p>
              <p>Cantidad: {productCart.quantity}</p>
              <p>Total: ${ (productCart.precioAlt * productCart.quantity).toLocaleString("es-AR") } </p>
              <button className="deleteBtn" onClick={ () => deleteProductInCart(productCart.id) } >
                <BsFillTrash3Fill />
              </button>
            </div>
          ))
        }
        </div>
        <div className="info-cart">
          <p className="text-info-cart">Precio total: ${totalPrice()}</p>
          <Link className="buttonAlt" to="/checkout">Finalizar compra</Link>
          <button className="deleteCart" onClick={deleteCart} >Vaciar carrito</button>
        </div>
      </div>
    </div>
  )
}
export default Cart