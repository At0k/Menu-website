import { Helmet } from 'react-helmet-async'
import ComingSoon from '../../components/ComingSoon/ComingSoon'

const PulauSemporna = () => {
    return (
        <>
            <Helmet>
                <title>Bohey Dulang Semporna | ALG Hotel Resort & Tour</title>
                <meta name="description" content="Discover Bohey Dulang Semporna with ALG Hotel Resort & Tour. Experience breath-taking tours and packages." />
            </Helmet>
            <ComingSoon
                title="SELAKAN"
                subtitle="Semporna"
                bgImage="/Semporna.jpg"
            />
        </>
    )
}

export default PulauSemporna