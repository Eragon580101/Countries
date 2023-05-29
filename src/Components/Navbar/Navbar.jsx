import React from 'react'
import './Navbar.scss'

const Navbar = ({toggleDarkMode, darkModeOn}) => {
  return (
    <div className="header">
        <h1>Where in the world?</h1>
        <div onClick={toggleDarkMode} className="header__color-mode">
          {darkModeOn && <i className="fas fa-moon"></i>}
          {!darkModeOn && <i className="fa-regular fa-moon"></i>}
          <span>Dark Mode</span>
        </div>
      </div>
  )
}

export default Navbar