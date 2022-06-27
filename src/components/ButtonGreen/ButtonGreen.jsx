import useStyles from "./useStyles";
import { motion } from "framer-motion";
import { toUp } from "../Animations/Animations";

const ButtonGreen = ({ text, onClick }) => {
  const styles = useStyles();

  return (
    <div>
      <motion.div variants={toUp}>
        <button className={styles.btn} onClick={onClick}>
          {text}
        </button>
      </motion.div>
    </div>
  );
};

export default ButtonGreen;
