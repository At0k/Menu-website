import '../ArtePlus.scss'

// ─────────────────────────────────────────────
// Amenities  ← Elevated Grid with Icons
// ─────────────────────────────────────────────
const AMENITIES = [
    {
        label: 'Pool',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="ap-amenities__icon">
                <path d="M4 15c2 0 3-2 5-2s3 2 5 2 3-2 5-2M4 19c2 0 3-2 5-2s3 2 5 2 3-2 5-2M2 3l1.5 5h17L22 3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )
    },
    {
        label: 'Gym',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="ap-amenities__icon">
                <path d="M6 18V6m12 12V6M2 10h4v4H2zm16 0h4v4h-4zM6 12h12v0" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )
    },
    {
        label: 'In-Suite Laundry',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="ap-amenities__icon">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <circle cx="12" cy="14" r="4"/>
                <path d="M3 8h18" strokeLinecap="round"/>
            </svg>
        )
    },
    {
        label: 'Free Parking',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="ap-amenities__icon">
                <path d="M5 10v9a1 1 0 001 1h2a1 1 0 001-1v-2h6v2a1 1 0 001 1h2a1 1 0 001-1v-9" />
                <path d="M5 10L7.5 4.5A2.5 2.5 0 0110 3h4a2.5 2.5 0 012.5 1.5L19 10m-14 0h14" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="8" cy="14" r="1.5"/>
                <circle cx="16" cy="14" r="1.5"/>
            </svg>
        )
    },
    {
        label: 'Wifi',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="ap-amenities__icon">
                <path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )
    },
    {
        label: '24/7 Mini Market',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="ap-amenities__icon">
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.2 4H19M10 20a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z" />
            </svg>
        )
    },
]

const Amenities = () => {
    return (
        <section className="ap-amenities" id="amenities">
            <div className="ap-amenities__header ap-animate">
                <h2 className="ap-amenities__title ap-title-serif">Amenities</h2>
                <p className="ap-amenities__desc">
                    Experience modern convenience and indulgent relaxation. Explore our state-of-the-art facilities designed for your absolute comfort.
                </p>
            </div>

            <div className="ap-amenities__grid">
                {AMENITIES.map((item, index) => (
                    <div key={item.label} className={`ap-amenities__item ap-animate ap-animate-d${index % 6 + 1}`}>
                        {item.icon}
                        <h3 className="ap-amenities__label">{item.label}</h3>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Amenities
