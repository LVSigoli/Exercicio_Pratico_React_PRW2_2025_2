import './index.css'
import App from './App.jsx'
import { createRoot } from 'react-dom/client'
import { DataProvider } from './contexts/Datacontext/indes.jsx'

createRoot(document.getElementById('root')).render(
  <DataProvider>
    <App />
  </DataProvider>
)
