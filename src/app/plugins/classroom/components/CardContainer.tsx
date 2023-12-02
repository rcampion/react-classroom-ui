import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./CardContainer.module.css";

type CardContainerType = {
  itemNumber?: string;
  imageDescription?: string;
  imageLabel?: string;
  imageIdentifier?: string;
  imageNumber?: string;
  imageIdentifierText?: string;
  imageNumberText?: string;
  imageIdentifier2?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
};

const CardContainer: FunctionComponent<CardContainerType> = ({
  itemNumber,
  imageDescription,
  imageLabel,
  imageIdentifier,
  imageNumber,
  imageIdentifierText,
  imageNumberText,
  imageIdentifier2,
  propLeft,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className={styles.groupParent} style={frameDivStyle}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.richardKCampion}>Richard K. Campion</div>
        <div className={styles.div}>{itemNumber}</div>
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
        <img
          className={styles.uimmultiplyIcon}
          alt=""
          src="/uimmultiply1.svg"
        />
        <img className={styles.groupItem} alt="" src={imageDescription} />
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.richardKCampion}>Richard K. Campion</div>
        <div className={styles.div}>{imageLabel}</div>
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
        <img
          className={styles.uimmultiplyIcon}
          alt=""
          src="/uimmultiply1.svg"
        />
        <img className={styles.groupItem} alt="" src={imageIdentifier} />
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.richardKCampion}>Richard K. Campion</div>
        <div className={styles.div}>{imageNumber}</div>
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
        <img
          className={styles.uimmultiplyIcon}
          alt=""
          src="/uimmultiply1.svg"
        />
        <img className={styles.groupItem} alt="" src={imageIdentifierText} />
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.richardKCampion}>Richard K. Campion</div>
        <div className={styles.div}>{imageNumberText}</div>
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
        <img
          className={styles.uimmultiplyIcon}
          alt=""
          src="/uimmultiply1.svg"
        />
        <img className={styles.groupItem} alt="" src={imageIdentifier2} />
      </div>
    </div>
  );
};

export default CardContainer;
