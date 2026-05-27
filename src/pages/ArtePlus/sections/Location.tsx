import '../ArtePlus.scss'

// ─────────────────────────────────────────────
// Location  ← Enhanced "THE NEIGHBORHOOD" Section
// ─────────────────────────────────────────────

const WAZE_LINK = 'https://ul.waze.com/ul?venue_id=66650144.666829116.16676582&overview=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location'
const MAPS_LINK = 'https://maps.app.goo.gl/DXbYQFNDWyun61348'
const MAP_EMBED = 'https://maps.google.com/maps?q=Arte%20Plus%20Jalan%20Ampang,%203,%20Lorong%20Ampang%201,%20Kampung%20Berembang,%2055000%20Kuala%20Lumpur,%20Malaysia&t=&z=16&ie=UTF8&iwloc=&output=embed'

const DISTANCES = [
    { 
        place: 'KLIA / SUBANG AIRPORT', 
        time: '45 MINS',
        image: '/1.4-Arte_Tower-1-Lobby.jpg'
    },
    { 
        place: 'KL CENTRAL', 
        time: '30 MINS',
        image: '/arte-plus-jalan-ampan-my-kuala-lumpur-bc-5022267-0.jpg'
    },
    { 
        place: 'TERMINAL BERSEPADU SELATAN (TBS)', 
        time: '20 MINS',
        image: '/ViewArte.avif'
    },
]

const Location = () => {
    return (
        <section className="ap-location" id="location">
            {/* Map Wrapper */}
            <div className="ap-location__map-wrapper ap-animate">
                <iframe
                    className="ap-location__map-box"
                    src={MAP_EMBED}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Arte Plus location map"
                />
                
                {/* Floating Map Buttons */}
                <div className="ap-location__floating-btns">
                    <a className="ap-location__icon-btn ap-location__icon-btn--waze" href={WAZE_LINK} target="_blank" rel="noopener noreferrer" title="Open in Waze">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M13.314 1.59c-.225.003-.45.013-.675.03-2.165.155-4.295.924-6.069 2.327-2.194 1.732-3.296 4.325-3.496 7.05h.002c-.093 1.22-.23 2.15-.469 2.63-.238.479-.42.638-1.24.639C.27 14.259-.4 15.612.266 16.482c1.248 1.657 2.902 2.705 4.72 3.364a2.198 2.198 0 00-.033.367 2.198 2.198 0 002.2 2.197 2.198 2.198 0 002.128-1.668c1.307.12 2.607.14 3.824.1.364-.012.73-.045 1.094-.092a2.198 2.198 0 002.127 1.66 2.198 2.198 0 002.2-2.197 2.198 2.198 0 00-.151-.797 12.155 12.155 0 002.303-1.549c2.094-1.807 3.511-4.399 3.302-7.404-.112-1.723-.761-3.298-1.748-4.608-2.143-2.86-5.53-4.309-8.918-4.265zm.366 1.54c.312.008.623.027.933.063 2.48.288 4.842 1.496 6.4 3.577v.001c.829 1.1 1.355 2.386 1.446 3.792v.003c.173 2.477-.965 4.583-2.777 6.147a10.66 10.66 0 01-2.375 1.535 2.198 2.198 0 00-.98-.234 2.198 2.198 0 00-1.934 1.158 9.894 9.894 0 01-1.338.146 27.323 27.323 0 01-3.971-.148 2.198 2.198 0 00-1.932-1.156 2.198 2.198 0 00-1.347.463c-1.626-.553-3.078-1.422-4.155-2.762 1.052-.096 1.916-.6 2.319-1.408.443-.889.53-1.947.625-3.198v-.002c.175-2.391 1.11-4.536 2.92-5.964h.002c1.77-1.402 3.978-2.061 6.164-2.012zm-3.157 4.638c-.688 0-1.252.579-1.252 1.298 0 .72.564 1.297 1.252 1.297.689 0 1.252-.577 1.252-1.297 0-.711-.563-1.298-1.252-1.298zm5.514 0c-.688 0-1.25.579-1.25 1.298-.008.72.554 1.297 1.25 1.297.688 0 1.252-.577 1.252-1.297 0-.711-.564-1.298-1.252-1.298zM9.641 11.78a.72.72 0 00-.588.32.692.692 0 00-.11.54c.345 1.783 2.175 3.129 4.264 3.129h.125c1.056-.032 2.026-.343 2.816-.922.767-.556 1.29-1.316 1.477-2.137a.746.746 0 00-.094-.547.69.69 0 00-.445-.32.714.714 0 00-.867.539c-.22.93-1.299 1.9-2.934 1.94-1.572.046-2.738-.986-2.926-1.956a.72.72 0 00-.718-.586Z"/>
                        </svg>
                    </a>
                    <a className="ap-location__icon-btn ap-location__icon-btn--maps" href={MAPS_LINK} target="_blank" rel="noopener noreferrer" title="Open in Google Maps">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/>
                        </svg>
                    </a>
                </div>
            </div>

            {/* Distance Cards Grid */}
            <div className="ap-location__grid">
                {DISTANCES.map(({ place, time, image }, index) => (
                    <div key={place} className={`ap-location__card ap-animate ap-animate-d${index + 1}`}>
                        <div className="ap-location__card-img">
                            <img src={image} alt={place} loading="lazy" />
                        </div>
                        <div className="ap-location__card-footer">
                            <span className="ap-location__card-place">{place}</span>
                            <span className="ap-location__card-time">{time}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Location
