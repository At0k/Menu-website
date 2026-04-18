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
            {/* Conversion Endpoint CTA */}
            <div className="ap-footer__cta">
                <h2 className="ap-footer__cta-title">Ready for Your Stay?</h2>
                <p className="ap-footer__cta-desc">Secure your preferred dates at Arte Plus.</p>
                <div className="ap-footer__cta-actions">
                    <a 
                        href="https://www.airbnb.com/users/profile/1469224031223495524?previous_page_name=PdpHomeMarketplace" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="ap-btn-book ap-btn-book--large"
                    >
                        Book Now
                    </a>
                </div>
            </div>

            <div className="ap-footer__inner">

                {/* Brand */}
                <div className="ap-footer__brand">
                    <p className="ap-footer__logo">ALG HOTEL</p>
                    <p className="ap-footer__logo-sub">Resort &amp; Tour</p>
                    <p className="ap-footer__brand-desc">
                        Providing exceptional stays in the heart of Kuala Lumpur's most iconic
                        architectural landmark.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="ap-footer__col">
                    <h4 className="ap-footer__col-title">Quick Links</h4>
                    <a href="#suites" className="ap-footer__link">Our Suites</a>
                    <a href="#amenities" className="ap-footer__link">Amenities</a>
                    <a href="#location" className="ap-footer__link">Location</a>
                </div>

                {/* Contact */}
                <div className="ap-footer__col">
                    <h4 className="ap-footer__col-title">Contact</h4>
                    <p className="ap-footer__address">
                        Jalan Ampang, 55000<br />
                        Kuala Lumpur, Malaysia
                    </p>
                    <a href="https://wa.me/60198540955" target="_blank" rel="noopener noreferrer" className="ap-footer__link">
                        019-854 0955 (WhatsApp)
                    </a>
                </div>

            </div>
        </footer>
    )
}

export default Footer
