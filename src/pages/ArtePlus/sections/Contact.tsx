import './Contact.scss'
import { useEffect, useRef } from 'react'

const WHATSAPP_LINK = 'https://wa.me/60198540955?text=Hi%20ALG%2C%20I%20would%20like%20to%20enquire%20about%20an%20Arte%20Plus%20suite.'

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll<HTMLElement>('[data-ap-reveal]')
    if (!items?.length) return
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    }), { threshold: 0.16 })
    items.forEach(item => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
  <section className="ap-contact" id="enquire" aria-labelledby="arte-enquire-title" ref={sectionRef}>
    <div className="ap-contact__panel" data-ap-reveal>
      <p className="ap-contact__kicker">WE ARE HERE TO HELP</p>
      <h2 id="arte-enquire-title">Have a stay in mind?</h2>
      <p className="ap-contact__copy">Tell us your dates and preferred suite. Our team can point you to the right listing or help with an enquiry.</p>
      <a className="ap-contact__button" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">WhatsApp ALG</a>
    </div>
    <aside className="ap-contact__resort" data-ap-reveal style={{ '--ap-reveal-delay': '130ms' } as React.CSSProperties}>
      <p>COMING NEXT · SEMPORNA, SABAH</p>
      <h3>Bohey Dulang ALG<br />Floating Resort</h3>
      <a href="https://airbnb.com/h/boheydulang-alg-floatingresort" target="_blank" rel="noopener noreferrer">Discover the resort <span aria-hidden="true">↗</span></a>
    </aside>
  </section>
  )
}

export default Contact
