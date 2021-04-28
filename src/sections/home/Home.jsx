import { ExpandMore } from "@material-ui/icons";
import "./home.scss";
// import greenBlob from "../../media/green-blob.svg";

/* 
REFERENCES
http://findmatthew.com/   --> Project cards 
https://www.youtube.com/watch?v=I2UBjN5ER4s --> project cards
https://sebkay.com/ --> Top home header
https://www.youtube.com/watch?v=74eaw_nM5tY --> custom scrollbar

MAIN REFERANCE
https://www.youtube.com/watch?v=7WwtzsSHdpI

REACT SMOOTH SCROLL
https://www.youtube.com/watch?v=7f0QXAgFtrE
*/

export default function Home() {
  return (
    <div className="home" id="about">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/green-blob.svg" className="blob" />
          <img src="assets/me_new.png" className="me" />
          {/* <img src="assets/mask.png" className="mask" /> */}
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>My name is</h2>
          <h1>Krushay Bhavsar</h1>
          <h3>
            {/* Self-taught */}
            <br />
            <span></span>
          </h3>
          <a href="#education">
            <img src="assets/down.png" />
          </a>
        </div>
      </div>
    </div>
  );
}
