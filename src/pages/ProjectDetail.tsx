import { Link, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { ArrowRightIcon } from '../components/Icons'
import { projects } from '../data/projects'
import { caseStudies } from '../data/caseStudies'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)
  const caseStudy = slug ? caseStudies[slug] : undefined

  if (!project) {
    return (
      <>
        <Navbar />
        <main className="project-page project-page--empty">
          <div className="container">
            <p className="eyebrow">404</p>
            <h1>Project not found.</h1>
            <Link className="btn" to="/#work">Back to featured projects <ArrowRightIcon /></Link>
          </div>
        </main>
      </>
    )
  }

  if (!caseStudy) {
    return (
      <>
        <Navbar />
        <main className="project-page project-page--empty">
          <div className="container">
            <p className="eyebrow">{project.tag}</p>
            <h1>{project.title}</h1>
            <p className="project-empty-copy">{project.description}</p>
            <p className="muted">Full description coming soon.</p>
            <Link className="btn" to="/#work">Back to featured projects <ArrowRightIcon /></Link>
          </div>
        </main>
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main className="project-page">
        <header className="project-hero">
          <div className="container">
            <Link to="/#work" className="project-back">← Back to Previous Projects</Link>
            <p className="eyebrow">Featured Project · {project.year}</p>
            <h1 className="project-title">{project.title}</h1>
            <p className="project-subtitle">{project.subtitle}</p>
            <p className="project-lead">{caseStudy.summary}</p>

            <div className="project-detail-links">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                  <span aria-hidden="true">↗</span>
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                  <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>

            <div className="project-meta-grid">
              <div><span>Role</span><strong>{caseStudy.role}</strong></div>
              <div><span>Context</span><strong>{caseStudy.context}</strong></div>
              <div><span>Duration</span><strong>{caseStudy.duration}</strong></div>
              <div><span>Stack</span><strong>{project.technologies.join(' · ')}</strong></div>
            </div>
          </div>
        </header>

        <section className="project-metrics section--alt">
          <div className="container project-metrics-grid">
            {caseStudy.metrics.map((metric) => (
              <div className="project-metric" key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="project-flow section">
          <div className="container">
            <p className="eyebrow">System Pipeline</p>
            <h2 className="project-section-heading">From signing video to translated sentence</h2>
            <div className="pipeline">
              {caseStudy.pipeline.map((step, index) => (
                <div className="pipeline-step" key={step}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{step}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="project-sections">
          {caseStudy.sections.map((section, index) => (
            <section className={`project-section ${index % 2 === 1 ? 'section--alt' : ''}`} key={section.eyebrow}>
              <div className="container project-section-grid">
                <div>
                  <p className="eyebrow">{section.eyebrow}</p>
                  <h2>{section.title}</h2>
                </div>
                <div className="project-section-content">
                  {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.bullets && (
                    <ul>
                      {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                    </ul>
                  )}
                </div>
              </div>
            </section>
          ))}
        </div>

        <section className="project-next section">
          <div className="container">
            <p className="eyebrow">Next</p>
            <h2>Explore the rest of my engineering work.</h2>
            <Link className="btn" to="/projects">All projects <ArrowRightIcon /></Link>
          </div>
        </section>
      </main>
    </>
  )
}
