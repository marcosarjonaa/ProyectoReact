import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../Context/AuthContext"
import { useNavigate } from "react-router-dom";
import Emoji from "../Components/Emoji";
import ImagenCara from "../Components/ImagenCara";
import './css/Perfil.css'
import { Button } from "@mui/material";

const Perfil = () => {
    const {user} = useContext(AuthContext)
    const {redireccion} = useContext(AuthContext);
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [id, setId] = useState('')
    const {logout} = useContext(AuthContext)
    
    useEffect(() => {
        redireccion(navigate)
        setEmail(user.email)
        setId(user.id)
    })


    return(
        <>
            <div className="bodyPerfil">
                <ImagenCara userName={email} />
                <p>Id: {id}</p>
                <p>Email: {email}</p>
                <Button onClick={() => logout(navigate)} variant="outlined" color="error">
                    Log Out
                </Button>
                <p>¿Como de conforme estas con nuestro servicio?</p>
                <Emoji />
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br />    

        </>
    )

}

export default Perfil