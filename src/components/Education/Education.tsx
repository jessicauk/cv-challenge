import React, { useEffect, useState, useContext } from "react";
import { CERTIFICATIONS, EDUCATION } from "../../utils/constants";
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
  const ContextLayout = useContext(LayoutContext);
  const { idLanguage } = ContextLayout;

  const getDataEducation = async () => {
    const response = await get(EDUCATION);
    setDataEducation(response);
  };
  const getDataCertification = async () => {
    const response = await get(CERTIFICATIONS);
    setDataCertification(response);
  };
  const updateDataEducation = async (data:DataEducation) => {
    const dataJSON = {...data};
    await put(EDUCATION, dataJSON);
    getDataEducation();
  };
  const addDataEducation = async (data:DataEducation) => {
    const dataJSON = {...data};
    await post(EDUCATION, dataJSON);
    getDataEducation();
  };
  const deleteDataEducation = async (id:number) => {
    const dataJSON = {id};
    console.log("dataEducation",dataJSON);
    await deletion(EDUCATION, dataJSON);
    getDataEducation();
  };
  useEffect(() => {
    getDataEducation();
    getDataCertification()
  }, []);

  const handleEdit = (data:DataEducation) => {
    updateDataEducation(data);
  };
  const handleDelete = (id:number) => {
    deleteDataEducation(id);
  };
  const handleAdd = (data:DataEducation) => {
    addDataEducation({
      school: data.school,
      description: data.description,
      location: data.location,
    });
  };
  const handleOpenAddEducation = () => {
    setIsOpenAddEducation(!isOpenAddEducation);
  }

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
              description={itemEducation.description[idLanguage]}
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
            />
          );
        })}
      {Array.isArray(dataCertification) &&
        dataCertification &&
        dataCertification.map((itemCertification) => {
          return (
            <Licences
              key={itemCertification.id}
              keyCert={itemCertification.key}
              description={itemCertification.description[idLanguage]}
              registred={itemCertification.registred}
              title={itemCertification.title[idLanguage]}
              id={itemCertification.id}
            />
          );
        })}
    </>
  );
}

export default Education;
