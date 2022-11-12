import { BsTwitter, BsInstagram, BsGithub } from "react-icons/bs";
import { FaXing, FaLinkedin } from "react-icons/fa";
import styles from "./SocialMedia.module.scss";

const SocialMedia = () => (
  <div className={`${styles.app__social}`}>
    <div>
      <a target="_blank" rel="noreferrer" href="https://github.com/ToprakOzgur">
        <BsGithub />
      </a>
    </div>
    <div>
      <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/%C3%B6zg%C3%BCr-toprak-06889a88/">
        <FaLinkedin />
      </a>
    </div>
    <div>
      <a target="_blank" rel="noreferrer" href="https://www.xing.com/profile/Ozgur_Toprak3/cv">
        <FaXing />
      </a>
    </div>
    <div>
      <a target="_blank" rel="noreferrer" href="https://twitter.com/zgrtprk">
        <BsTwitter />
      </a>
    </div>
    <div>
      <a target="_blank" rel="noreferrer" href="https://www.instagram.com/ozgur___toprak/">
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
