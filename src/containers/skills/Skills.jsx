import { React } from "react";
import {
  java,
  c,
  cpp,
  html,
  css,
  js,
  git,
  bootstrap,
  tailwind,
  react,
  nodejs,
  mysql,
} from "./imports";
import "./skills.css";

const Skills = () => {
  return (
    <div className="skills section__padding" id="skills">
      <div className="skills-heading">
        <h1 className="gradient__text">Skills</h1>
        <p>My Skills Progress so far</p>
      </div>
      <ul className="carousel-list">
        <li>
          <div className="mylang">
            <div className="lang-info">
              <div className="lang-img">
                <img src={java} alt="java" />
              </div>
              <h3>Java</h3>
              <p className="intermediate">Intermediate</p>
            </div>
          </div>
        </li>
        <li>
          <div className="mylang">
            <div className="lang-info">
              <div className="lang-img">
                <img src={c} alt="C" />
              </div>
              <h3>C</h3>
              <p className="intermediate">Intermediate</p>
            </div>
          </div>
        </li>
        <li>
          <div className="mylang">
            <div className="lang-info">
              <div className="lang-img">
                <img src={cpp} alt="CPP" />
              </div>
              <h3>C++</h3>
              <p className="junior">Junior</p>
            </div>
          </div>
        </li>
        <li>
          <div className="mylang">
            <div className="lang-info">
              <div className="lang-img">
                <img src={html} alt="HTML" />
              </div>
              <h3>HTML</h3>
              <p className="intermediate">Intermediate</p>
            </div>
          </div>
        </li>
        <li>
          <div className="mylang">
            <div className="lang-info">
              <div className="lang-img">
                <img src={css} alt="CSS" />
              </div>
              <h3>CSS</h3>
              <p className="intermediate">Intermediate</p>
            </div>
          </div>
        </li>
        <li>
          <div className="mylang">
            <div className="lang-info">
              <div className="lang-img">
                <img src={js} alt="JavaScript" />
              </div>
              <h3>JavaScript</h3>
              <p className="junior">Junior</p>
            </div>
          </div>
        </li>
        <li>
          <div className="mylang">
            <div className="lang-info">
              <div className="lang-img">
                <img src={git} alt="GIT" />
              </div>
              <h3>Git</h3>
              <p className="beginner">Beginner</p>
            </div>
          </div>
        </li>
        <li>
          <div className="mylang">
            <div className="lang-info">
              <div className="lang-img">
                <img src={bootstrap} alt="Bootstrap" />
              </div>
              <h3>Bootstrap</h3>
              <p className="junior">Junior</p>
            </div>
          </div>
        </li>
        <li>
          <div className="mylang">
            <div className="lang-info">
              <div className="lang-img">
                <img src={tailwind} alt="Tailwind" />
              </div>
              <h3>Tailwind</h3>
              <p className="beginner">Beginner</p>
            </div>
          </div>
        </li>
        <li>
          <div className="mylang">
            <div className="lang-info">
              <div className="lang-img">
                <img src={react} alt="React" />
              </div>
              <h3>React</h3>
              <p className="junior">Junior</p>
            </div>
          </div>
        </li>
        <li>
          <div className="mylang">
            <div className="lang-info">
              <div className="lang-img">
                <img src={nodejs} alt="NodeJs" />
              </div>
              <h3>Node.js</h3>
              <p className="beginner">Beginner</p>
            </div>
          </div>
        </li>
        <li>
          <div className="mylang">
            <div className="lang-info">
              <div className="lang-img">
                <img src={mysql} alt="MySQL" />
              </div>
              <h3>MySQL</h3>
              <p className="junior">Junior</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Skills;
