import { useNavigate } from 'react-router-dom';
import './css/Home.css'
import { AuthContext } from "../Context/AuthContext";
import { useContext, useEffect } from 'react';

const Home = () => {
    const {redireccion} = useContext(AuthContext);

    const navigate = useNavigate();
          
    useEffect(() => {
          redireccion(navigate)
    }, [])

    const videojuegos = () =>{
        navigate('/listado');
    }
    
    return(
        <>
            <div className='home-button'>
                <button onClick={videojuegos}>Ir al listado de videojuegos</button>
            </div>

            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br />
        </>
    )
}

export default Home;