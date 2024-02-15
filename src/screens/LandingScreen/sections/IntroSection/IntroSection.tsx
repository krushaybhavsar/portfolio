import React, { useEffect, useState } from "react";
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
          <h3 className="subtitle">
            software developer <div className="bullet-dot" /> cs student
            <div className="bullet-dot" /> tech enthusiast
          </h3>
          <Link className="cta-button" to="#experience" smooth>
            discover my journey <RightArrow className="cta-icon" />
          </Link>
        </div>
      </div>
      <div className="isec__right"></div>
    </div>
  );
};

export default IntroSection;
