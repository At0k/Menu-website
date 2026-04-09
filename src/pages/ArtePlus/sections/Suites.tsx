import { useState } from 'react'
import '../ArtePlus.scss'

// ─────────────────────────────────────────────
// Suites  ← 3-column card grid
//   Clicking "Book" opens a modal with available unit links
//   Hovering a card expands it (CSS only — edit in ArtePlus.scss)
// ─────────────────────────────────────────────

const AIRBNB_LINK = 'https://www.airbnb.com/users/show/229653690'

interface SuiteUnit {
    name: string
    link: string
}

interface Suite {
    id: string
    type: string       // e.g. "The Studio"
    bedrooms: string   // e.g. "1 Bedroom"
    image: string
    units: SuiteUnit[]
}

// ── Edit suite data here ──────────────────────
const SUITES: Suite[] = [
    {
        id: 'studio',
        type: 'The Studio',
        bedrooms: '1 Bedroom',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
        units: [
            { name: 'Leisure Suite', link: 'https://www.airbnb.com/rooms/43399783' },
            { name: 'Cozy Studio', link: 'https://www.airbnb.com/rooms/44694171' },
        ]
    },
    {
        id: 'duplex',
        type: 'The Duplex',
        bedrooms: '2 Bedroom',
        image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80',
        units: [
            { name: 'Marvelous Suite', link: 'https://airbnb.com/h/klcc-alg-marvellous-suite' },
            { name: 'Stylo Suite', link: 'https://airbnb.com/h/klcc-alg-stylo-suite' },
            { name: 'Classy Suite', link: 'https://airbnb.com/h/klcc-alg-classy-suite' },
            { name: 'Lovely Suite', link: 'http://airbnb.com/h/klcc-alg-stylish-suite' },
        ]
    },
    {
        id: 'triplex',
        type: 'The Triplex',
        bedrooms: '3 Bedroom',
        image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
        units: [
            { name: 'Premium Suite', link: 'https://airbnb.com/h/klcc-alg-premium-suite' },
            { name: 'Majestic Suite', link: 'https://airbnb.com/h/klcc-alg-majestic-suite' },
            { name: 'Luxury Suite', link: 'https://airbnb.com/h/klcc-alg-luxury-suite' },
        ]
    }
]

// ─────────────────────────────────────────────
// SuiteCard  ← individual room card
// ─────────────────────────────────────────────
const SuiteCard = ({ suite, onBook }: { suite: Suite; onBook: (units: SuiteUnit[]) => void }) => (
    <div className="ap-suites__card">
        <div className="ap-suites__card-img-wrap">
            <img className="ap-suites__card-img" src={suite.image} alt={suite.type} />
        </div>
        <div className="ap-suites__card-info">
            <div className="ap-suites__card-names">
                <span className="ap-suites__card-type">{suite.type}</span>
                <span className="ap-suites__card-bedrooms">{suite.bedrooms}</span>
            </div>
        </div>
        <div className="ap-suites__card-popup">
            <button onClick={(e) => { e.stopPropagation(); onBook(suite.units); }}>
                Book
            </button>
        </div>
    </div>
)

// ─────────────────────────────────────────────
// SuitesModal  ← unit selection popup
// ─────────────────────────────────────────────
const SuitesModal = ({ units, onClose }: { units: SuiteUnit[]; onClose: () => void }) => (
    <div className="ap-suites__modal-overlay" onClick={onClose}>
        <div className="ap-suites__modal" onClick={e => e.stopPropagation()}>
            <button className="ap-suites__modal-close" onClick={onClose}>✕</button>
            <h3 className="ap-suites__modal-title">Select a Unit</h3>
            <div className="ap-suites__modal-list">
                {units.map(unit => (
                    <a
                        key={unit.name}
                        className="ap-suites__modal-item"
                        href={unit.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {unit.name}
                    </a>
                ))}
            </div>
            <a
                className="ap-suites__modal-airbnb"
                href={AIRBNB_LINK}
                target="_blank"
                rel="noopener noreferrer"
            >
                View all on Airbnb →
            </a>
        </div>
    </div>
)

// ─────────────────────────────────────────────
// Suites  ← root component
// ─────────────────────────────────────────────
const Suites = () => {
    const [modalUnits, setModalUnits] = useState<SuiteUnit[] | null>(null)

    return (
        <section className="ap-suites" id="suites">
            <div className="ap-suites__header">
                <h2 className="ap-suites__title ap-title-serif">Signature Suites</h2>
                <p className="ap-suites__desc">
                    Curated living spaces designed for the modern traveler. Select your perfect stay.
                </p>
            </div>

            <div className="ap-suites__grid">
                {SUITES.map(suite => (
                    <SuiteCard
                        key={suite.id}
                        suite={suite}
                        onBook={(units) => setModalUnits(units)}
                    />
                ))}
            </div>

            {modalUnits && (
                <SuitesModal units={modalUnits} onClose={() => setModalUnits(null)} />
            )}
        </section>
    )
}

export default Suites
