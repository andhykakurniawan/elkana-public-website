import { useAsyncData } from './useAsyncData'
import {
  getPublicHomeContent,
  getPublicNewsContent,
  getPublicUnitContent,
  getPublicUnitNewsContent,
  staticHomeContent,
} from '../services/publicContentService'

export function usePublicHomeContent() {
  return useAsyncData(getPublicHomeContent, staticHomeContent, [])
}

export function usePublicUnitContent(unitSlug, fallbackUnit) {
  return useAsyncData(() => getPublicUnitContent(unitSlug), fallbackUnit, [unitSlug])
}

export function usePublicNewsContent() {
  return useAsyncData(getPublicNewsContent, staticHomeContent.news, [])
}

export function usePublicUnitNewsContent(unitSlug) {
  const fallbackNews = staticHomeContent.news.filter((item) => item.unit === unitSlug)
  return useAsyncData(() => getPublicUnitNewsContent(unitSlug), fallbackNews, [unitSlug])
}
