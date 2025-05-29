import { useState } from "react"
import DataProvider from "./modules/api-Context/login-context";

// Importación del css de App
import './css/App.css';

// Importación del modulo del Login
import Login from "./modules/login/login"

function App() {

  const [ isAuthenticated, setIsAuthenticated ] = useState(false)
  
  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <>
      <DataProvider>
        {isAuthenticated ? (
          <div>
            <h1>Autenticado</h1>
          </div>
        ):(
          <Login 
            onLoginSuccess={handleLoginSuccess} 
          />
        )}
      </DataProvider>
    </>
  )
}

export default App
/**
  Por favor estoy trabajando un proyecto nuevo de estudio y quiero ver un ejemplo en react de como
  puedo hacer el archivo App que contenga el login y luego como hace el cambio cuando sea correcto 
  el login, no he desarrollado un login que cambie el componente por el menu? mas o menos me explica 
  no importa que sea exacto yo armo mi componente de login mas excacto solo quiero la idea de la 
  estructura del archivo App
*/