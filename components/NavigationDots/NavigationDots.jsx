import styles from "./NavigationDots.module.scss";

const NavigationDots = ({ active }) => (
  <div className={`${styles.app__navigation}`}>
    {["home", "about", "work", "skills", "testimonial", "contact"].map((item, index) => (
      <a href={`#${item}`} key={item + index} className={`${styles.app__navigationdot}`} style={active === item ? { backgroundColor: "#313BAC" } : {}} />
    ))}
  </div>
);

export default NavigationDots;
