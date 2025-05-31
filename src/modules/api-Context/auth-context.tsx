// Importacion de hooks y componentes de React
import React, { createContext, useEffect, useState } from 'react';

// Importacion de un decodificador de JWT_decode
import { jwtDecode }  from "jwt-decode";

// Importación de Interfaces
import type { IAutorizacion } from '../../interface/Iapi-context/IAuth-context';

// Importacion de Interfaces
import type { JwtPayload } from "../../interface/IJwt-decode";   //"./interface/IJwt-decode";

const defaultContextValue: IAutorizacion = {
    isAuthenticated:false,
    setIsAuthenticated: () => {},
};

export const AuthContext = createContext<IAutorizacion>(defaultContextValue);

const AuthProvider: React.FC<IAutorizacion> = ( {children,key=undefined} ) => {
    const [ isAuthenticated,setIsAuthenticated ] = useState(false);

    useEffect (() => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const decode = jwtDecode<JwtPayload>(token);
                const expiro = decode.exp ? decode.exp * 1000 < Date.now() : true;
                
                if (expiro) {
                    alert('Se ha vencido la sesión, ingrese nuevamente');

                    // Opcional: eliminar el token si ha expirado
                    localStorage.removeItem('token'); 

                    // Asegúrate de que se establezca en false si ha expirado
                    if (setIsAuthenticated) setIsAuthenticated(false);

                } else {
                    // Si no ha expirado, establece la autenticación en true
                    if (setIsAuthenticated) setIsAuthenticated(true);
                };

            } catch (err) {
                console.error("Error al decodificar el token:", err);
                if (setIsAuthenticated) setIsAuthenticated(false); 
            }
        } else {
            // Si no hay token, no está autenticado
            if (setIsAuthenticated) setIsAuthenticated(false);
        };
    }, []); 

    return (
        <AuthContext.Provider key={key} value={ {isAuthenticated,setIsAuthenticated} }>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;