import './css/GameList.css';
import { useState } from 'react';
import Detalles from './Detalles';

const TeamList = ({games, deleteGame}) => {
    const[detallada, setDetallada] = useState("");

    const onDelete = (id) => {
        deleteGame(id);
    }

    const handleVerDetalles = (id) => {
        let game = games.find(game => game.id == id)
        if (detallada.id == game.id) {
            setDetallada("") //Para setearla a vacía
        } else {
            setDetallada(game) //La setea al videojuego
        }
    }

    const cerrar = () => {
        setDetallada("")
    }



    return (
        <>
            <div className="GameList--games">
                {games.map((game) => (
                    <div className="GameList--game-name" key={game.id}>
                        <img className='GameList--game-image' src={game.image} alt={game.name} /><br />
                        {game.name}
                        <br />
                        <div className='GameList--actions'>
                            <button onClick={() => handleVerDetalles(game.id)}>Ver Detalles</button> {/* Usamos la nueva función */}
                            <button className='GameList--actions-delete' onClick={() => onDelete(game.id)}>Borrar</button>
                        </div>
                    </div>
                ))}
            </div>
            {detallada && ( 
                <div style={{border:"10px solid black"}}>
                    <img src={detallada.image} alt="Imagen de videojuego" />
                    <h4>{detallada.name}</h4>
                    <p>{detallada.description}</p>
                    <p>Fecha de Lanzamiento: {detallada.releaseDate}</p>
                    <p>Compañía: {detallada.company}</p>
                    <p>Plataformas: {detallada.platforms.name}</p>
                    <p>Categorías: {detallada.category.name}</p>
                    <p>Precio: {detallada.cost}</p>
                    <a href={detallada.video}>Enlace a youtube</a><br /><br />
                    <button onClick={cerrar}>Cerrar detalles</button>
                </div>
                // Tengo problemas a la hora de mostrar y ocultar entonces lo voy a hacer aquí
                //<Detalles detallada={detallada} cerrar={cerrar} />
             )}
        </>
    )
}

export default TeamList;