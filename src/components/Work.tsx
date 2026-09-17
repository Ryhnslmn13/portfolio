import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Work() {
  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <section id="work" className="section">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">Featured Projects</h2>
          <span className="section-link">{featuredProjects.length} featured projects</span>
        </div>

        <div className="work-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
