import { useState } from "react"

const GamesForm = ({newGames}) => {

    const [Games, setGames] = useState({
        name: "", 
        coach:"", 
        stadium: ""
    })

    const [error, setError] = useState({hasFailed: false, message: ""});

    const onNewGames = async (event) => {
        event.preventDefault();
        if (Games.name=='') {
            setError({hasFailed:true, message: "El nombre es obligatorio"});
            return;
        }
        const inserted = await newGames(Games);
        if (!inserted) {
            setError({hasFailed: true, message: "No se ha podido insertar el equipo."});
        }
    }

    return (
        <form>
            <input 
                type="text" 
                name="name"
                value={Games.name}
                onChange={(event)=>{
                    setGames({...Games, name: event.target.value})
                    setError(false);
                }}
                placeholder="Nombre del videojuego"/>
            <input 
                type="text" 
                name="descripcion" 
                value={Games.descripcion}
                onChange={(event)=>{
                    setGames({...Games, coach: event.target.value})
                }}
                placeholder="Descripcion del videojuego"/>
            <input 
                type="date" 
                name="releaseDate"
                value={Games.releaseDate}
                onChange={(event)=>{
                    setGames({...Games, name: event.target.value})
                    setError(false);
                }}
                placeholder="Fecha de lanzamiento"/>
            <input 
                type="text" 
                name="company"
                value={Games.company}
                onChange={(event)=>{
                    setGames({...Games, stadium: event.target.value})
                }}
                placeholder="Nombre de la compañía"/>
            {error.hasFailed && <p>{error.message}</p>}
            <button onClick={onNewGames}>Guardar</button>
        </form>
    )
}

export default GamesForm;