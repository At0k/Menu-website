import './Amenities.scss'
import { useEffect, useRef, type ReactNode } from 'react'

type AmenityCard = { title: string; icon: ReactNode; image: string }

const AMENITIES: AmenityCard[] = [
  {
    title: 'Self Check-In',
    image: '/selfCheckIn.jpeg',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
      </svg>
    ),
  },
  {
    title: 'Pool',
    image: '/ArtePlus/623247993.jpg',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M5.14 7.64c1.69-1.28 2.62-1.57 5.3-1.57 2.11 0 3.32.19 5.3 1.57 1.69 1.28 2.62 1.57 5.3 1.57v-2.02c-1.84 0-2.82-.26-4.66-1.53C14.07 4.14 12.83 4 10.44 4c-2.4 0-3.64.14-5.94 1.66-1.84 1.27-2.82 1.53-4.66 1.53v2.02c2.68 0 3.61-.29 5.3-1.57zm.05 4.98C7.1 11.23 8.35 11 10.44 11c2.4 0 3.64.14 5.94 1.66 1.84 1.27 2.82 1.53 4.66 1.53v-2.02c-2.68 0-3.61-.29-5.3-1.57-2.11-1.38-3.32-1.57-5.3-1.57-2.68 0-3.61.29-5.3 1.57-1.84 1.27-2.82 1.53-4.66 1.53v2.02c2.68 0 3.61-.29 5.3-1.57zm.05 4.97c1.91-1.39 3.16-1.59 5.25-1.59 2.4 0 3.64.14 5.94 1.66 1.84 1.27 2.82 1.53 4.66 1.53v-2.02c-2.68 0-3.61-.29-5.3-1.57-2.11-1.38-3.32-1.57-5.3-1.57-2.68 0-3.61.29-5.3 1.57-1.84 1.27-2.82 1.53-4.66 1.53v2.02c2.68 0 3.61-.29 5.3-1.57z"/>
      </svg>
    ),
  },
  {
    title: 'Gym',
    image: '/ArtePlus/gym.jpg',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43 1.43-1.43z"/>
      </svg>
    ),
  },
  {
    title: 'In-Suite Laundry',
    image: '/ArtePlus/Laundry.jpg',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M9.17 16.83c1.56 1.56 4.1 1.56 5.66 0s1.56-4.1 0-5.66-4.1-1.56-5.66 0-1.56 4.1 0 5.66zM12 12c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm6-10H6c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm-6 2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm4 2H8V4h8v2zm2 14H6V8h12v12z"/>
      </svg>
    ),
  },
  {
    title: 'One Dedicated Parking',
    image: '/ArtePlus/2020_04_Project_Layout18.jpg',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.2 11H10V7h3.2c1.1 0 2 .9 2 2s-.9 2-2 2zM13 3H6v18h4v-6h3c3.31 0 6-2.69 6-6s-2.69-6-6-6z"/>
      </svg>
    ),
  },
  {
    title: 'Nearby Grocery',
    image: '/ArtePlus/JayaGrocer.jpg',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
      </svg>
    ),
  },
]

const Amenities = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll<HTMLElement>('[data-ap-reveal]')
    if (!items?.length) return
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    }), { threshold: 0.14 })
    items.forEach(item => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="am-section" id="amenities" ref={sectionRef}>
      <div className="am-section__intro" data-ap-reveal>
        <p>SHARED COMFORTS</p>
        <h2>More than a place to sleep.</h2>
        <span>Every Arte+ stay comes with the thoughtful details that make city living easier.</span>
      </div>
      <div className="am-grid">
        {AMENITIES.map((item, index) => (
          <article key={item.title} className="am-card" data-ap-reveal style={{ '--ap-reveal-delay': `${index * 90}ms` } as React.CSSProperties}>
            <img className="am-card__media" src={item.image} alt={item.title} loading="lazy" />
            <div className="am-card__overlay" />
            <div className="am-card__content">
              <span>0{index + 1}</span>
              <div className="am-card__icon">{item.icon}</div>
              <h3>{item.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Amenities
