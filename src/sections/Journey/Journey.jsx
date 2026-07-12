import "./Journey.css";

const journeyItems = [
  {
    year: "2025",
    title: "Started building web applications",
    description:
      "Strengthened HTML, CSS and JavaScript fundamentals through responsive interfaces and practical frontend projects.",
  },
  {
    year: "2026",
    title: "Moved into full-stack development",
    description:
      "Started building applications with React, Node.js, Express.js, MongoDB and REST APIs.",
  },
  {
    year: "Now",
    title: "Improving as a product engineer",
    description:
      "Focusing on DSA, computer science fundamentals, scalable project architecture and product communication.",
  },
  {
    year: "Next",
    title: "Software engineering internship",
    description:
      "Working toward contributing to a product-based engineering team and building meaningful user-facing products.",
  },
];

function Journey() {
  return (
    <section className="journey section" id="journey">
      <div className="container">
        <div className="journey__heading">
          <p className="section-label">05 / Journey</p>

          <h2>
            Learning continuously and
            <span> building with intention.</span>
          </h2>

          <p>
            My journey is focused on steady progress—strengthening fundamentals,
            building real products and learning from every challenge.
          </p>
        </div>

        <div className="journey__timeline">
          {journeyItems.map((item, index) => (
            <article className="journey__item" key={item.title}>
              <div className="journey__marker">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>

              <p className="journey__year">{item.year}</p>

              <div className="journey__content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Journey;