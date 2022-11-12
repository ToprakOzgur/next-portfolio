import React, { useContext } from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import { DataContext } from "../../contexts/dataContext";

import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";
import moment from "moment";

import styles from "./Skills.module.scss";
const Skills = () => {
  const { skills, experiences } = useContext(DataContext);

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className={`${styles.app__skillscontainer}`}>
        <motion.div className={`${styles.app__skillslist}`}>
          {skills &&
            skills.map((skill, index) => (
              <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5 }} className={`${styles.app__skillsitem} app__flex`} key={index}>
                <div className="app__flex" style={{ backgroundColor: skill.bgColor }}>
                  <img src={"https:" + skill.fields.icon.fields.file.url} alt={skill.fields.name} />
                </div>
                <p className="p-text">{skill.fields.name}</p>
              </motion.div>
            ))}
        </motion.div>
        <div className={`${styles.app__skillsexp}`}>
          {experiences &&
            experiences.map((experience) => (
              <motion.div className={`${styles.app__skillsexpitem}`} key={experience.fields.startDate}>
                <div className={`${styles.app__skillsexpyear}`}>
                  <span className="bold-text">{moment(experience.fields.startDate).format("MM/YYYY")} </span>
                  <span className="bold-text">-</span>
                  <span className="bold-text"> {moment(experience.fields.endDate).format("MM/YYYY")}</span>
                </div>
                <motion.div className={`${styles.app__skillsexpworks}`}>
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className={`${styles.app__skillsexpwork}`}
                    data-tip
                    data-for={experience.fields.startDate}
                    key={experience.fields.startDate}
                  >
                    <h4 className="bold-text">{experience.fields.pos}</h4>
                    <p className="p-text">{experience.fields.company}</p>
                  </motion.div>
                  <ReactTooltip uuid="mytt" id={experience.fields.startDate} effect="solid" arrowColor="#fff" className={styles.skillstooltip}>
                    {experience.fields.desc}
                  </ReactTooltip>
                </motion.div>
              </motion.div>
            ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Skills, styles.app__skills), "skills", "app__whitebg");
