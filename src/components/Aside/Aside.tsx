import React, {useEffect} from "react";
import "./Aside.css";

function Aside() {

  useEffect(()=>{
    fetch('http://localhost:3000/profile')
    .then(response => {console.log(response)})
    .then(data => console.log(data));
  },[])
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
              <img
                src={process.env.PUBLIC_URL + "/assets/blob-2.svg"}
                alt=""
              />
            </div>
            <img
              className="picture"
              src={process.env.PUBLIC_URL + "/assets/profile-picture.png"}
              alt=""
            />
          </div>
          <div className="profile-information">
            <h1>Luis Carlos Ariza</h1>
            <h3>Acerca de mi</h3>
            <p className="about">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque vitae ullamcorper nisi. In a ornare felis.
              Suspendisse tempor nisi ac lacus suscipit, ut elementum magna
              ullamcorper. Integer ultrices sem a sodales tincidunt.
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
                <span>+52 5552102230</span>
              </p>
              <p>
                <i>
                  <img
                    src={process.env.PUBLIC_URL + "/assets/mail.png"}
                    alt=""
                  />
                </i>
                <span>luis.carlos.ariza@gmail.com</span>
              </p>
              <p>
                <i>
                  <img
                    src={process.env.PUBLIC_URL + "/assets/linkedin.png"}
                    alt=""
                  />
                </i>
                <span>www.linkedin.com/in/carlosariza</span>
              </p>
            </div>
          </div>
        </div>
    </aside>
  );
}

export default Aside;
