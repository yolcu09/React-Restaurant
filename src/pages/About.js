import React from "react";
import BannerImage from "../assets/1beef.jpg";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      >
        <div className="aboutBottom">
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem corporis, illum molestias quos assumenda, hic, vitae
            est beatae dolorum recusandae cum perferendis aut. Corporis aliquam
            adipisci rerum nihil nulla odit?
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
