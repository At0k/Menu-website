import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Seo from '../components/Seo'
import './Introduction.scss'

// ─────────────────────────────────────────────
// IntroHeader  ← edit the logo / top title here
// ─────────────────────────────────────────────
const IntroHeader = () => (
  <header className="intro__header">
    <h2 className="intro__logo">
      ALG HOTEL<br />
      <span className="intro__logo-sub">Resort &amp; Tour</span>
    </h2>
  </header>
)

// ─────────────────────────────────────────────
// IntroPanel  ← shared panel layout/animation
//   Clicking triggers the expand transition then navigates
// ─────────────────────────────────────────────
interface IntroPanelProps {
  image: string
  title: string
  subtitle: string
  location: string
  onClick: () => void
  expanding: boolean   // true when THIS panel is the one expanding
  dimmed: boolean   // true when ANOTHER panel is expanding
}

const IntroPanel = ({ image, title, subtitle, location, onClick, expanding, dimmed }: IntroPanelProps) => {
  const cls = [
    'intro__panel',
    expanding ? 'intro__panel--expanding' : '',
    dimmed ? 'intro__panel--dimmed' : '',
  ].filter(Boolean).join(' ')

  return (
    <button 
      className={cls} 
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={`${title} ${subtitle}`}
    >
      <div
        className="intro__panel-bg"
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div className="intro__panel-overlay" />
      <div className="intro__panel-text">
        <h2 className="intro__panel-title">{title}</h2>
        <p className="intro__panel-subtitle">{subtitle}</p>
      </div>
      <div className="intro__panel-location">
        {location}
      </div>
    </button>
  )
}

// ─────────────────────────────────────────────
// Introduction  ← root page
// ─────────────────────────────────────────────
const PANELS = [
  { id: 'astrum', image: '/ArtePlus/AstrumProfile.jpeg', title: 'ASTRUM', subtitle: 'AMPANG', location: 'Kuala Lumpur', path: '/astrum-ampang' },
  { id: 'arte', image: '/ArtePlus/2020_04_Project_Layout18.jpg', title: 'ARTE+', subtitle: 'AMPANG', location: 'Kuala Lumpur', path: '/arte-plus' },
  { id: 'pulau', image: '/Semporna.jpg', title: 'BOHEY DULANG', subtitle: 'SEMPORNA', location: 'Sabah', url: 'https://www.airbnb.com/rooms/1355859443271848941?source_impression_id=p3_1776489990_P3aVDGCClc3WoNRA' },
]

const Introduction = () => {
  const navigate = useNavigate()
  const [active, setActive] = useState<string | null>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleClick = (panel: typeof PANELS[0]) => {
    if (active) return                   // already animating

    // If it's an external link, just open it immediately
    if ('url' in panel) {
      window.open(panel.url, '_blank')
      return
    }

    setActive(panel.id)

    // Let the panel fill the screen (350ms), then cross-fade to new page
    timerRef.current = setTimeout(() => {
      const path = panel.path as string
      if ('startViewTransition' in document) {
        // Browser handles the cross-fade natively — no flash or gap
        ; (document as Document & { startViewTransition: (cb: () => void) => void })
          .startViewTransition(() => navigate(path))
      } else {
        navigate(path)
      }
    }, 350)
  }

  return (
    <>
      <Seo
        title="ALG Hotel Resort & Tour | Kuala Lumpur & Sabah Stays"
        description="Explore ALG suite stays at Astrum Ampang and ARTE+ Jalan Ampang, plus the upcoming Bohey Dulang Floating Resort in Semporna, Sabah."
        path="/"
        image="/ArtePlus/2020_04_Project_Layout18.jpg"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'ALG Hotel Resort & Tour',
          url: typeof window === 'undefined' ? undefined : window.location.origin,
          logo: typeof window === 'undefined' ? undefined : `${window.location.origin}/LogoOnly.png`,
          telephone: '+60198540955',
          areaServed: ['Kuala Lumpur', 'Sabah'],
        }}
      />
      <main className={`intro${active ? ' intro--transitioning' : ''}`}>
        <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: 0 }}>ALG Hotel Resort & Tour</h1>
        <IntroHeader />
      {PANELS.map(panel => (
        <IntroPanel
          key={panel.id}
          image={panel.image}
          title={panel.title}
          subtitle={panel.subtitle}
          location={panel.location}
          expanding={active === panel.id}
          dimmed={active !== null && active !== panel.id}
          onClick={() => handleClick(panel)}
        />
      ))}
      </main>
    </>
  )
}

export default Introduction
