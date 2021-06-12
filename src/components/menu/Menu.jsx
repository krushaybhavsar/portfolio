import "./menu.scss";
import { Link, Redirect, BrowserRouter as Router } from "react-router-dom";

export default function Menu({ menuOpen, setMenuOpen }) {
  const redirectToLink = (linkURL) => {
    window.open(linkURL, "_blank");
  };
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#about">About me</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#projects">Projects</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#skills">Skills</a>
        </li>
        {/* <li onClick={() => setMenuOpen(false)}>
          <a href="#education">Education</a>
        </li> */}
        <li onClick={() => setMenuOpen(false)}>
          <a
            onClick={() =>
              redirectToLink(
                "https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:80bbedde-479c-402a-9d00-fde974204f18#pageNum=1"
              )
            }
          >
            Resume
          </a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
