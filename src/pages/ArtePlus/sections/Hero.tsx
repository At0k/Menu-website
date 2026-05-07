import '../ArtePlus.scss'

// ─────────────────────────────────────────────────────────────────────────────
// Hero  ← full-screen background image
//   Centered title/subtitle with a primary CTA at lower-left
// ─────────────────────────────────────────────────────────────────────────────
const Hero = () => {
    const scrollToSuites = () => {
        document.getElementById('suites')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className="ap-hero" id="hero">
            <div className="ap-hero__bg" />
            <div className="ap-hero__overlay" />

            <div className="ap-hero__content">
                <div className="ap-hero__center">
                    <h1 className="ap-hero__title">ARTE PLUS</h1>
                    <p className="ap-hero__subtitle">Ampang, Kuala Lumpur</p>
                </div>

                <button type="button" className="ap-swap-btn ap-swap-btn--light ap-hero__cta" onClick={scrollToSuites}>
                    <span className="ap-swap-btn__label ap-swap-btn__label--default">Explore our rooms</span>
                    <span className="ap-swap-btn__label ap-swap-btn__label--hover">Explore our rooms</span>
                </button>
            </div>
        </section>
    )
}

export default Hero
