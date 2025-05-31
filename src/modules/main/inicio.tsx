// Importacion de hooks y componentes de React
import _React, { useContext, useState } from "react";

// Importación de modulos y componentes
import Section from "../../components/contenedores/section";
import H1 from "../../components/title/h1";

// Importación de interfaces

// Importacion del Provider la Api context
import { DataContext } from "../api-Context/login-context";

// Importación de Axios
import axios from "axios";

//Importacion de URI API
const uriDowUser = import.meta.env.VITE_API_DOWN_USER;

const Inicio = async () => {

    const { dataLogin } = useContext(DataContext);

    console.log('revision de token', dataLogin?.token)
    //const [ users, setUsers ] = useState([]);

    await fetch (uriDowUser,{
        method: 'GET',
        headers: {
            Authorization: `Bearer ${dataLogin?.token}`,
        }
    })
    .then( resp => resp.json())
    .then( data => console.log(data))
    .catch( err => console.error(err))

    /*const respUsers = axios.get(uriDowUser, {
        headers: {
            Authorization: `Bearer ${dataLogin?.token}`,
        }
    });

    console.log(respUsers)*/
    //setUsers(respUsers);

    return (
        <>
            <Section className="main-content">
                <H1
                    text="Home"
                />
            </Section>  
        </>    
    );
};

export default Inicio;