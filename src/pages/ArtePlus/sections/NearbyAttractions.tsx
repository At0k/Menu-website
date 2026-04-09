import '../ArtePlus.scss'

// ─────────────────────────────────────────────
// NearbyAttractions  ← standalone section
// ─────────────────────────────────────────────

const NearbyAttractions = () => {
    return (
        <section className="ap-nearby" id="nearby">
            <h2 className="ap-nearby__title ap-title-serif ap-animate">Nearby Attractions</h2>
            
            <div className="ap-nearby__grid">

                <div className="ap-nearby__box ap-animate ap-animate-d1">
                    <div className="ap-nearby__header-top">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M13 18l5-5-5-5M6 18l5-5-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <h3 className="ap-nearby__range">Walking Distance</h3>
                    </div>
                    <ul className="ap-nearby__list">
                        <li>Great Eastern Mall</li>
                        <li>Village Grocer @ M City Ampang</li>
                        <li>Ampang Point Shopping Center</li>
                        <li>Taman Tasik Ampang Hilir</li>
                        <li>Gleneagles Hospital</li>
                        <li>Suzi's Corner</li>
                    </ul>
                </div>

                <div className="ap-nearby__box ap-animate ap-animate-d2">
                    <div className="ap-nearby__header-top">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 10v9a1 1 0 001 1h2a1 1 0 001-1v-2h6v2a1 1 0 001 1h2a1 1 0 001-1v-9" />
                            <path d="M5 10L7.5 4.5A2.5 2.5 0 0110 3h4a2.5 2.5 0 012.5 1.5L19 10m-14 0h14" />
                        </svg>
                        <h3 className="ap-nearby__range">Short Drive (1-4 KM)</h3>
                    </div>
                    <ul className="ap-nearby__list">
                        <li>Royal Selangor Polo Club</li>
                        <li>Darul Ehsan Golf Club</li>
                        <li>The LINC KL</li>
                        <li>KLCC Park</li>
                        <li>Taman Tasik Datuk Keramat</li>
                        <li>Jelatek / Ampang LRT Station</li>
                    </ul>
                </div>

            </div>
        </section>
    )
}

export default NearbyAttractions
