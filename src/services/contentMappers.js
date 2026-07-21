import { getDirectusAssetUrl } from '../lib/directus'

export function mapUnit(item, fallback) {
  if (!item) return fallback

  return {
    ...fallback,
    id: item.slug || fallback.id,
    level: item.level || fallback.level,
    name: item.name || fallback.name,
    title: item.title || fallback.title,
    text: item.short_description || fallback.text,
    route: fallback.route,
    newsRoute: fallback.newsRoute,
    heroImage: getDirectusAssetUrl(item.hero_image, fallback.heroImage),
    intro: item.description || fallback.intro,
    highlights: toStringList(item.highlights, fallback.highlights),
    facilities: fallback.facilities,
    programs: fallback.programs,
  }
}

export function mapNews(item, unitSlugById = {}) {
  const rawUnit = item.unit_id?.slug || item.unit_id || 'yayasan'
  const unit = unitSlugById[String(rawUnit)] || rawUnit

  return {
    id: item.id,
    title: item.title,
    slug: item.slug,
    unit,
    category: unit === 'yayasan' ? 'Yayasan' : unit.toUpperCase(),
    date: formatDate(item.published_at || item.created_at),
    summary: item.summary || '',
    excerpt: item.summary || '',
    image: getDirectusAssetUrl(item.cover_image),
  }
}

export function mapGallery(item) {
  return {
    id: item.id,
    title: item.title,
    src: getDirectusAssetUrl(item.cover_image),
    unit: item.unit_id?.slug || item.unit_id || 'global',
  }
}

function toStringList(value, fallback = []) {
  if (Array.isArray(value)) return value
  if (typeof value === 'string') return value.split('\n').map((item) => item.trim()).filter(Boolean)
  return fallback
}

function formatDate(value) {
  if (!value) return ''
  return new Intl.DateTimeFormat('id-ID', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(value))
}
