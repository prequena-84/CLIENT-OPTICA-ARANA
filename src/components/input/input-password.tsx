import React, { useState } from "react";
import type { IInputPassword } from "../../interface/IInput/IPassword";

// Importación de css modular
import styles from '../../css/input-password.module.css';

const InputPassword: React.FC<IInputPassword> = ( {name,id,placeHolder,onChange} ) => {

    // Estado para manejar la condicion del password
    const [ mostraPassword, setMostrarPassword ] = useState<boolean>(false);

    // Manejar el evento del click para mostrar el password
    const togglePasswordVisibility = () => {
        setMostrarPassword(!mostraPassword);
    };

    return (
        <div className={`col-auto ${styles["contenedor-div"]}`}>
            <label htmlFor="inputPassword2" className="visually-hidden">Password</label>
            <input 
                name={name} 
                onChange={onChange} 
                id={id} 
                type={ mostraPassword ? 'text' : 'password' }
                className={`form-control ${styles["contenedor-input"]}`} 
                placeholder={placeHolder}
            />
            <button
                type="button"
                onClick={togglePasswordVisibility}
                //className={styles["contenedor-btn"]}
            >
            {mostraPassword ? '👁️' : '👁️‍🗨️'}
            </button>
        </div>
    );
};
export default InputPassword;