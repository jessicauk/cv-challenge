import React from "react";
import { Translate } from "../Aside/Aside";
import {ArraySkills} from '../Skills/Skills';
import "./SkillList.css";

interface PropsSkill{
  key?: number | undefined;
  id?: number | undefined;
  label: string;
  percentage: number;
}

const Skill:React.FC<PropsSkill> = ({label, percentage}) =>  {
  return <div className="skill-list-item">
    <div className="name">{label}</div>
    <div className="bar-container">
      <div className="bar">
        <span className="bar-progress two-percent"></span>
      </div>
    </div>
  </div>
}

const SkillList:React.FC<any> = ({skills}) => {
  return (
    <div className="skill-list">
      <div className="skill-list-container">
        {
          Array.isArray(skills) &&
          skills &&
          skills.map((skill) => {
            return (
              <Skill 
                key={skill.id} 
                label={skill.label['es'] }
                percentage={skill.percentage}
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default SkillList;
