import React, { useEffect, useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import Popover from "@material-ui/core/Popover";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';

import { formatDate, monthPeriodDate, getIcon } from "../../utils/Functions";
import DialogEdit, { DataEducation } from "../DialogEdit/DialogEdit";
import "./Timeline.css";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export interface Props {
  isVisibleCompanyText?: boolean;
  isVisibleDateText?: boolean;
  isVisibleEdit?: boolean;
  isVisibleDelete?: boolean;
  id: number;
  description?: string | undefined;
  location?: string | undefined;
  dateStart: string | undefined;
  dateEnd: string | undefined;
  school?: string | undefined;
  key?: number | undefined;
  type: string;
  company?: string | undefined;
  title?: string | undefined;
  idLanguage: string;
  handleEdit: (data: DataEducation) => void;
  handleDelete: (id: number) => void;
  setSelected: (item: any) => void;
  getItemById: (id: number) => void;
};

const Timeline: React.FC<Props> = ({
  isVisibleCompanyText,
  isVisibleDateText,
  isVisibleEdit,
  isVisibleDelete,
  description,
  id,
  location,
  dateStart,
  dateEnd,
  school,
  type,
  company,
  title,
  handleEdit,
  handleDelete,
  idLanguage,
  setSelected,
  getItemById,
}) => {
  const [iconElement, setIconElement] = useState<string>("");
  const [iconIsFirst, setIconIsFirst] = useState<boolean>(false);
  const [isOpenEdit, setIsOpenEdit] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpenPopover, setIsOpenPopover] = useState<boolean>(false);

  const classes = useStyles();

  const period = `${formatDate(dateStart)}-${formatDate(dateEnd)}`;
  const months = `${monthPeriodDate(dateStart, dateEnd)} months`;

  useEffect(() => {
    const { icon, isFirst } = getIcon(type, id);
    setIconElement(icon);
    setIconIsFirst(isFirst);
  }, [type, id]);

  //  React.MouseEventHandler | React.MouseEvent
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
    setIsOpenPopover(!isOpenPopover)
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="timeline-container">
      <div className={`${iconIsFirst ? "" : "remove-padding"} timeline`}>
        <div className="timeline-item">
          <div className="icon">
            <span className={`${iconIsFirst ? "" : "remove"} badage`}>
              <img src={iconElement} alt="" />
            </span>
          </div>
          <div className="content">
            <div className="date-content">
              <p className="date">{period}</p>
              {isVisibleDateText === true && (
                <p className="caption">{months}</p>
              )}
            </div>

            <div className="description">
              <div className="title">
                <h1>
                  {school || title}
                  <span>{location}</span>
                </h1>
                <div className="buttons-actions">
                  {isVisibleDelete === true && (
                    <IconButton
                      aria-label="Delete"
                      aria-describedby={`${id}-delete${type}`}
                      onClick={handleClick}
                    >
                      <DeleteIcon />
                      <Popover
                        id={`${id}-delete${type}`}
                        open={isOpenPopover}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "center",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "center",
                        }}
                      >
                        <div className="container-popover">
                          <h1>Are you sure you want to delete!</h1>
                          <Button
                            variant="contained"
                            color="secondary"
                            className={`${classes.button} red`}
                            startIcon={<DeleteIcon />}
                            onClick={() => handleDelete(id)}
                          >
                            Delete
                          </Button>
                        </div>
                      </Popover>
                    </IconButton>
                  )}
                  {isVisibleEdit === true && (
                    <IconButton
                      aria-label="Edit"
                      onClick={async () => {
                        console.log("qwqwd ID", id);
                        await getItemById(id);
                        setSelected(id);
                        setIsOpenEdit(!isOpenEdit)
                      }}
                    >
                      <CreateIcon />
                    </IconButton>
                  )}
                </div>
              </div>
              {isVisibleCompanyText === true && (
                <p className="company">{company}</p>
              )}
              <p className="text">{description}</p>
            </div>
          </div>
        </div>
      </div>
      <DialogEdit
        open={isOpenEdit}
        handleClose={() => setIsOpenEdit(false)}
        handleAccept={(data) => handleEdit(data)}
        location={location}
        school={school}
        title={title}
        company={company}
        description={description}
        id={id}
        type={type}
        idLanguage={idLanguage}
      />
    </div>
  );
};

export default Timeline;
