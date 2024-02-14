import React, { useEffect, useState } from "react";
import "./IntroSection.css";
import BlobBackground from "../../../../components/BlobBackground/BlobBackground";
import { Coord } from "../../../../types";
import { ReactComponent as RightArrow } from "../../../../assets/arrow-right.svg";

type IntroSectionProps = {
  blobCurrXY: Coord;
};

const IntroSection = (props: IntroSectionProps) => {
  return (
    <div className="intro-section">
      <BlobBackground blobCurrXY={props.blobCurrXY} />
      <div className="isec__left">
        <div className="text-container">
          <h1 className="title">hey, i'm krushay.</h1>
          <h3 className="subtitle">
            software developer <div className="bullet-dot" /> cs student
            <div className="bullet-dot" /> tech enthusiast
          </h3>
          <button className="cta-button">
            discover my journey <RightArrow className="cta-icon" />
          </button>
        </div>
      </div>
      <div className="isec__right"></div>
    </div>
  );
};

export default IntroSection;
