import React, { useEffect, useState, useContext } from "react";
import ReactFlagsSelect from 'react-flags-select';
import { PROFILE, LANGUAGES } from "../../utils/constants";
import { get } from "../../utils/Requester";
import { setLanguageCode } from "../../utils/Functions";
import { US } from "../../utils/constants";
import LayoutContext from '../Layout/LayoutContext';
import "./Aside.css";



export interface TranslateValue{
  en: string;
  es: string;
};
export interface Languages{
  id: number;
  label: TranslateValue;
  percentage?: number;
};
export interface Translate<TranslateValue>{
  [key:string]: TranslateValue;
};
interface Contact {
  email: string | undefined;
  linkedin: string | undefined;
  phone: string | undefined;
};

interface Profile {
  picture: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  contact: Contact;
  aboutMe: Translate<string>;
};

function Aside() {
  const ContextLayout = useContext(LayoutContext);
  const { idLanguage, setIdLanguage } = ContextLayout;
  const [ languagesCatalog, setLanguagesCatalog ] = useState<Languages[]>([]);

  const [data, setData] = useState<Profile>({
    picture: '',
    firstName: '',
    lastName: '',
    contact: {
      email: '',
      linkedin: '',
      phone: '',
    },
    aboutMe: {
      en: '',
      es: '',
    }
  });
  const [selected, setSelected] = useState<string>(US.toUpperCase());

  const getData = async () => {
    const response = await get(PROFILE);
    setData(response);
  };
  const getLanguagesCatalog = async () => {
    const response = await get(LANGUAGES);
    setLanguagesCatalog(response);
  };
  useEffect(() => {
    getData();
    getLanguagesCatalog();
  }, []);

  const {email, linkedin, phone}  = data.contact;
  const aboutMeTranslate  = data.aboutMe[idLanguage];

  return (
    <aside className="aside">
      <div className="aside-content">
        <div className="profile-image">
          <div className="background-img">
            <img src={process.env.PUBLIC_URL + "/assets/vector.png"} alt="" />
            <img
              src={process.env.PUBLIC_URL + "/assets/vector-line1.png"}
              alt=""
            />
            <img
              src={process.env.PUBLIC_URL + "/assets/vector-line2.png"}
              alt=""
            />
            <img src={process.env.PUBLIC_URL + "/assets/blob-2.svg"} alt="" />
          </div>
          <img className="picture" src={process.env.PUBLIC_URL + "/assets/profile-picture.png"} alt="" />
        </div>
        <ReactFlagsSelect
          countries={["US", "ES"]}
          customLabels={{"US": "EN", "ES": "ES"}}
          selected={selected}
          onSelect={code => {
            setIdLanguage(setLanguageCode(code.toLowerCase()));
            setSelected(code)
          }}
          
        />
        <div className="profile-information">
          <h1>{data.firstName}</h1>
          <h3>{data.lastName}</h3>
          <p className="about">
            {aboutMeTranslate}
          </p>
          <div className="profile-contact">
            <h3>Contacto</h3>
            <p>
              <i>
                <img
                  src={process.env.PUBLIC_URL + "/assets/mobile.png"}
                  alt=""
                />
              </i>
              <span>{phone}</span>
            </p>
            <p>
              <i>
                <img src={process.env.PUBLIC_URL + "/assets/mail.png"} alt="" />
              </i>
              <span>{email}</span>
            </p>
            <p>
              <i>
                <img
                  src={process.env.PUBLIC_URL + "/assets/linkedin.png"}
                  alt=""
                />
              </i>
              <span>{linkedin}</span>
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Aside;
