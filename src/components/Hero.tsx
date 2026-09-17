import TypingRole from "./TypingRole";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Hero() {
  return (
    <section id="hero" className="section hero-home">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-greeting reveal">
              <TypingRole />
            </div>

            <h1 className="hero-headline reveal">
              Designing <span className="soft">systems</span><br />
              that are <span className="u">useful</span>, <span className="u">intelligent</span>,<br />
               and <span className="u">built to last</span>.
            </h1>

            <p className="hero-sub reveal">
              Informatics Engineering graduate working across software engineering, AI,
              and data, with experience in applied research and production-oriented systems.
            </p>

            <div className="hero-socials reveal">
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
          </div>
        </div>
      </div>
    </section>
  )
}
