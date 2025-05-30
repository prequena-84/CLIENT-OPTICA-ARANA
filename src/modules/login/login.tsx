// Importación React
import React, { useContext, useState } from "react"

// Importación de Componentes
import Form from "../../components/form/form"
import Legend from "../../components/form/legend";
import InputUsername from "../../components/input/input-username";
import InputPassword from "../../components/input/input-password";
import BtnLine from "../../components/botton/btn-line";
import BtnOutLine from "../../components/botton/btn-outline";
import Div from "../../components/contenedores/Div";
import Section from "../../components/contenedores/section";

import Fieldset from "../../components/form/fieldset";
import AsideLogin from "../aside/aside-login";
import FormRegistro from "../registro/registro-usuario";

// Importación de Interfaces y tipos
import type { ILogin } from "../../interface/ILogin";

// Importacion de Estilos y Css
import stylesFormLogin from "../../css/module/login.module.css";
import stylesAsideLog from "../../css/module/aside-Login.module.css";
import stylesAsideReg from "../../css/module/aside-registro.module.css";
import styleAsideEfecto from "../../css/module/aside-Transicion.module.css"


//Importación del Data Provieder para reutilizar el estado global de la autorización
import { DataContext } from "../api-Context/login-context";

//http://localhost:3100/login

const Login: React.FC<ILogin> = ({ onLoginSuccess }) => {
 
    const { dataLogin, setDataLogin } = useContext(DataContext);
    const [ mostrarRegistro, setMostrarRegistro ] = useState(false);
    
    const handleChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        const { name, value } = event.target;

        setDataLogin( prevDataLogin  => ({
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

    const forgotPassword = () => {
        alert('hice click');
    };

    const handleSubmit = ( e: React.FormEvent ) => {
        e.preventDefault();      
        console.log(dataLogin)  
    };

    const togleFormReg = () => {
        setMostrarRegistro(!mostrarRegistro);
    };

    return (
        <Section 
            key="login" 
            className={stylesFormLogin["container-section"]}
        >
            {!mostrarRegistro && <Form 
                    key="formulario-login" 
                    onSubmit={handleSubmit}
                    className={stylesFormLogin["container-Form"]}
                >
                    <Fieldset
                        className={stylesFormLogin.containerFieldset}
                    >
                        <Div 
                            key="userName"
                        >
                            <Legend
                                text={"Inicio de Sesión"}
                            />
                            <InputUsername
                                name="userName"
                                id="userName"
                                placeHolder="Usuario"
                                arialLabel="userName"
                                value={dataLogin.userName}
                                onChange={ (e) => handleChange(e) }
                                className={stylesFormLogin.inputUserName}
                            />
                        </Div>
                        <Div key="password">
                            <InputPassword
                                name="password"
                                id="passWord"
                                className={stylesFormLogin.inputPassword}
                                placeHolder="Contraseña"
                                value={dataLogin.password}
                                onChange={(e) => handleChange(e) }
                            />
                        </Div>
                        <Div 
                            key="olvidaste-contraseña"
                            className={stylesFormLogin["container-olvidates-password"]}
                        >
                            <BtnLine
                                text={"Olvidaste tu Contraseña"}
                                type={"button"}
                                variantLine={"btn-link"}
                                onClick={forgotPassword}
                            />
                        </Div>
                        <Div 
                            key="btn"
                            className={stylesFormLogin["container-btn-login"]}
                        >
                            <BtnOutLine 
                                key="ingresar"
                                text={"Ingresar"}
                                type={"submit"}
                                sizes={"btn-lg"}
                                className={stylesFormLogin.btnIngresar}
                            />
                            <BtnLine 
                                key="limpiar"
                                type={"button"}
                                text="Limpiar"
                                sizes={"btn-lg"}
                                onClick={clearForm}
                                className={stylesFormLogin.btnLimpiar}
                            />
                        </Div>
                    </Fieldset>
            </Form>}
           <AsideLogin
                classAside={`${styleAsideEfecto.aside} ${mostrarRegistro ? stylesAsideReg["container-Aside"] : stylesAsideLog["container-Aside"]} ${mostrarRegistro ? 'rotate-left' : ''}`}
                textH1="¡Bienvenidos!"
                textH2={mostrarRegistro ? "Ingresa a tu Cuenta" : "Crea tu cuenta" }
                textBtn={mostrarRegistro ? "INGRESAR" : "REGISTRAR"}
                classRegistro={mostrarRegistro ? stylesAsideLog["container-btn-registro"] : stylesAsideReg["container-btn-registro"] }
                classBtnRegistro={mostrarRegistro ? stylesAsideReg["btn-registro"] : stylesAsideLog["btn-registro"]}
                onClick={togleFormReg}
            />
            {mostrarRegistro && <FormRegistro 
                key="form-registro"
            />}
        </Section>
    );
};

export default Login;

/* 
    Se creo sastifactoriamente el usuario que accede al sistema 
    queda pendiente arreglar varias cosas:

    1- Quitar el idUser y averiguar en MongoDB como lo genera automaticvamente
    2- Hacer en el servicio de Login la comparación de usuario y clave con este ejemplo de codigo

    import bcrypt from 'bcrypt';
    import User from './models/User'; // Asegúrate de importar tu modelo de usuario

    const loginUser = async (userName, password) => {
        try {
            // Busca el usuario por su nombre de usuario
            const user = await User.findOne({ userName });
            
            // Verifica si el usuario existe
            if (!user) {
                throw new Error('Usuario no encontrado');
            }
            // Compara la contraseña proporcionada con la contraseña encriptada
            const isMatch = await bcrypt.compare(password, user.Password);
            // Si la comparación es exitosa, el usuario puede iniciar sesión
            if (isMatch) {
                console.log('Inicio de sesión exitoso');
                // Aquí puedes manejar el inicio de sesión (por ejemplo, generar un token)
                return user; // O retorna el usuario, o lo que necesites
            } else {
                throw new Error('Contraseña incorrecta');
            }
        } catch (error) {
            console.error('Error en el inicio de sesión:', error);
            throw error; // Maneja el error según sea necesario
        }
    };

    3- preparar revisar el resto de  los componentes
    4- trasladar esta sintasis en el nuevo proyecto de la prueba de InterFell
*/