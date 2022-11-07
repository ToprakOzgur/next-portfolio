/* eslint-disable @next/next/no-img-element */
import { useContext } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";

import { DataContext } from "../../contexts/dataContext";
import { v4 as uuidv4 } from "uuid";

const About = () => {
  const { areas } = useContext(DataContext);

  return (
    <>
      <h2 className="head-text">
        my areas of <span></span> <br />
        <span>professional expertise</span>
      </h2>

      <div className="app__profiles">
        {areas.map((item) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={uuidv4()}
          >
            <img src={"https:" + item.fields.icon.fields.file.url} alt={item.title} />
            <h2 className="bold-text">{item.fields.name}</h2>
            <p className="p-text">{item.fields.desc}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(About, "app__about"), "about", "app__whitebg");
