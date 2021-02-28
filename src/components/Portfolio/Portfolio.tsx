import React, { useState, useEffect } from "react";
import { BRIEFCASE } from "../../utils/constants";
import { Translate } from "../Aside/Aside";
import { get } from "../../utils/Requester";
import { getDateFull } from "../../utils/Functions";
import "./Portfolio.css";

interface ArrayBriefcase {
  id: number | undefined;
  image: string | undefined;
  title: Translate;
  description: Translate;
  date: string | undefined;
};

function Portfolio() {
  const [dataBriefcase, setDataBriefcase] = useState<ArrayBriefcase[]>([]);
  const getDataBriefcase = async () => {
    const response = await get(BRIEFCASE);
    setDataBriefcase(response);
  };
  useEffect(() => {
    getDataBriefcase();
  }, []);
  
  return (
    <div className="grid">
      {
        Array.isArray(dataBriefcase) &&
          dataBriefcase &&
          dataBriefcase.map((itemBriefcase) => {
            return (
              <div className="item" key={itemBriefcase.id}>
                <img src={itemBriefcase.image} alt=""/>
                <h3>{itemBriefcase.title['es']}</h3>
                <p className="date">{getDateFull(itemBriefcase.date)}</p>
                <p>{itemBriefcase.description['es']}</p>
              </div>
            )
          })
      }
    </div>
  );
}

export default Portfolio;
