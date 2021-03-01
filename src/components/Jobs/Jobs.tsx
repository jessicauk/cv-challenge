import React, { useState, useEffect, useContext } from "react";
import { JOBS } from "../../utils/constants";
import { Translate } from "../Aside/Aside";
import { get } from "../../utils/Requester";
import LayoutContext from '../Layout/LayoutContext';
import Timeline from "../Timeline/Timeline";

interface ArrayJobs {
  id: number | undefined;
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
            />
          );
        })}
    </>
  );
}

export default Jobs;
