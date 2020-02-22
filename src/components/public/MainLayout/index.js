import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../theme.css";
import styles from "./Layout.module.css";
import Logo from "../../Logo";
import {Link} from "gatsby";

const Layout = ({ render }) =>
  <div className={styles.wrapper}>
    <section key="header" id="header">
      <div className="container">
        <nav id="nav">
          <ul>
            <li>
              <Link to="/" className="icon fa-home">
                <span>Accueil</span>
              </Link>
            </li>
            <li>
              <Link to="#activites" className="icon fa-calendar">
                <span>Activités</span>
              </Link>
            </li>
            <li>
              <Link to="#nouvelles" className="icon fa-newspaper-o">
                <span>Nouvelles</span>
              </Link>
            </li>
            <li>
              <Link to="#contact" className="icon fa-users">
                <span>Contacts</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>

    {render()}
  </div>;

Layout.propTypes = {
  render: PropTypes.func.isRequired
};

export default Layout;
