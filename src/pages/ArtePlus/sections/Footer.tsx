import '../ArtePlus.scss'

// ─────────────────────────────────────────────
// Footer  ← pink-tinted, 3-column layout
//   Left:   ALG SUITE logo + tagline + brand description
//   Center: Quick Links (Our Suites, Amenities, Location)
//   Right:  address + phone
// ─────────────────────────────────────────────
const Footer = () => {
    return (
        <footer className="ap-footer" id="contact">
            <div className="ap-footer__inner">

                {/* Brand */}
                <div className="ap-footer__brand">
                    <p className="ap-footer__logo">ALG SUITE</p>
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
                    <a href="tel:+60138601915" className="ap-footer__link">013-860 1915</a>
                </div>

            </div>
        </footer>
    )
}

export default Footer
