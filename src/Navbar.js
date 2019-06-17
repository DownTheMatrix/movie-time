import React, {Component} from "react";
import "./Navbar.css";
import logo from "./images/db-logo.svg";

class Navbar extends Component {
    render() {
        return (
            <nav className="Navbar">
                <div className="Navbar-logo">
                    <img src={logo} alt=""/>
                </div>
            </nav>
        );
    }
}

export default Navbar;