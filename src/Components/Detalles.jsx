import './css/Detalles.css'
import React from 'react';

const Detalles = ({ detallada, cerrar }) => {
    return (
        <>
            <div className="modal" onClick={cerrar}>
            <div className="contenido-modal">
                <img src={detallada.image} alt="Imagen de videojuego" />
                <h4>{detallada.name}</h4>
                <p>{detallada.description}</p><br />
                <p>Fecha de Lanzamiento: {detallada.releaseDate}</p>
                <p>Compañía: {detallada.company}</p>
                <p>Plataformas: {detallada.platforms.name}</p>
                <p>Categorías: {detallada.category.name}</p>
                <p>Precio: {detallada.cost}</p>
                <a href={detallada.video}>Enlace a youtube</a>
            </div>
            </div>

            <button onClick={cerrar}>Cerrar detalles</button>
        </>
    )
}

export default Detalles;