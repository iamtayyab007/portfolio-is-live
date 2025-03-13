import React from "react";
import { useTheme } from "../../context/context";
import "./home.css";
import Typewriter from "typewriter-effect";
import MyResume from "../../assets/Docs/resume.txt";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

export default function Home() {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>
        <div className="container home-content">
          <h2>Hi 👋 I'm a</h2>
          <h1>
            <Typewriter
              options={{
                strings: ["Mern stack Developer!"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>

          <div className="home-buttons">
            <a
              className="btn btn-hire"
              href="https://api.whatsapp.com/send?phone=03367818585"
              rel="noreferrer"
              target="_blank"
            >
              Hire me
            </a>

            <a className="btn btn-cv" href={MyResume} download="resume.pdf">
              My Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
