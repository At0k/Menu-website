import { useEffect, useRef, useState } from 'react'
import Seo from '../../components/Seo'
import Header from '../ArtePlus/sections/Header'
import Footer from '../ArtePlus/sections/Footer'
import Transport from '../ArtePlus/sections/Transport'
import Location from '../ArtePlus/sections/Location'
import './AstrumAmpang.scss'

const SUITES = [
  { number: '01', href: 'https://airbnb.com/h/klcc-alg-astrum-01', images: ['/Astrum/Suite_1/Suite_1.avif', '/Astrum/Suite_1/Suite_1_1.avif', '/Astrum/Suite_1/Suite_1_2.avif', '/Astrum/Suite_1/Suite_1_3.jpeg', '/Astrum/Suite_1/Suite_1_4.avif'] },
  { number: '02', href: 'https://airbnb.com/h/klcc-alg-astrum-02', images: ['/Astrum/Suite_2/Suite_2.avif', '/Astrum/Suite_2/Suite_2_1.jpeg', '/Astrum/Suite_2/Suite_2_2.avif', '/Astrum/Suite_2/Suite_2_3.jpeg', '/Astrum/Suite_2/Suite_2_4.jpeg', '/Astrum/Suite_2/Suite_2_5.jpeg'] },
  { number: '03', href: 'https://airbnb.com/h/klcc-alg-astrum-03', images: ['/Astrum/Suite_3/Suite_3.jpeg', '/Astrum/Suite_3/Suite_3_1.avif', '/Astrum/Suite_3/Suite_3_2.avif', '/Astrum/Suite_3/Suite_3_4.jpeg', '/Astrum/Suite_3/Suite_3_5.jpeg', '/Astrum/Suite_3/Suite_3_6.jpeg', '/Astrum/Suite_3/Suite_3_7.jpeg', '/Astrum/Suite_3/Suite_3_8.avif', '/Astrum/Suite_3/Suite_3_9.avif', '/Astrum/Suite_3/Suite_3_10.jpeg'] },
  { number: '04', href: 'https://airbnb.com/h/klcc-alg-astrum-04', images: ['/Astrum/Suite_4/Suite_4.avif'] },
  { number: '05', href: 'https://airbnb.com/h/klcc-alg-astrum-05', images: ['/Astrum/Suite_5/Suite_5.avif'] },
  { number: '06', href: 'https://airbnb.com/h/klcc-alg-astrum-06', images: ['/Astrum/Suite_6/Suite_6.avif', '/Astrum/Suite_6/Suite_6_1.avif', '/Astrum/Suite_6/Suite_6_2.jpeg'] },
  { number: '07', href: 'https://airbnb.com/h/klcc-alg-astrum-07', images: ['/Astrum/Suite_7/Suite_7.avif', '/Astrum/Suite_7/Suite_7_1.avif', '/Astrum/Suite_7/Suite_7_2.avif'] },
]

const FACILITIES = [
  { label: 'City views', image: '/Astrum/Facilities/Suite_1_5.jpeg' },
  { label: 'Living spaces', image: '/Astrum/Facilities/Suite_1_6.jpeg' },
  { label: 'Rest & recharge', image: '/Astrum/Facilities/Suite_1_7.jpeg' },
  { label: 'Everyday comfort', image: '/Astrum/Facilities/Suite_1_8.jpeg' },
  { label: 'Shared facilities', image: '/Astrum/Facilities/Suite_1_9.jpeg' },
  { label: 'Made for longer stays', image: '/Astrum/Facilities/Suite_1_10.jpeg' },
]

const WHATSAPP_LINK = 'https://wa.me/60198540955?text=Hi%20ALG%2C%20I%20would%20like%20to%20enquire%20about%20an%20Astrum%20Ampang%20suite.'

type Suite = (typeof SUITES)[number]

