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
    image: '/623247993.jpg',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M5.14 7.64c1.69-1.28 2.62-1.57 5.3-1.57 2.11 0 3.32.19 5.3 1.57 1.69 1.28 2.62 1.57 5.3 1.57v-2.02c-1.84 0-2.82-.26-4.66-1.53C14.07 4.14 12.83 4 10.44 4c-2.4 0-3.64.14-5.94 1.66-1.84 1.27-2.82 1.53-4.66 1.53v2.02c2.68 0 3.61-.29 5.3-1.57zm.05 4.98C7.1 11.23 8.35 11 10.44 11c2.4 0 3.64.14 5.94 1.66 1.84 1.27 2.82 1.53 4.66 1.53v-2.02c-2.68 0-3.61-.29-5.3-1.57-2.11-1.38-3.32-1.57-5.3-1.57-2.68 0-3.61.29-5.3 1.57-1.84 1.27-2.82 1.53-4.66 1.53v2.02c2.68 0 3.61-.29 5.3-1.57zm.05 4.97c1.91-1.39 3.16-1.59 5.25-1.59 2.4 0 3.64.14 5.94 1.66 1.84 1.27 2.82 1.53 4.66 1.53v-2.02c-2.68 0-3.61-.29-5.3-1.57-2.11-1.38-3.32-1.57-5.3-1.57-2.68 0-3.61.29-5.3 1.57-1.84 1.27-2.82 1.53-4.66 1.53v2.02c2.68 0 3.61-.29 5.3-1.57z"/>
      </svg>
    ),
  },
  {
    title: 'Gym',
    image: '/gym.jpg',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43 1.43-1.43z"/>
      </svg>
    ),
  },
  {
    title: 'In-Suite Laundry',
    image: '/Laundry.jpg',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M9.17 16.83c1.56 1.56 4.1 1.56 5.66 0s1.56-4.1 0-5.66-4.1-1.56-5.66 0-1.56 4.1 0 5.66zM12 12c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm6-10H6c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm-6 2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm4 2H8V4h8v2zm2 14H6V8h12v12z"/>
      </svg>
    ),
  },
  {
    title: 'One Dedicated Parking',
    image: '/2020_04_Project_Layout18.jpg',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.2 11H10V7h3.2c1.1 0 2 .9 2 2s-.9 2-2 2zM13 3H6v18h4v-6h3c3.31 0 6-2.69 6-6s-2.69-6-6-6z"/>
      </svg>
    ),
  },
  {
    title: 'Nearby Grocery',
    image: '/JayaGrocer.jpg',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
      </svg>
    ),
  },
]

const N = AMENITIES.length

const Amenities = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const pinRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const section = sectionRef.current
    const pin = pinRef.current
    if (!section || !pin) return

    let raf = 0

    const update = () => {
      raf = 0
      const vh = window.innerHeight

      // Use offsetTop/offsetHeight to get position relative to the document
      // These are NOT affected by overflow:hidden on ancestors
      const sectionTop = section.getBoundingClientRect().top + window.scrollY
      const sectionH = section.offsetHeight
      const scrollY = window.scrollY

      // How far we've scrolled INTO the section
      const scrolled = scrollY - sectionTop
      
      // Total pinned scroll distance is sectionH - vh (600vh)
      const scrollable = sectionH - vh

      // We want the card animations to finish 100vh BEFORE the pin ends
      const animationRange = scrollable - vh // 500vh

      // Clamp progress 0→1 across the ANIMATION range only
      const progress = Math.min(1, Math.max(0, scrolled / animationRange))

      // Pin: use position:fixed while we're inside the total scrollable range
      if (scrolled <= 0) {
        // Before section: pin at its natural position
        pin.style.position = 'absolute'
        pin.style.top = '0'
        pin.style.bottom = 'auto'
      } else if (scrolled >= scrollable) {
        // After section: pin at the bottom of the section
        pin.style.position = 'absolute'
        pin.style.top = 'auto'
        pin.style.bottom = '0'
      } else {
        // Inside section: pin fixed to viewport
        pin.style.position = 'fixed'
        pin.style.top = '0'
        pin.style.bottom = 'auto'
      }

      for (let i = 0; i < N; i++) {
        const card = cardRefs.current[i]
        if (!card) continue

        if (i === 0) {
          card.style.transform = 'translateY(0%)'
          card.style.opacity = '1'
          continue
        }

        const start = (i - 1) / (N - 1)
        const end = i / (N - 1)
        const local = Math.min(1, Math.max(0, (progress - start) / (end - start)))
        const opacityProgress = Math.min(1, Math.max(0, (local - 0.02) / 0.38))

        card.style.transform = `translateY(${(1 - local) * 120}%)`
        card.style.opacity = `${opacityProgress}`
      }
    }

    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', update)

    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <section
      className="am-section"
      id="amenities"
      ref={sectionRef}
    >
      {/* Pin is position:absolute inside section, JS switches it to fixed while in view */}
      <div className="am-pin" ref={pinRef}>
        <div className="am-viewport">
          {AMENITIES.map((item, i) => (
            <article
              key={item.title}
              className="am-card"
              ref={(el) => { cardRefs.current[i] = el }}
              style={{ zIndex: i + 1 } as React.CSSProperties}
            >
              <div className="am-card__info">
                <div className="am-card__icon">{item.icon}</div>
                <h3 className="am-card__label">{item.title}</h3>
              </div>
              <div className="am-card__media">
                <img src={item.image} alt={item.title} loading="lazy" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Amenities
