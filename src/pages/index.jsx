import {
  ComingExhibition,
  FinishedExhibition,
} from "../components/portal/exhibition";

import Layout from "../components/layout";
import React from "react";
import SEO from "../components/seo";
import Wrapper from "../components/wrapper";
import { classNames } from "../utils/string_utils";
import styles from "./index.module.scss";

const IndexPage = () => (
  <Layout>
    <SEO title="BMS衆議院選 Portal" />
    <header className={styles.header}>
      <img className={styles.image} src="logo_vertical.svg" alt="BMS衆議院選" />
      <p className={classNames(styles.subtitle, "digit")}>PORTAL</p>
    </header>
    <Wrapper className={styles.list}>
      <ComingExhibition
        className={styles.item}
        inning="第三回"
        to="/3rd"
        preEntryTerm="2020/12/01 Tue. - 12/31 Thu."
        entryTerm="2021/01/28 Thu. - 01/31 Sun."
        impressionTerm="2021/02/01 Mon. - "
      />
      <FinishedExhibition
        className={styles.item}
        inning="第二回"
        term="2019/06/20 - 2019/07/21"
        rulingParty="夏党"
        primeMinister="Kankitsu"
        to="https://bmsshuin2.qstol.info/"
      />
      <FinishedExhibition
        className={styles.item}
        inning="第一回"
        term="2017/07/20 - 2017/08/20"
        rulingParty="ピアノの党"
        primeMinister="ああああ"
        to="https://qstol.info/events/BMS_Shuin"
      />
    </Wrapper>
  </Layout>
);

export default IndexPage;
