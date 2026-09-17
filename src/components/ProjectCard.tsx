import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'
import { ExternalLinkIcon } from './Icons'

type ProjectCardProps = {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="work-card reveal">
      <div className="work-card-img">
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = 'none'
          }}
        />
      </div>

      <div className="work-card-body">
        <div className="work-card-tag">{project.tag}</div>
        <h3 className="work-card-title">{project.title}</h3>
        <p className="work-card-subtitle">{project.subtitle}</p>
        <p className="work-card-desc">{project.description}</p>

        <div className="work-card-tech" aria-label={`${project.title} technologies`}>
          {project.technologies.map((technology) => (
            <span className="work-card-tech-item" key={technology}>{technology}</span>
          ))}
        </div>
      </div>

      <div className="work-card-footer">
        <span className="work-card-year">{project.year}</span>
        <Link to={`/projects/${project.slug}`} className="work-card-link" aria-label={`View ${project.title} case study`}>
          View project <ExternalLinkIcon />
        </Link>
      </div>
    </article>
  )
}
