import { FunctionComponent } from "react";
import ContainerCard from "./ContainerCard";
import styles from "./ContainerWrapper.module.css";

const ContainerWrapper: FunctionComponent = () => {
  return (
    <div className={styles.groupParent}>
      <ContainerCard itemCount="6" imageSize="/ellipse-524@2x.png" />
      <ContainerCard itemCount="12" imageSize="/ellipse-524@2x.png" />
      <ContainerCard itemCount="18" imageSize="/ellipse-450@2x.png" />
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.moreStudents}>20+ more students</div>
        <div className={styles.div}>24</div>
        <img
          className={styles.uimmultiplyIcon}
          alt=""
          src="/uimmultiply1.svg"
        />
        <img className={styles.maskGroupIcon} alt="" src="/mask-group.svg" />
      </div>
    </div>
  );
};

export default ContainerWrapper;
