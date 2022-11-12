/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useContext } from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { DataContext } from "../../contexts/dataContext";

import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

import styles from "./Work.module.scss";

const Work = () => {
  const { areas, projects: allProjects } = useContext(DataContext);
  const [projects, setProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState("Web");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const selected = areas?.find((area) => area.fields.name.includes(activeFilter));
    setProjects(activeFilter === "All" ? [] : selected?.fields.projects?.sort((a, b) => a.fields.order - b.fields.order));
    console.log(projects);
  }, [activeFilter, areas, projects]);

  const handleWorkFilter = (item) => {
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      setActiveFilter(item);
    }, 500);
  };

  const getSelectedProjects = () => {
    if (!projects) return [];
    if (projects.length > 0) return projects;
    return allProjects;
  };

  return (
    <>
      <h2 className="head-text">
        <span> Projects</span> and portfolio
      </h2>

      <div className={styles.app__workfilter}>
        {areas?.map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item.fields.name)}
            className={`${styles.app__workfilteritem} app__flex p-text ${activeFilter === item.fields.name ? styles.itemactive : ""}`}
          >
            {item.fields.name}
          </div>
        ))}

        <div
          key={"all"}
          onClick={() => handleWorkFilter("All")}
          className={`${styles.app__workfilteritem} app__flex p-text ${activeFilter === "All" ? styles.itemactive : ""}`}
        >
          All
        </div>
      </div>

      <motion.div animate={animateCard} transition={{ duration: 0.5, delayChildren: 0.5 }} className={styles.app__workportfolio}>
        {allProjects &&
          getSelectedProjects().map((work, index) => (
            <div className={`${styles.app__workitem} app__flex`} key={index}>
              <div className={`${styles.app__workimg} app__flex`}>
                <img src={work.fields.screenShot?.fields?.file.url} alt={work.fields.title} />

                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{ duration: 0.25, ease: "easeInOut", staggerChildren: 0.5 }}
                  className={`${styles.app__workhover} app__flex`}
                >
                  <a href={work.fields.projectLink} target="_blank" rel="noreferrer">
                    <motion.div whileInView={{ scale: [0, 1] }} whileHover={{ scale: [1, 0.9] }} transition={{ duration: 0.25 }} className="app__flex">
                      <AiFillEye />
                    </motion.div>
                  </a>
                  <a href={work.fields.codeLink} target="_blank" rel="noreferrer">
                    <motion.div whileInView={{ scale: [0, 1] }} whileHover={{ scale: [1, 0.9] }} transition={{ duration: 0.25 }} className="app__flex">
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </motion.div>
              </div>

              <div className={`${styles.app__workcontent} app__flex`}>
                <h4 className="bold-text">{work.fields.title}</h4>
                <p className="p-text" style={{ marginTop: 10 }}>
                  {work?.fields.description}
                </p>

                <div className={`${styles.app__worktag} app__flex`}>
                  <p className="p-text">{work.fields.tags[0]}</p>
                </div>
              </div>
              <ul>
                {work.fields.tags.map((tag) => (
                  <li key={uuidv4()} className="p-text">
                    {"# " + tag}
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </motion.div>
    </>
  );
};

export default AppWrap(MotionWrap(Work, `${styles.app__works}`), "work", "app__primarybg");
