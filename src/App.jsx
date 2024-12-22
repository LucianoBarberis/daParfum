import NavBar from "./components/NavBar/NavBar"
import MainScreen from "./components/MainScreen/MainScreen"
import Footer from "./components/Footer/Footer"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Checkout from "./components/Checkout/Checkout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import Cart from "./components/Cart/Cart"
import './App.css'
import AboutUsPage from "./components/AboutUsPage/AboutUsPage"
import ContactPage from "./components/ContactPage/ContactPage"

function App() {

  return (
    <div className="app-container" >
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<MainScreen/>} />
            <Route path="/catalogo" element={<ItemListContainer />} />
            <Route path="/filter/:idCategory" element={<ItemListContainer />} />
            <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
            <Route path="/aboutus" element={<AboutUsPage />}/>
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <div className="bar"></div>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
