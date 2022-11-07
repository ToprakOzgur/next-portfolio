import React, { useState, useEffect, useContext } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { DataContext } from "../../contexts/dataContext";

const Work = () => {
  const { areas, projects: allProjects } = useContext(DataContext);
  const [projects, setProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState("Web");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const selected = areas?.find((area) => area.fields.name.includes(activeFilter));
    setProjects(activeFilter === "All" ? [] : selected?.fields.projects?.sort((a, b) => a.fields.order - b.fields.order));
  }, [activeFilter, areas, allProjects]);

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

      <div className="app__work-filter">
        {areas?.map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item.fields.name)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item.fields.name ? "item-active" : ""}`}
          >
            {item.fields.name}
          </div>
        ))}

        <div
          key={"all"}
          onClick={() => handleWorkFilter("All")}
          className={`app__work-filter-item app__flex p-text ${activeFilter === "All" ? "item-active" : ""}`}
        >
          All
        </div>
      </div>

      <motion.div animate={animateCard} transition={{ duration: 0.5, delayChildren: 0.5 }} className="app__work-portfolio">
        {allProjects &&
          getSelectedProjects().map((work, index) => (
            <div className="app__work-item app__flex" key={index}>
              <div className="app__work-img app__flex">
                <img src={work.fields.screenShot?.fields?.file.url} alt={work.fields.title} />

                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{ duration: 0.25, ease: "easeInOut", staggerChildren: 0.5 }}
                  className="app__work-hover app__flex"
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

              <div className="app__work-content app__flex">
                <h4 className="bold-text">{work.fields.title}</h4>
                <p className="p-text" style={{ marginTop: 10 }}>
                  {work?.fields.description}
                </p>

                {/* <div className="app__work-tag app__flex">
                  <p className="p-text">{"work"}</p>
                </div> */}
              </div>
            </div>
          ))}
      </motion.div>
    </>
  );
};

export default AppWrap(MotionWrap(Work, "app__works"), "work", "app__primarybg");
