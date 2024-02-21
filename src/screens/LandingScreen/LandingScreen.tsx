import React, { useEffect, useState } from "react";
import "./LandingScreen.css";
import IntroSection from "./sections/IntroSection/IntroSection";
import Navbar from "../../components/Navbar/Navbar";
import { Coord } from "../../types";
import ExperienceSection from "./sections/ExperienceSection/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection/ProjectsSection";
import ContactSection from "./sections/ContactSection/ContactSection";
import SkillsSection from "./sections/SkillsSection/SkillsSection";

const LandingScreen = () => {
  const interactiveBlobIsEnabled = false;
  const [targetXY, setTargetXY] = useState<Coord>({
    x: 0,
    y: 0,
  });

  const [blobCurrXY, setBlobCurrXY] = useState<Coord>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    if (interactiveBlobIsEnabled) {
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
    }
  }, [interactiveBlobIsEnabled]);

  const moveInteractiveBlob = () => {
    const newX = blobCurrXY.x + (targetXY.x - blobCurrXY.x) / 10;
    const newY = blobCurrXY.y + (targetXY.y - blobCurrXY.y) / 10;
    setBlobCurrXY({ x: newX, y: newY });
  };

  return (
    <div
      className="landing-screen"
      onMouseMove={interactiveBlobIsEnabled ? moveInteractiveBlob : undefined}
      onTouchMove={interactiveBlobIsEnabled ? moveInteractiveBlob : undefined}
    >
      <Navbar />
      <IntroSection
        sectionID="intro"
        blobCurrXY={blobCurrXY}
        iblobEnabled={interactiveBlobIsEnabled}
      />
      <ExperienceSection sectionID="experience" />
      <ProjectsSection sectionID="projects" />
      <SkillsSection sectionID="skills" />
      <ContactSection sectionID="contact" />
    </div>
  );
};

export default LandingScreen;
