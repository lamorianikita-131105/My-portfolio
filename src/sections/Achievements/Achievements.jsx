import "./Achievements.css";

const achievements = [
  {
    number: "01",
    title: "Full-stack product development",
    description:
      "Built applications that connect responsive interfaces, REST APIs, authentication, databases and deployment workflows.",
  },
  {
    number: "02",
    title: "Production deployment experience",
    description:
      "Worked with MongoDB Atlas, Vercel, Render and GitHub-based deployment workflows.",
  },
  {
    number: "03",
    title: "Consistent problem-solving practice",
    description:
      "Actively strengthening data structures, algorithms and core computer science fundamentals for technical interviews.",
  },
  {
    number: "04",
    title: "Product-focused project ownership",
    description:
      "Designed complete user journeys instead of limiting projects to isolated screens or basic functionality.",
  },
];

function Achievements() {
  return (
    <section className="achievements section" id="achievements">
      <div className="container">
        <div className="achievements__heading">
          <p className="section-label">06 / What I bring</p>

          <h2>
            The value behind
            <span> the technologies I use.</span>
          </h2>
        </div>

        <div className="achievements__grid">
          {achievements.map((achievement) => (
            <article
              className="achievements__card"
              key={achievement.title}
            >
              <span>{achievement.number}</span>

              <h3>{achievement.title}</h3>

              <p>{achievement.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;