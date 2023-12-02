import { FunctionComponent } from "react";
import styles from "./StatusContainer.module.css";

const StatusContainer: FunctionComponent = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.groupChild} />
      <div className={styles.groupItem} />
      <div className={styles.frameParent}>
        <div className={styles.bensonWrapper}>
          <div className={styles.benson}>Benson</div>
        </div>
        <div className={styles.joshWrapper}>
          <div className={styles.benson}>Josh</div>
        </div>
      </div>
      <div className={styles.statusParent}>
        <div className={styles.status}>Status</div>
        <div className={styles.studentsWithConnection}>
          Students with connection issue
        </div>
      </div>
    </div>
  );
};

export default StatusContainer;
