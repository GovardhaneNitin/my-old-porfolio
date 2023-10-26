import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram, FaDownload } from "react-icons/fa";
import img from "../../assets/header-img.png";
import "./header.css";

const Header = () => {
  const handleResumeClick = () => {
    const resumeUrl =
      "https://cdni.iconscout.com/illustration/premium/thumb/website-launching-coming-soon-2112253-1782224.png";
    window.open(resumeUrl, "_blank");
  };

  return (
    <div className="header section__padding" id="home">
      <div className="header-content">
        <h2>Hey! I Am</h2>
        <h1 className="gradient__text">NITIN GOVARDHANE</h1>
        <h3>Full Stack Web-Developer</h3>
        <p>- In the World of Bytes, I'm always Learning</p>
        <div className="header-content__resume">
          <button type="button" onClick={handleResumeClick}>
            Resume&nbsp;
            <FaDownload />
          </button>
        </div>

        <div className="header-content__icons">
          <p>Follow Me:</p>
          <p>
            <a href="https://www.linkedin.com/in/nitingovardhane/">
              <FaLinkedin /> {/* LinkedIn icon */}
            </a>
          </p>
          <p>
            <a href="https://twitter.com/blackhawk_vk18">
              <FaTwitter /> {/* Twitter icon */}
            </a>
          </p>
          <p>
            <a href="https://instagram.com/blackhawk_vk18">
              <FaInstagram /> {/* Instagram icon */}
            </a>
          </p>
        </div>
      </div>

      <div className="header-image">
        <img src={img} alt="header-image" />
      </div>
    </div>
  );
};

export default Header;
