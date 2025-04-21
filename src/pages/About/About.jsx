import React from "react";
import "./About.css";
import profileImage from "../../assets/images/profile.jpg";

export default function About() {
  return (
    <>
      <div className="about" id="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img src={profileImage} alt="profile_pic" />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About Me</h1>
            <p>
              I am a graduated Software Engineer and Full Stack MERN Developer
              with expertise in MongoDB, Express.js, React, Node.js, Next.js,
              and TypeScript. I build modern, scalable web apps with a focus on
              performance and clean architecture. Previously, I worked as a
              WordPress Developer, creating SEO-optimized websites and blogs. My
              experience spans both custom full-stack development and CMS-based
              solutions, allowing me to deliver efficient, user-focused digital
              products.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
