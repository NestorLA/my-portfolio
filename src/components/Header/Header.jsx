import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import useStyles from "./useStyles";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();
  const styles = useStyles();

  const [t] = useTranslation("language");
  const handleClick = () => setNav(!nav);

  return (
    <div className={styles.container}>
      <img
        src="/src/assets/navbar-logo/logo1.png"
        alt=""
        className={styles.logoImg}
      />

      <ul className={styles.menu}>
        <li onClick={() => navigate("/")} className={styles.menuText}>
          {t("navPage.home")}
        </li>
        <li onClick={() => navigate("/about")} className={styles.menuText}>
          {t("navPage.about")}
        </li>
        <li onClick={() => navigate("/skills")} className={styles.menuText}>
          {t("navPage.skills")}
        </li>
        <li onClick={() => navigate("/projects")} className={styles.menuText}>
          {t("navPage.projects")}
        </li>
        <li onClick={() => navigate("/contact")} className={styles.menuText}>
          {t("navPage.contact")}
        </li>
      </ul>

      {/* hamburger menu */}
      {!nav ? (
        <div className={styles.hamburgerIcon} onClick={handleClick}>
          <GiHamburgerMenu />
        </div>
      ) : (
        <div onClick={handleClick}>
          <ul className={styles.responsiveMenu}>
            <div className={styles.closeIcon}>
              <AiOutlineClose />{" "}
            </div>
            <li
              onClick={() => navigate("/")}
              className={styles.responsiveMenuText}
            >
              {t("navPage.home")}
            </li>
            <li
              onClick={() => navigate("/about")}
              className={styles.responsiveMenuText}
            >
              {t("navPage.about")}
            </li>
            <li
              onClick={() => navigate("/skills")}
              className={styles.responsiveMenuText}
            >
              {t("navPage.skills")}
            </li>
            <li
              onClick={() => navigate("/projects")}
              className={styles.responsiveMenuText}
            >
              {t("navPage.projects")}
            </li>
            <li
              onClick={() => navigate("/contact")}
              className={styles.responsiveMenuText}
            >
              {t("navPage.contact")}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
