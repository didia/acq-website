import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../theme.css";
import styles from "./Layout.module.css";

const Layout = ({ render }) => <div className={styles.wrapper}>{render()}</div>;

Layout.propTypes = {
  render: PropTypes.func.isRequired
};

export default Layout;
