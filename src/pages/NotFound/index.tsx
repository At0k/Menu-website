import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import './NotFound.scss'

const NotFound = () => (
  <main className="not-found">
    <Helmet>
      <title>Page Not Found | ALG Hotel Resort & Tour</title>
      <meta
        name="description"
        content="The page you requested could not be found. Return to ALG Hotel Resort & Tour."
      />
    </Helmet>

    <div className="not-found__content">
      <p className="not-found__eyebrow">ALG HOTEL RESORT &amp; TOUR</p>
      <h1>Page not found</h1>
      <p>The page you requested is unavailable or may have moved.</p>
      <Link className="not-found__cta" to="/">Return to home</Link>
    </div>
  </main>
)

export default NotFound
