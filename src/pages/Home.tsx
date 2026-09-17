import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Work from '../components/Work'
import Certifications from '../components/Certifications'
import Experience from '../components/Experience'
import Contact from '../components/Contact'
import { useScrollEffects } from '../hooks/useScrollEffects'

export default function Home() {
  useScrollEffects()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Work />
        <Certifications />
        <Experience />
        <Contact />
      </main>
    </>
  )
}
