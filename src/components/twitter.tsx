import React from "react";
import { classNames } from "../utils/string_utils";
import styles from "./twitter.module.scss";

type Props = {
  className?: string;
  text?: string;
  url: string;
};
const Twitter: React.FC<Props> = ({ className, text, url }) => (
  <a
    target="_blank"
    rel="noopener, noreferer"
    className={classNames(styles.button, className)}
    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
      text || ""
    )}&url=${encodeURIComponent(url)}&hashtags=BMS_Shuin`}
  >
    <img src="/twitter.svg" alt="" />
  </a>
);

export default Twitter;
