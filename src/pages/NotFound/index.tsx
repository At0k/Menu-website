import { Link } from 'react-router-dom'
import Seo from '../../components/Seo'
import './NotFound.scss'

const NotFound = () => (
  <main className="not-found">
    <Seo
      title="Page Not Found | ALG Hotel Resort & Tour"
      description="The page you requested could not be found. Return to ALG Hotel Resort & Tour."
      path="/404"
      image="/LogoOnly.png"
      noIndex
    />

    <div className="not-found__content">
      <p className="not-found__eyebrow">ALG HOTEL RESORT &amp; TOUR</p>
      <h1>Page not found</h1>
      <p>The page you requested is unavailable or may have moved.</p>
      <Link className="not-found__cta" to="/">Return to home</Link>
    </div>
  </main>
)

export default NotFound
