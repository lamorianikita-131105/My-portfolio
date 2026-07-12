import "./Hero.css";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
  },
];

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero__container">
        <div className="hero__content">
          <p className="section-label">
            Software engineer · Product builder
          </p>

          <h1 className="hero__title">
            Building digital products with{" "}
            <span>engineering and thoughtful design.</span>
          </h1>

          <p className="hero__description">
            I&apos;m Nikita Lamoria, a Computer Science student
            focused on full-stack development, problem solving and
            building scalable, user-focused web applications.
          </p>

          <div className="hero__actions">
            <a
              className="hero__primary-button"
              href="#projects"
            >
              Explore my work
              <span aria-hidden="true">↗</span>
            </a>

            <a
              className="hero__secondary-button"
              href="/resume.pdf"
              download
            >
              Download résumé
            </a>
          </div>

          <div className="hero__socials">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
                <span aria-hidden="true"> ↗</span>
              </a>
            ))}

            <a href="mailto:your-email@gmail.com">
              Email
              <span aria-hidden="true"> ↗</span>
            </a>
          </div>
        </div>

        <div
          className="hero__visual"
          aria-label="Current professional focus"
        >
          <div className="hero__glow"></div>

          <article className="hero__focus-card">
            <p className="hero__card-label">
              Current focus
            </p>

            <h2>
              Building products with real-world impact.
            </h2>

            <ul className="hero__focus-list">
              <li>
                <span>01</span>
                Full-Stack Development
              </li>

              <li>
                <span>02</span>
                Data Structures & Algorithms
              </li>

              <li>
                <span>03</span>
                Product Engineering
              </li>

              <li>
                <span>04</span>
                Adobe Internship Preparation
              </li>
            </ul>
          </article>

          <div className="hero__availability">
            <span></span>
            Open to internships
          </div>

          <div className="hero__technology">
            MERN Stack
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;