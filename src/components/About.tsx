export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-header reveal">
          <h2>About</h2>

          <a href="#experience" className="about-link">
            View Experience →
          </a>
        </div>

        <div className="about-layout">
          <div className="about-content reveal">
            <p>
              I am Reyhan Salman, an Informatics Engineering graduate who enjoys
              building things across software, artificial intelligence, and data.
              My work has taken me through different areas of engineering, from
              using machine learning to build smart recommendation systems for
              healthier lifestyles to combining computer vision and natural
              language processing for sign language translation.
    
              What I enjoy most is seeing how everything comes together.
              From understanding the problem, designing the solution, connecting
              the pieces, and turning an idea into something that actually works.
            </p>

            <div className="about-stats reveal">
              <div>
                <strong>2+ Years</strong>
                <span>Developer Experience</span>
              </div>

              <div>
                <strong>3+ Projects</strong>
                <span>Research & Competitions</span>
              </div>

              <div>
                <strong>1 Month</strong>
                <span>International Internship</span>
              </div>
            </div>
          </div>

          <div className="about-image reveal">
            <img
              src="/images/profile.png"
              alt="Profile Picture"
            />
          </div>
        </div>
      </div>
    </section>
  );
}