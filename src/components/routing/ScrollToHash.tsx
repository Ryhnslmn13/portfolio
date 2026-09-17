import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'auto' })
      return
    }

    const id = hash.replace('#', '')
    const element = document.getElementById(id)

    if (element) {
      requestAnimationFrame(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    }
  }, [pathname, hash])

  return null
}
