import '../ArtePlus.scss'

// ─────────────────────────────────────────────
// Transport  ← "Seamless Airport Transfer" text section
//   Title left-aligned, body text, footnote italic
// ─────────────────────────────────────────────
const Transport = () => {
    return (
        <section className="ap-transport" id="transport">
            <div className="ap-transport__bg" style={{ backgroundImage: "url('/623247993.jpg')" }} />
            <div className="ap-transport__overlay" />
            
            <div className="ap-transport__inner ap-animate">
                <div className="ap-transport__divider" />
                <h2 className="ap-transport__title ap-title-serif">Seamless Airport Transfer</h2>
                <p className="ap-transport__body">
                    Complementing our premium accommodations, we provide exclusive Limousine services with
                    both Luxury MPV and Mercedes vehicles, ensuring a seamless and luxurious experience
                    throughout your stay.
                </p>
                <p className="ap-transport__body" style={{ marginTop: '1.5rem', opacity: 0.6, fontSize: '1.1rem', fontStyle: 'italic' }}>
                    *Note: Subject to availability upon request.
                </p>
            </div>
        </section>
    )
}

export default Transport
