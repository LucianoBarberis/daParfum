import Item from "../ItemListContainer/Item"

export const ItemDest = ({ products }) => {
    return (
        <div className="itemDest">
            {
                products.map((product) => (
                    <Item product={product} key={product.id} />
                ))
            }
        </div>
    )
}
