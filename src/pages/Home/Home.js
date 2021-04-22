import React from "react";
import greenBlob from "../../media/green-blob.svg";

/* 
REFERENCES
http://findmatthew.com/   --> Project cards 
https://www.youtube.com/watch?v=I2UBjN5ER4s --> project cards
https://sebkay.com/ --> Top home header
https://www.youtube.com/watch?v=74eaw_nM5tY --> custom scrollbar
*/

const Home = () => {
  return (
    // <div>
    //   <div>
    //     <h1 style={{ fontFamily: "montserrat" }}>
    //       My name is Krushay Bhavsar.
    //     </h1>
    //   </div>
    //   <div style={{ textAlign: "right" }}>
    //     <img src={greenBlob} style={{ width: 800, margin: 50 }} />
    //   </div>
    // </div>
    <div className="container">
      <h1
        className="text-center"
        style={{ paddingTop: "30%", fontFamily: "montserrat" }}
      >
        Site under development. Check back soon!
      </h1>
    </div>
  );
};

export default Home;
