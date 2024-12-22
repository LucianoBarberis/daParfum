import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import { SerchBar } from "./SerchBar/SerchBar.jsx"
import { Link, useParams, useLocation } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { BsSearch, BsCheck } from "react-icons/bs";
import db from "../../db/db.js"
import './ItemListContainer.css'

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const { idCategory } = useParams()
  const [filteredResults, setFilteredResults] = useState(products);
  const location = useLocation()
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  const getProducts = () => {
    const collectionName = collection(db, "products")
    getDocs(collectionName)
      .then((dataDb)=> {
        const productsDb = dataDb.docs.map((productDb)=> {
          return { id: productDb.id, ...productDb.data() }
        })
        setProducts(productsDb)
      })
  }

  const getProductsByCategory = () => {
    const collectionName = collection(db, "products")
    const q = query(collectionName, where("categoria", "==", idCategory))
    getDocs(q)
      .then((dataDb) => {
        const productsDb = dataDb.docs.map((productDb) => ({
          id: productDb.id,
          ...productDb.data()
        }))
        setProducts(productsDb)
      })
      .catch((error) => console.error("Error fetching products:", error))
  }

  useEffect(() => {
    setFilteredResults(products)
  }, [products])

  useEffect(() => {
    if(idCategory){
      getProductsByCategory()
    }else{
      getProducts()
    }
  }, [idCategory])

  return (
    <>
    <section className="heroContainer">
      <div className="heroBox">
        <h2 className="titleInfo">
          Catalogo
        </h2>
        <div className="filterBox">
          <ul>
            <li>
              <Link className={`buttonAlt ${isActive('/filter/MASCULINAS')}`} to="/filter/MASCULINAS">Masculinas{location.pathname === "/filter/MASCULINAS" ? <BsCheck /> : ''}</Link>
            </li>
            <li>
              <Link className={`buttonAlt ${isActive('/filter/FEMENINAS')}`} to="/filter/FEMENINAS">Femeninas{location.pathname === "/filter/FEMENINAS" ? <BsCheck /> : ''}</Link>
            </li>
            <li>
              <Link className={`buttonAlt ${isActive('/filter/UNISEX')}`} to="/filter/UNISEX">Unisex{location.pathname === "/filter/UNISEX" ? <BsCheck /> : ''}</Link>
            </li>
            <li>
              <Link className={`buttonAlt ${isActive('/catalogo')}`} to="/catalogo">Todas{location.pathname === "/catalogo" ? <BsCheck /> : ''}</Link>
              </li>
          </ul>
        </div>
        <figure className="searchBar">
          <SerchBar setFilteredResults={setFilteredResults} data={products} />
          <BsSearch />
        </figure>
      </div>
    </section>
    <div className="itemContainer">
      <ItemList products={filteredResults} />
    </div>
    </>
  )
}
export default ItemListContainer