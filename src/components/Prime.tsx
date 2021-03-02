import React from "react";
import { classNames } from "../utils/string_utils";
import styles from "./Prime.module.scss";

interface Props {
  party: string;
  minister: string;
  className?: string;
}
export const Prime: React.FC<Props> = ({ className, party, minister }) => (
  <dl className={classNames(styles.result, className)}>
    <dt>与党</dt>
    <dd>{party}</dd>
    <dt>内閣総理大臣</dt>
    <dd>{minister}</dd>
  </dl>
);
