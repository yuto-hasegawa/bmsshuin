import { Link } from "gatsby";
import React from "react";
import Terms from "../terms";
import { classNames } from "../../utils/string_utils";
import styles from "./exhibition.module.scss";

export const ComingExhibition = ({
  to,
  inning,
  preEntryTerm,
  entryTerm,
  impressionTerm,
  className,
}) => (
  <Link className={classNames(styles.link, styles.coming, className)} to={to}>
    <p className={styles.inning}>{inning}</p>
    <Terms
      preEntryTerm={preEntryTerm}
      entryTerm={entryTerm}
      impressionTerm={impressionTerm}
    />
  </Link>
);

export const FinishedExhibition = ({
  to,
  inning,
  term,
  rulingParty,
  primeMinister,
  className,
}) => (
  <Link className={classNames(styles.link, className)} to={to}>
    <p className={styles.inning}>{inning}</p>
    <p className={classNames(styles.term, "digit")}>{term}</p>
    <dl className={styles.result}>
      <dt>与党</dt>
      <dd>{rulingParty}</dd>
      <dt>内閣総理大臣</dt>
      <dd>{primeMinister}</dd>
    </dl>
  </Link>
);
