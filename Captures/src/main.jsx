import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Batata from '../src/Componentes/Lista/Lista.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Batata/>
    <App/>
  </React.StrictMode>,
)
