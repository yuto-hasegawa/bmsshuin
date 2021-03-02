import { Link } from "gatsby";
import React from "react";
import Terms from "../terms";
import Twitter from "../twitter";
import { classNames } from "../../utils/string_utils";
import styles from "./hero.module.scss";

const Hero = () => (
  <div className={styles.wrapper}>
    <div className={styles.frame}>
      <div className={styles.title_frame}>
        <div className={styles.inner}>
          <img
            className={styles.title}
            src="/3rd_logo_vertical.svg"
            alt="第三回BMS衆議院選"
          />
          <Terms
            preEntryTerm="2020/12/01 Tue. - 12/31 Thu."
            entryTerm="2021/01/28 Thu. - 01/31 Sun."
            impressionTerm="2021/02/03 Wed. - 02/28 Sun."
          />
        </div>
      </div>
      <Link
        to="/3rd/results"
        className={classNames(styles.button, styles.results, "digit")}
      >
        RESULTS
      </Link>
      <a
        href="https://venue.bmssearch.net/bmsshuin3/pre_entry"
        className={classNames(styles.button, "digit")}
      >
        CANDIDATES
      </a>
      <Link
        to="https://venue.bmssearch.net/bmsshuin3"
        className={classNames(styles.button, "digit")}
      >
        VENUE
      </Link>
    </div>
    <a
      href="https://twitter.com/hashtag/BMS_Shuin"
      rel="noopener, noreferer"
      target="_blank"
      className={classNames(styles.tag, "digit")}
    >
      #BMS_Shuin
    </a>
    <Twitter className={styles.twitter} url="https://bmsshuin.qstol.info/3rd" />
  </div>
);

export default Hero;
