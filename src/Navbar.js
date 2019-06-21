import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="Navbar">
        <div className="Navbar-heading">
          <h1>Movie<span className="hl">Time</span></h1>
        </div>
      </nav>
    );
  }
}

export default Navbar;
