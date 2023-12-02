import { FunctionComponent } from "react";
import styles from "./SystemContainer.module.css";

const SystemContainer: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.cogOutlineParent}>
          <img className={styles.cogOutlineIcon} alt="" src="/cogoutline.svg" />
          <div className={styles.title}>System</div>
        </div>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.cogOutlineParent}>
          <img
            className={styles.cogOutlineIcon}
            alt=""
            src="/weathersunny.svg"
          />
          <div className={styles.title}>Visualizations</div>
        </div>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      </div>
      <div className={styles.cogOutlineParent}>
        <img
          className={styles.cogOutlineIcon}
          alt=""
          src="/weathersunny1.svg"
        />
        <div className={styles.title}>Weather</div>
      </div>
      <div className={styles.cogOutlineParent}>
        <img className={styles.cogOutlineIcon} alt="" src="/searchweb.svg" />
        <div className={styles.title}>WHOIS</div>
      </div>
    </div>
  );
};

export default SystemContainer;
