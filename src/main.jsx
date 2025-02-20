import { createRoot } from 'react-dom/client'
import { Analytics } from "@vercel/analytics/react"
import App from './App.jsx'
import './index.css'
import './responsive.css'


createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Analytics />
  </>,
)
