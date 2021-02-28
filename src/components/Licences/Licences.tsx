import React from "react";
import {formatDate} from '../../utils/Functions';
import "./Licences.css";

interface Props {
  keyCert?: string | undefined;
  description: string | undefined;
  registred: string | undefined;
  title: string | undefined;
  id?: number | undefined;
  key?: number | undefined;
};

const Licences:React.FC<Props> = ({
  description,
  title,
  registred,
  id,
  keyCert
}) => {

  const registredFormat = formatDate(registred)
  return (
    <article className="licences">
      <div className="licences-container">
        <p className="title">{title}</p>
        <div className="item">
          <img src={process.env.PUBLIC_URL + "/assets/licence.png"} alt="" />
          <div className="content">
            <h3>{description}</h3>
            <p>{description}</p>
            <p>{`Aplicado en ${registredFormat}`}</p>
            <p>{`ID Credencial ${keyCert}`}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Licences;
