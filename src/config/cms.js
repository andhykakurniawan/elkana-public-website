export const cmsConfig = {
  directusUrl: import.meta.env.VITE_DIRECTUS_URL || '',
  useDirectus: import.meta.env.VITE_USE_DIRECTUS === 'true',
}

export const isCmsEnabled = Boolean(cmsConfig.useDirectus && cmsConfig.directusUrl)
