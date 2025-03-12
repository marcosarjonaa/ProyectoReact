import { useContext, useRef } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import './css/registro.css';

const Login = () => {
    const { login } = useContext(AuthContext);
    const email = useRef();
    const password = useRef();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (email.current.value && password.current.value) {
            const response = await login(email.current.value, password.current.value);
            if (!response.error) {
                navigate('/home');
            }
        }
    }

    const registro = () => {
        navigate("/register");
    }

    return (
        <div className="fondo">
            <div className="form-container">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" ref={email} placeholder="Email" />
                    <input type="password" ref={password} placeholder="Contraseña" />
                    <button type="submit">Loguear usuario</button>
                </form>
                <button onClick={registro}>¿No tienes cuenta? Crea una</button>
            </div>
        </div>
    );
}

export default Login;
