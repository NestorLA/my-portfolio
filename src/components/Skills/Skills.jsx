import useStyles from "./useStyles";
import { motion } from "framer-motion";
import {
  father,
  toLeft,
  toUp,
  toRight,
} from "../../components/Animations/Animations";
import { useTranslation } from "react-i18next";

// IMAGES
import fceImg from "../../assets/skills-logos/fce.png";
import htmlImg from "../../assets/skills-logos/html.png";
import cssImg from "../../assets/skills-logos/css3.png";
import jsImg from "../../assets/skills-logos/js.png";
import reactImg from "../../assets/skills-logos/react.png";
import nextImg from "../../assets/skills-logos/nextjs.png";
import firebaseImg from "../../assets/skills-logos/firebase.png";
import bootstrapImg from "../../assets/skills-logos/bootstrap.png";
import tailwindImg from "../../assets/skills-logos/tailwind.png";
import materialImg from "../../assets/skills-logos/materialui.png";
import gitImg from "../../assets/skills-logos/git.png";
import githubImg from "../../assets/skills-logos/github.png";

const Skills = () => {
  const styles = useStyles();
  const [t] = useTranslation("language");
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={father}
      name="skills"
      className={styles.container}
    >
      <motion.p variants={toRight} className={styles.skills}>
        {t("skillsPage.skills")}
      </motion.p>

      <motion.p variants={toLeft} className={styles.text}>
        {t("skillsPage.subtitle")}
      </motion.p>

      <motion.div variants={toUp} className={styles.containerSkills}>
        <div className={styles.iconBox}>
          <img
            className={styles.icon}
            src={fceImg}
            alt="first certificate in english"
          />
          <p>{t("skillsPage.english")}</p>
        </div>
        <div className={styles.iconBox}>
          <img className={styles.icon} src={htmlImg} alt="HTML logo" />
          <p>HTML5</p>
        </div>
        <div className={styles.iconBox}>
          <img className={styles.icon} src={cssImg} alt="css logo" />
          <p>CSS3</p>
        </div>
        <div className={styles.iconBox}>
          <img className={styles.icon} src={jsImg} alt="javascript logo" />
          <p>JAVASCRIPT</p>
        </div>
        <div className={styles.iconBox}>
          <img className={styles.icon} src={reactImg} alt="react logo" />
          <p>REACT</p>
        </div>
        <div className={styles.iconBox}>
          <img className={styles.icon} src={nextImg} alt="next js logo" />
          <p>NEXT JS</p>
        </div>
        <div className={styles.iconBox}>
          <img className={styles.icon} src={firebaseImg} alt="FIREBASE LOGO" />
          <p>FIREBASE</p>
        </div>
        <div className={styles.iconBox}>
          <img
            className={styles.icon}
            src={bootstrapImg}
            alt="BOOTSTRAP LOGO"
          />
          <p>BOOTSTRAP</p>
        </div>
        <div className={styles.iconBox}>
          <img className={styles.icon} src={tailwindImg} alt="TAILWIND LOGO" />
          <p>TAILWIND</p>
        </div>
        <div className={styles.iconBox}>
          <img className={styles.icon} src={materialImg} alt="git icon" />
          <p>MATERIAL UI</p>
        </div>
        <div className={styles.iconBox}>
          <img className={styles.icon} src={gitImg} alt="git icon" />
          <p>GIT</p>
        </div>
        <div className={styles.iconBox}>
          <img className={styles.icon} src={githubImg} alt="git icon" />
          <p>GITHUB</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
