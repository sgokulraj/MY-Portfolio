import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import myPhoto from "./image.jpg";
import "./App.css";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BiLink } from "react-icons/bi";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    // console.log(location.hash);
    if (location.hash) {
      const element = document.querySelector(location.hash);
      // console.log(element);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="homeComponent">
      <div className="headContainer">
        <img src={myPhoto} alt="myphoto" className="img" />
        <div className="navbar">
          <h1>Gokulraj Sivagnanam</h1>
          <div className="underline"></div>
          <nav>
            <ul>
              <li>
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="#skills" className="link">
                  Skills
                </Link>
              </li>
              <li>
                <Link to="#projects" className="link">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="#contact" className="link">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="home">
        <h1>Hi, I'm Gokulraj</h1>
        <p>
          I'm <strong>ReactJS developer</strong> from Salem, TamilNadu. I have
          completed my engineering in Bannari amman Institute of Technology,
          Sathyamangalam with CGPA - 8.89. Currently scouting for new
          opportunities to showcase and upgrade my skills. In my spare time I
          enjoy building my own projects.
        </p>
        <div className="icons">
          <h4>My Profiles</h4>
          <a href="https://linkedin.com/in/gokulrajsivagnanam" className="linkedin">
            <FaLinkedin />
          </a>
          <a href="https://github.com/sgokulraj" className="github">
            <BsGithub />
          </a>
        </div>
        <div className="download">
          <h4>Download resume</h4>
          <a
            href="https://drive.google.com/file/d/1DuW3KjWHCLn-lvSWUHZT7S2u8czBMuEd/view?usp=drive_link"
          >
            <BiLink className="resume" />
          </a>
        </div>
        <div>
          <h4>
            Reach me @{" "}
            <a href="mailto:igokulraj412@gmail.com">
              <AiOutlineMail className="email" />
            </a>
          </h4>
        </div>
      </div>
      <div id="skills">
        <Skills />
      </div>
      {/* <div id="projects">
        <Projects />
      </div> */}
      {/* <div id="contact">
        <Contact />
      </div> */}
    </div>
  );
};

export default Home;
