import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Introduction.scss'

// ─────────────────────────────────────────────
// IntroHeader  ← edit the logo / top title here
// ─────────────────────────────────────────────
const IntroHeader = () => (
  <header className="intro__header">
    <h2 className="intro__logo">
      ALG SUITE<br />
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
  onClick: () => void
  expanding: boolean   // true when THIS panel is the one expanding
  dimmed: boolean   // true when ANOTHER panel is expanding
}

const IntroPanel = ({ image, title, subtitle, onClick, expanding, dimmed }: IntroPanelProps) => {
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
        <h1 className="intro__panel-title">{title}</h1>
        <p className="intro__panel-subtitle">{subtitle}</p>
      </div>
    </button>
  )
}

// ─────────────────────────────────────────────
// Introduction  ← root page
// ─────────────────────────────────────────────
const PANELS = [
  { id: 'astrum', image: '/ASTRUM-AMPANG.jpg', title: 'ASTRUM', subtitle: 'AMPANG', path: '/astrum-ampang' },
  { id: 'arte', image: '/Arte-Plus-Klcc-By-Dreamscape-Apartment-Kuala-Lumpur-Exterior (1).jpg', title: 'ARTE+', subtitle: 'AMPANG', path: '/arte-plus' },
  { id: 'pulau', image: '/Semporna.jpg', title: 'BOHEY DULANG', subtitle: 'SEMPORNA', path: '/pulau-semporna' },
]

const Introduction = () => {
  const navigate = useNavigate()
  const [active, setActive] = useState<string | null>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleClick = (panel: typeof PANELS[0]) => {
    if (active) return                   // already animating
    setActive(panel.id)

    // Let the panel fill the screen (350ms), then cross-fade to new page
    timerRef.current = setTimeout(() => {
      const path = panel.path
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
    <main className={`intro${active ? ' intro--transitioning' : ''}`}>
      <IntroHeader />
      {PANELS.map(panel => (
        <IntroPanel
          key={panel.id}
          image={panel.image}
          title={panel.title}
          subtitle={panel.subtitle}
          expanding={active === panel.id}
          dimmed={active !== null && active !== panel.id}
          onClick={() => handleClick(panel)}
        />
      ))}
    </main>
  )
}

export default Introduction
