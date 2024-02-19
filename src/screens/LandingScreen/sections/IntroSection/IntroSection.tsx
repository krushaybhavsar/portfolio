import React from "react";
import "./IntroSection.css";
import BlobBackground from "../../../../components/BlobBackground/BlobBackground";
import { Coord, LandingPageSectionProps } from "../../../../types";
import { ReactComponent as RightArrow } from "../../../../assets/arrow-right.svg";
import { HashLink as Link } from "react-router-hash-link";

type IntroSectionProps = {
  blobCurrXY: Coord;
  iblobEnabled: boolean;
} & LandingPageSectionProps;

const IntroSection = (props: IntroSectionProps) => {
  return (
    <div className="intro-section noise" id={props.sectionID}>
      <BlobBackground
        blobCurrXY={props.blobCurrXY}
        iblobEnabled={props.iblobEnabled}
      />
      <div className="isec__left">
        <div className="text-container">
          <h1 className="title">hey, i'm krushay.</h1>
          <h2 className="subtitle">
            <Link
              to={"#projects"}
              smooth
              className="intro-link animated-underline"
            >
              software developer
            </Link>
            <div className="bullet-dot" />
            <a
              aria-label="Georgia Tech"
              className="intro-link animated-underline"
              href="https://www.gatech.edu"
              target="_blank"
              rel="noreferrer"
            >
              cs student
            </a>
            <div className="bullet-dot" />
            <Link to="/blog" className="intro-link animated-underline">
              tech enthusiast
            </Link>
          </h2>
          <Link
            className="cta-button fill-transition-btn"
            to="#experience"
            smooth
          >
            discover my journey <RightArrow className="cta-icon" />
          </Link>
        </div>
      </div>
      <div className="isec__right"></div>
    </div>
  );
};

export default IntroSection;
