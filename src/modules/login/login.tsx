import React, { useState } from "react"
import type { props } from "../../interface/ILogin"
import Form from "../../components/form/form"
import Legend from "../../components/form/legend";
import Label from "../../components/form/label";
import InputUsername from "../../components/input/input-username";
import InputPassword from "../../components/input/input-password";
import BtnLine from "../../components/botton/btn-line";
import BtnOutLine from "../../components/botton/btn-outline";
import Div from "../../components/contenedores/Div";
import Section from "../../components/contenedores/section";
import Aside from "../../components/contenedores/Aside";
import H1 from "../../components/title/h1";
import H2 from "../../components/title/h2";
import BtnBlockOutLine from "../../components/botton/btn-block-outline";

//http://localhost:3100/login

const Login = ({ onLoginSuccess }: props) => {

    const [ dataLogin, setDataLogin ] = useState({
        userName:'',
        password:'',
        token:''
    });

    const handleChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        const { name, value } = event.target;

        setDataLogin(prevDataLogin => ({
            ...prevDataLogin,
            [name]:value
        }));
    };

    const clearForm = () => {
        setDataLogin({
            userName:'',
            password:'',
            token:'',
        });
    };

    const handleSubmit = ( e: React.FormEvent ) => {
        e.preventDefault();

        if ( dataLogin.userName === 'Prequena' && dataLogin.password === '1234' ) {
            onLoginSuccess();
        } else {
            alert('Credenciales invalidas');
        };
    };

    return (
        <>
            <Section>
                <Form 
                    key="formulario-login" 
                    onSubmit={handleSubmit}
                >
                    <fieldset>
                        <Div key="userName">
                            <Legend
                                text={"Inicio de Sesión"}
                            />
                            <Label
                                text={"Usuario"}
                                htmlFor="userName"
                            />
                            <InputUsername
                                name="userName"
                                id="userName"
                                placeHolder="Usuario"
                                arialLabel="userName"
                                value={dataLogin.userName}
                                onChange={ (e) => handleChange(e) }
                            />
                        </Div>
                        <Div key="password">
                            <Label
                                text={"Contraseña"}
                                htmlFor="password"
                            />
                            <InputPassword
                                name="password"
                                id="passWord"
                                placeHolder="Contraseña"
                                value={dataLogin.password}
                                onChange={(e) => handleChange(e) }
                            />
                        </Div>
                        <Div key="btn">
                            <BtnOutLine key="ingresar"
                                text={"Ingresar"}
                                type={"submit"}
                                sizes={"btn-lg"}
                            />
                            <BtnLine key="limpiar"
                                type={"button"}
                                text="Limpiar"
                                sizes={"btn-lg"}
                                onClick={clearForm}
                            />
                        </Div>
                        <BtnLine key="olvidaste-contraseña"
                            text={"Olvidaste tu Contraseña"}
                            type={"button"}
                            variantLine={"btn-link"}
                        />
                    </fieldset>
                </Form>
                <Aside key="registro">
                    <Div key="titulo-1">
                        <H1
                            text="Bienvenido a OPTIPLUS"
                        />
                    </Div>
                    <Div key="titulo-2">
                        <H2
                            text="Crea tu cuenta"
                        />
                    </Div>
                    <Div key="btn-registro">
                        <BtnBlockOutLine
                            text="REGISTRARSE"
                            variantOutLine={"btn-outline-secondary"}
                        />
                    </Div>
                </Aside>
            </Section>
        </>
    );

};

export default Login;