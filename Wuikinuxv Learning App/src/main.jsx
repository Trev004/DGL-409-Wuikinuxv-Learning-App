import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './assets/Components/Header.jsx'
import { BrowserRouter } from "react-router-dom"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  </React.StrictMode>,
)
