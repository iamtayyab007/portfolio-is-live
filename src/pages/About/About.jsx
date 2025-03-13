import React from "react";
import "./About.css";
import profileImage from "../../assets/images/profile.jpg";
import Roll from "react-reveal/Roll";
export default function About() {
  return (
    <>
      <div className="about" id="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <Roll>
              <img src={profileImage} alt="profile_pic" />
            </Roll>
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About Me</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio reprehenderit animi eligendi ratione amet eius.
              Reprehenderit, atque, fugit quasi, laboriosam autem deserunt
              accusantium quod nisi non quibusdam rerum provident minus!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
