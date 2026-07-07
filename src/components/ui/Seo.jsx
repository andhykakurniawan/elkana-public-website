import { Helmet } from 'react-helmet-async'
import { school } from '../../content'

export function Seo({ title, description }) {
  const pageTitle = title ? `${title} | ${school.name}` : `${school.name} - Profil Sekolah`
  const metaDescription = description || school.tagline

  return (
    <Helmet>
      <html lang="id" />
      <title>{pageTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
    </Helmet>
  )
}
