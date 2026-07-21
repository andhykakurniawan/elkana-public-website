import {
  educationUnits as staticEducationUnits,
  gallery as staticGallery,
  homeHero as staticHomeHero,
  news as staticNews,
  school as staticSchool,
  unitsById as staticUnitsById,
} from '../content'
import { isCmsEnabled } from '../config/cms'
import { readPublishedItems } from '../lib/directus'
import { mapGallery, mapNews, mapUnit } from './contentMappers'

export const staticHomeContent = {
  school: staticSchool,
  homeHero: staticHomeHero,
  educationUnits: staticEducationUnits,
  unitsById: staticUnitsById,
  news: staticNews,
  gallery: staticGallery,
}

export async function getPublicHomeContent() {
  if (!isCmsEnabled) return staticHomeContent

  const [units, news, gallery] = await Promise.all([
    readPublishedItems('school_units', {
      sort: ['sort_order', 'name'],
      fields: ['id', 'slug', 'level', 'name', 'title', 'short_description', 'description', 'hero_image', 'highlights'],
    }),
    readPublishedItems('news', {
      sort: ['-published_at'],
      limit: 6,
      fields: ['id', 'title', 'slug', 'summary', 'cover_image', 'published_at', 'unit_id'],
    }),
    readPublishedItems('galleries', {
      sort: ['sort_order', '-event_date'],
      limit: 8,
      fields: ['id', 'title', 'cover_image'],
    }),
  ])

  const mappedUnits = staticEducationUnits.map((fallback) => {
    const item = units.find((unit) => unit.slug === fallback.id)
    return mapUnit(item, fallback)
  })

  const unitSlugById = Object.fromEntries(units.map((unit) => [String(unit.id), unit.slug]))

  return {
    ...staticHomeContent,
    educationUnits: mappedUnits,
    unitsById: Object.fromEntries(mappedUnits.map((unit) => [unit.id, unit])),
    news: news.length ? news.map((item) => mapNews(item, unitSlugById)) : staticNews,
    gallery: gallery.length ? gallery.map(mapGallery).filter((item) => item.src) : staticGallery,
  }
}

export async function getPublicUnitContent(unitSlug) {
  const fallbackUnit = staticUnitsById[unitSlug]
  if (!isCmsEnabled || !fallbackUnit) return fallbackUnit

  const units = await readPublishedItems('school_units', {
    filter: { slug: { _eq: unitSlug } },
    limit: 1,
    fields: ['id', 'slug', 'level', 'name', 'title', 'short_description', 'description', 'hero_image', 'highlights'],
  })

  return mapUnit(units[0], fallbackUnit)
}

export async function getPublicNewsContent() {
  if (!isCmsEnabled) return staticNews

  const [units, news] = await Promise.all([
    readPublishedItems('school_units', {
      fields: ['id', 'slug'],
    }),
    readPublishedItems('news', {
      sort: ['-published_at'],
      fields: ['id', 'title', 'slug', 'summary', 'cover_image', 'published_at', 'unit_id'],
    }),
  ])

  const unitSlugById = Object.fromEntries(units.map((unit) => [String(unit.id), unit.slug]))

  return news.length ? news.map((item) => mapNews(item, unitSlugById)) : staticNews
}

export async function getPublicUnitNewsContent(unitSlug) {
  const fallbackNews = staticNews.filter((item) => item.unit === unitSlug)
  if (!isCmsEnabled) return fallbackNews

  const units = await readPublishedItems('school_units', {
    filter: { slug: { _eq: unitSlug } },
    limit: 1,
    fields: ['id', 'slug'],
  })
  const cmsUnitId = units[0]?.id
  if (!cmsUnitId) return fallbackNews

  const news = await readPublishedItems('news', {
    filter: { unit_id: { _eq: cmsUnitId } },
    sort: ['-published_at'],
    fields: ['id', 'title', 'slug', 'summary', 'cover_image', 'published_at', 'unit_id'],
  })

  return news.length ? news.map((item) => mapNews(item, { [String(cmsUnitId)]: unitSlug })) : fallbackNews
}
