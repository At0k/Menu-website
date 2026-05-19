import { useEffect, useRef, useState, type CSSProperties } from 'react'
import './About.scss'

type AboutImage = {
    src: string
    alt: string
}

type AboutTiles = {
    topLeft: AboutImage
    bottomLeft: AboutImage
    topRight: AboutImage
    bottomRight: AboutImage
}

type TileKey = keyof AboutTiles

type TileOffset = {
    x: number
    y: number
}

type TileStyle = CSSProperties & {
    '--ap-tile-x'?: string
    '--ap-tile-y'?: string
}

const IMAGE_POOL: AboutImage[] = [
    { src: '/Arte-Plus-Klcc-By-Dreamscape-Apartment-Kuala-Lumpur-Exterior (1).jpg', alt: 'Arte Plus exterior' },
    { src: '/2020_04_Project_Layout18.jpg', alt: 'Arte Plus building' },
    { src: '/623247993.jpg', alt: 'Arte Plus pool' },
    { src: '/1.4-Arte_Tower-1-Lobby.jpg', alt: 'Arte Plus lobby' },
    { src: '/471119343.jpg', alt: 'Arte Plus view' },
    { src: '/ViewArte.avif', alt: 'Arte Plus courtyard' },
    { src: '/arte-plus-jalan-ampan-my-kuala-lumpur-bc-5022267-0.jpg', alt: 'Arte Plus city view' },
]

const DEFAULT_TILES: AboutTiles = {
    topLeft: IMAGE_POOL[0],
    bottomLeft: IMAGE_POOL[2],
    topRight: IMAGE_POOL[1],
    bottomRight: IMAGE_POOL[3],
}

function pickFourUniqueImages(excludeSrcs: Set<string>) {
    const candidates = IMAGE_POOL.filter(img => !excludeSrcs.has(img.src))
    const pool = candidates.length >= 4 ? candidates : IMAGE_POOL

    // Fisher–Yates shuffle (in-place on a shallow copy).
    const shuffled = [...pool]
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
            ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }

    return shuffled.slice(0, 4)
}

function randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function createRandomOffsets(): Record<TileKey, TileOffset> {
    return {
        topLeft: { x: randomInt(-12, 18), y: randomInt(-10, 18) },
        bottomLeft: { x: randomInt(-16, 16), y: randomInt(-18, 12) },
        topRight: { x: randomInt(-18, 12), y: randomInt(-10, 18) },
        bottomRight: { x: randomInt(-16, 16), y: randomInt(-18, 12) },
    }
}

const AboutTile = ({
    image,
    prevImage,
    isTransitioning,
    className,
    style,
}: {
    image: AboutImage
    prevImage: AboutImage | null
    isTransitioning: boolean
    className: string
    style?: CSSProperties
}) => (
    <figure className={className} style={style}>
        <div className="ap-about__tile-inner">
            {prevImage && (
                <img
                    className="ap-about__tile-img ap-about__tile-img--prev"
                    src={prevImage.src}
                    alt={prevImage.alt}
                />
            )}
            <img
                className={`ap-about__tile-img ap-about__tile-img--current${isTransitioning ? ' is-fading' : ''}`}
                src={image.src}
                alt={image.alt}
            />
        </div>
    </figure>
)

