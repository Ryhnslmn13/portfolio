import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import { useScrollEffects } from '../hooks/useScrollEffects'

export default function Projects() {
  useScrollEffects()

  return (
    <>
      <Navbar />
      <main className="projects-page">
        <section className="projects-hero section">
          <div className="container">
            <p className="eyebrow">Engineering Portfolio</p>
            <h1>Projects built across software, AI, and data.</h1>
            <p>Selected systems, experiments, and research projects that show how I approach engineering problems from implementation through evaluation.</p>
            <Link to="/" className="project-back">← Home</Link>
          </div>
        </section>
        <section className="section section--alt">
          <div className="container work-grid">
            {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
          </div>
        </section>
      </main>
    </>
  )
}
