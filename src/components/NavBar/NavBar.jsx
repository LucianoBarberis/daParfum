import CartWidget from "./CartWidget"
import { useState } from "react"
import { Link } from "react-router-dom"
import { BsList } from "react-icons/bs"

import "./navbar.css"

const NavBar = () => {

  const [openMenu, setOpenmenu] = useState(false)

  return (
      <>
        <nav className="nav">
          <Link to="/" className="brand primary-font-color">
            <img className="logo" src="/img/daParfumLogo.png" alt="" />
          </Link>
          <ul className="categories">
            <li className="category">
              <Link to="/catalogo" className="text-link">Catalogo</Link>
            </li>
            <li className="category">
              <Link to="/aboutus" className="text-link">Nosotros</Link>
            </li>
            <li className="category">
              <Link to="/contact" className="text-link">Contacto</Link>
            </li>
          </ul>
          <CartWidget />
        </nav>
        <nav className="navMobile">
          <button onClick={() => setOpenmenu(!openMenu)}><BsList className="btnMenu"/></button>
        </nav>
        <menu className={`menuMobile ${openMenu ? "open" : ""}`}>
          <ul className="ulMobile">
            <li className={openMenu ? "liMobileOn" : "liMobileOff"}>
              <Link className="linkMobile" to="/catalogo">Catalogo</Link>
            </li>
            <li className={openMenu ? "liMobileOn" : "liMobileOff"}>
              <Link className="linkMobile" to="/aboutus">Nosotros</Link>
            </li>
            <li className={openMenu ? "liMobileOn" : "liMobileOff"}>
              <Link className="linkMobile" to="/contact">Contacto</Link>
            </li>
          </ul>
        </menu>
      </>
  )
}
export default NavBar