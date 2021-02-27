import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="grid">
      <div className="item">
        <img src={process.env.PUBLIC_URL + "/assets/image1.png"} alt=""/>
        <h3>Nombre_de_Empresa_1</h3>
        <p className="date">2018-2019</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada, ipsum quis maximus facilisis, est ante rutrum magna, vel faucibus orci nunc sit amet enim. Cras sit amet elit tempus, dignissim odio non, posuere tellus. </p>
      </div>
      <div className="item">
        <img src={process.env.PUBLIC_URL + "/assets/image1.png"} alt=""/>
        <h3>Nombre_de_Empresa_1</h3>
        <p className="date">2018-2019</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada, ipsum quis maximus facilisis, est ante rutrum magna, vel faucibus orci nunc sit amet enim. Cras sit amet elit tempus, dignissim odio non, posuere tellus. </p>
      </div>
      <div className="item">
        <img src={process.env.PUBLIC_URL + "/assets/image1.png"} alt=""/>
        <h3>Nombre_de_Empresa_1</h3>
        <p className="date">2018-2019</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada, ipsum quis maximus facilisis, est ante rutrum magna, vel faucibus orci nunc sit amet enim. Cras sit amet elit tempus, dignissim odio non, posuere tellus. </p>
      </div>
      <div className="item">
        <img src={process.env.PUBLIC_URL + "/assets/image1.png"} alt=""/>
        <h3>Nombre_de_Empresa_1</h3>
        <p className="date">2018-2019</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada, ipsum quis maximus facilisis, est ante rutrum magna, vel faucibus orci nunc sit amet enim. Cras sit amet elit tempus, dignissim odio non, posuere tellus. </p>
      </div>
    </div>
  );
}

export default Portfolio;
