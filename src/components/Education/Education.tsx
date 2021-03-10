import React, { useEffect, useState, useContext } from "react";
import { CERTIFICATIONS, EDUCATION, EMPTY_ID } from "../../utils/constants";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import LayoutContext from '../Layout/LayoutContext';
import { Translate } from "../Aside/Aside";
import { get, put, post, deletion } from "../../utils/Requester";
import Timeline from "../Timeline/Timeline";
import Licences from "../Licences/Licences";
import DialogEdit, { DataEducation } from "../DialogEdit/DialogEdit";


interface ArrayEducation {
  id: number;
  school: string | undefined;
  description: Translate<string>;
  location: string | undefined;
  dateStart: string | undefined;
  dateEnd: string | undefined;
};

interface ArrayCertification {
  id: number;
  key: string | undefined;
  title: Translate<string>;
  description: Translate<string>;
  registred: string | undefined;
};

function Education() {
  const [dataEducation, setDataEducation] = useState<ArrayEducation[]>([]);
  const [dataCertification, setDataCertification] = useState<ArrayCertification[]>([]);
  const [isOpenAddEducation, setIsOpenAddEducation] = useState<boolean>(false);
  const [selected, setSelected] = useState<number>(EMPTY_ID);
  const [selectedData, setSelectedData] = useState<any>();

  const ContextLayout = useContext(LayoutContext);
  const { idLanguage } = ContextLayout;

  const getDataEducation = async () => {
    const response = await get(EDUCATION);
    setDataEducation(response);
  };
  const getDataEducationById = async (id: number) => {
    const response = await get(`${EDUCATION}/${id}`);    setSelectedData(response);
  };
  const getDataCertification = async () => {
    const response = await get(CERTIFICATIONS);
    setDataCertification(response);
  };
  const updateDataEducation = async (data:DataEducation) => {
    const dataJSON = {...selectedData, ...data,description:{...selectedData.description, ...data.description}}
    await put(EDUCATION, dataJSON);
    getDataEducation();
  };
  const addDataEducation = async (data:DataEducation) => {
    let dataJSON = {
        school: data.school,
        description: data.description,
        location: data.location,
        dateStart: new Date().toDateString(),
        dateEnd: new Date().toDateString(),
    }
    await post(EDUCATION, dataJSON);
    getDataEducation();
  };
  const deleteDataEducation = async (id:number) => {
    const dataJSON = {id};
    await deletion(EDUCATION, dataJSON);
    getDataEducation();
  };
  useEffect(() => {
    getDataEducation();
    getDataCertification()
  }, []);

  const handleEdit = async (data:DataEducation) => {
    updateDataEducation(data);
  };
  const handleDelete = (id:number) => {
    deleteDataEducation(id);
  };
  const handleAdd = async (data:DataEducation) => {
    await addDataEducation({
      school: data.school,
      description: data.description,
      location: data.location,
      id: EMPTY_ID,
    });
  };
  const handleOpenAddEducation = () => {
    setIsOpenAddEducation(!isOpenAddEducation);
  };

  return (
    <>
      <div className="wrapp-button">
        <AddCircleIcon onClick={handleOpenAddEducation} color="primary" className="btn-add" style={{ fontSize: 40 }}/>
      </div>
      <DialogEdit
        open={isOpenAddEducation}
        handleClose={() => setIsOpenAddEducation(false)}
        handleAccept={(data) => handleAdd(data)}
        location=""
        school=""
        title=""
        company=""
        description=""
        type="school"
        idLanguage={idLanguage}
        id={selected}
      />
      {Array.isArray(dataEducation) &&
        dataEducation &&
        dataEducation.map((itemEducation) => {
          return (
            <Timeline
              key={itemEducation.id}
              id={itemEducation.id}
              isVisibleCompanyText={false}
              isVisibleDateText={false}
              description={itemEducation.description ? itemEducation.description[idLanguage] : ''}
              dateStart={itemEducation.dateStart}
              dateEnd={itemEducation.dateEnd}
              school={itemEducation.school}
              location={itemEducation.location}
              type="school"
              handleEdit={(data) => handleEdit(data)}
              handleDelete={handleDelete}
              isVisibleDelete
              isVisibleEdit
              idLanguage={idLanguage}
              setSelected={setSelected}
              getItemById={getDataEducationById}
            />
          );
        })}
      {Array.isArray(dataCertification) &&
        dataCertification &&
        dataCertification.map((itemCertification) => {
          return (
            <Licences
              isVisibleDelete
              isVisibleEdit
              key={itemCertification.id}
              keyCert={itemCertification.key}
              description={itemCertification.description ? itemCertification.description[idLanguage]: ''}
              registred={itemCertification.registred}
              title={itemCertification.title ? itemCertification.title[idLanguage]: ''}
              id={itemCertification.id}
              handleClick={() => {}}
            />
          );
        })}
    </>
  );
}

export default Education;
