import { createDirectus, readItems, rest } from '@directus/sdk'
import { cmsConfig, isCmsEnabled } from '../config/cms'

export const directus = isCmsEnabled
  ? createDirectus(cmsConfig.directusUrl).with(rest())
  : null

export function getDirectusAssetUrl(fileId, fallback = '') {
  if (!fileId) return fallback
  if (typeof fileId === 'string' && fileId.startsWith('http')) return fileId
  if (!cmsConfig.directusUrl) return fallback
  return `${cmsConfig.directusUrl.replace(/\/$/, '')}/assets/${fileId}`
}

export async function readPublishedItems(collection, query = {}) {
  if (!directus) return []

  const existingFilter = query.filter || {}
  const filter = {
    ...existingFilter,
    status: existingFilter.status || { _eq: 'PUBLISHED' },
  }

  return directus.request(readItems(collection, { ...query, filter }))
}
