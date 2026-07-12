import "./UpcomingProject.css";

const portalModules = [
  "Student dashboard",
  "Faculty dashboard",
  "Admin management",
  "Attendance system",
  "Notice management",
  "Results and reports",
  "Placement module",
  "AI campus assistant",
];

function UpcomingProject() {
  return (
    <section className="upcoming-project section">
      <div className="container">
        <article className="upcoming-project__card">
          <div className="upcoming-project__content">
            <div className="upcoming-project__status">
              <span></span>
              Currently planning and building
            </div>

            <p className="section-label">
              05 / Next product
            </p>

            <h2>
              BKBIET Campus
              <span> Management Portal.</span>
            </h2>

            <p className="upcoming-project__description">
              A centralized full-stack campus platform designed to
              improve communication and workflows between students,
              faculty members and administrators.
            </p>

            <div className="upcoming-project__objective">
              <span>Product objective</span>

              <p>
                Replace disconnected college processes with one
                accessible ecosystem for attendance, notices,
                academic records, placements and student services.
              </p>
            </div>

            <div className="upcoming-project__modules">
              {portalModules.map((module) => (
                <span key={module}>
                  {module}
                </span>
              ))}
            </div>

            <div className="upcoming-project__stack">
              <p>Planned stack</p>

              <div>
                <span>React</span>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>MongoDB</span>
                <span>JWT</span>
              </div>
            </div>
          </div>

          <div
            className="upcoming-project__visual"
            aria-hidden="true"
          >
            <div className="upcoming-project__number">
              05
            </div>

            <div className="upcoming-project__dashboard">
              <div className="upcoming-project__sidebar">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="upcoming-project__main">
                <div className="upcoming-project__topbar"></div>

                <div className="upcoming-project__stats">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="upcoming-project__chart"></div>

                <div className="upcoming-project__rows">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default UpcomingProject;