import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import "./itemdetail.css"

const ItemDetail = ({ product, addProduct, hideItemCount }) => {
  return (
    <div className="item-detail">
      <div className="images-detail-container">
        <div className="main-image">
        <img src={product.imagen} className="img-item" alt="" />
        </div>
      </div>

      <div className="text-detail-container">
        <h2 className="title-detail">{product.nombre}</h2>
        <p className="text-detail">{product.descripcion}</p>
        <p className="price-detail">${product.precio}</p>
        {
          hideItemCount === true ? (
            <>
              <Link to="/catalogo" className="button large">Volver al carrito</Link>
              <Link to="/cart" className="button large">Terminar mi compra</Link>
            </>
          ) : (
            <ItemCount stock={product.stock} addProduct={addProduct} />
          )
        }
      </div>
    </div>
  )
}
export default ItemDetail