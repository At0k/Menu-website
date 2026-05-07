import { useEffect, useRef } from 'react'
import './About.scss'

const About = () => {
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible')
                }
            })
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })

        const items = sectionRef.current?.querySelectorAll('.ap-about__reveal')
        items?.forEach((item) => observer.observe(item))

        return () => observer.disconnect()
    }, [])

    return (
        <section className="ap-about" id="about" ref={sectionRef}>
            <figure className="ap-about__tile ap-about__tile--top-left ap-about__reveal ap-reveal-d1">
                <img
                    src="/Arte-Plus-Klcc-By-Dreamscape-Apartment-Kuala-Lumpur-Exterior (1).jpg"
                    alt="Arte Plus exterior"
                />
            </figure>

            <figure className="ap-about__tile ap-about__tile--top-right ap-about__reveal ap-reveal-d2">
                <img
                    src="/2020_04_Project_Layout18.jpg"
                    alt="Arte Plus building"
                />
            </figure>

            <div className="ap-about__body ap-animate ap-animate-d1">
                <div className="ap-about__logo-wrap ap-animate ap-animate-d1">
                    <img className="ap-about__logo" src="/LogoOnly.png" alt="ALG Logo" />
                </div>

                <h2 className="ap-about__title ap-title-serif ap-animate ap-animate-d2">About ALG Hotel</h2>

                <div className="ap-about__text ap-animate ap-animate-d3">
                    <p>Dear Valued Guest,</p>
                    <p>Welcome to the Affordable Luxury Group (ALG), your urban sanctuary in the heart of Kuala Lumpur, where seamless comfort and the warmth of our hospitality create a stay like no other.</p>
                    <p>Our passion for service and attention to detail are the heart of everything we do, from our thoughtfully designed suites at Arte Plus to our exclusive limousine services.</p>
                    <p>Thank you for choosing ALG Hotel. We cannot wait to share our perfect blend of comfort and sophistication with you.</p>
                </div>
            </div>

            <figure className="ap-about__tile ap-about__tile--bottom-left ap-about__reveal ap-reveal-d2">
                <img
                    src="/623247993.jpg"
                    alt="Arte Plus pool"
                />
            </figure>

            <figure className="ap-about__tile ap-about__tile--bottom-right ap-about__reveal ap-reveal-d1">
                <img
                    src="/1.4-Arte_Tower-1-Lobby.jpg"
                    alt="Arte Plus lobby"
                />
            </figure>
        </section>
    )
}

export default About
