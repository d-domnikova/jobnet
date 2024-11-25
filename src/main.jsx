import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Header from "./components/pageComponents/Header";
import Footer from "./components/pageComponents/Footer";
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="flex flex-col min-h-screen">
    <Header />
      <div className="flex-grow">
        <App />
      </div>
      <Footer />
    </div>
  </StrictMode>,
)
