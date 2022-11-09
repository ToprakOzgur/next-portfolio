import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";
import moment from "moment";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import { DataContext } from "../../contexts/dataContext";

const Skills = () => {
  const { skills, experiences, resume } = useContext(DataContext);

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills &&
            skills.map((skill, index) => (
              <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5 }} className="app__skills-item app__flex" key={index}>
                <div className="app__flex" style={{ backgroundColor: skill.bgColor }}>
                  <img src={"https:" + skill.fields.icon.fields.file.url} alt={skill.fields.name} />
                </div>
                <p className="p-text">{skill.fields.name}</p>
              </motion.div>
            ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences &&
            experiences.map((experience) => (
              <motion.div className="app__skills-exp-item" key={experience.fields.startDate}>
                <div className="app__skills-exp-year">
                  <span className="bold-text">{moment(experience.fields.startDate).format("MM/YYYY")} </span>
                  <span className="bold-text">-</span>
                  <span className="bold-text"> {moment(experience.fields.endDate).format("MM/YYYY")}</span>
                </div>
                <motion.div className="app__skills-exp-works">
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__skills-exp-work"
                    data-tip
                    data-for={experience.fields.startDate}
                    key={experience.fields.startDate}
                  >
                    <h4 className="bold-text">{experience.fields.pos}</h4>
                    <p className="p-text">{experience.fields.company}</p>
                  </motion.div>
                  <ReactTooltip uuid="mytt" id={experience.fields.startDate} effect="solid" arrowColor="#fff" className="skills-tooltip">
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

export default AppWrap(MotionWrap(Skills, "app__skills"), "skills", "app__whitebg");
