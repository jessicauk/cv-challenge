import React from "react";
import "./SkillList.css";

interface PropsSkill {
  key?: number | undefined;
  id?: number | undefined;
  label: string;
  percentage: number;
}

const Skill: React.FC<PropsSkill> = ({ label, percentage }) => {
  return (
    <div className="skill-list-item">
      <div className="name">{label}</div>
      <div className="bar-container">
        <div className="bar">
          <span
            className="bar-progress two-percent"
            style={{ width: `${percentage}%` }}
          ></span>
        </div>
      </div>
    </div>
  );
};

const SkillList: React.FC<any> = ({ skills }) => {
  return (
    <div className="skill-list">
      <div className="skill-list-container">
        <h1>Skills</h1>

        {Array.isArray(skills) &&
          skills &&
          skills.map((skill) => {
            return (
              <Skill
                key={skill.id}
                label={skill.label["es"]}
                percentage={skill.percentage}
              />
            );
          })}
      </div>
    </div>
  );
};

export default SkillList;
