import html from "./logos/html.png";
import css from "./logos/css.png";
import boostrap from "./logos/bootstrap.jpg";
import javascript from "./logos/JS.png";
import react from "./logos/react.png";
import firebase from "./logos/firebase.png";
import github from "./logos/github.png";
import Projects from "./Projects";

import "./Skills.css";
function Skills() {
  return (
    <div className="skillContainer">
      <h1>
        My <span>Skills</span>
      </h1>
      <div className="logos">
        <div className="logoContainer">
          <img src={html} alt="myphoto" className="logo" />
          <h4>HTML5</h4>
        </div>
        <div className="logoContainer">
          <img src={css} alt="myphoto" className="logo" />
          <h4>CSS3</h4>
        </div>
        <div className="logoContainer">
          <img src={javascript} alt="myphoto" className="logo" />
          <h4>JavaScript</h4>
        </div>
        <div className="logoContainer">
          <img src={boostrap} alt="myphoto" className="logo" />
          <h4>Boostrap</h4>
        </div>
        <div className="logoContainer">
          <img src={react} alt="myphoto" className="logo" />
          <h4>React</h4>
        </div>
        <div className="logoContainer">
          <img src={firebase} alt="myphoto" className="logo" />
          <h4>Firebase</h4>
        </div>
        <div className="logoContainer">
          <img src={github} alt="myphoto" className="logo" />
          <h4>GitHub</h4>
        </div>
      </div>
      <div id="projects">
        <Projects />
      </div>
    </div>
  );
}

export default Skills;
