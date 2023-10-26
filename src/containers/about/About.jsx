import React from "react";
import "./about.css";
import myGif from "../../assets/about.gif";

const About = () => (
  <div className="about section__margin" id="about">
    <div className="about-image">
      <img src={myGif} alt="myGif" />
    </div>
    <div className="about-heading">
      <h1 className="gradient__text">About Me</h1>
      <p>
        Hii!👋 I'm Nitin, a Computer Science Student with skills in Full-Stack
        Web Development (MERN), Java, C++, and Software Engineering. 😊 I'm
        passionate about Technology and love exploring new things, gaining
        Knowledge along the way. 💡
      </p>
      <p>
        I've already built numerous Web Development projects, showcasing my
        trustworthiness and strong understanding of Technology. 💻
      </p>
      <p>
        As an Intermediate Programmer, I'm driven to achieve more. 🎯 I can
        bring to the table my skills in Full-Stack Web Development, Programming
        languages, and Commitment to Excellence. 🏆
      </p>
    </div>
  </div>
);

export default About;
