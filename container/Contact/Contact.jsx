/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { DataContext } from "../../contexts/dataContext";

import styles from "./Contact.module.scss";

const Contact = () => {
  const { resume } = useContext(DataContext);
  return (
    <>
      <h2 className="head-text">Contact Details and Resume</h2>

      <div className={`${styles.app__footercards}`}>
        <div className={`${styles.app__footercard}`}>
          <img src={images.email.src} alt="email" />
          <a href="mailto:zgrtprk@gmail.com" className="p-text">
            zgrtprk@gmail.com
          </a>
        </div>
        <div className={`${styles.app__footercard}`} onClick={() => window.open(`https:${resume}`, "_blank", "noopener,noreferrer")}>
          <a className="p-text" href={`https:${resume}`} target="_blank" rel="noreferrer">
            My Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Contact, styles.app__footer), "contact", "app__primarybg");
