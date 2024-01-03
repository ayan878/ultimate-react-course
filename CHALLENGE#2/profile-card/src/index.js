import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

const App = () => (
  <div className="card">
    <Avatar />
    <div className="data">
      <Intro />
      <SkillList />
    </div>
  </div>
);

const Avatar = () => <img className="avatar" src="ayan.jpg" alt="Ayan Raza" />;

const Intro = () => (
  <div>
    <h1>Ayan Raza</h1>
    <p>
      Full-stack web developer and teacher at Udemy. When not coding or
      preparing a course, I like to play board games, to cook (and eat), or to
      just enjoy the Portuguese sun at the beach.
    </p>
  </div>
);

const SkillList = () =>{ 
  return(
  <div className="skill-list">
    {skills.map((skill) => (
      <Skill skill={skill.skill} color={skill.color} level={skill.level} />
    ))}
  </div>
);};

const Skill = (props) => (
  <div className="skill" style={{ backgroundColor: props.color }}>
    <span>{props.skill}</span>
    <span>
      {props.level === "beginner"
        ? "👶"
        : props.level === "intermediate"
        ? "💪"
        : "👑"}
    </span>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
