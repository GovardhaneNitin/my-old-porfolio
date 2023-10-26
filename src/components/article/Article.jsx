import React from "react";
import "./article.css";
import { FaGithub } from "react-icons/fa";

const Article = ({ imgUrl, tech, text, info, github }) => (
  <div className="projects-container_article">
    <div className="projects-container_article-image">
      <img src={imgUrl} alt="projects_image" />
    </div>
    <div className="projects-container_article-content">
      <div>
        <p className="tech gradient__text">{tech}</p>
        <h3>{text}</h3>
        <p className="info">{info}</p>
      </div>
      <a href={github}>
        <FaGithub />
      </a>
    </div>
  </div>
);

export default Article;
