import { useState, useEffect, useContext } from "react";
import BarraBuscadora from "../Components/BarraBuscadora"
import GameList from '../Components/GameList';
import CheckBoxs from "../Components/CheckBoxs"
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Listado = ()=> {
  const {games, setGames} = useContext(AuthContext);
  const {juegoBuscado, setJuegoBuscado} = useContext(AuthContext)
  const {downloadGames, deleteGames} = useContext(AuthContext)
  const {buscarJuego, busquedaCategoria, busquedaPlataforma} = useContext(AuthContext)
  const {redireccion} = useContext(AuthContext);
  const navigate = useNavigate()
      
    useEffect(() => {
      redireccion(navigate)
    }, [])
    
    useEffect(()=>{
      if (juegoBuscado==='') {
        downloadGames();
      }else{
        buscarJuego(juegoBuscado)
      }
    }, [juegoBuscado]);
    

    return (
        <>
            <BarraBuscadora buscarJuegos={buscarJuego} 
                setBuscarJuegos={setJuegoBuscado} juegoBuscado={juegoBuscado} />
            <CheckBoxs busquedaCategoria={busquedaCategoria} busquedaPlataforma={busquedaPlataforma} />
            <h1>Lista de Videojuegos</h1>
            <GameList games={games} deleteGame={deleteGames} />
        </>
    )
}
export default Listado;