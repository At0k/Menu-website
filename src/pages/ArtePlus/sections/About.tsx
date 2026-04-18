import { useEffect, useRef } from 'react'
import '../ArtePlus.scss'

// ─────────────────────────────────────────────
// About  ← logo centered top, title, welcome text centered
//   Left column:  2 stacked photos (exterior + pool)
//   Right column: 2 stacked photos (tower + lobby)
// ─────────────────────────────────────────────
const About = () => {
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible')
                }
            })
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })

        const images = sectionRef.current?.querySelectorAll('.ap-about__reveal')
        images?.forEach(img => observer.observe(img))

        return () => observer.disconnect()
    }, [])

    return (
        <section className="ap-about" id="about" ref={sectionRef}>
            {/* Left photo stack */}
            <div className="ap-about__photos ap-about__photos--left">
                <img 
                    className="ap-about__reveal ap-reveal-d1" 
                    src="/Arte-Plus-Klcc-By-Dreamscape-Apartment-Kuala-Lumpur-Exterior (1).jpg" 
                    alt="Arte Plus exterior" 
                />
                <img 
                    className="ap-about__reveal ap-reveal-d2" 
                    src="/623247993.jpg" 
                    alt="Arte Plus pool" 
                />
            </div>

            {/* Center body */}
            <div className="ap-about__body">
                <div className="ap-about__logo-wrap ap-animate ap-animate-d1">
                    <img className="ap-about__logo" src="/LogoOnly.png" alt="ALG Logo" />
                </div>

                <h2 className="ap-about__title ap-title-serif ap-animate ap-animate-d2">Welcome to ALG HOTEL</h2>

                <div className="ap-about__text ap-animate ap-animate-d3">
                    <p>Dear Valued Guest,</p>
                    <p>Welcome to the Affordable Luxury Group (ALG), your urban sanctuary in the heart of Kuala Lumpur, where seamless comfort and the warmth of our hospitality create a stay like no other.</p>
                    <p>Our passion for service and attention to detail are the heart of everything we do — from our thoughtfully designed suites at Arte Plus to our exclusive limousine services.</p>
                    <p>Thank you for choosing ALG HOTEL. We cannot wait to share our perfect blend of comfort and sophistication with you.</p>
                </div>
            </div>

            {/* Right photo stack */}
            <div className="ap-about__photos ap-about__photos--right">
                <img 
                    className="ap-about__reveal ap-reveal-d1" 
                    src="/2020_04_Project_Layout18.jpg" 
                    alt="Arte Plus building" 
                />
                <img 
                    className="ap-about__reveal ap-reveal-d2" 
                    src="/1.4-Arte_Tower-1-Lobby.jpg" 
                    alt="Arte Plus lobby" 
                />
            </div>
        </section>
    )
}

export default About
