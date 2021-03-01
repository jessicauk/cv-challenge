import React, { useState, useEffect } from "react";
import { get } from "../../utils/Requester";
import { SKILLS } from "../../utils/constants";
import SkillList from "../SkillList/SkillList";
import { Translate } from "../Aside/Aside";
import "./Skills.css";

export interface ArraySkills {
  id?: number | undefined;
  key?: number | undefined;
  label: Translate;
  percentage: number;
}

function Skills() {
  const [dataSkills, setDataSkills] = useState<ArraySkills[]>([]);
  const getDataSkills = async () => {
    const response = await get(SKILLS);
    setDataSkills(response);
  };
  useEffect(() => {
    getDataSkills();
  }, []);
  return (
    <div className="skills">
      <SkillList skills={dataSkills} />

      <div className="interestes">
        <h2>Intereses</h2>
        <div className="icons">
          <img src={process.env.PUBLIC_URL + "/assets/paint.png"} alt="" />
          <img src={process.env.PUBLIC_URL + "/assets/game.png"} alt="" />
          <img src={process.env.PUBLIC_URL + "/assets/listening.png"} alt="" />
          <img
            src={process.env.PUBLIC_URL + "/assets/football-ball.png"}
            alt=""
          />
          <img src={process.env.PUBLIC_URL + "/assets/movies.png"} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