const About = () => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const [tiles, setTiles] = useState<AboutTiles>(DEFAULT_TILES)
    const [prevTiles, setPrevTiles] = useState<AboutTiles | null>(null)
    const [isTransitioning, setIsTransitioning] = useState(false)
    const [offsets, setOffsets] = useState<Record<TileKey, TileOffset>>(() => createRandomOffsets())

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible')
                }
            })
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })

        const items = sectionRef.current?.querySelectorAll('.ap-about__reveal')
        items?.forEach((item) => observer.observe(item))

        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        const FADE_MS = 900
        const INTERVAL_MS = 8000

        const transitionToNext = () => {
            setTiles((current) => {
                const currentSrcs = new Set([
                    current.topLeft.src,
                    current.bottomLeft.src,
                    current.topRight.src,
                    current.bottomRight.src,
                ])

                const [topLeft, bottomLeft, topRight, bottomRight] = pickFourUniqueImages(currentSrcs)
                const nextTiles: AboutTiles = { topLeft, bottomLeft, topRight, bottomRight }

                const isSame =
                    nextTiles.topLeft.src === current.topLeft.src &&
                    nextTiles.bottomLeft.src === current.bottomLeft.src &&
                    nextTiles.topRight.src === current.topRight.src &&
                    nextTiles.bottomRight.src === current.bottomRight.src

                const finalTiles = isSame
                    ? (() => {
                        const [tl2, bl2, tr2, br2] = pickFourUniqueImages(currentSrcs)
                        return { topLeft: tl2, bottomLeft: bl2, topRight: tr2, bottomRight: br2 }
                    })()
                    : nextTiles

                setPrevTiles(current)
                setIsTransitioning(true)
                setOffsets(createRandomOffsets())

                window.setTimeout(() => {
                    setPrevTiles(null)
                    setIsTransitioning(false)
                }, FADE_MS)

                return finalTiles
            })
        }

        const intervalId = window.setInterval(transitionToNext, INTERVAL_MS)
        return () => window.clearInterval(intervalId)
    }, [])

    return (
        <section className="ap-about" id="about" ref={sectionRef}>
            <div className="ap-about__side ap-about__side--left">
                <AboutTile
                    image={tiles.topLeft}
                    prevImage={prevTiles?.topLeft ?? null}
                    isTransitioning={isTransitioning}
                    className="ap-about__tile ap-about__tile--top-left ap-about__reveal ap-reveal-d1"
                    style={{
                        '--ap-tile-x': `${offsets.topLeft.x}px`,
                        '--ap-tile-y': `${offsets.topLeft.y}px`,
                    } as TileStyle}
                />

                <AboutTile
                    image={tiles.bottomLeft}
                    prevImage={prevTiles?.bottomLeft ?? null}
                    isTransitioning={isTransitioning}
                    className="ap-about__tile ap-about__tile--bottom-left ap-about__reveal ap-reveal-d2"
                    style={{
                        '--ap-tile-x': `${offsets.bottomLeft.x}px`,
                        '--ap-tile-y': `${offsets.bottomLeft.y}px`,
                    } as TileStyle}
                />
            </div>

            <div className="ap-about__body ap-animate ap-animate-d1">
                <div className="ap-about__logo-wrap ap-animate ap-animate-d1">
                    <img className="ap-about__logo" src="/LogoOnly.png" alt="ALG Logo" />
                </div>

                <h2 className="ap-about__title ap-title-serif ap-animate ap-animate-d2">About ALG Hotel</h2>

                <div className="ap-about__text ap-animate ap-animate-d3">
                    <p>Dear Valued Guest,</p>
                    <p>Welcome to the Affordable Luxury Group (ALG), your urban sanctuary in the heart of Kuala Lumpur, where seamless comfort and the warmth of our hospitality create a stay like no other.</p>
                    <p>Our passion for service and attention to detail are the heart of everything we do, from our thoughtfully designed suites at Arte Plus to our exclusive limousine services.</p>
                    <p>Thank you for choosing ALG Hotel. We cannot wait to share our perfect blend of comfort and sophistication with you.</p>
                </div>
            </div>

            <div className="ap-about__side ap-about__side--right">
                <AboutTile
                    image={tiles.topRight}
                    prevImage={prevTiles?.topRight ?? null}
                    isTransitioning={isTransitioning}
                    className="ap-about__tile ap-about__tile--top-right ap-about__reveal ap-reveal-d2"
                    style={{
                        '--ap-tile-x': `${offsets.topRight.x}px`,
                        '--ap-tile-y': `${offsets.topRight.y}px`,
                    } as TileStyle}
                />

                <AboutTile
                    image={tiles.bottomRight}
                    prevImage={prevTiles?.bottomRight ?? null}
                    isTransitioning={isTransitioning}
                    className="ap-about__tile ap-about__tile--bottom-right ap-about__reveal ap-reveal-d1"
                    style={{
                        '--ap-tile-x': `${offsets.bottomRight.x}px`,
                        '--ap-tile-y': `${offsets.bottomRight.y}px`,
                    } as TileStyle}
                />
            </div>
        </section>
    )
}

export default About
