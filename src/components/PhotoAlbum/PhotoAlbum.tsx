import React, { useEffect, useRef, useState } from "react";
import "./PhotoAlbum.css";
import { PhotographyAlbum } from "../../types";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { ReactComponent as ExpandIcon } from "../../assets/slider-right-arrow.svg";
import { motion, useAnimationControls } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";

type PhotoAlbumProps = {
  album: PhotographyAlbum;
};

const PhotoAlbum = (props: PhotoAlbumProps) => {
  const [open, setOpen] = useState(props.album.id === 1 ? true : false);
  const controls = useAnimationControls();

  // useEffect(() => {
  //   if (open && !maxHeight) {
  //     setTimeout(() => {
  //       if (masonryRef.current) {
  //         setMaxHeight(masonryRef.current.clientHeight);
  //       }
  //     }, 600);
  //   }
  // }, [open]);

  useEffect(() => {
    if (open) {
      controls.start({ height: "auto" });
    } else {
      controls.start({ height: 0 });
    }
  }, [open]);

  return (
    <div className="photo-album">
      <div
        className="toggleable-header vert-flex"
        onClick={() => setOpen(!open)}
      >
        <div className="toggleable-header-container hori-flex">
          <ExpandIcon
            className={"expand-icon" + (open ? " open" : "")}
            onClick={() => setOpen(!open)}
          />
          <h2 className="title">{props.album.title.toLowerCase()}</h2>
        </div>
        <div className="divider" />
      </div>
      <motion.div
        style={{
          width: "100%",
          overflow: "hidden",
          transition:
            "all 500ms cubic-bezier(0.230, 1.000, 0.320, 1.000) !important",
        }}
        animate={controls}
      >
        <ResponsiveMasonry
          className="album-masonry-container"
          columnsCountBreakPoints={{ 700: 2 }}
        >
          <Masonry
            gutter={"20px"}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              width: "100%",
            }}
          >
            {Array.from({ length: props.album.length }, (_, i) => (
              <div key={i} className="photo-wrapper">
                <LazyLoadImage
                  src={`${process.env.PUBLIC_URL}/photography/${
                    props.album.dir
                  }/${i + 1}.jpg`}
                  alt={props.album.title + " " + (i + 1)}
                  className="photo"
                  placeholder={
                    <div
                      className="photo-placeholder glass"
                      style={{
                        animationDelay: `${i * 0.15}s`,
                      }}
                    />
                  }
                />
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </motion.div>
    </div>
  );
};

export default PhotoAlbum;
