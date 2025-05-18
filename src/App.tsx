import { useState } from 'react'
import './App.css'

const AIRBNB_LINK = 'https://www.airbnb.com/users/show/229653690'

const ROOM_UNITS = {
  studio: [
    { name: 'Leisure Suite', link: 'https://www.airbnb.com/rooms/43399783?source_impression_id=p3_1746690337_P33FsN_FO5ksxDWX' },
    { name: 'Cozy Studio', link: 'https://www.airbnb.com/rooms/44694171?source_impression_id=p3_1746690296_P3fXwvhTKpMvej_5' },
  ],
  two: [
    { name: 'Marvelous Suite', link: 'https://airbnb.com/h/klcc-alg-marvellous-suite' },
    { name: 'Stylo Suite', link: 'https://airbnb.com/h/klcc-alg-stylo-suite' },
    { name: 'Classy Suite', link: 'https://airbnb.com/h/klcc-alg-classy-suite' },
    { name: 'Lovely Suite', link: 'http://airbnb.com/h/klcc-alg-stylish-suite' },
  ],
  three: [
    { name: 'Premium Suite', link: 'https://airbnb.com/h/klcc-alg-premium-suite' },
    { name: 'Majestic Suite', link: 'https://airbnb.com/h/klcc-alg-majestic-suite' },
    { name: 'Luxury Suite', link: 'https://airbnb.com/h/klcc-alg-luxury-suite' },
  ],
};

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalUnits, setModalUnits] = useState<{ name: string; link: string }[]>([]);

  const openModal = (type: 'studio' | 'two' | 'three') => {
    setModalUnits(ROOM_UNITS[type]);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <div className="main-content">
        {/* HERO/HEADER */}
        <section className="hero-section fade-in">
          <div className="hero-overlay">
            <div className="hero-welcome fade-in-delay-1">WELCOME TO</div>
            <h1 className="hero-main-title fade-in-delay-2">ALG SUITE</h1>
            <div className="hero-subtitle fade-in-delay-3">Arte Plus Ampang</div>
            <div className="hero-book-link-container">
              <a href={AIRBNB_LINK} target="_blank" rel="noopener noreferrer" className="hero-book-link fade-in-delay-4">
                LEARN MORE
        </a>
      </div>
          </div>
        </section>
        {/* IntroSuite Section */}
        <section className="intro-suite-section">
          <div className="intro-suite-container">
            <div className="intro-suite-text">
              <h2 className="intro-suite-title">Welcome to Affordable Luxury Group (ALG)</h2>
              <p className="intro-suite-desc">
                At ALG, we believe that our guests deserve high-quality accommodation and limousine services at an affordable price. We offer exceptional value with our Serviced Condominium units, featuring Studio, 1, 2, and 3-bedroom Suites at Arte+ @ Jalan Ampang, Kuala Lumpur, Malaysia.
              </p>
              <p className="intro-suite-desc">
                Complementing our premium accommodations, we provide exclusive Limousine services with both Luxury MPV and Mercedes vehicles, ensuring a seamless and luxurious experience throughout your stay. Discover the perfect blend of comfort and sophistication with #klccALGsuite.
              </p>
              <p className="intro-suite-desc">
                Our prime locations:
                <br />• ARTE+ @ Jalan Ampang, Kuala Lumpur
                <br />• Limousine Service, Kuala Lumpur
              </p>
            </div>
            <div className="intro-suite-image-wrapper">
              <img className="intro-suite-image" src="/2020_04_Project_Layout18.jpg" alt="Arte Plus Ampang building" />
            </div>
          </div>
        </section>
        {/* ROOMS & SUITES */}
        <section className="rooms-section">
          <div className="section-content">
            <h2 className="section-title" style={{ textAlign: 'center' }}>ROOMS & SUITES</h2>
            <div className="rooms-grid">
              <div className="room-card" onClick={() => openModal('studio')} style={{ cursor: 'pointer' }} data-aos="fade-up" data-aos-delay="0">
                <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Studio" style={{ height: '70%', minHeight: 220, maxHeight: 340, objectFit: 'cover', width: '100%' }} />
                <div className="room-details">
                  <div className="room-name">STUDIO</div>
                  <div className="room-info-row">1 Bed · 1 Bath · 2 Guests</div>
                </div>
              </div>
              <div className="room-card" onClick={() => openModal('two')} style={{ cursor: 'pointer' }} data-aos="fade-up" data-aos-delay="100">
                <img src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80" alt="2 Bedrooms" style={{ height: '70%', minHeight: 220, maxHeight: 340, objectFit: 'cover', width: '100%' }} />
                <div className="room-details">
                  <div className="room-name">2 BEDROOMS</div>
                  <div className="room-info-row">2 Beds · 2 Baths · 4 Guests</div>
                </div>
              </div>
              <div className="room-card" onClick={() => openModal('three')} style={{ cursor: 'pointer' }} data-aos="fade-up" data-aos-delay="200">
                <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" alt="3 Bedrooms" style={{ height: '70%', minHeight: 220, maxHeight: 340, objectFit: 'cover', width: '100%' }} />
                <div className="room-details">
                  <div className="room-name">3 BEDROOMS</div>
                  <div className="room-info-row">3 Beds · 2 Baths · 6 Guests</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Modal for unit selection */}
        {modalOpen && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-bubbles modal-bubbles-center modal-fade-in" onClick={e => e.stopPropagation()}>
              {modalUnits.map((unit) => (
                <a
                  className="modal-bubble"
                  key={unit.name}
                  href={unit.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="bubble-name">{unit.name}</span>
                </a>
              ))}
            </div>
          </div>
        )}
        {/* AMENITIES */}
        <section className="amenities-section">
          <div className="section-content">
            <h2 className="section-title" style={{ textAlign: 'center' }}>AMENITIES</h2>
            <div className="amenities-bg">
              <div className="amenities-grid">
                <div className="fade-in-amenity" style={{ animationDelay: '0ms' }}><span className="amenity-icon">{/* no smoking */}<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6b4c2b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 2l20 20"/><path d="M5.5 5.5a4 4 0 0 1 4-4h5a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4h-5a4 4 0 0 1-4-4V5.5z"/></svg></span> No smoking</div>
                <div className="fade-in-amenity" style={{ animationDelay: '80ms' }}><span className="amenity-icon">{/* pool */}<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6b4c2b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 21c1-1 3-1 4 0s3 1 4 0 3-1 4 0 3 1 4 0"/><path d="M8 17V4a4 4 0 1 1 8 0v13"/></svg></span> Shared outdoor pool & hot tub</div>
                <div className="fade-in-amenity" style={{ animationDelay: '160ms' }}><span className="amenity-icon">{/* car/parking */}<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6b4c2b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="6" rx="2"/><path d="M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"/><circle cx="7.5" cy="17.5" r="1.5"/><circle cx="16.5" cy="17.5" r="1.5"/></svg></span> Free parking on premises</div>
                <div className="fade-in-amenity" style={{ animationDelay: '240ms' }}><span className="amenity-icon">{/* kitchen */}<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6b4c2b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7"/><path d="M3 7h18"/><path d="M8 7V3a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4"/></svg></span> Kitchen</div>
                <div className="fade-in-amenity" style={{ animationDelay: '320ms' }}><span className="amenity-icon">{/* calendar/long term */}<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6b4c2b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/></svg></span> Long term stays allowed</div>
                <div className="fade-in-amenity" style={{ animationDelay: '400ms' }}><span className="amenity-icon">{/* cleaning */}<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6b4c2b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21 5 7"/><path d="m6 16 6-6"/><path d="M3 21h18"/></svg></span> Cleaning available during stay</div>
              </div>
            </div>
          </div>
        </section>
        {/* LOCATION */}
        <section className="location-section">
          <div className="section-content">
            <h2 className="section-title">LOCATION</h2>
            <div className="location-content">
              <div className="map-container" data-aos="fade-up">
                <iframe
                  title="Arte Plus Ampang Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.8137!2d101.7476652!3d3.1618169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc37fb0ba184e5%3A0xe5dcfa00d06c69e7!2sALG%20Suite%20at%20Arte%2B%20Ampang!5e0!3m2!1sen!2smy!4v1710834567890!5m2!1sen!2smy"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="location-info-stack">
                <div className="address-box" data-aos="fade-up" data-aos-delay="100">
                  <div className="address-title">ARTE PLUS AMPANG</div>
                  <div className="address-details">3, Lorong Ampang 1, Kampung Berembang, 55000 Kuala Lumpur</div>
                  <a
                    className="waze-link"
                    href="https://waze.com/ul?ll=3.1618169,101.7476652&navigate=yes"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="waze-icon" aria-label="Waze">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3a2a13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="6" rx="2"/><circle cx="7.5" cy="17.5" r="1.5"/><circle cx="16.5" cy="17.5" r="1.5"/><path d="M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"/></svg>
                    </span> Navigate with Waze
                  </a>
                  <div className="address-meta">
                    <div className="meta-item">
                      <span className="meta-icon">{/* plane icon */}
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3a2a13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 19.5L21.5 12L2.5 4.5L5 12L2.5 19.5Z"/></svg>
                      </span>
                      <span className="meta-text">Sultan Abdul Aziz Shah Airport (22 km)</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-icon">{/* plane icon */}
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3a2a13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 19.5L21.5 12L2.5 4.5L5 12L2.5 19.5Z"/></svg>
                      </span>
                      <span className="meta-text">Kuala Lumpur International Airport (46 km)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="nearby-attractions" data-aos="fade-up" data-aos-delay="200" style={{ gridTemplateColumns: '1fr 1fr' }}>
              <h3>Nearby Attractions</h3>
              <div className="attraction-item" style={{ alignItems: 'flex-start', textAlign: 'left' }}>
                <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: 12, color: '#3a2a13' }}>Within 1 km:</div>
                <ul style={{ paddingLeft: 18, margin: 0, color: '#3a2a13', fontSize: '1rem', lineHeight: 1.7 }}>
                  <li>Flamingo Institute</li>
                  <li>Stamford College</li>
                  <li>KL International Schools</li>
                  <li>Flamingo Hotel</li>
                  <li>Great Eastern Mall</li>
                  <li>Ampang Puteri & Gleneagles Specialist Hospital</li>
                  <li>Ampang Point</li>
                  <li>Ampang City Centre</li>
                  <li>Darul Ehsan Golf Course</li>
                  <li>NAEB Iranian Fine Cuisine Restaurant</li>
                </ul>
              </div>
              <div className="attraction-item" style={{ alignItems: 'flex-start', textAlign: 'left' }}>
                <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: 12, color: '#3a2a13' }}>Within 1 km – 4 km:</div>
                <ul style={{ paddingLeft: 18, margin: 0, color: '#3a2a13', fontSize: '1rem', lineHeight: 1.7 }}>
                  <li>Royal Selangor Golf Club</li>
                  <li>Ampang Park LRT Station</li>
                  <li>University of Technology Malaysia - UTM KL</li>
                  <li>Dinner In The Sky Malaysia</li>
                  <li>Zebra Square</li>
                  <li>Avenue K Shopping Mall</li>
                  <li>TREC KL</li>
                  <li>Kuala Lumpur City Centre KLCC</li>
                  <li>Aquaria KLCC</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* WHAT OUR GUESTS SAY */}
        <section className="reviews-section">
          <div className="section-content">
            <div className="reviews-header-row">
              <h2 className="section-title">WHAT OUR GUESTS SAY</h2>
            </div>
            <div className="reviews-grid">
              <div className="review-card" data-aos="fade-up" data-aos-delay="0">
                <p>"Great place, nice room + clean and the host Mr Amir really helpful and friendly."</p>
                <span>— FARHAN ADNAN</span>
              </div>
              <div className="review-card" data-aos="fade-up" data-aos-delay="100">
                <p>"LOVE the place! So comfy, clean, and security is strict. Recommended for those who are staying alone, its safe! The services were also very nice & helpful! I'll definitely find this place again to stay!"</p>
                <span>— NUR DANIA MELISSA</span>
              </div>
              <div className="review-card" data-aos="fade-up" data-aos-delay="200">
                <p>"Perhaps one of the best home stay service around this area. Amir and his team never fail to give their best support during the stay. Kudos to Amir and team."</p>
                <span>— ROBOT KING</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
