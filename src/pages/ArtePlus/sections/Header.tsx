import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { createPortal } from 'react-dom'
import './Header.scss'

const NAV_ITEMS = [
    { id: 'about', label: 'About' },
    { id: 'amenities', label: 'Amenities' },
    { id: 'suites', label: 'Suites' },
    { id: 'transport', label: 'Transport' },
    { id: 'location', label: 'Location' },
]

const BOOKING_LINK = 'https://www.airbnb.com/users/profile/1469224031223495524?previous_page_name=PdpHomeMarketplace'

const Header = () => {
    const [scrolled, setScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 24)
        handleScroll()

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const body = document.body
        const html = document.documentElement

        if (isMenuOpen) {
            body.style.overflow = 'hidden'
            html.style.overflow = 'hidden'
        } else {
            body.style.overflow = ''
            html.style.overflow = ''
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsMenuOpen(false)
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => {
            body.style.overflow = ''
            html.style.overflow = ''
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [isMenuOpen])

    const scrollTo = (id: string) => {
        setIsMenuOpen(false)
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <header className={`ap-header ${scrolled ? 'ap-header--scrolled' : ''} ${isMenuOpen ? 'ap-header--menu-open' : ''}`}>
            <div className="ap-header__bar">
                <div className="ap-header__identity">
                    <Link to="/" className="ap-header__back" aria-label="Back to menu">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>

                    <button
                        type="button"
                        className="ap-header__brand"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        aria-label="Back to top"
                    >
                        <img className="ap-header__brand-mark" src="/Official_Logo_NoBackground.png" alt="" aria-hidden="true" />
                        <span className="ap-header__brand-copy">
                            <span className="ap-header__brand-title">ALG HOTEL</span>
                            <span className="ap-header__brand-subtitle">Resort & Tour</span>
                        </span>
                    </button>
                </div>

                <nav className="ap-header__nav" aria-label="Primary navigation">
                    {NAV_ITEMS.map(item => (
                        <button key={item.id} type="button" onClick={() => scrollTo(item.id)}>
                            <span className="ap-header__nav-label ap-header__nav-label--default">{item.label}</span>
                            <span className="ap-header__nav-label ap-header__nav-label--hover">{item.label}</span>
                        </button>
                    ))}
                </nav>

                <div className="ap-header__actions">
                    <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer" className="ap-header__book">
                        <span className="ap-header__book-label ap-header__book-label--default">Book your stay</span>
                        <span className="ap-header__book-label ap-header__book-label--hover">Book your stay</span>
                    </a>
                </div>

                <button
                    type="button"
                    className="ap-header__mobile-toggle"
                    onClick={() => setIsMenuOpen(open => !open)}
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-navigation"
                >
                    {isMenuOpen ? (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                        </svg>
                    ) : (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                            <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                        </svg>
                    )}
                </button>
            </div>

            {typeof document !== 'undefined' && isMenuOpen && createPortal(
                <div className="ap-header__mobile-overlay" aria-hidden={!isMenuOpen}>
                    <div className="ap-header__mobile-top">
                        <button
                            type="button"
                            className="ap-header__brand ap-header__brand--mobile"
                            onClick={() => {
                                setIsMenuOpen(false)
                                window.scrollTo({ top: 0, behavior: 'smooth' })
                            }}
                            aria-label="Back to top"
                        >
                            <img className="ap-header__brand-mark" src="/Official_Logo_NoBackground.png" alt="" aria-hidden="true" />
                            <span className="ap-header__brand-copy">
                                <span className="ap-header__brand-title">ALG HOTEL</span>
                                <span className="ap-header__brand-subtitle">Resort & Tour</span>
                            </span>
                        </button>

                        <button
                            type="button"
                            className="ap-header__mobile-close"
                            onClick={() => setIsMenuOpen(false)}
                            aria-label="Close menu"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                            </svg>
                        </button>
                    </div>

                    <nav id="mobile-navigation" className="ap-header__mobile-nav" aria-label="Mobile navigation">
                        {NAV_ITEMS.map(item => (
                            <button
                                key={item.id}
                                type="button"
                                className={item.id === 'about' ? 'is-active' : ''}
                                onClick={() => scrollTo(item.id)}
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>
                </div>,
                document.body
            )}
        </header>
    )
}

export default Header
