import React from 'react'
import ReactDOM from 'react-dom/client'
import MainRouter from './MainRouter.jsx'
import { BrowserRouter } from "react-router-dom"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  </React.StrictMode>,
)
