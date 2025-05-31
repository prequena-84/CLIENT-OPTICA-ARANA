// Importacion de hooks y componentes de React
//import React from "react";

// Importación de modulos y componentes
import Section from "../../components/contenedores/section";
import H1 from "../../components/title/h1";

// Importación de interfaces

const Inicio = () => {
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