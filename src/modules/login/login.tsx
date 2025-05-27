import React, { useState } from "react"
import type { props } from "../../interface/ILogin"
import Form from "../../components/form/form"
//import InputGroupText from "../../components/input/input-username"
import InputPassword from "../../components/input/Input-Password"

//http://localhost:3100/login

const Login = ({ onLoginSuccess }: props) => {

    const [ dataLogin, setDataLogin ] = useState({
        userName:'',
        password:'',
    });

    const handleChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        const { name, value } = event.target;

        setDataLogin(prevDataLogin => ({
            ...prevDataLogin,
            [name]:value
        }));
    };

    const handleSubmit = ( e: React.FormEvent ) => {
        e.preventDefault();

        if ( dataLogin.userName === 'Prequena' && dataLogin.password === '1234' ) {
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
            <Form onSubmit={handleSubmit}>
                <InputPassword
                    type="password"
                    name="password"
                    id="password"
                    placeHolder="Password"
                    value={dataLogin.password}
                    onChange={(e) => handleChange(e)}

                />
            </Form>
        </>
    )

}

export default Login