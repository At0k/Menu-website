import '../ArtePlus.scss'

const Hero = () => {
    const scrollToSuites = () => {
        document.getElementById('suites')?.scrollIntoView({ behavior: 'smooth' })
    }

    const scrollToFooter = () => {
        document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })
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

                <div className="ap-hero__cta-group">
                    <button type="button" className="ap-swap-btn ap-swap-btn--light ap-hero__cta ap-hero__cta--rooms" onClick={scrollToSuites}>
                        <span className="ap-swap-btn__label ap-swap-btn__label--default">Explore our rooms</span>
                        <span className="ap-swap-btn__label ap-swap-btn__label--hover">Explore our rooms</span>
                    </button>

                    <button type="button" className="ap-swap-btn ap-swap-btn--dark ap-hero__cta ap-hero__cta--book" onClick={scrollToFooter}>
                        <span className="ap-swap-btn__label ap-swap-btn__label--default">Book with us</span>
                        <span className="ap-swap-btn__label ap-swap-btn__label--hover">Book with us</span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero
