import { useState } from "react"
import api from "../services/api";

const GameForm = () => {

    const [games, setGames] = useState({
        id:"",
        name: "",
        description:"",
        releaseDate: "",
        company: "",
        platforms: [],
        category: [],
        cost: 0,
        image: "",
        video: ""

    })

    const [error, setError] = useState({hasFailed: false, message: ""});

    const getUserIdFromToken = () => {
        const token = localStorage.getItem("TOKEN");
        if (!token) return null;

        try {
            const decodedToken = JSON.parse(atob(token.split(".")[1])); // Decodificar el JWT
            return decodedToken.sub; // Obtener el ID del usuario
        } catch (error) {
            console.error("Error decodificando el token", error);
            return null;
        }
    };


    const onNewGames = async (event) => {
        event.preventDefault();
        if (games.name === '') {
            setError({ hasFailed: true, message: "El nombre es obligatorio" });
            return;
        }

        const ownerId = getUserIdFromToken();
        if (!ownerId) {
            setError({ hasFailed: true, message: "No se encontró un usuario válido." });
            return;
        }

        const gameData = { ...games, ownerId };

        try {
            const response = await api.post("/games", gameData);
            console.log("Juego guardado:", response.data);
        } catch (error) {
            console.error("Error al insertar el juego:", error);
            setError({ hasFailed: true, message: "No se ha podido insertar el juego." });
        }
    }; 
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo translúcido
            color: 'white', // Texto en blanco
            padding: '20px',
            borderRadius: '8px'
        }}>

            <form onSubmit={onNewGames}>
                <label htmlFor="id">id: </label><br /><br />
                <input
                    type="text"
                    name="name"
                    value={games.id}
                    onChange={(event) => {
                        setGames({ ...games, id: event.target.value });
                        setError(false);
                    } }
                    placeholder="Id del videojuego" />
                <label htmlFor="name">nombre: </label><br /><br />
                <input
                    type="text"
                    name="name"
                    value={games.name}
                    onChange={(event) => {
                        setGames({ ...games, name: event.target.value });
                        setError(false);
                    } }
                    placeholder="Nombre del videojuego" />
                <label htmlFor="description">description</label><br /><br />
                <input
                    type="text"
                    name="description"
                    value={games.description}
                    onChange={(event) => {
                        setGames({ ...games, description: event.target.value });
                    } }
                    placeholder="Descripcion del videojuego" />
                <label htmlFor="date">Fecha de lanzamiento:</label><br /><br />
                <input
                    type="date"
                    name="releaseDate"
                    value={games.releaseDate}
                    onChange={(event) => {
                        setGames({ ...games, releaseDate: event.target.value });
                        setError(false);
                    } }
                    placeholder="Fecha de lanzamiento" />
                <label htmlFor="company">Compañia:</label><br /><br />
                <input
                    type="text"
                    name="company"
                    value={games.company}
                    onChange={(event) => {
                        setGames({ ...games, company: event.target.value });
                    } }
                    placeholder="Nombre de la compañía" />
                <label htmlFor="platforms">Plataformas:</label><br /><br />
                <input
                    type="number"
                    name="cost"
                    value={games.cost}
                    onChange={(event) => {
                        setGames({ ...games, cost: event.target.value });
                    } }
                    placeholder="Coste del videojuego" />
                <label htmlFor="image">Imagen:</label><br /><br />
                <input
                    type="text"
                    name="image"
                    value={games.image}
                    onChange={(event) => {
                        setGames({ ...games, image: event.target.value });
                    } }
                    placeholder="Enlace a la imagen" />
                <label htmlFor="video">Video: </label><br /><br />
                <input
                    type="text"
                    name="video"
                    value={games.video}
                    onChange={(event) => {
                        setGames({ ...games, video: event.target.value });
                    } }
                    placeholder="Enlace del video" />
                {error.hasFailed && <p>{error.message}</p>}
                <button type="submit">Guardar</button>
            </form>
        </div>
    )
}

export default GameForm;