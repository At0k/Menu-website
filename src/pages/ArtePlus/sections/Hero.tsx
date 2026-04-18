import '../ArtePlus.scss'

// ─────────────────────────────────────────────
// Hero  ← full-screen background image
//   Title top-left, subtitle bottom-right, "View Suites" pill centre-bottom
// ─────────────────────────────────────────────
const Hero = () => {
    const handleBookNow = () => {
        window.open('https://www.airbnb.com/users/profile/1469224031223495524?previous_page_name=PdpHomeMarketplace', '_blank')
    }

    return (
        <section className="ap-hero" id="hero">
            <div
                className="ap-hero__bg"
                style={{ backgroundImage: "url('/Arte-Plus-Klcc-By-Dreamscape-Apartment-Kuala-Lumpur-Exterior (1).jpg')" }}
            />
            <div className="ap-hero__overlay" />

            <div className="ap-hero__content">
                <div className="ap-hero__top">
                    <h1 className="ap-hero__title">ARTE PLUS</h1>
                </div>

                <div className="ap-hero__bottom">
                    <p className="ap-hero__subtitle">AMPANG</p>
                </div>

                <div className="ap-hero__cta-wrapper">
                    <button className="ap-hero__cta" onClick={handleBookNow}>
                        Book Now
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero
