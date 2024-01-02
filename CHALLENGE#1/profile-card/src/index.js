import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList className="skill-list" />
      </div>
    </div>
  );
}
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

const SkillList = () => (
  <div className="skill-list">
    <Skill skill="React" emoji="💪" color="blue" />
    <Skill skill="HTML+CSS" emoji="💪" color="orange" />
    <Skill skill="JavaScript" emoji="💪" color="yellow" />
    <Skill skill="Svelte" emoji="👶" color="orangered" />
  </div>
);
const Skill=(props)=> {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
