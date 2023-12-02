import { FunctionComponent } from "react";
import styles from "./ContainerCard.module.css";

type ContainerCardType = {
  itemCount?: string;
  imageSize?: string;
};

const ContainerCard: FunctionComponent<ContainerCardType> = ({
  itemCount,
  imageSize,
}) => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.groupChild} />
      <div className={styles.richardKCampion}>Richard K. Campion</div>
      <div className={styles.div}>{itemCount}</div>
      <div className={styles.frameParent}>
        <div className={styles.callWrapper}>
          <img className={styles.callIcon} alt="" src="/call.svg" />
        </div>
        <div className={styles.messageWrapper}>
          <img className={styles.callIcon} alt="" src="/message.svg" />
        </div>
        <div className={styles.videoWrapper}>
          <img className={styles.callIcon} alt="" src="/video.svg" />
        </div>
        <div className={styles.smsWrapper}>
          <img className={styles.callIcon} alt="" src="/sms.svg" />
        </div>
      </div>
      <img className={styles.uimmultiplyIcon} alt="" src="/uimmultiply1.svg" />
      <img className={styles.groupItem} alt="" src={imageSize} />
    </div>
  );
};

export default ContainerCard;
