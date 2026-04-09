import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Introduction from './pages/Introduction'
import ArtePlus from './pages/ArtePlus'
import AstrumAmpang from './pages/AstrumAmpang'
import PulauSemporna from './pages/PulauSemporna'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-bg-light font-body">
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/arte-plus" element={<ArtePlus />} />
          <Route path="/astrum-ampang" element={<AstrumAmpang />} />
          <Route path="/pulau-semporna" element={<PulauSemporna />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
