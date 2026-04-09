import '../ArtePlus.scss'

// ─────────────────────────────────────────────
// Location  ← Enhanced "THE NEIGHBORHOOD" Section
// ─────────────────────────────────────────────

const WAZE_LINK = 'https://ul.waze.com/ul?venue_id=66650144.666829116.16676582&overview=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location'
const MAPS_LINK = 'https://maps.app.goo.gl/DXbYQFNDWyun61348'
const MAP_EMBED = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.750497706638!2d101.72861517484517!3d3.1624247966803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc37f3e19d9329%3A0x9c5a0f0bdba948e4!2sArte%20Plus%20Ampang!5e0!3m2!1sen!2smy!4v1700000000000'

const DISTANCES = [
    { 
        place: 'KLIA / Subang Airport', 
        time: '45 MINS',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.24V19a2 2 0 01-2 2H4a2 2 0 01-2-2v-2.76" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 20V6a2 2 0 012-2h0a2 2 0 012 2v14" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 18H3l-1-6h20l-1 6h-9z" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )
    },
    { 
        place: 'KL Central', 
        time: '30 MINS',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 21l-4-4m0 0l4-4m-4 4h18" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 3l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )
    },
    { 
        place: 'Terminal Bersepadu Selatan', 
        time: '20 MINS',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 11V7a5 5 0 0110 0v4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )
    },
]

const Location = () => {
    return (
        <section className="ap-location" id="location">
            <div className="ap-location__row ap-animate">
                {/* Map */}
                <iframe
                    className="ap-location__map-box"
                    src={MAP_EMBED}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Arte Plus location map"
                />

                {/* Info panel */}
                <div className="ap-location__info">
                    <h2 className="ap-location__title ap-title-serif">THE NEIGHBORHOOD</h2>
                    <p className="ap-location__desc">
                        Positioned at the epicenter of culture and commerce, your gateway to the city's
                        finest landmarks and vibrant urban experiences.
                    </p>

                    {/* Waze / Maps buttons */}
                    <div className="ap-location__btns">
                        <a className="ap-location__btn" href={WAZE_LINK} target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18.36 6.64a9 9 0 11-12.73 0M12 2v10m-3 7h6" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Waze
                        </a>
                        <a className="ap-location__btn" href={MAPS_LINK} target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
                                <circle cx="12" cy="10" r="3" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Google Maps
                        </a>
                    </div>

                    {/* Distance cards */}
                    <div className="ap-location__distances">
                        {DISTANCES.map(({ place, time, icon }, index) => (
                            <div key={place} className={`ap-location__distance-item ap-animate ap-animate-d${index + 1}`}>
                                <div className="ap-location__distance-left">
                                    <div className="ap-location__distance-icon">
                                        {icon}
                                    </div>
                                    <span className="ap-location__distance-place">{place}</span>
                                </div>
                                <span className="ap-location__distance-time">{time}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Location
