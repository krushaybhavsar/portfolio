import { useEffect, useState } from "react";
import "./skills.scss";
import ProgressBar from "../../components/progressBar/ProgressBar.jsx";
import { skillsData } from "../../data";

export default function Skills() {
  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    setSliderData(skillsData);
  });

  return (
    <div className="skills" id="skills">
      <h1 className="sectionTitle">Skills</h1>
      <div className="skillsCarouselContainer">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
          data-interval="2000"
          data-bs-touch="true"
          data-bs-interval="true"
        >
          <div class="carousel-inner">
            {sliderData.map((sd) => (
              <div
                className={
                  sd.id === 1 ? "carousel-item active" : "carousel-item"
                }
              >
                <div className="skillItem">
                  <div className="topWrapper">
                    <h1 className="skillName">{sd.title}</h1>
                    <img className="skillIcon" src={sd.skillIcon} />
                  </div>
                  <div className="bottomWrapper">
                    <p className="skillDescription">
                      <b>Description: </b>
                      {sd.desc}
                    </p>
                    <p className="skillProjectsUsedIn">
                      <b>Projects skill was required for: </b>
                      {sd.projectsUsedIn}
                    </p>
                    <div className="skillExperiance">
                      <b>Experience Level:</b>
                      <div className="experianceProgressBar">
                        <ProgressBar done={sd.exp} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <img src="assets/about/down.png" className="previousButton" />
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <img src="assets/about/down.png" className="nextButton" />
          </a>
        </div>
      </div>
    </div>
  );
}
