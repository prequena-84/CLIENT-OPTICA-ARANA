import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Imortación de Bootstrap
//import 'boostrap/dist/css/bootstrap.css'

// Me falto crear el repositorio antes de Empezar
// y luego modificar mi proyecto creando una rama "feacture-dev-module-login" y rama principal "master"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
