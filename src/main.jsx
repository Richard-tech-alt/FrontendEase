import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Providers from './providers'
// import { AppKitProvider } from './AppKitProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Providers>
    <App />
    </Providers>
    </BrowserRouter>
  </StrictMode>,
)
