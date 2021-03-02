import React, { useState, useEffect, useContext } from "react";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { EMPTY_ID, JOBS } from "../../utils/constants";
import { Translate } from "../Aside/Aside";
import { get, put, post, deletion } from "../../utils/Requester";
import LayoutContext from '../Layout/LayoutContext';
import Timeline from "../Timeline/Timeline";
import DialogEdit, {DataJob} from "../DialogEdit/DialogEdit";


interface ArrayJobs {
  id: number;
  title: Translate<string>;
  company: string | undefined;
  dateStart: string | undefined;
  dateEnd: string | undefined;
};

function Jobs() {
  const [dataJobs, setDataJobs] = useState<ArrayJobs[]>([]);
  const [isOpenAddJob, setIsOpenAddJob] = useState<boolean>(false);
  const [selected, setSelected] = useState<number>(EMPTY_ID);
  const [selectedData, setSelectedData] = useState<any>({});
  const ContextLayout = useContext(LayoutContext);
  const { idLanguage } = ContextLayout;

  const getDataJobs = async () => {
    const response = await get(JOBS);
    setDataJobs(response);
  };
  const getDataJobsById = async (id: number) => {
    const response = await get(`${JOBS}/${id}`);
    setSelectedData(response);
  };
  const updateDataJob = async (data:DataJob) => {
    const dataJSON = {...selectedData, ...data,title:{...selectedData.title, ...data.title}}
    await put(JOBS, dataJSON);
    getDataJobs();
  };
  const addDataJob = async (data:DataJob) => {
    const dataJSON = {...data};
    await post(JOBS, dataJSON);
    getDataJobs();
  };
  const deleteDataJob = async (id:number) => {
    const dataJSON = {id};
    await deletion(JOBS, dataJSON);
    getDataJobs();
  };

  const handleEdit = (data:DataJob) => {
    updateDataJob(data);
  };
  const handleDelete = (id:number) => {
    deleteDataJob(id);
  };
  const handleAdd = (data:DataJob) => {
    addDataJob({
      title: data.title,
      company: data.company,
      id: EMPTY_ID,
    });
  };
  const handleOpenAddJob = () => {
    setIsOpenAddJob(!isOpenAddJob);
  };
  useEffect(() => {
    getDataJobs();
  }, []);
  return (
    <>
      <div className="wrapp-button">
        <AddCircleIcon onClick={handleOpenAddJob} color="primary" className="btn-add" style={{ fontSize: 40 }}/>
      </div>
      <DialogEdit
        open={isOpenAddJob}
        handleClose={() => setIsOpenAddJob(false)}
        handleAccept={(data) => handleAdd(data)}
        location=""
        school=""
        title=""
        company=""
        description=""
        type="job"
        idLanguage={idLanguage}
        id={selected}
      />
      {Array.isArray(dataJobs) &&
        dataJobs &&
        dataJobs.map((itemJob) => {
          return (
            <Timeline
              key={itemJob.id}
              id={itemJob.id}
              isVisibleCompanyText
              isVisibleDateText
              title={itemJob.title ? itemJob.title[idLanguage] : ''}
              dateStart={itemJob.dateStart}
              dateEnd={itemJob.dateEnd}
              type="job"
              idLanguage={idLanguage}
              handleEdit={(data) => handleEdit(data)}
              handleDelete={handleDelete}
              isVisibleDelete
              isVisibleEdit
              setSelected={setSelected}
              getItemById={getDataJobsById}
            />
          );
        })}
    </>
  );
}

export default Jobs;
