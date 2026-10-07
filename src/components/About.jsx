
import "./About.css";

function About() {
  return (
    <section id="about" className="about">

      <div className="about-container">

        <div className="section-heading">
          <p>Get To Know Me</p>
          <h2>About Me</h2>
        </div>

        <div className="about-content">

          <div className="about-text">

            <p>
              I'm a Computer Science developer passionate about
              building modern and user-friendly web applications.
              I enjoy turning ideas into practical software and
              continuously improving my development skills.
            </p>

            <p>
              I work mainly with the MERN stack and have experience
              building applications using React, Node.js, Express.js,
              MongoDB and REST APIs.
            </p>

            <p>
              I'm currently looking for an opportunity where I can
              contribute to real-world projects, learn from experienced
              developers, and grow as a software developer.
            </p>

          </div>

          <div className="about-info">

            <div className="info-card">
              <span className="info-title">Education</span>
              <strong>B.Tech Computer Science</strong>
              <p>Oriental College of Technology</p>
            </div>

            <div className="info-card">
              <span className="info-title">Focus</span>
              <strong>Full Stack Development</strong>
              <p>MERN Stack & REST APIs</p>
            </div>

            <div className="info-card">
              <span className="info-title">Looking For</span>
              <strong>Software Developer Role</strong>
              <p>Fresher / Entry Level</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;

