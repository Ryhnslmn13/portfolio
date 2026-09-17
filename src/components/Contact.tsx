import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

export default function Contact() {
  return (
    <section id="contact" className="section contact-reyhan">
      <div className="container">
        <span className="eyebrow reveal">Contact</span>
        <h2 className="contact-heading reveal">Let's build something useful.</h2>
        <p className="contact-avail reveal">
          I'm interested in software engineering, AI engineering, data engineering, and collaborative
          technical projects where I can keep learning while shipping meaningful work.
        </p>

        <div className="contact-actions reveal">
          <a
            href="https://www.linkedin.com/in/reyhansalman/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            aria-label="LinkedIn"
            data-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://github.com/Ryhnslmn13"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            aria-label="GitHub"
            data-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="mailto:reyhansalman4869@gmail.com"
            className="social-btn"
            aria-label="Email"
            data-label="Email"
          >
            <HiOutlineMail />
          </a>
        </div>

        <div className="footer-bottom reveal">
          <span className="footer-copy">© 2026 Reyhan Salman</span>
          <a href="#hero" className="back-to-top">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="19" x2="12" y2="5" />
              <polyline points="5 12 12 5 19 12" />
            </svg>
            Back to top
          </a>
        </div>
      </div>
    </section>
  )
}
