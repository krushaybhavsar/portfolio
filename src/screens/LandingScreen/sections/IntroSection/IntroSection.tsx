import React, { useEffect, useState } from "react";
import "./IntroSection.css";

type Coord = { x: number; y: number };

const IntroSection = () => {
  const [blobCurrXY, setBlobCurrXY] = useState<Coord>({
    x: 0,
    y: 0,
  });
  const [targetXY, setTargetXY] = useState<Coord>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const update = (e: any) => {
      const { clientX, clientY } = e.touches ? e.touches[0] : e;
      setTargetXY({ x: clientX, y: clientY });
    };
    window.addEventListener("mousemove", update);
    window.addEventListener("touchmove", update);
    return () => {
      window.removeEventListener("mousemove", update);
      window.removeEventListener("touchmove", update);
    };
  }, []);

  const moveInteractiveBlob = () => {
    const newX = blobCurrXY.x + (targetXY.x - blobCurrXY.x) / 10;
    const newY = blobCurrXY.y + (targetXY.y - blobCurrXY.y) / 10;
    setBlobCurrXY({ x: newX, y: newY });
  };

  return (
    <div
      className="intro-section"
      onMouseMove={moveInteractiveBlob}
      onTouchMove={moveInteractiveBlob}
    >
      <div className="gradient-bg noise">
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <div
            className="interactive"
            style={{
              transform: `translate(${Math.round(blobCurrXY.x)}px, ${Math.round(
                blobCurrXY.y
              )}px)`,
            }}
          ></div>
        </div>
      </div>

      <div className="isec__left">
        <div className="text-container">
          <h1 className="title">hey, i'm krushay.</h1>
          <h3 className="subtitle">
            software developer <div className="bullet-dot" /> cs student
            <div className="bullet-dot" /> tech enthusiast
          </h3>
        </div>
      </div>
      <div className="isec__right"></div>
    </div>
  );
};

export default IntroSection;
