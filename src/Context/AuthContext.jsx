import { createContext, useState } from "react";

export const TOKEN_KEY = 'TOKEN';

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser]= useState({
        isLogged: false,
        email:'',
        id:0,
        jwt:''
    })

    const login = async (email, password) => {
        try {
            //Instrucciones: preparamos el fech par aconseguir el token
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });
            const token = response.json()
            /**
             * Comprobamos el estado de la respuesta, para comprobar si ha respondido de manera
             * correcta
             */
            
            if(response.status === 200) {
                /**
                 * //En caso de que haya funcionado, seteamos en el localStorage el token
                 * (no es una práctica demasiado correcta pero sirve por ahora), también 
                 * seteamos los datos del usuario
                 */
                localStorage.setItem(TOKEN_KEY, token);
                setUser({
                    isLogged: true, 
                    email: token.user.email,
                    id: token.user.id
                })
                //Devolvemos conforme el resultado
                return {error: false, data: 'Sesion iniciada'}
            } else {
                return {error: true, data: 'Usuario y/o contraseña incorrecta'}
            }
        } catch (error) {
            console.log(error)
        }
    }

    //Deslogueo al usuario
    const logout = () => {
        setUser({
            isLogged: false,
            email:'',
            id:0,
            jwt:''
        })
        //Y removemos el token del localStorage
        localStorage.removeItem(TOKEN_KEY);
    }

    const register = async (email, password) => {
        try {
            const response = await fetch('http://localhost:3000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
            const token = response.json()
            if (response.status === 201) {
                return{error: false, data: 'Usuario creado'}
            }else {
                return {error: true, data: 'No se ha conseguido crear el usuario'}
            }
        } catch (error){
            console.log(error)
        }
    }

    return(
        <AuthContext.Provider value={{user, setUser, login, logout, register}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider}

    