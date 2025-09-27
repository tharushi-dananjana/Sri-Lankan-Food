import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App' // named export
// CSS import unnecessary since using CDN

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
