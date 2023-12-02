import { FunctionComponent } from "react";
import styles from "./FormContainer.module.css";

const FormContainer: FunctionComponent = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.groupChild} />
      <img className={styles.groupItem} alt="" src="/rectangle-4452@2x.png" />
      <div className={styles.classTeacher}>Class Teacher</div>
      <div className={styles.groupParent}>
        <img className={styles.frameChild} alt="" src="/group-39642.svg" />
        <img className={styles.frameChild} alt="" src="/group-39643.svg" />
        <img className={styles.frameChild} alt="" src="/group-39644.svg" />
      </div>
    </div>
  );
};

export default FormContainer;
