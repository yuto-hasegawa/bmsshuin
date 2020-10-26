import React from "react";
import { classNames } from "../utils/string_utils";
import styles from "./terms.module.scss";

type Props = {
  preEntryTerm?: string;
  entryTerm?: string;
  impressionTerm?: string;
};
const Terms: React.FC<Props> = (props) => {
  return (
    <dl className={classNames(styles.terms, "digit")}>
      {props.preEntryTerm && (
        <>
          <dt>Pre Entry</dt>
          <dd>{props.preEntryTerm}</dd>
        </>
      )}
      {props.entryTerm && (
        <>
          <dt>Entry</dt>
          <dd>{props.entryTerm}</dd>
        </>
      )}
      {props.impressionTerm && (
        <>
          <dt>Impre.</dt>
          <dd>{props.impressionTerm}</dd>
        </>
      )}
    </dl>
  );
};

export default Terms;
