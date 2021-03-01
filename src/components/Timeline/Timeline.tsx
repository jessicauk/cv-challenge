import React, { useEffect, useState } from "react";
import { formatDate, monthPeriodDate, getIcon } from "../../utils/Functions";
import "./Timeline.css";

export interface Props {
  isVisibleCompanyText?: boolean;
  isVisibleDateText?: boolean;
  id?: number;
  description?: string | undefined;
  location?: string | undefined;
  dateStart: string | undefined;
  dateEnd: string | undefined;
  school?: string | undefined;
  key?: number | undefined;
  type?: string | undefined;
  company?: string | undefined;
  title?: string | undefined;
}

const Timeline: React.FC<Props> = ({
  isVisibleCompanyText,
  isVisibleDateText,
  description,
  id,
  location,
  dateStart,
  dateEnd,
  school,
  type,
  company,
  title,
}) => {
  const [iconElement, setIconElement] = useState<string>("");
  const [iconIsFirst, setIconIsFirst] = useState<boolean>(false);
  const period = `${formatDate(dateStart)}-${formatDate(dateEnd)}`;
  const months = `${monthPeriodDate(dateStart, dateEnd)} months`;

  useEffect(() => {
    const { icon, isFirst } = getIcon(type, id);
    setIconElement(icon);
    setIconIsFirst(isFirst);
  }, [type, id]);

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
              <h1>
                {school || title}
                <span>{location}</span>
              </h1>
              {isVisibleCompanyText === true && (
                <p className="company">{company}</p>
              )}
              <p className="text">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
