import React from "react";
import { classNames } from "../utils/string_utils";
import styles from "./wrapper.module.scss";

const Wrapper = ({ children, className }) => (
  <div className={classNames(styles.wrapper, className)}>{children}</div>
);

export default Wrapper;
