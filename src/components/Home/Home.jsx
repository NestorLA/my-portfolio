import { useNavigate } from "react-router-dom";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BsFileEarmarkPersonFill } from "react-icons/bs";
import useStyles from "./useStyles";
import { motion } from "framer-motion";
import {
  father,
  toRight,
  toLeft,
  nut,
} from "../../components/Animations/Animations";
import ButtonGreen from "../ButtonGreen/ButtonGreen";
import ButtonSlider from "../ButtonSlider/ButtonSlider";
import { useTranslation } from "react-i18next";

const Home = () => {
  const navigate = useNavigate();
  const styles = useStyles();
  const [t] = useTranslation("language");
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={father}
      className={styles.container}
    >
      <div className={styles.subContainer}>
        <ButtonSlider />

        <motion.p variants={toLeft} className={styles.hi}>
          {t("homePage.hi")}
        </motion.p>
        <motion.h1
          variants={toRight}
          className={`${styles.textTitle} text-white`}
        >
          Néstor Acerbo
        </motion.h1>
        <motion.h2
          variants={toLeft}
          className={`${styles.textTitle} text-emerald-200`}
        >
          {t("homePage.title")}
        </motion.h2>

        <div className={styles.socialIcons}>
          <motion.div variants={nut}>
            <div className={`${styles.iconBox}  bg-blue-600 `}>
              <a
                className={styles.icon}
                href="https://www.linkedin.com/in/nestorleonelacerbo/"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
              >
                <BsLinkedin size={30} />
              </a>
            </div>
          </motion.div>
          <motion.div variants={nut}>
            <div className={`${styles.iconBox} bg-zinc-900 `}>
              {" "}
              <a
                className={styles.icon}
                href="https://github.com/NestorLA"
                target="_blank"
                rel="noreferrer"
                title="GitHub"
              >
                <BsGithub size={30} />
              </a>
            </div>
          </motion.div>
          <motion.div variants={nut}>
            <div className={`${styles.iconBox} bg-orange-400 cursor-pointer`}>
              <div
                className={styles.icon}
                onClick={() => navigate("/contact")}
                title={t("homePage.titleContact")}
              >
                <AiOutlineMail size={30} />
              </div>
            </div>
          </motion.div>
          <motion.div variants={nut}>
            <div className={`${styles.iconBox} bg-indigo-500`}>
              <a
                className={styles.icon}
                href={
                  "https://drive.google.com/file/d/1C-dtgGo7pV3fcQInIzjJgk3qL0eAhX9Z/view"
                }
                title={t("homePage.titleCV")}
                target="_blank"
                rel="noreferrer"
              >
                <BsFileEarmarkPersonFill size={30} />
              </a>
            </div>
          </motion.div>
        </div>

        <ButtonGreen
          text={t("buttonGreen.home")}
          onClick={() => navigate("/projects")}
        />
      </div>
    </motion.div>
  );
};

export default Home;
