/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";

// import styles from "../../styles/Header.module.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div whileInView={{ x: [-100, 0], opacity: [0, 1] }} transition={{ duration: 0.5 }} className="app__header-info">
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Özgür</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text bold">Web Developer</p>
          <p className="p-text bold">Game Developer</p>
          <p className="p-text bold">Electrical-Electronics Engineer</p>
        </div>
      </div>
    </motion.div>

    <motion.div whileInView={{ opacity: [0, 1], scale: [0.5, 1] }} transition={{ duration: 0.5, delayChildren: 0.5 }} className="app__header-img">
      <img src={images.profile.src} alt="profile_bg" />
    </motion.div>

    <motion.div variants={scaleVariants} whileInView={scaleVariants.whileInView} className="app__header-circles">
      {[images.javascript, images.react, images.unity].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img className="skillImg" src={circle.src} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, "home");
