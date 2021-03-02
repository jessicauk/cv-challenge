import React, { useState, useEffect, useContext } from "react";
import { JOBS } from "../../utils/constants";
import { Translate } from "../Aside/Aside";
import { get } from "../../utils/Requester";
import LayoutContext from '../Layout/LayoutContext';
import Timeline from "../Timeline/Timeline";
import {DataEducation} from "../DialogEdit/DialogEdit";


interface ArrayJobs {
  id: number;
  title: Translate<string>;
  company: string | undefined;
  dateStart: string | undefined;
  dateEnd: string | undefined;
};

function Jobs() {
  const [dataJobs, setDataJobs] = useState<ArrayJobs[]>([]);
  const ContextLayout = useContext(LayoutContext);
  const { idLanguage } = ContextLayout;

  const getDataJobs = async () => {
    const response = await get(JOBS);
    setDataJobs(response);
  };
  const handleEdit = (data:DataEducation) => {};
  const handleDelete = (id:number) => {
  };
  useEffect(() => {
    getDataJobs();
  }, []);
  return (
    <>
      {Array.isArray(dataJobs) &&
        dataJobs &&
        dataJobs.map((itemJob) => {
          return (
            <Timeline
              key={itemJob.id}
              id={itemJob.id}
              isVisibleCompanyText
              isVisibleDateText
              title={itemJob.title[idLanguage]}
              dateStart={itemJob.dateStart}
              dateEnd={itemJob.dateEnd}
              type="job"
              idLanguage={idLanguage}
              handleEdit={(data) => handleEdit(data)}
              handleDelete={handleDelete}
            />
          );
        })}
    </>
  );
}

export default Jobs;
