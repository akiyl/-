import React from "react";
import moonIcon from "../images/icon-moon.svg";
import sunIcon from "../images/icon-sun.svg";
import Background from "../images/bg-desktop-dark.jpg";
export default function Header({
  isDarkMode,
  handleDarkMode,
  handleLightMode,
}) {
  return (
    <div
      className={
        isDarkMode ? "home-page-container-dark" : "home-page-container-light"
      }
    >
      <img
        src="../images/bg-desktop-light.jpg"
        className={isDarkMode ? "hidden" : "home-page-image"}
        alt="background-lite"
      />
      <img
        src={Background}
        className={!isDarkMode ? "hidden" : "home-page-image"}
        alt="background-dark"
      />

      <div className="todo-container">
        <h1 className="title">TODO</h1>
        <div>
          <img
            src={moonIcon}
            alt="moon"
            className={isDarkMode ? "hidden" : "theme-icon"}
            onClick={handleDarkMode}
          />
          <img
            className={!isDarkMode ? "hidden" : "theme-icon"}
            src={sunIcon}
            onClick={handleLightMode}
          />
        </div>
      </div>
    </div>
  );
}
