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

export default function Projects() {
  // Modal
  const [modalState, setModalState] = useState(false);
  const [modalInfo, setModalInfo] = useState([]);

  const openModal = () => {
    console.log(data[0]);
    setModalState(true);
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
      <div className={`modalBackground modalShowing-${modalState}`}>
        <div id="modal" className="modalInner">
          <div className="rightWrapper">
            <div className="modalText">
              <h2 className="modalHeaderText">Grab It</h2>
              <h6 className="toolsUsedText">
                Java, XML, Android Studio, Firebase
              </h6>
              <p className="modalBodyText">
                Grab It is a two-sided e-commerce marketplace app template for
                businesses to use. With the app that users will be able to
                download, they can purchase the goods or services the business
                offers. Through the admin panel, businesses can receive
                real-time statistics on customer engagement, manage reviews,
                list products, send push notifications, manage accounts, receive
                delivery information (if applicable to business), promote
                adverts, and have access to many other functionalities.
              </p>
              <form
                className="buttonContainer"
                action="https://play.google.com/store/apps/details?id=com.krutons.grabit"
                target="_blank"
                method="post"
              >
                <button className="linkButton" type="submit">
                  Link to Project
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
          <div className="item" onClick={() => openModal()}>
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
