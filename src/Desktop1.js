// Overlay use className props to pass style properties to child component.
// To make this component work add className props to your child component manually.
// Here an example: https://gist.github.com/Miniplop/8f87608f8100e758fa5a4eb46f9d151f

import React from "react";
//import { BackgroundBase } from "./BackgroundBase.png";
import styles from "./Desktop1.scss";

var backgroundBase = require("./BackgroundBase.png")
const Desktop1 = ({
  h600l470 = (
    <>
      H: 60
      <strong className={styles.h550L490Emphasis2}>
        0<br />{" "}
      </strong>
      L: 47
      <strong className={styles.h550L490Emphasis2}>
        0
      </strong>
    </>
  )
}) => {
  return (
    <div className={styles.desktop1}>
      <div className={styles.flexWrapperOne}>
        <backgroundBase className={styles.backgroundBase} />
        <p
          className={styles.goodMorningUserNameRightNowItI}
        >
          Good Morning &lt;user name&gt;,
          <br />
          Right now it is
        </p>
        <p className={styles.dateInfo}>
          Monday | Mar 15 | 10:15 AM
        </p>
        <p className={styles.num390}>
          39
          <strong className={styles.num390Emphasis2}>
            0
          </strong>
        </p>
        <p className={styles.location}>San Francisco, CA</p>
        <p className={styles.h440L330}>
          H: 44
          <strong className={styles.h440L330Emphasis2}>
            0<br />
          </strong>
          L: 33
          <strong className={styles.h440L330Emphasis2}>
            0
          </strong>
        </p>
      </div>
      <p className={styles.weekHeader}>This Week</p>
      <div className={styles.divider} />
      <div className={styles.flexWrapperTwo}>
        <div className={styles.relativeWrapperThree}>
          <p className={styles.h550L490}>
            H: 55
            <strong className={styles.h550L490Emphasis2}>
              0<br />
            </strong>
            L: 49
            <strong className={styles.h550L490Emphasis2}>
              0
            </strong>
          </p>
          <p className={styles.tuesBox}>Tuesday</p>
        </div>
        <div className={styles.relativeWrapperOne}>
          <p className={styles.h560L490}>
            H: 56
            <strong className={styles.h550L490Emphasis2}>
              0<br />
            </strong>
            L: 49
            <strong className={styles.h550L490Emphasis2}>
              0
            </strong>
          </p>
          <p className={styles.wedBox}>Wednesday</p>
        </div>
        <div className={styles.relativeWrapperTwo}>
          <p className={styles.h570L490}>
            H: 57
            <strong className={styles.h550L490Emphasis2}>
              0<br />
            </strong>
            L: 49
            <strong className={styles.h550L490Emphasis2}>
              0
            </strong>
          </p>
          <p className={styles.thursBox}>Thursday</p>
        </div>
        <div className={styles.relativeWrapperFour}>
          <p className={styles.h570L460}>
            H: 57
            <strong className={styles.h550L490Emphasis2}>
              0<br />
            </strong>
            L: 46
            <strong className={styles.h550L490Emphasis2}>
              0
            </strong>
          </p>
          <p className={styles.friBox}>Friday</p>
        </div>
        <div className={styles.relativeWrapperFive}>
          <p className={styles.h570L490}>
            H: 58
            <strong className={styles.h550L490Emphasis2}>
              0<br />
            </strong>
            L: 44
            <strong className={styles.h550L490Emphasis2}>
              0
            </strong>
          </p>
          <p className={styles.satBox}>Saturday</p>
        </div>
        <div className={styles.relativeWrapperThree}>
          <p className={styles.h600L470}>{h600l470}</p>
          <p className={styles.sunBox}>Sunday</p>
        </div>
      </div>
    </div>
  );
};

export default Desktop1;