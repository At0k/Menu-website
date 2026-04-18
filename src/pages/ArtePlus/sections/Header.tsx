import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import '../ArtePlus.scss'

// ─────────────────────────────────────────────
// Header  ← Original Boutique Layout
//   Left: Nav links (4)
//   Center: Logo (Resort & Tour)
//   Right: Contact (Location | Phone)
// ─────────────────────────────────────────────
const Header = () => {
    const [scrolled, setScrolled] = useState(false)
    const [hidden, setHidden] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [lastY, setLastY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY
            setScrolled(currentY > window.innerHeight * 0.85)

            if (currentY > 100 && currentY > lastY) setHidden(true)
            else setHidden(false)

            setLastY(currentY)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastY])

    const scrollTo = (id: string) => {
        setIsMenuOpen(false)
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <header className={`ap-header ${scrolled ? 'ap-header--scrolled' : ''} ${hidden ? 'ap-header--hidden' : ''} ${isMenuOpen ? 'ap-header--menu-open' : ''}`}>
            
            {/* Nav Left (4 Links) */}
            <nav className="ap-header__nav-left" aria-label="Desktop Navigation">
                <button onClick={() => scrollTo('about')}>About Us</button>
                <button onClick={() => scrollTo('suites')}>Suites</button>
                <button onClick={() => scrollTo('location')}>Location</button>
                <button onClick={() => scrollTo('amenities')}>Amenities</button>
            </nav>

            {/* Centered Logo */}
            <button 
                className="ap-header__logo" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                aria-label="Back to top"
            >
                ALG SUITE
                <span className="ap-header__logo-sub">Resort & Tour</span>
            </button>

            {/* Contact Info Right */}
            <div className="ap-header__actions">
                <a 
                    href="https://www.airbnb.com/users/profile/1469224031223495524?previous_page_name=PdpHomeMarketplace" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="ap-btn-book"
                >
                    Book Now
                </a>
            </div>

            {/* Mobile Toggle Icons */}
            <button 
                className="ap-header__mobile-toggle" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
            >
                {isMenuOpen ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M4 8h16M4 16h16" />
                    </svg>
                )}
            </button>

            {/* Mobile Menu Overlay - Move to Portal to avoid clipping by Header's backdrop-filter */}
            {typeof document !== 'undefined' && createPortal(
                <div 
                    className={`ap-header__mobile-overlay ${isMenuOpen ? 'ap-header__mobile-overlay--open' : ''}`}
                    aria-hidden={!isMenuOpen}
                >
                    <nav className="ap-header__mobile-nav" aria-label="Mobile Navigation">
                        <button onClick={() => scrollTo('about')}>About Us</button>
                        <button onClick={() => scrollTo('suites')}>Suites</button>
                        <button onClick={() => scrollTo('amenities')}>Amenities</button>
                        <button onClick={() => scrollTo('location')}>Location</button>
                    </nav>
                </div>,
                document.body
            )}

        </header>
    )
}

export default Header
