import React from "react";
import Home from "../../pages/Home/Home";
import "./Layout.css";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { useState } from "react";
import Menus from "../Menus/Menus";

export default function Layout() {
  const [isSideMenu, setIsSideMenu] = useState(false);

  const handleToggleMenu = () => {
    setIsSideMenu(!isSideMenu);
  };
  return (
    <>
      <div className="sidebar-section">
        <div className={`${isSideMenu ? "sidebar-toggle sidebar" : "sidebar"}`}>
          <div className="sidebar-toggle-icons">
            <p>
              {isSideMenu ? (
                <AiOutlineDoubleLeft size={30} onClick={handleToggleMenu} />
              ) : (
                <AiOutlineDoubleRight size={30} onClick={handleToggleMenu} />
              )}
            </p>
          </div>
          <Menus isSideMenu={isSideMenu} />
        </div>
        <div className="container">
          <Home />
        </div>
      </div>
    </>
  );
}
