import { useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import Header from '../ArtePlus/sections/Header'
import Footer from '../ArtePlus/sections/Footer'
import './AstrumAmpang.scss'

const SUITES = ['01', '02', '03', '04', '05', '06', '07'].map(number => ({
  number,
  href: `https://airbnb.com/h/klcc-alg-astrum-${number}`,
}))

const WHATSAPP_LINK = 'https://wa.me/60198540955?text=Hi%20ALG%2C%20I%20would%20like%20to%20enquire%20about%20an%20Astrum%20Ampang%20suite.'

const AstrumAmpang = () => {
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const items = pageRef.current?.querySelectorAll<HTMLElement>('[data-reveal]')
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
    <div className="astrum-page" ref={pageRef}>
      <Helmet>
        <title>Astrum Ampang Suites | ALG Suite, Resort & Tour</title>
        <meta name="description" content="Explore ALG Astrum suites beside Jelatek LRT Station, with direct booking links for modern Kuala Lumpur stays." />
      </Helmet>

      <Header
        navigationItems={[
          { id: 'story', label: 'About' },
          { id: 'suites', label: 'Suites' },
          { id: 'enquire', label: 'Enquire' },
        ]}
        bookingHref="#suites"
        bookingExternal={false}
      />

      <main>
        <section className="astrum-hero" aria-labelledby="astrum-title">
          <div className="astrum-hero__image" /><div className="astrum-hero__veil" /><div className="astrum-hero__grid" aria-hidden="true" />
          <div className="astrum-hero__content ap-animate ap-animate-d1" data-reveal>
            <p className="astrum-kicker">ALG CITY STAYS · KUALA LUMPUR</p>
            <h1 id="astrum-title">ASTRUM<br /><em>AMPANG</em></h1>
            <p className="astrum-hero__lead">A modern base for arriving, exploring and switching off—right beside Jelatek LRT.</p>
            <div className="astrum-hero__actions"><a className="astrum-button astrum-button--light" href="#suites">Choose your suite</a><a className="astrum-text-link" href="#story">Discover Astrum <span aria-hidden="true">↓</span></a></div>
          </div>
          <div className="astrum-hero__side-note">LIVE<br />CONNECT<br />EXPLORE</div>
        </section>

        <section className="astrum-story" id="story">
          <div className="astrum-story__copy" data-reveal>
            <p className="astrum-kicker">THE CITY, WITHIN REACH</p>
            <h2>Check in to a better-connected Kuala Lumpur.</h2>
            <p>KLCC ALG Astrum Suite is designed for guests who want an effortless city stay. Jelatek LRT is at the doorstep, while the surrounding road network keeps the rest of Kuala Lumpur and Klang Valley within easy reach.</p>
            <p>Choose a suite for a business trip, a weekend in the city, or simply a quieter way to be close to the action.</p>
            <a className="astrum-text-link astrum-text-link--dark" href="#suites">Find your suite <span aria-hidden="true">→</span></a>
          </div>
          <div className="astrum-story__visual" data-reveal>
            <div className="astrum-story__photo" role="img" aria-label="Astrum Ampang tower and Kuala Lumpur skyline" />
            <div className="astrum-story__stamp"><span>JELATEK</span><strong>LRT</strong><small>AT YOUR DOORSTEP</small></div>
          </div>
        </section>

        <section className="astrum-rhythm" aria-label="Astrum highlights">
          <div data-reveal><span>01</span><h2>Transit-first</h2><p>Start your KL day with Jelatek LRT moments away.</p></div>
          <div data-reveal><span>02</span><h2>City-minded</h2><p>Made for work trips, weekends and longer stays.</p></div>
          <div data-reveal><span>03</span><h2>ALG-hosted</h2><p>Direct booking choices with help when you need it.</p></div>
        </section>

        <section className="astrum-suites" id="suites" aria-labelledby="suite-title">
          <div className="astrum-suites__heading" data-reveal><p className="astrum-kicker">YOUR STAY, YOUR CHOICE</p><h2 id="suite-title">The Astrum collection</h2><p>Seven ALG suites are ready to book. Each listing has its own live dates, details and availability on Airbnb.</p></div>
          <div className="astrum-suites__grid">
            {SUITES.map((suite, index) => (
              <a
                key={suite.number}
                className={`astrum-suite-card${index === 0 ? ' astrum-suite-card--featured' : ''}`}
                href={suite.href}
                target="_blank"
                rel="noopener noreferrer"
                data-reveal
              >
                <span className="astrum-suite-card__index">0{index + 1} / 07</span>
                <div className="astrum-suite-card__body">
                  <span className="astrum-suite-card__eyebrow">ASTRUM AMPANG</span>
                  <span className="astrum-suite-card__number">Suite {suite.number}</span>
                  <span className="astrum-suite-card__detail">KL city stay · Jelatek LRT</span>
                </div>
                <span className="astrum-suite-card__action">Explore this suite <b aria-hidden="true">↗</b></span>
              </a>
            ))}
          </div>
        </section>

        <section className="astrum-contact" id="enquire">
          <div className="astrum-contact__panel" data-reveal><p className="astrum-kicker">WE ARE HERE TO HELP</p><h2>Have a stay in mind?</h2><p>Tell us your dates and preferred suite. Our team can point you to the right listing or help with an enquiry.</p><div className="astrum-contact__actions"><a className="astrum-button astrum-button--dark" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">WhatsApp ALG</a></div></div>
          <aside className="astrum-contact__resort" data-reveal><p>COMING NEXT · SEMPORNA, SABAH</p><h3>Bohey Dulang ALG<br />Floating Resort</h3><a href="https://airbnb.com/h/boheydulang-alg-floatingresort" target="_blank" rel="noopener noreferrer">Discover the resort <span aria-hidden="true">↗</span></a></aside>
        </section>
      </main>

      <Footer
        links={[
          { href: '#story', label: 'ABOUT ASTRUM' },
          { href: '#suites', label: 'OUR SUITES' },
          { href: '#enquire', label: 'ENQUIRE' },
        ]}
        description="Modern city stays beside Jelatek LRT, designed for an easier Kuala Lumpur arrival."
        location={<>Jalan Jelatek, Ampang<br />Kuala Lumpur, Malaysia</>}
      />
    </div>
  )
}

export default AstrumAmpang
