import React from "react";
import "./SkillList.css";

function Skill() {
  return <div className="skill-list-item">
    <div className="name">Ingles</div>
    <div className="bar-container">
      <div className="bar">
        <span className="bar-progress two-percent"></span>
      </div>
    </div>
  </div>
}

function SkillList() {
  return (
    <div className="skill-list">
      <h1>Idiomas</h1>
      <div className="skill-list-container">
        <Skill />
        <Skill />
        <Skill />
      </div>
    </div>
  );
}

export default SkillList;
