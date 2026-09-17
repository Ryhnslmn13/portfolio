import { useEffect } from 'react'

export function useScrollEffects() {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('section[id]')
    const navLinks = document.querySelectorAll<HTMLElement>('.nav-link')

    const spyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          navLinks.forEach((link) => {
            link.classList.toggle('active', link.dataset.section === entry.target.id)
          })
        })
      },
      { threshold: 0.3 },
    )

    const revealElements = document.querySelectorAll<HTMLElement>('.reveal')
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('visible')
          revealObserver.unobserve(entry.target)
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
    )

    sections.forEach((section) => spyObserver.observe(section))
    revealElements.forEach((element) => revealObserver.observe(element))

    document.querySelectorAll<HTMLElement>('.work-card, .patent-card, .stat-block').forEach((element, index) => {
      element.style.transitionDelay = `${(index % 4) * 70}ms`
    })

    return () => {
      spyObserver.disconnect()
      revealObserver.disconnect()
    }
  }, [])
}
