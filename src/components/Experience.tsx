const experiences = [
  {
    period: 'Aug 2026 — Present',
    organization: 'PT Len Industri (Persero)',
    role: 'Software Engineering Intern · Maganghub',
    description:
      'Working in an engineering environment around Java-based systems, component integration, Git workflows, and software used in command-and-control related contexts.',
  },
  {
    period: 'July — Aug 2025',
    organization: 'Universiti Sains Malaysia',
    role: 'International Research Intern',
    description:
      'Conducted research activities in Computer Vision under academic supervision of lecturers and performed literature review, data collection, experimentation, and result analysis.',
  },
  {
    period: 'Sep 2024 — Jan 2025',
    organization: 'Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka',
    role: 'Cloud Computing Cohort',
    description:
      'Completed intensive cloud computing training covering Google Cloud Platform and developed and deployed cloud-based applications in collaborative project environments.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">Experience</h2>
          <span className="section-link">Industry & Research</span>
        </div>

        <div className="experience-list">
          {experiences.map((experience) => (
            <article className="experience-row reveal" key={`${experience.organization}-${experience.period}`}>
              <span className="experience-period">{experience.period}</span>
              <div className="experience-main">
                <h3>{experience.organization}</h3>
                <p className="experience-role">{experience.role}</p>
              </div>
              <p className="experience-description">{experience.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
