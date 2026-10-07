
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h3>Shivam<span>.</span></h3>
          <p>
            MERN Stack Developer building modern and
            user-friendly web applications.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
<div className="footer-social">
  <h4>Connect</h4>

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

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Shivam Shilpkar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

