import React from 'react'
import { Link } from 'react-router-dom'

function Astrum() {
  return (
    <div className="location-page">
      <h2>ALG Suites – Astrum</h2>
      <p>Welcome to ALG Suites at Astrum. Build sections here: highlights, rooms, amenities, map, reviews.</p>
      <Link to="/">← Back to Welcome</Link>
    </div>
  )
}

export default Astrum


