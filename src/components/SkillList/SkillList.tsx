import React, {useContext} from "react";
import "./SkillList.css";
import LayoutContext from '../Layout/LayoutContext';
import {ArraySkills} from '../Skills/Skills';

interface PropsSkill {
  key?: number | undefined;
  id: number;
  label: string;
  percentage: number;
};
interface ArrayList {
  skills: ArraySkills[];
};

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

const SkillList: React.FC<ArrayList> = ({ skills }) => {
  const ContextLayout = useContext(LayoutContext);
  const { idLanguage } = ContextLayout;
  
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
                label={skill.label[idLanguage]}
                percentage={skill.percentage}
                id={skill.id}
              />
            );
          })}
      </div>
    </div>
  );
};

export default SkillList;
