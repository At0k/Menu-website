import '../ArtePlus.scss'

// ─────────────────────────────────────────────
// Footer  ← pink-tinted, 3-column layout
//   Left:   ALG HOTEL logo + tagline + brand description
//   Center: Quick Links (Our Suites, Amenities, Location)
//   Right:  address + phone
// ─────────────────────────────────────────────
const Footer = () => {
    return (
        <footer className="ap-footer" id="contact">
            <div className="ap-footer__inner">

                {/* Brand */}
                <div className="ap-footer__brand">
                    <img src="/LogoOnly.png" alt="ALG Hotel Logo" className="ap-footer__logo-img" />
                    <div className="ap-footer__brand-copy">
                        <span className="ap-footer__brand-title">ALG HOTEL</span>
                        <span className="ap-footer__brand-subtitle">Resort & Tour</span>
                    </div>
                    <p className="ap-footer__brand-desc">
                        Providing exceptional stays in the heart of Kuala Lumpur's most iconic architectural landmark.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="ap-footer__col">
                    <h4 className="ap-footer__col-title">Quick Links</h4>
                    <a href="#about" className="ap-footer__link">ABOUT</a>
                    <a href="#amenities" className="ap-footer__link">AMENITIES</a>
                    <a href="#suites" className="ap-footer__link">OUR SUITES</a>
                    <a href="#transport" className="ap-footer__link">TRANSPORT</a>
                    <a href="#location" className="ap-footer__link">LOCATION</a>
                </div>

                {/* Location */}
                <div className="ap-footer__col">
                    <h4 className="ap-footer__col-title">Location</h4>
                    <div className="ap-footer__address-wrap">
                        <p className="ap-footer__address">
                            Jalan Ampang, 55000<br />
                            Kuala Lumpur, Malaysia
                        </p>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer
