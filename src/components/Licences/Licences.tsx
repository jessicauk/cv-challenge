import React from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import { formatDate } from "../../utils/Functions";
import "./Licences.css";

interface Props {
  keyCert?: string | undefined;
  description: string | undefined;
  registred: string | undefined;
  title: string | undefined;
  id: number;
  key?: number | undefined;
  handleClick: () => void;
  isVisibleDelete: boolean | undefined;
  isVisibleEdit: boolean | undefined;
}

const Licences: React.FC<Props> = ({
  description,
  title,
  registred,
  id,
  keyCert,
  handleClick,
  isVisibleDelete,
  isVisibleEdit,
}) => {
  const registredFormat = formatDate(registred);
  return (
    <article className="licences">
      <div className="licences-container">
        <div className="title">
          <p className="p">{title}</p>
          <div className="buttons-actions">
            {isVisibleDelete === true && (
              <IconButton
                aria-label="Delete"
                aria-describedby={`${id}-delete-certification`}
                onClick={handleClick}
              >
                <DeleteIcon />
              </IconButton>
            )}
            {isVisibleEdit === true && (
              <IconButton
                aria-label="Edit"
                onClick={async () => {
                  console.log("Delete", id);
                }}
              >
                <CreateIcon />
              </IconButton>
            )}
          </div>
        </div>
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
};

export default Licences;
