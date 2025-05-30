// Importacion hooks de React
import React, { useEffect, useState } from "react";

// Importación de componentes
import Header from "../contenedores/header";

// Importación de interfaces
import type { INavBar, Menu } from "../../interface/Inav-bar/INav-bar";

const NavBar: React.FC<INavBar> = ({
    titleBrand="Menu",
    titleNavbar = "Menu",
} ) => {

    const [ menu, setMenu ] = useState<Menu[]>([]);

    useEffect( () => {
        fetch("../../../public/config-nav-bar.json")
        .then( resp => resp.json() )
        .then( data => setMenu(data) ) 
        .catch( err => console.error(err) );
    },[]);

    return (
        <Header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        {titleBrand}
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                                {titleNavbar}
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                {menu.map((item,index) => (
                                    <li key={`lista-menu-${index}`} className="nav-item dropdown">
                                        <a 
                                            key={`a${index}`}
                                            className="nav-link dropdown-toggle" 
                                            href="#" 
                                            role="button" 
                                            data-bs-toggle="dropdown" 
                                            aria-expanded="false"
                                        >
                                            {item.menu}
                                        </a>
                                        <ul key={`lista-submenu-${index}`} className="dropdown-menu">
                                            {item.submenu.length > 0 ? (
                                                item.submenu.map((item,index) => (
                                                    <li key={`li-submenu-${index}`}>
                                                        <a 
                                                            className="dropdown-item" 
                                                            //href={item.link} // Queda pendiente definir el enrutado en la App
                                                        >
                                                            {item.label}
                                                        </a>
                                                    </li>
                                            ))) : (
                                                <li key={`li-submenu-${index}`}>
                                                    <a 
                                                        className="dropdown-item" 
                                                        //href={item.link} // Queda pendiente definir el enrutado en la App
                                                    >
                                                       {item.menu}
                                                    </a>
                                                </li>
                                            )}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                            <form className="d-flex mt-3" role="search">
                                <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">
                                    {"Buscar"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        </Header>
    );
};

export default NavBar;