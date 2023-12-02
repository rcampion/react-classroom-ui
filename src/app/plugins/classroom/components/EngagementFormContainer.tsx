import { FunctionComponent } from "react";
import styles from "./EngagementFormContainer.module.css";

const EngagementFormContainer: FunctionComponent = () => {
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
        <div className={styles.frameGroup}>
          <div className={styles.joshuaWrapper}>
            <div className={styles.benson}>Joshua</div>
          </div>
          <div className={styles.joshWrapper}>
            <div className={styles.benson}>Mahmed</div>
          </div>
        </div>
      </div>
      <div className={styles.engagementParent}>
        <div className={styles.engagement}>Engagement</div>
        <div className={styles.seeIfStudents}>
          See if students are viewing the lesson
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.ellipseParent}>
          <div className={styles.frameChild} />
          <div className={styles.fair}>Fair</div>
        </div>
        <div className={styles.ellipseParent}>
          <div className={styles.frameItem} />
          <div className={styles.fair}>Good</div>
        </div>
        <div className={styles.ellipseParent}>
          <div className={styles.frameInner} />
          <div className={styles.fair}>Excellent</div>
        </div>
      </div>
    </div>
  );
};

export default EngagementFormContainer;
