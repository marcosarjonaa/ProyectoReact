import { useContext, useRef } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import './css/registro.css';

const Register = () => {
    const { register } = useContext(AuthContext);
    const email = useRef();
    const password = useRef();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (email.current.value && password.current.value) {
            const response = await register(email.current.value, password.current.value);
            if (!response.error) {
                navigate('/');
            }
        }
    }

    const login = () => {
        navigate("/");
    }

    return (
        <div className="fondo">
            <div className="form-container">
                <h1>Registro</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" ref={email} placeholder="Email" />
                    <input type="password" ref={password} placeholder="Contraseña" />
                    <button type="submit">Registrar usuario</button>
                </form>
                <button onClick={login}>¿Ya tienes cuenta? Inicia sesión</button>
            </div>
        </div>
    );
}

export default Register;
