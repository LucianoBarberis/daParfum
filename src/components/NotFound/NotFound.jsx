import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='contenedorError'>
            <h1>Error: 404</h1>
            <p>Lo sentimos, no pudimos encontrar la página que buscas.</p>
            <Link to="/" className='buttonAlt'>Volver al inicio</Link>
        </div>
    )
}

export default NotFound
