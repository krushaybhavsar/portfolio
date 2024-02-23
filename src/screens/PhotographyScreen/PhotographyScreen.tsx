import React, { useEffect, useState } from "react";
import "./PhotographyScreen.css";
import { PhotographyScreenData } from "../../data";
import Navbar from "../../components/Navbar/Navbar";
import PhotoAlbum from "../../components/PhotoAlbum/PhotoAlbum";

type PhotographyScreenProps = {};

const PhotographyScreen = (props: PhotographyScreenProps) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="photography-screen noise">
      <Navbar />
      <h1 className="photography-screen-title">digital photography</h1>
      {PhotographyScreenData.map((album, index) => (
        <PhotoAlbum key={index} album={album} />
      ))}
    </div>
  );
};

export default PhotographyScreen;
