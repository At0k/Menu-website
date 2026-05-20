import './Amenities.scss'
import { useEffect, useRef, type ReactNode } from 'react'

type AmenityCard = { title: string; icon: ReactNode; image: string }

const AMENITIES: AmenityCard[] = [
  {
    title: 'Self Check-In',
    image: '/623247993.jpg',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M8 12h8M10 16h4" strokeLinecap="round" />
        <path d="M7 4h10a2 2 0 012 2v14H5V6a2 2 0 012-2z" strokeLinejoin="round" />
        <path d="M7 8h10" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Pool',
    image: '/471119343.jpg',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M4 15c2 0 3-2 5-2s3 2 5 2 3-2 5-2M4 19c2 0 3-2 5-2s3 2 5 2 3-2 5-2M2 3l1.5 5h17L22 3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Gym',
    image: '/gym.jpg',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M6 18V6m12 12V6M2 10h4v4H2zm16 0h4v4h-4zM6 12h12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'In-Suite Laundry',
    image: '/Laundry.jpg',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <circle cx="12" cy="14" r="4" />
        <path d="M3 8h18" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'One Dedicated Parking',
    image: '/2020_04_Project_Layout18.jpg',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M5 10v9a1 1 0 001 1h2a1 1 0 001-1v-2h6v2a1 1 0 001 1h2a1 1 0 001-1v-9" />
        <path d="M5 10L7.5 4.5A2.5 2.5 0 0110 3h4a2.5 2.5 0 012.5 1.5L19 10m-14 0h14" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="8" cy="14" r="1.5" />
        <circle cx="16" cy="14" r="1.5" />
      </svg>
    ),
  },
  {
    title: 'Nearby Grocery',
    image: '/arte-plus-jalan-ampan-my-kuala-lumpur-bc-5022267-0.jpg',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.2 4H19" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="10" cy="20" r="1" />
        <circle cx="18" cy="20" r="1" />
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
      const scrollable = sectionH - vh

      // Clamp progress 0→1 across the full scroll range of the section
      const progress = Math.min(1, Math.max(0, scrolled / scrollable))

      // Pin: use position:fixed while we're inside the section's scroll range
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
