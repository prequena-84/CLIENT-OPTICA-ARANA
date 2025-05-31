// Importacion de hooks y componentes de React
import { useContext } from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom";

// Importacion del Provider la Api context
import DataProvider from "./modules/api-Context/login-context";
import AuthProvider from "./modules/api-Context/auth-context";
import { AuthContext } from "./modules/api-Context/auth-context";

// Importación de modulos
import NavBar from "./components/navbar/navbar-menu";
import Inicio from "./modules/main/inicio";
import UpdateUser from "./modules/main/update-user";
import Login from "./modules/login/login";

// Importacion de Spinner para la espera de datos
import Loading from "./components/spinners/spinners";

// Para que funcione en el Provider desde la App debe estar envuelto en el provider de Auth sino nunca actualizara el dato
function App() {
  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
};

function MainApp() {
  const { isAuthenticated, isLoading  } = useContext(AuthContext);

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
            !isLoading ? (
              <Login />
            ) : (
              <Loading />
            )
          )}
      </DataProvider>
  );
};

export default App;

/* //Ejemplo para agregar exit de la App
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };
*/