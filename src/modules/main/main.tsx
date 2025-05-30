//import React from "react";

import Main from "../../components/main/Inicio";
import NavBar from "../../components/navbar/navbar-menu";
import H1 from "../../components/title/h1";

const Home = () => {
    return (
        <>
            <NavBar/>
            <Main>
                <H1
                    text="Home"
                />
            </Main>  
        </>    
    );
};

export default Home;