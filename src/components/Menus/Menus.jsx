import React from "react";
import "./Menus.css";
import { Link, Element } from "react-scroll";
import profileImage from "../../assets/images/profile.jpg";
import {
  FcAbout,
  FcBiotech,
  FcContacts,
  FcHome,
  FcPortraitMode,
  FcReadingEbook,
  FcVideoProjector,
} from "react-icons/fc";

export default function Menus({ isSideMenu }) {
  return (
    <>
      {isSideMenu ? (
        <>
          <div className="navbar-profile-pic">
            <img src={profileImage} alt="profile pic" />
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={100}
                  duration={100}
                >
                  <FcHome />
                  Home
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={100}
                  duration={100}
                >
                  <FcAbout />
                  About
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={100}
                  duration={100}
                >
                  <FcReadingEbook />
                  Education
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="techstack"
                  spy={true}
                  smooth={true}
                  offset={100}
                  duration={100}
                >
                  <FcBiotech />
                  Tech Stack
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={100}
                  duration={100}
                >
                  <FcVideoProjector />
                  Projects
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="workexperience"
                  spy={true}
                  smooth={true}
                  offset={100}
                  duration={100}
                >
                  <FcPortraitMode />
                  Work Experience
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={100}
                  duration={100}
                >
                  <FcContacts />
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="nav-items">
          <div className="nav-item">
            <div className="nav-link">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={100}
                duration={100}
              >
                <FcHome title="Home" />
              </Link>
            </div>

            <div className="nav-link">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={100}
                duration={100}
              >
                <FcAbout title="About" />
              </Link>
            </div>
            <div className="nav-link">
              <Link
                to="education"
                spy={true}
                smooth={true}
                offset={100}
                duration={100}
              >
                <FcReadingEbook title="Education" />
              </Link>
            </div>

            <div className="nav-link">
              <Link
                to="techstack"
                spy={true}
                smooth={true}
                offset={100}
                duration={100}
              >
                <FcBiotech title="Tech Stack" />
              </Link>
            </div>

            <div className="nav-link">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={100}
                duration={100}
              >
                <FcVideoProjector title="Projects" />
              </Link>
            </div>
            <div className="nav-link">
              <Link
                to="workexperience"
                spy={true}
                smooth={true}
                offset={100}
                duration={100}
              >
                <FcPortraitMode title="Work Experience" />
              </Link>
            </div>
            <div className="nav-link">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={100}
                duration={100}
              >
                <FcContacts title="Contact" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
