import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./styles/normalice.css"
import './styles/index.css'
import { BrowserRouter } from "react-router-dom"
import Navegacion from './pages/Navegacion'
import FooterPage from './pages/FooterPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navegacion />
      <App />
      <FooterPage />
    </BrowserRouter>
  </React.StrictMode>,
)
