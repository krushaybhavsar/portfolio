import { ExpandMore } from "@material-ui/icons";
import "./home.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
// import greenBlob from "../../media/green-blob.svg";

/* 
REFERENCES
http://findmatthew.com/   --> Project cards 
https://www.youtube.com/watch?v=I2UBjN5ER4s --> project cards
https://www.youtube.com/watch?v=74eaw_nM5tY --> custom scrollbar

MAIN REFERANCE
https://www.youtube.com/watch?v=7WwtzsSHdpI

REACT SMOOTH SCROLL
https://www.youtube.com/watch?v=7f0QXAgFtrE
*/

// https://hookagency.com/color-schemes/

export default function Home() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      strings: ["Programmer", "Game Developer", "Web Developer"],
    });
  }, []);
  return (
    <div className="home" id="about">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/about/green-blob.svg" className="blob" />
          <img src="assets/about/me_new.png" className="me" />
          {/* <img src="assets/mask.png" className="mask" /> */}
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2 style={{ overflow: "hidden" }}>My name is</h2>
          <h1>Krushay Bhavsar</h1>
          <h3>
            {"Passionate "}
            <span ref={textRef}></span>
          </h3>
          <a href="#projects">
            <img src="assets/about/down.png" />
          </a>
        </div>
      </div>
    </div>
  );
}
