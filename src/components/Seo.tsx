import { Helmet } from 'react-helmet-async'

type StructuredData = Record<string, unknown>

type SeoProps = {
  title: string
  description: string
  path: string
  image: string
  structuredData?: StructuredData
  noIndex?: boolean
}

const Seo = ({ title, description, path, image, structuredData, noIndex = false }: SeoProps) => {
  const origin = typeof window === 'undefined' ? '' : window.location.origin
  const canonicalUrl = `${origin}${path}`
  const imageUrl = origin ? new URL(image, origin).href : image

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noIndex ? 'noindex, follow' : 'index, follow, max-image-preview:large'} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="ALG Hotel Resort & Tour" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={title} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {structuredData && (
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      )}
    </Helmet>
  )
}

export default Seo
