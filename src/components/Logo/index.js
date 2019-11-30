import React from "react";
import { Link } from "gatsby";
import styles from "./Logo.module.css";

const Logo = () => (
  <Link to="/" className={styles.logo}>
    ACQ
  </Link>
);

export default Logo;
