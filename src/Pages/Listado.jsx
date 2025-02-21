import BarraBuscadora from "../Components/BarraBuscadora"
import GameList from '../Components/GameList';
import CheckBoxs from "../Components/CheckBoxs"

const Listado = ()=> {
    const [games, setGames] = useState([]);
      const [juegoBuscado, setJuegoBuscado] = useState('')
    
      const downloadGames = async () => {
          const response = await fetch('http://localhost:3000/games');
          const apiGames = await response.json();
          setGames(apiGames);
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
    
    
      /**
       * Este método se basa en que según el juego que 
       * se escriba en la barra buscadora, componente que usa esto,
       * filtra los juegos diosponibles
       * @param {game} juego 
       */
      const buscarJuego = async (juego) => {
        const response = await fetch('http://localhost:3000/games')
        const allGames = await response.json()
        const filtraPorJuego = allGames.filter(game => 
          game.name.toLowerCase().includes(juego.toLowerCase())
        )
        setGames(filtraPorJuego)
      }
    
      const busquedaCategoria = async (id) => {
        const response = await fetch('http://localhost:3000/games');
        const categorias = await response.json();
        const categoriasFiltradas = categorias.filter(game => 
          Array.isArray(game.platforms) && game.platforms.includes(parseInt(id))
        );
        setGames(categoriasFiltradas);
      }
      
      const busquedaPlataforma = async (id) => {
        const response = await fetch('http://localhost:3000/games');
        const plataformas = await response.json();
        const plataformasFiltradas = plataformas.filter(game => 
          Array.isArray(game.platforms) && game.platforms.includes(parseInt(id))
        );
        setGames(plataformasFiltradas);
      }
    
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