import React, { useContext } from "react";
import { ThemeContext } from "../../App";
import "./Navbar.scss";

const Navbar = () => {
  const { darkModeOn, setDarkModeOn } = useContext(ThemeContext);

  const handleDarkMode = () => {
    console.log("clicked");
    document.body.classList.toggle("dark");
    setDarkModeOn(!darkModeOn);
  };

  return (
    <div className={`header ${darkModeOn ? "dark" : ""}`}>
      <h1>Where in the world?</h1>
      <div onClick={handleDarkMode} className="header__color-mode">
        {darkModeOn && <i className="fas fa-moon"></i>}
        {!darkModeOn && <i className="fa-regular fa-moon"></i>}
        <span>Dark Mode</span>
      </div>
    </div>
  );
};

export default Navbar;
