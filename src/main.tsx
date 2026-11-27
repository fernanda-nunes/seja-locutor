import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './styles/globals.css'
import App from './App.tsx'

const rootElement = document.getElementById('root')!

const appTree = (
  <StrictMode>
    <App />
  </StrictMode>
)

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, appTree)
} else {
  createRoot(rootElement).render(appTree)
}