import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// Use the real application component (JSX version) instead of the Vite template App.tsx
import App from './App.jsx'
// Include Bootstrap CSS (Bootstrap Icons loaded via CDN)
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// Theme provider
import { ThemeProvider } from './context/ThemeContext.jsx'

// Render the application

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
