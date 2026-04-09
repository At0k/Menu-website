import '../ArtePlus.scss'

// ─────────────────────────────────────────────
// Hero  ← full-screen background image
//   Title top-left, subtitle bottom-right, "View Suites" pill centre-bottom
// ─────────────────────────────────────────────
const Hero = () => {
    const scrollToSuites = () => {
        document.getElementById('suites')?.scrollIntoView({ behavior: 'smooth' })
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
                    <button className="ap-hero__cta" onClick={scrollToSuites}>
                        View Suites
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero
