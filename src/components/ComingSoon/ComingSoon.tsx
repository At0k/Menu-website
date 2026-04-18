import React from 'react'
import { useNavigate } from 'react-router-dom'
import './ComingSoon.scss'

interface ComingSoonProps {
    title: string
    subtitle: string
    bgImage: string
}

const ComingSoon: React.FC<ComingSoonProps> = ({ title, subtitle, bgImage }) => {
    const navigate = useNavigate()

    return (
        <div className="coming-soon">
            <div className="coming-soon__bg" style={{ backgroundImage: `url('${bgImage}')` }} />
            <div className="coming-soon__overlay" />

            <div className="coming-soon__content">
                <h1 className="coming-soon__title">{title}</h1>
                <h2 className="coming-soon__subtitle">{subtitle}</h2>
                <div className="coming-soon__badge">Coming Soon</div>
            </div>

            <button className="coming-soon__back" onClick={() => navigate('/')}>
                Back
            </button>
        </div>
    )
}

export default ComingSoon
