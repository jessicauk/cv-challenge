import React, { useEffect, useState } from "react";
import { CERTIFICATIONS, EDUCATION } from "../../utils/constants";
import { Translate } from "../Aside/Aside";
import { get } from "../../utils/Requester";
import Timeline from "../Timeline/Timeline";
import Licences from "../Licences/Licences";

interface ArrayEducation {
  id: number | undefined;
  school: string | undefined;
  description: Translate;
  location: string | undefined;
  dateStart: string | undefined;
  dateEnd: string | undefined;
};

interface ArrayCertification {
  id: number | undefined;
  key: string | undefined;
  title: Translate;
  description: Translate;
  registred: string | undefined;
};

function Education() {
  const [dataEducation, setDataEducation] = useState<ArrayEducation[]>([]);
  const [dataCertification, setDataCertification] = useState<ArrayCertification[]>([]);
  const getDataEducation = async () => {
    const response = await get(EDUCATION);
    setDataEducation(response);
  };
  const getDataCertification = async () => {
    const response = await get(CERTIFICATIONS);
    setDataCertification(response);
  };
  useEffect(() => {
    getDataEducation();
    getDataCertification()
  }, []);

  return (
    <>
      {Array.isArray(dataEducation) &&
        dataEducation &&
        dataEducation.map((itemEducation) => {
          return (
            <Timeline
              key={itemEducation.id}
              id={itemEducation.id}
              isVisibleCompanyText={false}
              isVisibleDateText={false}
              description={itemEducation.description["es"]}
              dateStart={itemEducation.dateStart}
              dateEnd={itemEducation.dateEnd}
              school={itemEducation.school}
              location={itemEducation.location}
              type="school"
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
              description={itemCertification.description["es"]}
              registred={itemCertification.registred}
              title={itemCertification.title["es"]}
              id={itemCertification.id}
            />
          );
        })}
    </>
  );
}

export default Education;
