import React, { useState } from "react"
import type { props } from "../../interface/ILogin"
import Form from "../../components/form/form"

import BtnA from "../../components/botton/btn-a";

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
     * 
     * 
     * Estan listo los botones e inputs queda crear el navbar(o titulo de login) y el footer
     * 
     * Me falta crear el popup para agregar un usuario nuevo probar si funciona
     * y por ultimo incluir la recepcion del json web token del back-end.
     */

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <BtnA
                    role={"button"}
                    text="prueba"
                    onClick={handleSubmit}
                    sizes={"btn-lg"}
                    variant={"btn-secondary"}
                />
            </Form>
        </>
    );

};

export default Login;