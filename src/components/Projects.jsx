
import { useState } from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "GitHub Clone",
      description:
        "A full-stack GitHub-inspired application where users can create repositories, manage projects, authenticate securely, and interact with repository data.",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "AWS",
      ],
      images: [
        "/projects/github-clone-images/signup.png",
        "/projects/github-clone-images/login.png",
        "/projects/github-clone-images/dashboard.png",
        "/projects/github-clone-images/profile.png",
        "/projects/github-clone-images/repository.png",
      ],
      github: "https://github.com/shivamsilawat/git-clone-frontend",
      backend: "https://github.com/shivamsilawat/git-clone-backend",
      live: "https://main.d7ewn985qprqt.amplifyapp.com/",
    },

    {
      title: "WanderLust",
      description:
        "An Airbnb-inspired accommodation platform where users can explore listings and create and manage their own properties.",
      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "EJS",
        "JavaScript",
      ],
      images: [],
      github: "#",
      live: "#",
    },

    {
      title: "Weather App",
      description:
        "A responsive weather application that fetches weather information from an external API and displays useful weather details.",
      technologies: [
        "React",
        "JavaScript",
        "API",
        "CSS",
      ],
      images: [],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">

        <div className="section-heading">
          <p>What I've Built</p>
          <h2>Projects</h2>
        </div>

        <div className="projects-grid">

          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}

        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % project.images.length);
  };

  const previousImage = () => {
    setCurrentImage(
      (currentImage - 1 + project.images.length) %
        project.images.length
    );
  };

  return (
    <div className="project-card">

      {/* Image Slider */}

      {project.images.length > 0 && (
        <div className="project-image">

          <img
            src={project.images[currentImage]}
            alt={`${project.title} screenshot`}
          />

          {project.images.length > 1 && (
            <>
              <button
                className="slider-button slider-prev"
                onClick={previousImage}
              >
                ❮
              </button>

              <button
                className="slider-button slider-next"
                onClick={nextImage}
              >
                ❯
              </button>

              <div className="slider-dots">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    className={
                      index === currentImage
                        ? "slider-dot active"
                        : "slider-dot"
                    }
                    onClick={() => setCurrentImage(index)}
                  />
                ))}
              </div>
            </>
          )}

        </div>
      )}

      <div className="project-content">

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-technologies">
          {project.technologies.map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}
        </div>

        <div className="project-links">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            Frontend
          </a>

          {project.backend && (
            <a
              href={project.backend}
              target="_blank"
              rel="noreferrer"
            >
              Backend
            </a>
          )}

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>

        </div>

      </div>
    </div>
  );
}

export default Projects;

