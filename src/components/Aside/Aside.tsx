import React, { useEffect, useState } from "react";
import { PROFILE } from "../../utils/constants";
import { get } from "../../utils/Requester";
import "./Aside.css";

export interface Translate {
  en: string | undefined;
  es: string | undefined;
}
interface Contact {
  email: string | undefined;
  linkedin: string | undefined;
  phone: string | undefined;
}

interface Profile {
  picture: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  contact: Contact;
  aboutMe: Translate;
}

function Aside() {
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

  const getData = async () => {
    const response = await get(PROFILE);
    setData(response);
  };
  useEffect(() => {
    getData();
  }, []);
  const {email, linkedin, phone}  = data.contact;
  const aboutMeTranslate  = data.aboutMe['es'];

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
