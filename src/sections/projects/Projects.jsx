import { useEffect, useState } from "react";
import ProjectList from "../../components/projectList/ProjectList.jsx";
import "./projects.scss";
import {
  allProjects,
  webApps,
  mobileApps,
  machineLearning,
  otherProjects,
} from "../../data";

export default function Projects({
  modalState,
  setModalState,
  menuOpen,
  setMenuOpen,
}) {
  // Modal
  const [modalInfo, setModalInfo] = useState([]);

  const openModal = (projectID) => {
    setModalInfo(data[projectID - 1]);
    setMenuOpen(false);
    setModalState(true);
  };

  const redirectToLink = (linkURL) => {
    window.open(linkURL, "_blank");
  };

  // Categories
  const [selected, setSelected] = useState("all");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "all",
      title: "All Projects",
    },
    {
      id: "ml",
      title: "Machine Learning",
    },
    {
      id: "mobile",
      title: "Mobile Apps",
    },
    {
      id: "web",
      title: "Web Apps",
    },
    {
      id: "other",
      title: "Other",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "all":
        setData(allProjects);
        break;
      case "web":
        setData(webApps);
        break;
      case "mobile":
        setData(mobileApps);
        break;
      case "ml":
        setData(machineLearning);
        break;
      case "other":
        setData(otherProjects);
        break;
    }
  }, [selected]);

  return (
    <div className="projects" id="projects">
      <div
        className={`modalBackground modalShowing-${modalState}`}
        onClick={() => setModalState(false)}
      >
        <div id="modal" className="modalInner">
          <div className="rightWrapper">
            <div className="modalText">
              <h2 className="modalHeaderText">{modalInfo.modalHeader}</h2>
              <h6 className="toolsUsedText">{modalInfo.modalTools}</h6>
              <p className="modalBodyText">{modalInfo.modalDesc}</p>
              <form className="buttonContainer">
                <button
                  className="linkButton"
                  onClick={() => redirectToLink(modalInfo.modalLink)}
                >
                  {modalInfo.modalButtonTxt}
                </button>
              </form>
            </div>
            {/* <button className="xButton" onClick={() => setModalState(false)}>
              <img
                className="xButtonImg"
                src="assets/projects/xbtn.png"
                alt=""
              />
            </button> */}
          </div>
        </div>
        <div
          className="floatingCloseButton"
          onClick={() => setModalState(false)}
        >
          <img className="floatingXImg" src="assets/projects/xbtn.png" />
        </div>
      </div>
      <h1>Featured Projects</h1>
      <ul>
        {list.map((item) => (
          <ProjectList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item" onClick={() => openModal(d.id)}>
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
      <div className="wrapper">
        <a href="#skills">
          <img src="assets/about/down.png" />
        </a>
      </div>
    </div>
  );
}
