import { ExpandMore } from "@material-ui/icons";
import "./home.scss";

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
