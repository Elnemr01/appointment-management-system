import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import FilterName from './contextAPI/FilterName.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <FilterName>
      <App />
    </FilterName>
  </BrowserRouter>
)
