import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/afacad-flux'
import '@fontsource/afacad-flux/400.css'
import '@fontsource/afacad-flux/500.css'
import '@fontsource/afacad-flux/600.css'
import '@fontsource/afacad-flux/700.css'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
