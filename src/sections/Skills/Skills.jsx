import "./Skills.css";

const skillGroups = [
  {
    number: "01",
    title: "Frontend",
    description:
      "Building responsive interfaces with strong usability, accessibility and visual consistency.",
    skills: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Responsive Design",
      "React Router",
      "Context API",
    ],
  },
  {
    number: "02",
    title: "Backend",
    description:
      "Creating secure APIs, authentication flows and reliable application logic.",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "API Integration",
      "Middleware",
    ],
  },
  {
    number: "03",
    title: "Database & Tools",
    description:
      "Managing application data, development workflows and production deployment.",
    skills: [
      "MongoDB",
      "MongoDB Atlas",
      "Git",
      "GitHub",
      "Postman",
      "Vercel",
      "Render",
      "VS Code",
    ],
  },
  {
    number: "04",
    title: "CS Fundamentals",
    description:
      "Strengthening the engineering foundation needed for product-based interviews.",
    skills: [
      "Data Structures",
      "Algorithms",
      "OOP",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
  },
];

function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <div className="skills__heading">
          <p className="section-label">02 / Capabilities</p>

          <h2>
            Skills I use to move from
            <span> idea to working product.</span>
          </h2>

          <p>
            My focus is not limited to individual technologies. I&apos;m
            learning how frontend, backend, database and engineering
            fundamentals work together in a complete product.
          </p>
        </div>

        <div className="skills__grid">
          {skillGroups.map((group) => (
            <article className="skills__card" key={group.title}>
              <div className="skills__card-header">
                <span>{group.number}</span>
                <p>{group.title}</p>
              </div>

              <h3>{group.title}</h3>

              <p className="skills__description">
                {group.description}
              </p>

              <div className="skills__tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;