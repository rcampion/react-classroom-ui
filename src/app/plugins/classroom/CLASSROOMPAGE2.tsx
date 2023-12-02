import { FunctionComponent } from "react";
import SystemContainer from "./components/SystemContainer";
import HomeContainer from "./components/HomeContainer";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
import ContainerWrapper from "./components/ContainerWrapper";
import FormContainer from "./components/FormContainer";
import StatusContainer from "./components/StatusContainer";
import EngagementFormContainer from "./components/EngagementFormContainer";
import styles from "./CLASSROOMPAGE2.module.css";

const CLASSROOMPAGE2: FunctionComponent = () => {
  return (
    <div className={styles.classroomPage2}>
      <div className={styles.classroomPage2Child} />
      <img
        className={styles.zdslogicLogo188x192pngIcon}
        alt=""
        src="/zdslogiclogo188x192png@2x.png"
      />
      <SystemContainer />
      <HomeContainer />
      <div className={styles.classroomPage2Item} />
      <Header />
      <div className={styles.button}>
        <div className={styles.buttonBase}>
          <img className={styles.copyIcon} alt="" src="/copy.svg" />
        </div>
      </div>
      <div className={styles.button1}>
        <div className={styles.buttonBase}>
          <img className={styles.copyIcon} alt="" src="/downloadcloud.svg" />
        </div>
      </div>
      <div className={styles.classroomPage2Inner} />
      <div className={styles.groupParent}>
        <img className={styles.frameChild} alt="" src="/group-39616.svg" />
        <img className={styles.frameChild} alt="" src="/group-39633.svg" />
        <img className={styles.frameChild} alt="" src="/group-39565.svg" />
        <img className={styles.frameChild} alt="" src="/group-39633.svg" />
        <img className={styles.frameChild} alt="" src="/group-39565.svg" />
        <img className={styles.frameChild} alt="" src="/group-39565.svg" />
        <img className={styles.frameChild} alt="" src="/group-39633.svg" />
        <img className={styles.frameChild} alt="" src="/group-39565.svg" />
        <img className={styles.frameChild} alt="" src="/group-39633.svg" />
        <img className={styles.frameChild} alt="" src="/group-39565.svg" />
        <img className={styles.frameChild} alt="" src="/group-39633.svg" />
        <img className={styles.frameChild} alt="" src="/group-39633.svg" />
        <img className={styles.frameChild} alt="" src="/group-39565.svg" />
        <img className={styles.frameChild} alt="" src="/group-39633.svg" />
        <img className={styles.frameChild} alt="" src="/group-39565.svg" />
        <img className={styles.frameChild} alt="" src="/group-39633.svg" />
        <img className={styles.frameChild} alt="" src="/group-39565.svg" />
        <img className={styles.frameChild} alt="" src="/group-39633.svg" />
        <img className={styles.frameChild} alt="" src="/group-39565.svg" />
      </div>
      <div className={styles.rectangleDiv} />
      <div className={styles.whiteboardParent}>
        <div className={styles.whiteboard}>Whiteboard</div>
        <div className={styles.maximize2Parent}>
          <img className={styles.copyIcon} alt="" src="/maximize2.svg" />
          <img
            className={styles.uimmultiplyIcon}
            alt=""
            src="/uimmultiply.svg"
          />
        </div>
      </div>
      <CardContainer
        itemNumber="1"
        imageDescription="/ellipse-524@2x.png"
        imageLabel="7"
        imageIdentifier="/ellipse-524@2x.png"
        imageNumber="13"
        imageIdentifierText="/ellipse-450@2x.png"
        imageNumberText="19"
        imageIdentifier2="/ellipse-524@2x.png"
      />
      <CardContainer
        itemNumber="2"
        imageDescription="/ellipse-524@2x.png"
        imageLabel="8"
        imageIdentifier="/ellipse-524@2x.png"
        imageNumber="14"
        imageIdentifierText="/ellipse-450@2x.png"
        imageNumberText="20"
        imageIdentifier2="/ellipse-524@2x.png"
        propLeft="415px"
      />
      <CardContainer
        itemNumber="3"
        imageDescription="/ellipse-450@2x.png"
        imageLabel="9"
        imageIdentifier="/ellipse-450@2x.png"
        imageNumber="15"
        imageIdentifierText="/ellipse-524@2x.png"
        imageNumberText="21"
        imageIdentifier2="/ellipse-450@2x.png"
        propLeft="555px"
      />
      <ContainerWrapper />
      <CardContainer
        itemNumber="5"
        imageDescription="/ellipse-450@2x.png"
        imageLabel="11"
        imageIdentifier="/ellipse-450@2x.png"
        imageNumber="17"
        imageIdentifierText="/ellipse-524@2x.png"
        imageNumberText="23"
        imageIdentifier2="/ellipse-450@2x.png"
        propLeft="1079px"
      />
      <CardContainer
        itemNumber="4"
        imageDescription="/ellipse-524@2x.png"
        imageLabel="10"
        imageIdentifier="/ellipse-524@2x.png"
        imageNumber="16"
        imageIdentifierText="/ellipse-450@2x.png"
        imageNumberText="22"
        imageIdentifier2="/ellipse-524@2x.png"
        propLeft="939px"
      />
      <div className={styles.lineDiv} />
      <FormContainer />
      <StatusContainer />
      <EngagementFormContainer />
    </div>
  );
};

export default CLASSROOMPAGE2;
