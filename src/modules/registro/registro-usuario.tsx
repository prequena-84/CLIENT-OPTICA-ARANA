// Importacion de react
import React, { useContext } from "react";

// Importacion Componentes
import Form from "../../components/form/form";
import Fieldset from "../../components/form/fieldset";
import Div from "../../components/contenedores/Div";
import Legend from "../../components/form/legend";
import InputUsername from "../../components/input/input-username";
import InputPassword from "../../components/input/input-password";
import BtnOutLine from "../../components/botton/btn-outline";
import BtnLine from "../../components/botton/btn-line";

// Importacion de Estilos
import stylesFormLogin from "../../css/module/login-registro.module.css";

// Importacion del data context
import { DataContext } from "../api-Context/login-context";

// Importacion de intyerfaces
import type { ILogin } from "../../interface/ILogin";

const FormRegistro: React.FC<ILogin> = () => {

    const { dataLogin, setDataLogin } = useContext(DataContext);

    const handleChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        const { name, value } = event.target;

        setDataLogin( prevDataLogin  => ({
            ...prevDataLogin,
            [name]:value
        }));
    };

    const handleSubmit = ( e: React.FormEvent ) => {
        e.preventDefault();        
        console.log(dataLogin);
    };

    const clearForm = () => {
        setDataLogin({
            userName:'',
            password:'',
            token:'',
        });
    };

    return (
        <Form
            key="formulario-login" 
            onSubmit={handleSubmit}
            className={stylesFormLogin["container-Form"]}
        >
            <Fieldset className={stylesFormLogin.containerFieldset}>
                <Div key="userName">
                    <Legend key="titulo" text={"Registro de Usuario"}/>
                    <InputUsername
                        key="input"
                        name="userName"
                        id="userName"
                        placeHolder="Usuario"
                        arialLabel="userName"
                        value={dataLogin.userName}
                        onChange={ (e) => handleChange(e) }
                        className={stylesFormLogin.containerInputUserName}
                        classInput={stylesFormLogin.inputUserName}
                    />
                </Div>
                <Div key="password">
                    <InputPassword
                        name="password"
                        id="passWord"
                        className={stylesFormLogin.containerInputPassword}
                        classInput={stylesFormLogin.inputPassword}
                        placeHolder="Contraseña"
                        value={dataLogin.password}
                        onChange={(e) => handleChange(e) }
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
                        <BtnLine key="limpiar"
                            type={"button"}
                            text="Limpiar"
                            sizes={"btn-lg"}
                            onClick={clearForm}
                            className={stylesFormLogin.btnLimpiar}
                        />
                </Div>
            </Fieldset>

        </Form>
    );


};

export default FormRegistro;