import React, { useState, useEffect } from "react";
import { JOBS } from "../../utils/constants";
import { Translate } from "../Aside/Aside";
import { get } from "../../utils/Requester";
import Timeline from "../Timeline/Timeline";

interface ArrayJobs {
  id: number | undefined;
  title: Translate;
  company: string | undefined;
  dateStart: string | undefined;
  dateEnd: string | undefined;
};

function Jobs() {
  const [dataJobs, setDataJobs] = useState<ArrayJobs[]>([]);
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
              title={itemJob.title['es']}
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
