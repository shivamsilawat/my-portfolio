
import "./Resume.css";

function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="resume-container">

        <div className="section-heading">
          <p>My Background</p>
          <h2>Resume</h2>
        </div>

        <div className="resume-content">

          <div className="resume-column">
            <h3>Education</h3>

            <div className="resume-card">
              <span className="resume-year">2022 - Present</span>

              <h4>B.Tech - Computer Science Engineering</h4>

              <p className="resume-institute">
                Oriental College of Technology, Bhopal
              </p>

              <p>
                Currently pursuing my Bachelor's degree in Computer
                Science Engineering with a focus on software development,
                web technologies and programming fundamentals.
              </p>
            </div>
          </div>

          <div className="resume-column">
            <h3>Career Focus</h3>

            <div className="resume-card">
              <span className="resume-year">Current Goal</span>

              <h4>Software Developer</h4>

              <p className="resume-institute">
                Fresher / Entry Level
              </p>

              <p>
                Looking for an opportunity to work on real-world
                software projects, contribute to a development team,
                and grow as a professional software developer.
              </p>
            </div>
          </div>

        </div>

        <div className="resume-download">
          <p>
            Interested in my profile? You can download my complete
            resume below.
          </p>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="resume-button"
          >
            Download Resume
          </a>
        </div>

      </div>
    </section>
  );
}

export default Resume;

