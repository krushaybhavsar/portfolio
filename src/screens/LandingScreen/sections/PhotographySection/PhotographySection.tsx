import "./PhotographySection.css";
import "../../LandingScreen.css";
import { LandingPageSectionProps } from "../../../../types";
import { motion, useAnimationControls, useInView } from "framer-motion";
import { useRef, useState } from "react";
import useWindowDimensions from "../../../../utils/useWindowDimensions";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { PhotographyScreenData } from "../../../../data";
import { useNavigate } from "react-router-dom";

type PhotographySectionProps = {} & LandingPageSectionProps;

const PhotographySection = (props: PhotographySectionProps) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.25, once: true });
  const { width } = useWindowDimensions();
  const [data, setData] = useState(PhotographyScreenData);
  const controls = useAnimationControls();
  const album = data[0];
  const navigate = useNavigate();

  return (
    <>
      <div className="photography-section noise" id={props.sectionID}>
        <motion.h1
          className="photography-section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.75 } }}
          viewport={{ once: true, amount: 1 }}
        >
          digital photography
        </motion.h1>
        <motion.div
          className="photography-section-wrapper"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.75 } }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="photography-section-content" ref={containerRef}>
            <div className="preview-photo-album">
              <ResponsiveMasonry className="album-masonry-container" columnsCountBreakPoints={{ 650: 2, 800: 4 }}>
                <Masonry
                  gutter={"10px"}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    width: "100%",
                  }}
                >
                  {Array.from({ length: album.length }, (_, i) => (
                    <img
                      key={i}
                      src={`/photography/${album.dir}/${i + 1}.jpg`}
                      alt={album.title + " " + (i + 1)}
                      className="photo"
                      onClick={() => navigate(`/photography`)}
                      style={{
                        cursor: "pointer",
                      }}
                    />
                  ))}
                </Masonry>
              </ResponsiveMasonry>
            </div>
          </div>
          <button className="cta-button fill-transition-btn" onClick={() => navigate(`/photography`)}>
            <p>View all photos</p>
          </button>
        </motion.div>
      </div>
    </>
  );
};

export default PhotographySection;
