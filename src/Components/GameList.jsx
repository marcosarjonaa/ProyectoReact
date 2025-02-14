import './css/GameList.css';
import './css/Accordion.css'
import { useEffect, useState } from 'react';

const TeamList = ({games, deleteGame}) => {
    const[detallada, setDetallada] = useState(null);

    const onDelete = (id) => {
        deleteGame(id);
    }

    return (
        <>
            <p>Lista de equipos</p>
            <div className="GameList--games">
                {games.map((game) => (
                    <div className="GameList--game-name" key={game.id}>
                        <img className='GameList--game-image' src={game.image} alt={game.name} /><br />
                        {game.name}
                        <br />
                        <span className='GameList--actions'>
                            <button onClick={() => setDetallada(game)}>Ver Detalles</button>
                            <button className='GameList--actions-delete' onClick={() => onDelete(game.id)}>Borrar</button>
                        </span>
                    </div>
                ))}
            </div>
            {detallada && (
                <div>
                    <div>
                        <span className="close" onClick={() => setDetallada(null)}>&times;</span>   
                        <img src={detallada.image} alt={detallada.name} />
                        <h4>{detallada.name}</h4>
                        <p>{detallada.description}</p><br />
                        <p>Fecha de Lanzamiento: {detallada.releaseDate}</p>
                        <p>Compañía: {detallada.company}</p>
                        <p>Plataformas: {detallada.platforms.map(id => platforms.find(p => p.id === id)?.name)}</p>
                        <p>Categorías: {detallada.category.map(id => categories.find(c => c.id === id)?.name)}</p>
                        <p>Precio:{detallada.cost}</p>
                        <iframe 
                            width="560" height="315" 
                            src={detallada.video} title="YouTube video player" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </>
    )
}

export default TeamList;