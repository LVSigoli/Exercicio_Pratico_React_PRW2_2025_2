// External libraries
import { createRoot } from 'react-dom/client'

// Components
import App from './App.jsx'

// Hooks
import { DataProvider } from './contexts/Datacontext/indes.jsx'

// Styles
import './index.css'
createRoot(document.getElementById('root')).render(
  <DataProvider>
    <App />
  </DataProvider>
)
