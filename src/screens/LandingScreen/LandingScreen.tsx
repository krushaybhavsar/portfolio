import React, { useEffect, useState } from "react";
import "./LandingScreen.css";
import IntroSection from "./sections/IntroSection/IntroSection";
import Navbar from "../../components/Navbar/Navbar";
import { Coord } from "../../types";

const LandingScreen = () => {
  const [targetXY, setTargetXY] = useState<Coord>({
    x: 0,
    y: 0,
  });

  const [blobCurrXY, setBlobCurrXY] = useState<Coord>({
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
      className="landing-screen"
      onMouseMove={moveInteractiveBlob}
      onTouchMove={moveInteractiveBlob}
    >
      <Navbar />
      <IntroSection blobCurrXY={blobCurrXY} />
    </div>
  );
};

export default LandingScreen;
