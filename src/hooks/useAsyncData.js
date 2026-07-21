import { useEffect, useState } from 'react'

export function useAsyncData(loader, fallbackData, dependencies = []) {
  const [state, setState] = useState({
    data: fallbackData,
    error: null,
    isLoading: true,
    source: 'static',
  })

  useEffect(() => {
    let isMounted = true

    async function load() {
      setState((current) => ({ ...current, isLoading: true, error: null }))

      try {
        const data = await loader()
        if (!isMounted) return

        setState({
          data: data || fallbackData,
          error: null,
          isLoading: false,
          source: data ? 'directus' : 'static',
        })
      } catch (error) {
        if (!isMounted) return

        setState({
          data: fallbackData,
          error,
          isLoading: false,
          source: 'static',
        })
      }
    }

    load()

    return () => {
      isMounted = false
    }
  }, dependencies)

  return state
}
