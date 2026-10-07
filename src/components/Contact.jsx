
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">

        <div className="section-heading">
          <p>Let's Connect</p>
          <h2>Contact Me</h2>
        </div>

        <div className="contact-content">

          <div className="contact-info">
            <h3>Let's work together</h3>

            <p>
              I'm currently looking for a software development
              opportunity where I can learn, contribute, and grow.
              If you have an opportunity or would like to connect,
              feel free to reach out.
            </p>
<div className="contact-details">

  <div className="contact-item">
    <span className="contact-label">Email</span>
    <a href="mailto:shivamsilawat17@gmail.com">
      shivamsilawat17@gmail.com
    </a>
  </div>

  <div className="contact-item">
    <span className="contact-label">Location</span>
    <p>India</p>
  </div>

  <div className="contact-item">
    <span className="contact-label">GitHub</span>
    <a
      href="https://github.com/shivamsilawat"
      target="_blank"
      rel="noreferrer"
    >
      github.com/shivamsilawat
    </a>
  </div>

  <div className="contact-item">
    <span className="contact-label">LinkedIn</span>
    <a
      href="https://www.linkedin.com/in/shivamsilawat"
      target="_blank"
      rel="noreferrer"
    >
      linkedin.com/in/shivamsilawat
    </a>
  </div>

</div>


          </div>

         <form
  className="contact-form"
  action="https://formspree.io/f/mzedeela"
  method="POST"
>

            <div className="form-group">
              <label htmlFor="name">Name</label>
            <input
  type="text"
  id="name"
  name="name"
  placeholder="Your name"
  required
/>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
            <input
  type="email"
  id="email"
  name="email"
  placeholder="Your email"
  required
/>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
  id="message"
  name="message"
  rows="6"
  placeholder="Write your message..."
  required
></textarea>
            </div>

           <button type="submit" className="contact-button">
  Send Message
</button>
          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;

