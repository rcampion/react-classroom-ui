import { FunctionComponent } from "react";
import styles from "./HomeContainer.module.css";

const HomeContainer: FunctionComponent = () => {
  return (
    <div className={styles.groupParent}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.homeOutlineParent}>
          <img
            className={styles.homeOutlineIcon}
            alt=""
            src="/homeoutline.svg"
          />
          <div className={styles.title}>Home</div>
        </div>
      </div>
      <div className={styles.informationOutlineParent}>
        <img
          className={styles.homeOutlineIcon}
          alt=""
          src="/informationoutline.svg"
        />
        <div className={styles.title}>About</div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.appsParent}>
          <img className={styles.homeOutlineIcon} alt="" src="/apps.svg" />
          <div className={styles.title}>Apps</div>
        </div>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      </div>
      <div className={styles.accountOutlineParent}>
        <img
          className={styles.homeOutlineIcon}
          alt=""
          src="/accountoutline.svg"
        />
        <div className={styles.title}>Contact</div>
      </div>
      <div className={styles.emailOutlineParent}>
        <img
          className={styles.homeOutlineIcon}
          alt=""
          src="/emailoutline.svg"
        />
        <div className={styles.title}>Email</div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.appsParent}>
          <img
            className={styles.homeOutlineIcon}
            alt=""
            src="/monitoraccount.svg"
          />
          <div className={styles.title}>Meetings</div>
        </div>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      </div>
      <div className={styles.projectorScreenOutlineParent}>
        <img
          className={styles.homeOutlineIcon}
          alt=""
          src="/projectorscreenoutline.svg"
        />
        <div className={styles.title}>Projects</div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.appsParent}>
          <img
            className={styles.homeOutlineIcon}
            alt=""
            src="/semanticweb.svg"
          />
          <div className={styles.title}>Resources</div>
        </div>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      </div>
      <div className={styles.mapMarkerOutlineParent}>
        <img
          className={styles.homeOutlineIcon}
          alt=""
          src="/mapmarkeroutline.svg"
        />
        <div className={styles.title}>Map</div>
      </div>
      <div className={styles.weatherSunnyParent}>
        <img
          className={styles.homeOutlineIcon}
          alt=""
          src="/weathersunny2.svg"
        />
        <div className={styles.title}>Teams</div>
      </div>
    </div>
  );
};

export default HomeContainer;
