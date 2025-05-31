// Importacion de hooks y componentes de React
import { useState } from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom";

// Importacion del Provider la Api context
import DataProvider from "./modules/api-Context/login-context";

// Importación de modulos
import NavBar from "./components/navbar/navbar-menu";
import Inicio from "./modules/main/inicio";
import UpdateUser from "./modules/main/update-user";
import Login from "./modules/login/login";

function App() {

  const [ isAuthenticated, setIsAuthenticated ] = useState(false);
  const handleLoginSuccess = () => setIsAuthenticated(true);

  return (
      <DataProvider>
        {isAuthenticated ? (
          <BrowserRouter>
             <NavBar/>
            <Routes>
              <Route path="/" element={ <Inicio/> }/>
              <Route path="/update-user" element={ <UpdateUser/> }/>
            </Routes>
          </BrowserRouter>
        ) : (
          <Login 
            onLoginSuccess={handleLoginSuccess} 
          />
        )}
      </DataProvider>
  );
};

export default App;