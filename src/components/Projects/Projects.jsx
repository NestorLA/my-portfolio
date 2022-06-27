import useStyles from "./useStyles";
import { motion } from "framer-motion";
import { father, toLeft, toRight, toUp } from "../Animations/Animations";
import { useTranslation } from "react-i18next";
import ProjectsContainer from "./ProjectsContainer";

// images
import cmykImg from "../../assets/projects-img/cmyk.jpg";
import mecanicaImg from "../../assets/projects-img/mecanicayogui.jpg";
import messageImg from "../../assets/projects-img/mestowp.jpg";
import notasImg from "../../assets/projects-img/notasapp.jpg";
import pokecommerceImg from "../../assets/projects-img/pokecommerce.jpg";
import quizImg from "../../assets/projects-img/quizapp.jpg";
import sportsmanagerImg from "../../assets/projects-img/sportsmanager.jpg";

const Projects = () => {
  const styles = useStyles();
  const [t] = useTranslation("language");

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={father}
      name="work"
      className={styles.container}
    >
      <div className={styles.subContainer}>
        <motion.p variants={toRight} className={styles.workText}>
          {t("workPage.work")}
        </motion.p>
        <motion.p variants={toLeft} className={styles.text}>
          {t("workPage.subtitle")}
        </motion.p>

        <motion.div variants={toUp} className={styles.containerWorks}>
          <ProjectsContainer
            pic={sportsmanagerImg}
            title="SportsManager Gym App"
            demo="https://nextjs-argon-dashboard-master-nestorla.vercel.app/auth/wizard"
            text={t("workPage.textSportsManager")}
          />
          <ProjectsContainer
            pic={cmykImg}
            title="CMYK Panel"
            demo="https://cmyk-panel-test.vercel.app/"
            code="https://github.com/frontendcafe/cmyk-forest"
            text={t("workPage.textCMYK")}
          />
          <ProjectsContainer
            pic={messageImg}
            title="Message to Whatsapp"
            demo="https://messagetowhatsapp.netlify.app//"
            text={t("workPage.textMessage")}
          />
          <ProjectsContainer
            pic={mecanicaImg}
            title="Mecánica Yogui"
            demo="https://mecanicayogui.netlify.app/"
            code="https://github.com/NestorLA/mecanica-yogui-landing-page"
            text={t("workPage.textMecanica")}
          />
          <ProjectsContainer
            pic={notasImg}
            title="Notas App"
            demo="https://notasapp.vercel.app/"
            code="https://github.com/NestorLA/notasapp"
            text={t("workPage.textNotas")}
          />
          <ProjectsContainer
            pic={pokecommerceImg}
            title="Poke Commerce"
            demo="https://pokecommerce.vercel.app/"
            code="https://github.com/NestorLA/pokecommerce"
            text={t("workPage.textPokecommerce")}
          />
          <ProjectsContainer
            pic={quizImg}
            title="Quiz App"
            demo="https://quiz-nla.netlify.app/"
            code="https://github.com/NestorLA/quizApp"
            text={t("workPage.textQuiz")}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
