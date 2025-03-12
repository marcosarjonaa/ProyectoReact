import { createContext, useState } from "react";
import api from "../services/api";

export const TOKEN_KEY = 'TOKEN';

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser]= useState({
        isLogged: false,
        email:'',
        id:0,
        jwt:''
    })

    const redireccion = (navigate) => {
        const token = localStorage.getItem("TOKEN")
        if(token == null || token == undefined){
            navigate("/")
        }
    }


    const login = async (email, password) => {
        try{
            const response = await api.post("/login", {email, password})
            if (response.status === 200) {
                const token = await response.data
                console.log(token);
                localStorage.setItem(TOKEN_KEY, token.accessToken)
                setUser({
                    isLogged: true,
                    email: token.user.email,
                    id: token.user.id
                })
                return {error: false, data: 'Sesión iniciada correctamente'}
            } else {
                console.log("Fallo en if")
                return {error: true, data: 'Usuario o contraseña incorrecta'};
            }
        } catch (error) {
            console.log("Fallo en catch")
            return {error: true, data: 'Usuario o contraseña incorrecta'};
        }
    }

    //Deslogueo al usuario
    const logout = (navigate) => {
        setUser({
            isLogged: false,
            email:'',
            id:0,
            jwt:""
        })
        localStorage.removeItem(TOKEN_KEY);
        navigate("/")
    }

    const register = async (email, password) => {
        try {
            const response = await api.post("/register", { email, password})
            if (response.status === 201) {
                return{error: false, data: 'Usuario creado'}
            }else {
                return {error: true, data: 'No se ha conseguido crear el usuario'}
            }
        } catch (error){
            console.log(error)
            return {error: true, data: 'Error al crear el usuario'}
        }
    }

    //Listado:
    const [games, setGames] = useState([]);
    const [juegoBuscado, setJuegoBuscado] = useState('')

    const downloadGames = async () => {
        const response = await api.get("/games")
        const apiGames = await response.data;
        setGames(apiGames);
    }
  
    const deleteGames = async (id) => {
      const response = await api.delete(`/games/${id}`)
      if (response.status === 200) {
        downloadGames();
      }
      return response.status === 200;
    }

    const buscarJuego = async (juego) => {
        const response = await api.get("/games")
        const apiGames = await response.data;
        const filtraPorJuego = apiGames.filter(game => 
          game.name.toLowerCase().includes(juego.toLowerCase())
        )
        setGames(filtraPorJuego)
      }
    
      const busquedaCategoria = async (id) => {
        const response = await api.get("/games") 
        const categorias = await response.data;
        const categoriasFiltradas = categorias.filter(game => 
          Array.isArray(game.platforms) && game.platforms.includes(parseInt(id))
        );
        setGames(categoriasFiltradas);
      }
      
      const busquedaPlataforma = async (id) => {
        if (id == "0"){
            downloadGames()
        }
        const response = await api.get("/games")
        const plataformas = await response.data;
        const plataformasFiltradas = plataformas.filter(game => 
          Array.isArray(game.platforms) && game.platforms.includes(parseInt(id))
        );
        setGames(plataformasFiltradas);
      }

    return(
        <AuthContext.Provider value={{user, redireccion ,setUser, login, logout, register, games, setGames, juegoBuscado, setJuegoBuscado, downloadGames, deleteGames, buscarJuego, busquedaCategoria, busquedaPlataforma}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider}