import React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineMenuFold } from "react-icons/ai";
import "./MobileNav.css";
import { Link, Element } from "react-scroll";
import {
  FcAbout,
  FcBiotech,
  FcContacts,
  FcHome,
  FcPortraitMode,
  FcReadingEbook,
  FcVideoProjector,
} from "react-icons/fc";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  // handle open
  const handleOpen = () => {
    setOpen(!open);
  };

  // handle close
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="mobile-nav">
        <div className="mobile-nav-header">
          {open ? (
            <AiOutlineMenuFold
              size={30}
              className="mobile-nav-icon"
              onClick={handleOpen}
            />
          ) : (
            <GiHamburgerMenu
              size={30}
              className="mobile-nav-icon"
              onClick={handleOpen}
            />
          )}

          <span className="mobile-nav-title">My Portfolio App</span>
        </div>
        {open && (
          <div className="mobile-nav-menu">
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={100}
                    duration={100}
                    onClick={handleClose}
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
                    onClick={handleClose}
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
                    onClick={handleClose}
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
                    onClick={handleClose}
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
                    onClick={handleClose}
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
                    onClick={handleClose}
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
                    onClick={handleClose}
                  >
                    <FcContacts />
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
