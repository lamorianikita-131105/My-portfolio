import { useState } from "react";
import glowmuseHome from "../../assets/images/projects/glowmuse/home.png";
import glowmuseShop from "../../assets/images/projects/glowmuse/shop.png";
import glowmuseProduct from "../../assets/images/projects/glowmuse/product.png";
import glowmuseCart from "../../assets/images/projects/glowmuse/cart.png";

import {
  featuredProject,
  otherProjects,
} from "../../data/projectsData";

import "./Projects.css";

function ProjectLink({ href, children }) {
  const isAvailable = href && href !== "#";

  if (!isAvailable) {
    return (
      <span className="project-link project-link--disabled">
        {children}
        <small> Add link</small>
      </span>
    );
  }

  return (
    <a
      className="project-link"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <span aria-hidden="true"> ↗</span>
    </a>
  );
}

function Projects() {
  const glowmuseScreenshots = [
    {
      label: "Home",
      image: glowmuseHome,
    },
    {
      label: "Shop",
      image: glowmuseShop,
    },
    {
      label: "Product",
      image: glowmuseProduct,
    },
    {
      label: "Cart",
      image: glowmuseCart,
    },
  ];

  const [activeScreenshot, setActiveScreenshot] = useState(
    glowmuseScreenshots[0]
  );

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="projects__heading">
          <p className="section-label">
            03 / Selected work
          </p>

          <h2>
            Products built with purpose,
            <span> ownership and product thinking.</span>
          </h2>

          <p>
            These projects represent my journey from interface
            development to building complete products with frontend,
            backend, database and deployment workflows.
          </p>
        </div>

        <article className="featured-project">
          <div className="featured-project__visual">
            <div className="featured-project__browser">
              <div className="featured-project__browser-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <p>glowmuse-beauty.vercel.app</p>
            </div>

            <div className="featured-project__gallery">
              <div className="featured-project__screen">
                <img
                  src={activeScreenshot.image}
                  alt={`GlowMuse ${activeScreenshot.label} page screenshot`}
                  />
              </div>

              <div className="featured-project__thumbnails">
                {glowmuseScreenshots.map((screenshot) => (
                  <button 
                    type="button"
                    key={screenshot.label}
                    className={activeScreenshot.label === screenshot.label ?
                      "featured-product__thumbnail featured-project__thumbnail--active" :

                      "featured-project__thumbnail"
                    }
                    onClick={() => setActiveScreenshot(screenshot)}
                    aria-label={`Show GlowMuse ${screenshot.label} screenshot`}
                    >
                    <img  
                      src={screenshot.image}
                      alt=""
                      aria-hidden="true"
                    />
                    <span>{screenshot.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="featured-project__content">
            <div className="project-meta">
              <span>{featuredProject.number}</span>
              <p>{featuredProject.eyebrow}</p>
            </div>

            <h3>{featuredProject.title}</h3>

            <p className="featured-project__summary">
              {featuredProject.summary}
            </p>

            <div className="featured-project__case-study">
              <div>
                <span>Problem</span>
                <p>{featuredProject.problem}</p>
              </div>

              <div>
                <span>Solution</span>
                <p>{featuredProject.solution}</p>
              </div>
            </div>

            <div className="featured-project__features">
              {featuredProject.features.map((feature) => (
                <span key={feature}>
                  <strong>✓</strong>
                  {feature}
                </span>
              ))}
            </div>

            <div className="project-stack">
              {featuredProject.stack.map((technology) => (
                <span key={technology}>
                  {technology}
                </span>
              ))}
            </div>

            <div className="project-actions">
              <ProjectLink href={featuredProject.liveUrl}>
                View live project
              </ProjectLink>

              <ProjectLink href={featuredProject.githubUrl}>
                View source code
              </ProjectLink>

              <ProjectLink href={featuredProject.githubBackendUrl}>
                Backend API
              </ProjectLink>
            </div>
          </div>
        </article>

        <div className="projects__subheading">
          <p>Additional projects</p>

          <span>
            Selected experiments and full-stack applications
          </span>
        </div>

        <div className="projects__grid">
          {otherProjects.map((project) => (
            <article
              className="project-card"
              key={project.title}
            >
              <div className="project-meta">
                <span>{project.number}</span>
                <p>{project.category}</p>
              </div>

              <h3>{project.title}</h3>

              <p className="project-card__description">
                {project.description}
              </p>

              <ul className="project-card__highlights">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>
                    <span>—</span>
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="project-stack">
                {project.stack.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              <div className="project-actions">
                <ProjectLink href={project.liveUrl}>
                  Live project
                </ProjectLink>

                <ProjectLink href={project.githubUrl}>
                  Source code
                </ProjectLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;