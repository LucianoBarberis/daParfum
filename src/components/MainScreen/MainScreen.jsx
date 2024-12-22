import { useState, useEffect } from "react"
import ItemDest from "./itemsDest.jsx"
import { collection, getDocs } from "firebase/firestore"
import db from "../../db/db.js"
import { BsCreditCard, BsTruck, BsAward, BsCart4 } from "react-icons/bs";
import './MainScreen.css'
import { Link } from "react-router-dom";

const MainScreen = () => {
    const [products, setProducts] = useState([])
    const [productDest, setProductsDest] = useState([])

    const collectionName = collection(db, "products")
    getDocs(collectionName)
        .then((dataDb) => {
            const productsDb = dataDb.docs.map((productDb) => {
                return { id: productDb.id, ...productDb.data() }
            })
            setProducts(productsDb)
        })

    useEffect(() => {
        if (products.length > 0) {
            const destacados = products.filter((product) => product.destacado === "true");
            setProductsDest(destacados);
        }
    }, [products]);

    return (
        <>
            <section className="introduction">
                <p>
                    Explora nuestra <span className="ital">exclusiva</span> selección de perfumes de alta calidad, creados para resaltar tu esencia y acompañarte en cada momento especial.
                </p>
                <div className="img"></div>

            </section>
            <figure>
                <Link to="/catalogo">
                    <button className="callAction buttonAlt ">
                        Visita nuestro catalogo <BsCart4 />
                    </button>
                </Link>
            </figure>
            <figure className="divider">
                    <div className="bar"></div>
                    <h2>Destacados</h2>
                    <div className="bar2"></div>
            </figure>
            <section className="itemlistDest">
                <ItemDest products={productDest} />
            </section>
            <figure className="divider">
                <div className="bar3"></div>
            </figure>
            <section className="icons">

                <figure className="icon">
                    <BsAward />
                    <p>Excelencia en la calidad de nuestros productos.</p>
                </figure>
                <figure className="icon">
                    <BsCreditCard />
                    <p>Aceptamos todos los métodos de pago para tu comodidad.</p>
                </figure>
                <figure className="icon">
                    <BsTruck />
                    <p>Realizamos envíos a todo el país.</p>
                </figure>
            </section>
            <figure className="divider">
                <div className="bar3"></div>
            </figure>
            <section className="advertising">
                <Link to="/catalogo">
                    <div className="banner">
                        <img src="/img/star.png" alt="" />
                        <p>Descubre nuestra selección de fragancias de alta gama, con marcas icónicas como Ralph Lauren, Rabanne y Tommy Hilfiger.</p>
                    </div>
                </Link>
            </section>
            <figure className="divider">
                    <div className="bar"></div>
                    <h2>Reseñas</h2>
                    <div className="bar2"></div>
            </figure>
            <section className="testimonial">
                <div className="card">
                    <div className="card-content">
                        <h3>María G., Buenos Aires</h3>
                        "¡Un aroma espectacular! Compré Ralph Lauren Polo Blue y estoy encantada. Se siente fresco, sofisticado y dura todo el día. Me sorprendió la atención personalizada y la entrega rápida.
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <h3>Julián A., Córdoba</h3>
                        "Siempre quise probar perfumes de marcas como Paco Rabanne pero me preocupaba si serían originales. Este sitio superó mis expectativas: autenticidad garantizada y el precio vale cada peso. Mi One Million me acompaña a todos lados."
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                    <h3>Valeria R., Santa Fe</h3>
                    "Compré un perfume de Tommy Hilfiger como regalo para mi pareja y quedó fascinado. Me ayudaron a elegir el aroma perfecto, y la presentación era impecable. ¡Gracias por la calidad y el excelente servicio!"
                    </div>
                </div>
            </section>
        </>
    )
}

export default MainScreen