import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import QuienesSomos from './pages/QuienesSomos'
import Operaciones from './pages/Operaciones'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/operaciones" element={<Operaciones />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
