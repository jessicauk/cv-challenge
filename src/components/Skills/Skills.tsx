import React from "react";
import SkillList from "../SkillList/SkillList";
import "./Skills.css";

function Skills() {
  return (
    <>
      <SkillList />
      <SkillList />
      <div className="interestes">
        <h2>Intereses</h2>
        <div className="icons">
          <img src={process.env.PUBLIC_URL + "/assets/paint.png"} alt="" />
          <img src={process.env.PUBLIC_URL + "/assets/game.png"} alt="" />
          <img src={process.env.PUBLIC_URL + "/assets/listening.png"} alt="" />
          <img src={process.env.PUBLIC_URL + "/assets/football-ball.png"} alt="" />
          <img src={process.env.PUBLIC_URL + "/assets/movies.png"} alt="" />
        </div>
      </div>
    </>
  );
}

export default Skills;
