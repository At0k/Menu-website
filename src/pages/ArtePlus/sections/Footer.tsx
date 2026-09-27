import '../ArtePlus.scss'
import type { ReactNode } from 'react'

type FooterLink = {
    href: string
    label: string
}

type FooterProps = {
    links?: FooterLink[]
    description?: string
    location?: ReactNode
}

const DEFAULT_LINKS: FooterLink[] = [
    { href: '#about', label: 'ABOUT' },
    { href: '#amenities', label: 'AMENITIES' },
    { href: '#suites', label: 'OUR SUITES' },
    { href: '#transport', label: 'TRANSPORT' },
    { href: '#location', label: 'LOCATION' },
    { href: '#enquire', label: 'ENQUIRE' },
]

// ─────────────────────────────────────────────
// Footer  ← pink-tinted, 3-column layout
//   Left:   ALG HOTEL logo + tagline + brand description
//   Center: Quick Links (Our Suites, Amenities, Location)
//   Right:  address + phone
// ─────────────────────────────────────────────
const Footer = ({
    links = DEFAULT_LINKS,
    description = "Providing exceptional stays in the heart of Kuala Lumpur's most iconic architectural landmark.",
    location = <>Jalan Ampang, 55000<br />Kuala Lumpur, Malaysia</>,
}: FooterProps) => {
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
                    <p className="ap-footer__brand-desc">{description}</p>
                </div>

                {/* Quick Links */}
                <div className="ap-footer__col">
                    <h4 className="ap-footer__col-title">Quick Links</h4>
                    {links.map(link => <a key={link.href} href={link.href} className="ap-footer__link">{link.label}</a>)}
                </div>

                {/* Location */}
                <div className="ap-footer__col">
                    <h4 className="ap-footer__col-title">Location</h4>
                    <div className="ap-footer__address-wrap">
                        <p className="ap-footer__address">{location}</p>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer
