import React, { useState } from "react"
import type { props } from "../../interface/ILogin"

//http://localhost:3100/login

const Login = ({ onLoginSuccess }: props) => {

    const [ userName, setUserName ] = useState('')
    const [ password, setPassword ] = useState('')

    const handleSubmit = ( e: React.FormEvent ) => {
        e.preventDefault();

        if ( userName === 'Prequena' && password === '1234' ) {
            onLoginSuccess();
        } else {
            alert('Credenciales invalidas');
        };
    };

    /**
     * Quede pendiente crear los input del formulario y hacer 
     * la validacion interna sin aplicar peticiones al back 
     * todavia, me queda crear los componente de los inpur, bottom, etc
     * para integrarlo al modulo login, luego crear el navbar(o titulo de login) y el footer
     * 
     * Me falta crear el popup para agregar un usuario nuevo probar si funciona
     * y por ultimo incluir la recepcion del json web token del back-end.
     */

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>formulario</h1>
            </form>
        </>
    )

}

export default Login