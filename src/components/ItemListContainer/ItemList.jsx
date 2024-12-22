import React, { useState } from "react";
import Item from "./Item";

const ItemList = ({ products }) => {
  const [visible, setVisible] = useState(12);

  const cargarMas = () => {
    setVisible((prevVisible) => prevVisible + 12);
  };

  return (
    <div className="boxItems">
      <div className="itemlist">
        {products.slice(0, visible).map((product) => (
          <Item product={product} key={product.id} />
        ))}
      </div>
      
      {visible < products.length && (
          <button onClick={cargarMas} className="buttonAlt seeMore">
            Ver más...
          </button>
      )}
    </div>
  );
};

export default ItemList;