import './PulauSemporna.scss'
import { useNavigate } from 'react-router-dom'

const PulauSemporna = () => {
    const navigate = useNavigate()

    return (
        <div className="coming-soon">
            <div className="coming-soon__bg" style={{ backgroundImage: `url('/Semporna.jpg')` }} />
            <div className="coming-soon__overlay" />

            <div className="coming-soon__content">
                <h1 className="coming-soon__title">SELAKAN</h1>
                <h2 className="coming-soon__subtitle">Semporna</h2>
                <div className="coming-soon__badge">Coming Soon</div>
            </div>

            <button className="coming-soon__back" onClick={() => navigate('/')}>
                Back
            </button>
        </div>
    )
}

export default PulauSemporna