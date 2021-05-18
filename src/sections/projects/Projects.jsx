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
          <div className="item">
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
