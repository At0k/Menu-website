import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import '../ArtePlus.scss'

// ─────────────────────────────────────────────
// Suites  ← 3-column card grid
//   Clicking "Book" opens a modal with available unit links
//   Hovering a card expands it (CSS only — edit in ArtePlus.scss)
// ─────────────────────────────────────────────


interface SuiteUnit {
    name: string
    link: string
}

interface Suite {
    id: string
    type: string       // e.g. "STUDIO"
    bedrooms: string   // e.g. "1 Bedroom"
    specs: string      // e.g. "1 Bedroom   1 Toilet   2 Person"
    images: string[]
    units: SuiteUnit[]
}

// ── Edit suite data here ──────────────────────
const SUITES: Suite[] = [
    {
        id: 'studio',
        type: 'Studio',
        bedrooms: '1 Bedroom',
        specs: '1 Bedroom   1 Toilet   2 Person',
        images: [
            '/Room/Studio/c215dc77-be9a-4fea-b779-9997c9dfd93c.avif',
            '/Room/Studio/d2826a4e-34ad-4ee9-ba0b-601ba0c9e4af.avif'
        ],
        units: [
            { name: 'Leisure Suite', link: 'https://www.airbnb.com/rooms/43399783' },
            { name: 'Cozy Studio', link: 'https://www.airbnb.com/rooms/44694171' },
        ]
    },
    {
        id: 'duplex',
        type: 'Duplex',
        bedrooms: '2 Bedroom',
        specs: '2 Bedroom   2 Toilet   4 Person',
        images: [
            '/Room/Duplex/02545d11-2c00-40ad-a57b-eadcd1d873de.avif',
            '/Room/Duplex/8dda0a04-762b-4faf-acca-22df4b853adf.avif',
            '/Room/Duplex/cb9a60d6-211a-4b0f-9e27-41ec2571dfae.avif'
        ],
        units: [
            { name: 'Stylo Suite', link: 'https://airbnb.com/h/klcc-alg-stylo-suite' },
            { name: 'Classy Suite', link: 'https://airbnb.com/h/klcc-alg-classy-suite' },
            { name: 'Lovely Suite', link: 'http://airbnb.com/h/klcc-alg-stylish-suite' },
        ]
    },
    {
        id: 'triplex',
        type: 'Triplex',
        bedrooms: '3 Bedroom',
        specs: '3 Bedroom   3 Toilet   6 Person',
        images: [
            '/Room/Triplex/4cc0073e-b60e-4178-9d57-db12a83c54ca.avif',
            '/Room/Triplex/ca9540cf-fc81-4561-9a65-662baec28107.avif'
        ],
        units: [
            // { name: 'Premium Suite', link: 'https://airbnb.com/h/klcc-alg-premium-suite' },
            { name: 'Majestic Suite', link: 'https://airbnb.com/h/klcc-alg-majestic-suite' },
            { name: 'Luxury Suite', link: 'https://airbnb.com/h/klcc-alg-luxury-suite' },
        ]
    }
]

// ─────────────────────────────────────────────
// SuiteCard  ← individual room card
// ─────────────────────────────────────────────
const SuiteCard = ({ suite, onBook }: { suite: Suite; onBook: (suite: Suite) => void }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        if (suite.images.length <= 1) return

        const timer = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % suite.images.length)
        }, 4000)

        return () => clearInterval(timer)
    }, [suite.images.length])

    return (
        <div 
            className="ap-suites__card"
            onClick={() => onBook(suite)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onBook(suite);
                }
            }}
            aria-label={`View booking options for ${suite.type}`}
        >
            <div className="ap-suites__card-img-wrap">
                {suite.images.map((img, idx) => (
                    <img 
                        key={img}
                        className={`ap-suites__card-img ${idx === currentIndex ? 'active' : ''}`} 
                        src={img} 
                        alt={`${suite.type} view ${idx + 1}`} 
                    />
                ))}
            </div>
            <div className="ap-suites__card-info">
                <div className="ap-suites__card-names">
                    <span className="ap-suites__card-type">{suite.type}</span>
                    <span className="ap-suites__card-bedrooms">{suite.bedrooms}</span>
                </div>
            </div>
            <div className="ap-suites__card-popup">
                <button 
                    onClick={(e) => { e.stopPropagation(); onBook(suite); }}
                    tabIndex={-1} // Parent handles focus
                >
                    Book
                </button>
            </div>
        </div>
    )
}

// ─────────────────────────────────────────────
// SuitesModal  ← unit selection popup
// ─────────────────────────────────────────────
const SuitesModal = ({ suite, onClose }: { suite: Suite; onClose: () => void }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }
        window.addEventListener('keydown', handleEsc)
        document.body.style.overflow = 'hidden'
        
        return () => {
            window.removeEventListener('keydown', handleEsc)
            document.body.style.overflow = ''
        }
    }, [onClose])

    useEffect(() => {
        if (suite.images.length <= 1) return

        const timer = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % suite.images.length)
        }, 4000)

        return () => clearInterval(timer)
    }, [suite.images.length])

    return createPortal(
        <div 
            className="ap-suites__modal-overlay" 
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            <div className="ap-suites__modal-card" onClick={e => e.stopPropagation()}>
                <button 
                    className="ap-suites__modal-close" 
                    onClick={onClose}
                    aria-label="Close modal"
                >
                    ✕
                </button>
                <div className="ap-suites__modal-card-img-wrap">
                    {suite.images.map((img, idx) => (
                        <img 
                            key={img}
                            className={idx === currentIndex ? 'active' : ''}
                            src={img} 
                            alt={`${suite.type} view ${idx + 1}`} 
                        />
                    ))}
                </div>
                <div className="ap-suites__modal-card-content">
                    <h3 className="ap-suites__modal-card-title" id="modal-title">{suite.type}</h3>
                    <p className="ap-suites__modal-card-specs">{suite.specs}</p>
                    <div className="ap-suites__modal-card-units">
                        {suite.units.map(unit => (
                            <a
                                key={unit.name}
                                className="ap-suites__modal-card-unit"
                                href={unit.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {unit.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>,
        document.body
    )
}

// ─────────────────────────────────────────────
// Suites  ← root component
// ─────────────────────────────────────────────
const Suites = () => {
    const [modalSuite, setModalSuite] = useState<Suite | null>(null)
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible')
                }
            })
        }, { threshold: 0.15 })

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section className="ap-suites" id="suites" ref={sectionRef}>
            <div className="ap-suites__header">
                <h2 className="ap-suites__title ap-title-serif" style={{ textAlign: 'center' }}>ARTE PLUS SUITES</h2>
            </div>

            <div className="ap-suites__grid">
                {SUITES.map(suite => (
                    <SuiteCard
                        key={suite.id}
                        suite={suite}
                        onBook={(s) => setModalSuite(s)}
                    />
                ))}
            </div>

            {modalSuite && (
                <SuitesModal suite={modalSuite} onClose={() => setModalSuite(null)} />
            )}
        </section>
    )
}

export default Suites
