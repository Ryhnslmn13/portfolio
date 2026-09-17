import { FiExternalLink } from 'react-icons/fi'

type Certification = {
  title: string
  issuer: string
  year: string
  credentialId: string
  credentialUrl?: string
}

const certifications: Certification[] = [
  {
    title: 'Certified International Specialist in Data Engineering',
    issuer: 'PASAS Institute',
    year: '2026',
    credentialId: 'CISDE15480',
    credentialUrl: '',
  },
  {
    title: 'Menjadi Google Cloud Engineer',
    issuer: 'Dicoding Academy',
    year: '2024',
    credentialId: 'L4PQ5O7M4ZO1',
    credentialUrl: 'https://www.dicoding.com/certificates/L4PQ5O7M4ZO1',
  },
  {
    title: 'Microsoft Office Specialist: Excel 2016',
    issuer: 'Microsoft / Certiport',
    year: '2024',
    credentialId: 'mb3E-DwB2',
    credentialUrl: '',
  },
]

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="section certifications-section"
    >
      <div className="container">

        {/* Section heading */}
        <div className="section-head reveal">
          <div>
            <h2 className="section-title">
              Certifications
            </h2>
          </div>
        </div>

        {/* Certification cards */}
        <div className="certifications-grid">
          {certifications.map((certification, index) => (
            <article
              className="certification-card reveal"
              key={certification.title}
              style={{
                transitionDelay: `${index * 80}ms`,
              }}
            >
              <div className="certification-meta">
                <span>
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span>{certification.year}</span>
              </div>

              <div className="certification-content">
                <h3>{certification.title}</h3>

                <p className="certification-issuer">
                  {certification.issuer}
                </p>

                <div className="certification-id">
                  <span>Credential ID</span>
                  <span>{certification.credentialId}</span>
                </div>
              </div>
              

              {certification.credentialUrl && (
                <a
                  href={certification.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certification-link"
                  aria-label={`View ${certification.title} credential`}
                >
                  View Credential
                  <FiExternalLink aria-hidden="true" />
                </a>
              )}
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}