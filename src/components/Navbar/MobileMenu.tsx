import React, { useState } from "react";
import "./MobileMenu.css";
import { ReactComponent as MenuIcon } from "../../assets/menu-icon.svg";
import { HashLink as Link } from "react-router-hash-link";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mobile-menu">
      <button
        className={"hamburger mobile-menu-btn glass" + (open ? " active" : "")}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={"mobile-menu-content glass" + (open ? " active" : "")}>
        <Link
          to={"#intro"}
          smooth
          className="navbar__menu-item "
          onClick={() => setOpen(false)}
        >
          about
        </Link>
        <div className="divider" />
        <Link
          to={"#experience"}
          smooth
          className="navbar__menu-item "
          onClick={() => setOpen(false)}
        >
          journey
        </Link>
        <div className="divider" />
        <Link
          to={"#projects"}
          smooth
          className="navbar__menu-item "
          onClick={() => setOpen(false)}
        >
          projects
        </Link>
        <div className="divider" />
        <Link
          to={"#contact"}
          smooth
          className="navbar__menu-item "
          onClick={() => setOpen(false)}
        >
          contact
        </Link>
        {/* <div className="divider" />
        <Link
          to={"blog"}
          smooth
          className="navbar__menu-item "
        >
          blog
        </Link> */}
        <div className="divider" />
        <div
          className="navbar__menu-item "
          onClick={() => {
            setOpen(false);
            window.open(
              window.origin + "/assets/Krushay_Bhavsar_Resume.pdf",
              "_blank"
            );
          }}
        >
          resume
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;