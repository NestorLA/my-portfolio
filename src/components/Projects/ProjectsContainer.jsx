import React from "react";
import useStyles from "./useStyles";

const ProjectsContainer = ({ pic, title, demo, code, text }) => {
  const styles = useStyles();

  return (
    <div className={styles.workBox}>
      <div style={{ backgroundImage: `url(${pic})` }} className={styles.bg}>
        {/* hover effects */}
        <div className={styles.hover}>
          <span className={styles.title}>{title}</span>
          <div className={styles.Btns}>
            <a href={demo} target="_blank" rel="noreferrer">
              <button className={styles.DemoBtn}>Demo</button>
            </a>
            {code && (
              <a href={code} target="_blank" rel="noreferrer">
                <button className={styles.CodeBtn}>Code</button>
              </a>
            )}
          </div>
        </div>
      </div>
      <div className={styles.foot}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ProjectsContainer;
