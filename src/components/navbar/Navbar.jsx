import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import logo from "../../assets/logo.png";
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-links_logo">
        <img src={logo} alt="logo" />
        <p>Portfolio</p>
      </div>
      <div className="navbar-links">
        <div className="navbar-links_container">
          <p>
            <a href="#home">HOME</a>
          </p>
          <p>
            <a href="#about">ABOUT</a>
          </p>
          <p>
            <a href="#skills">SKILLS</a>
          </p>
          <p>
            <a href="#projects">PROJECTS</a>
          </p>
          <p>
            <a href="#contact">CONTACT</a>
          </p>
          <p>
            <a href="https://github.com/GovardhaneNitin">
              <FaGithub /> {/* GitHub icon */}
            </a>
          </p>
        </div>
      </div>
      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center">
            <div className="navbar-menu_container-links">
              <p>
                <a href="#home">HOME</a>
              </p>
              <p>
                <a href="#about">ABOUT</a>
              </p>
              <p>
                <a href="#skills">SKILLS</a>
              </p>
              <p>
                <a href="#projects">PROJECTS</a>
              </p>
              <p>
                <a href="#contact">CONTACT</a>
              </p>
              <p>
                <a href="https://github.com/GovardhaneNitin">
                  <FaGithub /> {/* GitHub icon */}
                </a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
