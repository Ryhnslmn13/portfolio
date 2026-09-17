import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MenuIcon, MoonIcon, SunIcon } from './Icons'

const links = [
  ['about', 'About'],
  ['work', 'Work'],
  ['certifications', 'Certifications'],
  ['experience', 'Experience'],
  ['contact', 'Contact'],
]

type Theme = 'dark' | 'light'

export default function Navbar() {
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem('theme') as Theme) || 'dark')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <>
      <div className="nav-wrapper">
        <nav className="nav" aria-label="Main navigation">
          <div className="nav-links">
            {links.map(([id, label]) => (
              <Link key={id} to={`/#${id}`} className="nav-link" data-section={id}>{label}</Link>
            ))}
          </div>
          <button className="nav-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle dark/light mode">
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <button className="nav-hamburger" onClick={() => setMobileOpen((value) => !value)} aria-label="Open navigation menu"><MenuIcon /></button>
        </nav>
      </div>
      <div className={`nav-mobile-menu ${mobileOpen ? 'open' : ''}`}>
        {links.map(([id, label]) => (
          <Link key={id} to={`/#${id}`} className="nav-mobile-link" onClick={() => setMobileOpen(false)}>{label}</Link>
        ))}
      </div>
    </>
  )
}
