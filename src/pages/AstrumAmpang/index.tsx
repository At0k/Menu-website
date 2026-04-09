import './AstrumAmpang.scss'
import { useNavigate } from 'react-router-dom'

const AstrumAmpang = () => {
    const navigate = useNavigate()

    return (
        <div className="coming-soon">
            <div className='coming-soon__bg' style={{ backgroundImage: `url('/ASTRUM-AMPANG.jpg')` }} />
            <div className="coming-soon__overlay" />

            <div className="coming-soon__content">
                <h1 className="coming-soon__title">Astrum</h1>
                <h2 className="coming-soon__subtitle">Ampang</h2>
                <div className="coming-soon__badge">Coming Soon</div>
            </div >

            <button className="coming-soon__back" onClick={() => navigate('/')}>
                Back
            </button>
        </div >
    )
}

export default AstrumAmpang
