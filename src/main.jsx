import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from './Theme.jsx'
createRoot( document.getElementById( 'root' ) ).render(
  <StrictMode>

    <ThemeProvider>
      <App/>
    </ThemeProvider>
  </StrictMode>,

)
