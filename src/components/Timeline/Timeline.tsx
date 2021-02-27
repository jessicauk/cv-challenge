import React from "react";
import "./Timeline.css";

function Timeline() {
  return (
    <div className="timeline-container">
      <div className="timeline">
        <div className="timeline-item">
          <div className="icon">
            <span className="badage">
                <img
                    src={process.env.PUBLIC_URL + "/assets/group.png"}
                    alt=""
                />
            </span>
            
          </div>
          <div className="content">
          <div className="date-content"><p className="date">2018-2020</p><p className="caption">8 meses</p></div>
            <div className="description">
              <h1>
                Instituto Mexicano de Tecnología e Información
                <span>Mérida, Yucatán</span>
              </h1>
              <p className="company">Empresa número 1</p>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit
                amet faucibus erat. Suspendisse ullamcorper tincidunt efficitur.
                Vestibulum eu accumsan odio, quis faucibus augue. Nulla facilisis
                nisi eu justo interdum vestibulum. Nullam consectetur tristique
                pellentesque. Nunc porttitor scelerisque nisi, eu ornare odio
                efficitur eu. Ut pretium sit amet ex vel mattis. Nam in congue
                dui. Pellentesque felis enim, volutpat sed vulputate vel,
                efficitur vitae lacus. Quisque tempor eget lorem eget mattis.
                Vivamus molestie, velit eget suscipit sagittis, sapien lacus
                varius dolor, sed mattis sapien odio lobortis massa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
