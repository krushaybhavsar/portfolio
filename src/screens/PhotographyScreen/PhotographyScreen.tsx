import React, { useEffect } from "react";
import "./PhotographyScreen.css";
import { PhotographyScreenData } from "../../data";
import Navbar from "../../components/Navbar/Navbar";
import PhotoAlbum from "../../components/PhotoAlbum/PhotoAlbum";
import { motion } from "framer-motion";

type PhotographyScreenProps = {};

const PhotographyScreen = (props: PhotographyScreenProps) => {
  return (
    <div className="photography-screen noise">
      <Navbar />
      <motion.h1
        className="photography-screen-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.75 } }}
        viewport={{ once: true, amount: 1 }}
      >
        digital photography
      </motion.h1>
      {PhotographyScreenData.map((album, index) => (
        <PhotoAlbum key={index} album={album} index={index} />
      ))}
    </div>
  );
};

export default PhotographyScreen;