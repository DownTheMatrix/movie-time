import React from "react";
import logo from "../images/db-logo.svg";
import "./Footer.css";

const Footer = props => {
  return (
    <footer className="Footer">
      <div className="Footer-logo">
        <a
          href="https://www.themoviedb.org/?language=en-US"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} alt="The Movie Database Logo" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
