import { Link } from 'react-router-dom'
import './ArtePlus.scss'
import Header from './sections/Header'
import Hero from './sections/Hero'
import About from './sections/About'
import Suites from './sections/Suites'
import Amenities from './sections/Amenities'
import Transport from './sections/Transport'
import Location from './sections/Location'
import NearbyAttractions from './sections/NearbyAttractions'
import Footer from './sections/Footer'

// ─────────────────────────────────────────────
// ArtePlus  ← main page, composed from sections
//   Scroll order: Hero → About → Suites → Amenities → Transport → Location → NearbyAttractions → Footer
// ─────────────────────────────────────────────
const ArtePlus = () => {
  return (
    <div className="ap-page">
      <Header />
      <Link to="/" className="ap-hero__back" title="Back to Menu">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5m0 0l7-7m-7 7l7 7" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
      </Link>
      <Hero />
      <About />
      <div className="ap-feature-image" style={{ backgroundImage: "url('/471119343.jpg')" }} />
      <Suites />
      <Amenities />
      <Transport />
      <Location />
      <NearbyAttractions />
      <Footer />
    </div>
  )
}

export default ArtePlus
