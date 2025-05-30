import { useState } from "react"
import DataProvider from "./modules/api-Context/login-context";

// Importación del css de App
import './css/App.css';

// Importación del modulo del Login
import Login from "./modules/login/login"

function App() {

  const [ isAuthenticated, setIsAuthenticated ] = useState(false);

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

export default App;