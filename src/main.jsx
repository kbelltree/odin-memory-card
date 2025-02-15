import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GameBoard from './components/Gameboard'
import Instructions from './components/Instructions'
import Footer from './components/Footer'
import './styles/base.css'
import './styles/main.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <GameBoard />
        <Instructions />
        <Footer />
    </StrictMode>
)
