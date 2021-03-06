import "./menu.scss";

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
                "https://krushaybhavsar.com/assets/Krushay_Bhavsar_Resume.pdf"
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
            onClick={() => redirectToLink("https://github.com/krushaybhavsar")}
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
    </div>
  );
}
