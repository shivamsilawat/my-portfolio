
import "./Skills.css";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs"]
    },
    {
      title: "Database",
      skills: ["MongoDB", "SQL"]
    },
    {
      title: "Programming",
      skills: ["Java", "C", "C++"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "AWS", "VS Code"]
    }
  ];

  return (
    <section id="skills" className="skills">

      <div className="skills-container">

        <div className="section-heading">
          <p>What I Work With</p>
          <h2>Skills</h2>
        </div>

        <div className="skills-grid">

          {skillCategories.map((category) => (
            <div className="skill-card" key={category.title}>

              <h3>{category.title}</h3>

              <div className="skill-list">

                {category.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;

