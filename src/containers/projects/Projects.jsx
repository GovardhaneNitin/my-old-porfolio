import React from "react";
import Article from "../../components/article/Article";
import { project1, project2, project3, project4, project5 } from "./imports";
import "./projects.css";

const Projects = () => (
  <div className="projects section__padding" id="projects">
    <div className="projects-heading">
      <h1 className="gradient__text">My Projects</h1>
    </div>
    <div className="projects-container">
      <div className="projects-container_group">
        <Article
          imgUrl={project2}
          tech="REACT | TAILWIND CSS | REDUX TOOLKIT | RAPID API"
          text="Muscially"
          info="Built a Fully Responsive UI Music WebApp. Highlights include a Spotify-style player, integrated search, and improved user experience through Shazam Core API and IP Geolocation API."
          github="https://github.com/GovardhaneNitin/musically"
        />
        <Article
          imgUrl={project1}
          tech="HTML | CSS | JS | BOOTSTRAP | PHP | MYSQL"
          text="Student's Space"
          info="A Comprehensive online platform to provide Students with valuable resources, including Course
          Materials, Assignment Solutions, Live Interaction Sessions, and more."
          github="https://github.com/GovardhaneNitin/Students-Space"
        />

        <Article
          imgUrl={project3}
          tech="REACT | JAVASCRIPT | CSS"
          text="GPT-3 Landing Page"
          info="Fully Responsive Modern Landing Page Website inspired by GPT-3, Responsive design for seamless adaptation across screens, ensuring an aesthetic and user-friendly experience that is easy to customize."
          github="https://github.com/GovardhaneNitin/landing-page-gpt3"
        />
        <Article
          imgUrl={project4}
          tech="REACT | CSS | JAVASCRIPT | REACT ICONS"
          text="Simple React Portfolio"
          info="A Simple Portfolio Website built using ReactJS, Tailwind CSS, and React Icons. It is fully responsive and compatible with all devices."
          github="#"
        />
        <Article
          imgUrl={project5}
          tech="NODE JS | EXPRESS JS | MongoDB | BOOTSTRAP | EJS"
          text="Simple URL Shortener"
          info="Shortening URLs Users can input long URLs, and the application generates a unique and concise short URL for easy sharing."
          github="https://github.com/GovardhaneNitin/url-shortener"
        />
      </div>
    </div>
  </div>
);

export default Projects;
