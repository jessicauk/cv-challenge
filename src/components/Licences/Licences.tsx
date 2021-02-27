import React from "react";
import "./Licences.css";

function Licences() {
  return (
    <article className="licences">
      <div className="licences-container">
        <p className="title">Licencias y certificaciones</p>
        <div className="item">
          <img src={process.env.PUBLIC_URL + "/assets/licence.png"} alt="" />
          <div className="content">
            <h3>Scrum Foundation Professional Certificate (SFPC)</h3>
            <p>CertiProf</p>
            <p>Aplicado en Agosto 2019</p>
            <p>ID Credencial 12345678920</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Licences;
