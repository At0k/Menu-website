import { Helmet } from 'react-helmet-async'
import ComingSoon from '../../components/ComingSoon/ComingSoon'

const AstrumAmpang = () => {
    return (
        <>
            <Helmet>
                <title>Astrum Ampang | ALG Hotel Resort & Tour</title>
                <meta name="description" content="Astrum Ampang by ALG Hotel Resort & Tour. Stay tuned for premium suites and accommodations." />
            </Helmet>
            <ComingSoon
                title="Astrum"
                subtitle="Ampang"
                bgImage="/ASTRUM-AMPANG.jpg"
            />
        </>
    )
}

export default AstrumAmpang
