import { Link } from "react-router-dom"

const Item = ({ product }) => {

  return (
    <Link to={ "/detail/" + product.id }>
      <div className="item">
        <img src={product.imagen} className="img-item" alt="" width={100} />
        <div className="text">
          <p className="text-item">{product.nombre}</p>
          <p className="text-descrip">{product.descripcion.toLowerCase()}</p>
          <p className="text-item">${product.precio}</p>
        </div>
      </div>
    </Link>
  )
}
export default Item