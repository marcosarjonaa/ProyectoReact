import { useContext, useRef } from "react"
import { AuthContext } from "../Context/AuthContext"
import { TextField } from "@mui/material"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const {login } = useContext(AuthContext)
    const email = useRef()
    const password = useRef()
    //Navigate la usaremos para poder navegar de esta pagina a otras
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (e.target.email.value && e.target.password.value) {
            const response = await login(e.target.email.value, e.target.password.value);
            if (response) {
                navigate('/listado')
            }
        }
    }

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" type="email" label="Outlined"
                    variant="outlined" ref={email} placeholder="ejemplo@gmail.com"/>
                <TextField id="outlined-basic" type="password" label="Outlined"
                    variant="outlined" ref={password} />
                <button type="submit">Logueate!!</button>
            </form>
            <button onClick={()=> navigate('/register')}>Aún no tienes cuenta</button>
        </>
    )
}

export default Login;