const SuiteCard = ({ suite, index }: { suite: Suite; index: number }) => {
  const [activeImage, setActiveImage] = useState(0)
  const interval = 3200 + index * 430

  useEffect(() => {
    if (suite.images.length < 2) return
    const timer = window.setInterval(() => {
      setActiveImage(current => (current + 1) % suite.images.length)
    }, interval)
    return () => window.clearInterval(timer)
  }, [interval, suite.images.length])

  return (
    <a
      className={`astrum-suite-card${index === 0 ? ' astrum-suite-card--featured' : ''}`}
      href={suite.href}
      target="_blank"
      rel="noopener noreferrer"
      data-reveal
    >
      <div className="astrum-suite-card__media" aria-hidden="true">
        {suite.images.map((image, imageIndex) => (
          <img
            key={image}
            className={imageIndex === activeImage ? 'is-active' : ''}
            src={image}
            alt=""
            loading={index === 0 && imageIndex === 0 ? 'eager' : 'lazy'}
          />
        ))}
        <span className="astrum-suite-card__progress">{String(activeImage + 1).padStart(2, '0')} / {String(suite.images.length).padStart(2, '0')}</span>
      </div>
      <div className="astrum-suite-card__overlay" />
      <span className="astrum-suite-card__index">0{index + 1} / 07</span>
      <div className="astrum-suite-card__body">
        <span className="astrum-suite-card__eyebrow">ASTRUM AMPANG</span>
        <span className="astrum-suite-card__number">Suite {suite.number}</span>
        <span className="astrum-suite-card__detail">KL city stay · Jelatek LRT</span>
      </div>
      <span className="astrum-suite-card__action">Explore this suite <b aria-hidden="true">↗</b></span>
    </a>
  )
}

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
      <Seo
        title="Astrum Ampang Suites Near Jelatek LRT | Kuala Lumpur | ALG"
        description="Explore seven ALG Astrum Ampang suites beside Jelatek LRT Station, with direct Airbnb booking links for connected Kuala Lumpur stays."
        path="/astrum-ampang"
        image="/ArtePlus/AstrumProfile.jpeg"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'LodgingBusiness',
          name: 'KLCC ALG Astrum Ampang Suites',
          description: 'Modern ALG suite stays beside Jelatek LRT Station in Ampang, Kuala Lumpur.',
          telephone: '+60198540955',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Jalan Jelatek, Taman Keramat',
            postalCode: '54200',
            addressLocality: 'Ampang',
            addressRegion: 'Selangor',
            addressCountry: 'MY',
          },
        }}
      />

      <Header
        navigationItems={[
          { id: 'story', label: 'About' },
          { id: 'suites', label: 'Suites' },
          { id: 'transport', label: 'Transport' },
          { id: 'location', label: 'Location' },
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
            {SUITES.map((suite, index) => <SuiteCard key={suite.number} suite={suite} index={index} />)}
          </div>
        </section>

        <section className="astrum-facilities" aria-labelledby="facilities-title">
          <div className="astrum-facilities__heading" data-reveal>
            <p className="astrum-kicker">SHARED COMFORTS</p>
            <h2 id="facilities-title">Make space for the city.</h2>
            <p>Every Astrum stay is supported by the shared facilities and everyday details that make a city base feel easy.</p>
          </div>
          <div className="astrum-facilities__rail">
            {FACILITIES.map((facility, index) => <figure key={facility.image} className="astrum-facility" data-reveal><img src={facility.image} alt={facility.label} loading="lazy" /><figcaption><span>0{index + 1}</span>{facility.label}</figcaption></figure>)}
          </div>
        </section>

        <section className="astrum-contact" id="enquire">
          <div className="astrum-contact__panel" data-reveal><p className="astrum-kicker">WE ARE HERE TO HELP</p><h2>Have a stay in mind?</h2><p>Tell us your dates and preferred suite. Our team can point you to the right listing or help with an enquiry.</p><div className="astrum-contact__actions"><a className="astrum-button astrum-button--dark" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">WhatsApp ALG</a></div></div>
          <aside className="astrum-contact__resort" data-reveal><p>COMING NEXT · SEMPORNA, SABAH</p><h3>Bohey Dulang ALG<br />Floating Resort</h3><a href="https://airbnb.com/h/boheydulang-alg-floatingresort" target="_blank" rel="noopener noreferrer">Discover the resort <span aria-hidden="true">↗</span></a></aside>
        </section>

        <Transport />
        <Location
          locationName="Astrum Ampang"
          mapsLink="https://share.google/idNnHx34B6fkmwpJp"
          wazeLink="https://www.waze.com/ul?q=Astrum%20Ampang%2C%20Jalan%20Jelatek%2C%20Taman%20Keramat%2C%20Ampang%2C%20Selangor&navigate=yes"
          mapEmbed="https://maps.google.com/maps?q=Astrum%20Ampang,%20Jalan%20Jelatek,%20Taman%20Keramat,%2054200%20Ampang,%20Selangor,%20Malaysia&t=&z=16&ie=UTF8&iwloc=&output=embed"
        />
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
