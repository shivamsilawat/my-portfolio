
import "./ProblemSolving.css";

function ProblemSolving() {
  const platforms = [
    {
      name: "LeetCode",
      description:
        "Practice data structures, algorithms, and coding interview problems.",
      link: "https://leetcode.com/u/shivamsilawat_/",
    },
    {
      name: "HackerRank",
      description:
        "Practice programming, problem solving, and technical skills.",
      link: "https://www.hackerrank.com/profile/shivamsilawat17",
    },
  ];

  return (
    <section id="problem-solving" className="problem-solving">
      <div className="problem-solving-container">

        <div className="section-heading">
          <p>Practice & Improve</p>
          <h2>Problem Solving</h2>
        </div>

        <div className="platforms-grid">
          {platforms.map((platform) => (
            <div className="platform-card" key={platform.name}>

              <h3>{platform.name}</h3>

              <p>{platform.description}</p>

              <a
                href={platform.link}
                target="_blank"
                rel="noreferrer"
                className="platform-button"
              >
                View Profile
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ProblemSolving;

