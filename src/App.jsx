import { useEffect, useState } from 'react';
import GameForm from './Components/GameForm';
import GameList from './Components/GameList';
import Accordion from './Components/Accordion';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [games, setGames] = useState([]);

  const downloadGames = async () => {
      const response = await fetch('http://localhost:3000/games');
      const apiGames = await response.json();
      setGames(apiGames);
  }

  const newGames = async (game) => {
    try {
      const response = await fetch('http://localhost:3000/games', {
        method: 'POST',
        headers: {"Content-Type": 'application/json'},
        body: JSON.stringify(game)
      });
      if (response.status === 201) {
        downloadTeams();
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    } 
  }

  const deleteGames = async (id) => {
    const response = await fetch(`http://localhost:3000/games/${id}`, {
      method: 'DELETE'
    })
    if (response.status === 200) {
      downloadGames();
    }
    return response.status === 200;
  }

  useEffect(()=>{
    downloadGames();
  }, []);


  return (<>
    <Header/>
    <h1>Lista de Videojuegos</h1>
    <Accordion title="Hola hola">Esto es react</Accordion>
    <GameForm newGame={newGames}/>
    <GameList games={games} deleteGame={deleteGames}/>
  </>)
}

export default App
