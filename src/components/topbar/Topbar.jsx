import React from "react";
import "./topbar.scss";
import { Person, Mail, GetApp, GetAppRounded } from "@material-ui/icons";
import "../../sections/projects/Projects.jsx";
import { Link } from "react-router-dom";

// https://uicookies.com/html-social-media-icons/
// https://codepen.io/michaelrossi/pen/NPRzwO

export default function Navbar({
  menuOpen,
  setMenuOpen,
  modalState,
  setModalState,
}) {
  const logoActions = () => {
    setMenuOpen(false);
    setModalState(false);
  };

  const hamburgerActions = () => {
    setMenuOpen(!menuOpen);
    setModalState(false);
  };

  const redirectToLink = (linkURL) => {
    window.open(linkURL, "_blank");
  };

  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a
            href="#about"
            className={"logo " + (menuOpen && "active")}
            onClick={() => logoActions()}
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
        <div className={"center " + (menuOpen && "active")}>
          <a
            className={"resumeContainer " + (menuOpen && "active")}
            href="/assets/Krushay_Bhavsar_Resume.pdf"
            target="_blank"
            download
          >
            <GetAppRounded
              className={"downloadIcon " + (menuOpen && "active")}
            />
            <p className="downloadText">Download Resume</p>
          </a>
        </div>
        <div className="right">
          <div className="socialsContainer">
            <div className="socials">
              <div
                className={"linkedInDiv " + (menuOpen && "active")}
                onClick={() =>
                  redirectToLink("https://www.linkedin.com/in/krushaybhavsar/")
                }
              >
                <i className="fa fa-linkedin"></i>
              </div>
              <div
                className={"githubDiv " + (menuOpen && "active")}
                onClick={() =>
                  redirectToLink("https://github.com/krushaybhavsar")
                }
              >
                <i className="fa fa-github"></i>
              </div>
              <div
                className={"instaDiv " + (menuOpen && "active")}
                onClick={() =>
                  redirectToLink("https://www.instagram.com/krushaybhavsar/")
                }
              >
                <i className="fa fa-instagram"></i>
              </div>
              <div
                className={"youtubeDiv " + (menuOpen && "active")}
                onClick={() =>
                  redirectToLink(
                    "https://www.youtube.com/channel/UCgpfQDfxE8OgeKkBc9RTwXA/featured"
                  )
                }
              >
                <i className="fa fa-youtube"></i>
              </div>
            </div>
          </div>
          <div className="hamburger" onClick={() => hamburgerActions()}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
