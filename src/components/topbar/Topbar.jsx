import React from "react";
import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a
            href="#about"
            className={"logo " + (menuOpen && "active")}
            onClick={() => setMenuOpen(false)}
          >
            {"<krushay/>"}
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>(201) 375-5770</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>krushaybhavsar@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
