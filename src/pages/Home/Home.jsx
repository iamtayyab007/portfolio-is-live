import React from "react";
import { useTheme } from "../../context/context";
import "./home.css";

import MyResume from "../../assets/Docs/resume.pdf";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

export default function Home() {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleDownload = () => {
    fetch("https://portfolio-is-live.vercel.app/" + MyResume, {
      method: "GET",
      headers: {
        "Content-Type": "application/pdf",
      },
    })
      .then((response) => response.blob())
      .then((blob) => {
        // Create blob link to download
        const url = window.URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `resume.pdf`);

        // Append to html link element page
        document.body.appendChild(link);

        // Start download
        link.click();

        // Clean up and remove the link
        link.parentNode.removeChild(link);
      });
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
          <h1>Mern Stack Developer</h1>

          <div className="home-buttons">
            <a
              className="btn btn-hire"
              href="https://api.whatsapp.com/send?phone=03367818585"
              rel="noreferrer"
              target="_blank"
            >
              Hire me
            </a>

            <a className="btn btn-cv" href={MyResume} onClick={handleDownload}>
              My Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
