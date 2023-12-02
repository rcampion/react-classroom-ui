import { FunctionComponent } from "react";
import styles from "./Header.module.css";

const Header: FunctionComponent = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.groupChild} />
      <div className={styles.groupParent}>
        <div className={styles.groupWrapper}>
          <div className={styles.rectangleGroup}>
            <div className={styles.groupItem} />
            <div className={styles.searchNormalParent}>
              <img
                className={styles.searchNormalIcon}
                alt=""
                src="/searchnormal.svg"
              />
              <div className={styles.searchWrapper}>
                <div className={styles.search}>Search</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.materialSymbolsmarkUnreadCParent}>
              <img
                className={styles.materialSymbolsmarkUnreadCIcon}
                alt=""
                src="/materialsymbolsmarkunreadchataltoutlinerounded.svg"
              />
              <img
                className={styles.materialSymbolsmarkUnreadCIcon}
                alt=""
                src="/mdibellnotificationoutline.svg"
              />
            </div>
            <img className={styles.frameChild} alt="" src="/frame-162963.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
