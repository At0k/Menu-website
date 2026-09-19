import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Introduction from './pages/Introduction'
import ArtePlus from './pages/ArtePlus'
import AstrumAmpang from './pages/AstrumAmpang'
import PulauSemporna from './pages/PulauSemporna'
import NotFound from './pages/NotFound'
import './App.css'

import { HelmetProvider } from 'react-helmet-async'

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-bg-light font-body">
          <Routes>
            <Route path="/" element={<Introduction />} />
            <Route path="/arte-plus" element={<ArtePlus />} />
            <Route path="/astrum-ampang" element={<AstrumAmpang />} />
            <Route path="/pulau-semporna" element={<PulauSemporna />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App
