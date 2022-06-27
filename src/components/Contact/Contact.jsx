import ButtonGreen from "../ButtonGreen/ButtonGreen";
import useStyles from "./useStyles";
import { motion } from "framer-motion";
import {
  father,
  boom,
  toDown,
  toRight,
  toLeft,
  toUp,
} from "../Animations/Animations";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const styles = useStyles();
  const [t] = useTranslation("language");
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={father}
      name="contact"
      className={styles.container}
    >
      <form
        method="POST"
        action="https://getform.io/f/1aa5de47-00f7-4321-8277-a8b46c46896c"
        className={styles.form}
      >
        <motion.div variants={toDown}>
          <motion.p variants={boom} className={styles.textContact}>
            {t("contactPage.contact")}
          </motion.p>
          <p className={styles.textEmail}>{t("contactPage.subtitle")}</p>
        </motion.div>

        <motion.input
          variants={toRight}
          type="text"
          placeholder={t("contactPage.name")}
          name="name"
          required
          className={styles.inputName}
        />

        <motion.input
          variants={toLeft}
          type="email"
          placeholder={t("contactPage.email")}
          name="email"
          required
          className={styles.inputEmail}
        />
        <p className={styles.invalidEmail}>{t("contactPage.invalid")}</p>
        <motion.textarea
          variants={toUp}
          required
          className={styles.textarea}
          name="message"
          cols="30"
          rows="6"
          placeholder={t("contactPage.message")}
        />

        <ButtonGreen text={t("buttonGreen.contact")} />
      </form>
    </motion.div>
  );
};

export default Contact;
