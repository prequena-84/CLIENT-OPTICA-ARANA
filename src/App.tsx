import { useState } from "react"
import DataProvider from "./modules/api-Context/login-context";

import Main from "./modules/main/main";

// Importación del css de App
import './css/App.css';

// Importación del modulo del Login
import Login from "./modules/login/login"
import Div from "./components/contenedores/Div";

function App() {

  const [ isAuthenticated, setIsAuthenticated ] = useState(false);

  const handleLoginSuccess = () => {
      setIsAuthenticated(true);
  };

  return (
    <>
      <DataProvider>
        {isAuthenticated ? (
          <Div >
            <Main/>
          </Div>
        ):(
          <Login 
            onLoginSuccess={handleLoginSuccess} 
          />
        )}
      </DataProvider>
    </>
  );
};

export default App;