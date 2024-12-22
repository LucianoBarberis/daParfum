import { useState } from "react"
import Form from "./FormCheckout"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Timestamp, addDoc, collection, setDoc, doc } from "firebase/firestore"
import db from "../../db/db.js"
import { Link } from "react-router-dom"
import Toastify from 'toastify-js'
import "./checkout.css"

const Checkout = () => {
    const [dataForm, setDataForm] = useState({
        fullname: "",
        phone: "",
        email: "",
        repeatEmail: ""
    })
    const [orderId, setOrderId] = useState(null)
    const { cart, totalPrice, deleteCart } = useContext(CartContext)

    const handleChangeInput = (event) => {
        setDataForm({ ...dataForm, [event.target.name]: event.target.value })
    }

    const handleSubmitForm = (event) => {
        event.preventDefault()
        const order = {
            buyer: { ...dataForm },
            products: [...cart],
            date: Timestamp.fromDate(new Date()),
            total: totalPrice()
        }
        if (dataForm.email === dataForm.repeatEmail) {
            if (dataForm.email === "" || dataForm.fullname === "" || dataForm.phone === "" || dataForm.repeatEmail === ""){
                Toastify({
                    text: "Llena todos los campos",
                    duration: 3000,
                    newWindow: true,
                    gravity: "top",
                    position: 'center',
                    close: "true",
                    style: {
                        background: "linear-gradient(16deg, rgba(170,93,66,1) 0%, rgba(238,0,0,1) 100%)",
                    },
                }).showToast();
            }else {
                uploadOrder(order)
            }
        } else {
            Toastify({
                text: "Los emails deben coincidir.",
                duration: 3000,
                newWindow: true,
                gravity: "top",
                position: 'center',
                close: "true",
                style: {
                    background: "linear-gradient(16deg, rgba(170,93,66,1) 0%, rgba(238,0,0,1) 100%)",
                },
            }).showToast();
        }

    }

    const uploadOrder = (newOrder) => {
        const ordersCollection = collection(db, "orders")
        addDoc(ordersCollection, newOrder)
            .then((response) => {
                setOrderId(response.id)
            })
            .finally(() => {
                updateStock()
            })
    }

    const updateStock = () => {
        cart.map(({ quantity, id, ...productCart }) => {
            const productRef = doc(db, "products", id)
            setDoc(productRef, { ...productCart, stock: productCart.stock - quantity })
        })
        deleteCart()
    }

    return (
        <div className="buy-finished">
            {
                orderId ? (
                    <div className="cardFinish">
                        <h2>Orden enviada</h2>
                        <p>Guarde su número de seguimiento: {orderId}</p>
                        <img src="./svg/deal.svg" height={250} alt="" />
                        <Link to="/" className="buttonAlt">Volver al inicio</Link>
                    </div>
                ) : (
                    <>
                        <Form dataForm={dataForm} handleChangeInput={handleChangeInput} handleSubmitForm={handleSubmitForm} />
                        <img src="/svg/form.svg" alt="" />
                    </>
                )
            }
        </div>
    )
}
export default Checkout