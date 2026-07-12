import "./About.css";

const profileDetails = [
  {
    label: "Education",
    value: "B.Tech in Computer Science",
  },
  {
    label: "Primary focus",
    value: "Full-Stack Engineering",
  },
  {
    label: "Based in",
    value: "India",
  },
  {
    label: "Career goal",
    value: "Software Engineering Internship",
  },
];

function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about__heading">
          <p className="section-label">01 / About</p>

          <h2>
            More than a developer—
            <span> I think like a product builder.</span>
          </h2>
        </div>

        <div className="about__grid">
          <div className="about__content">
            <p className="about__lead">
              I enjoy converting ideas into polished products that are useful,
              accessible and visually meaningful.
            </p>

            <p>
              My development journey combines frontend engineering, backend
              development, core computer science fundamentals and consistent
              problem-solving practice.
            </p>

            <p>
              I focus on understanding the complete product journey—from user
              needs and interface decisions to APIs, databases, deployment and
              real-world usability.
            </p>

            <p>
              I&apos;m currently preparing for product-based software
              engineering internships while building projects that demonstrate
              ownership, curiosity and continuous improvement.
            </p>
          </div>

          <div className="about__details">
            {profileDetails.map((detail) => (
              <article className="about__detail-card" key={detail.label}>
                <span>{detail.label}</span>
                <h3>{detail.value}</h3>
              </article>
            ))}
          </div>
        </div>

        <div className="about__principles">
          <article>
            <span>01</span>
            <h3>Build with purpose</h3>
            <p>
              Every feature should solve a genuine problem or improve the user
              experience.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Think beyond UI</h3>
            <p>
              Strong products need clean logic, scalable architecture and
              thoughtful interaction design.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Improve continuously</h3>
            <p>
              I review, test and refine my work instead of considering the first
              version final.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default About;