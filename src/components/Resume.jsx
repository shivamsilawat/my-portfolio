
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
              <span className="resume-year">2022 - 2026</span>

              <h4>B.Tech - Computer Science Engineering</h4>

              <p className="resume-institute">
                Oriental College of Technology, Bhopal
              </p>

              <p>
               I am a Computer Science Engineering graduate with a strong interest in software development, web technologies, and programming. I have hands-on experience building web applications using modern technologies and am looking for an opportunity to apply my skills, learn from experienced teams, and grow as a software developer.

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
               Looking for an opportunity to work on real-world software projects, contribute to a development team, and grow as a professional MERN Stack Developer. I am particularly interested in building scalable and user-friendly web applications using React.js, Node.js, Express.js, and MongoDB.

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

