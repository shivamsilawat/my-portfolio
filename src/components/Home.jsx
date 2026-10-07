
import "./Home.css";

function Home() {
  return (
    <section id="home" className="home">

      <div className="home-container">

        <div className="home-content">

          <p className="home-greeting">
            Hello, I'm
          </p>

          <h1>
            Shivam Shilpkar
          </h1>

          <h2>
            MERN Stack Developer
          </h2>

          <p className="home-description">
            I build responsive and user-friendly web applications
            using React, Node.js, Express.js and MongoDB.
            I'm passionate about learning, solving problems,
            and building real-world projects.
          </p>

          <div className="home-buttons">

            <a href="#projects" className="primary-button">
              View Projects
            </a>

            <a
              href="/resume.pdf"
              className="secondary-button"
              target="_blank"
              rel="noreferrer"
            >
              Download Resume
            </a>

          </div>


<div className="home-socials">
  <a
    href="https://github.com/shivamsilawat"
    target="_blank"
    rel="noreferrer"
  >
    GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/shivamsilawat"
    target="_blank"
    rel="noreferrer"
  >
    LinkedIn
  </a>

  <a href="mailto:shivamsilawat17@gmail.com">
    Email
  </a>
</div>



        </div>

        <div className="home-image">

          <div className="code-card">
            <span>&lt;</span>
            <span className="code-text">Developer</span>
            <span>/&gt;</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Home;

