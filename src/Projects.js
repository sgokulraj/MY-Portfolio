import ecommerce2 from "./project/ecommerce-2.jpg";
import memoryCards from "./project/memory-cards.jpg";
import database from "./project/database.jpg";
import forms from "./project/forms.jpg";
import accordion from "./project/accordion.jpg";
import Contact from "./Contact";
import "./Projects.css";

function Projects() {
  return (
    <main className="projectsContainer">
      <div>
        <h1>
          My <span>Recent Works</span>
        </h1>
      </div>
      <section>
        <div className="project">
          <img src={ecommerce2} alt="ecommerce" height={250} width={250} />
          <h4>Shopazon</h4>
          <div className="btns">
            <button className="site">
              <a href="https://shopazon-sgokulraj.netlify.app">View Site</a>
            </button>
            <button className="code">
              <a href="https://github.com/sgokulraj/React-ecommerce.git">
                View Source Code
              </a>
            </button>
          </div>
        </div>
        <div className="project">
          <img src={memoryCards} alt="memoryCards" height={250} width={250} />
          <h4>Memory Cards</h4>
          <div className="btns">
            <button className="site">
              <a href="https://memorygame-gokulraj.netlify.app">View Site</a>
            </button>
            <button className="code">
              <a href="https://github.com/sgokulraj/Javascript-Projects/tree/main/memory-game">
                View Source Code
              </a>
            </button>
          </div>
        </div>
        <div className="project">
          <img src={database} alt="memoryCards" height={250} width={250} />
          <h4>FireBase Works</h4>
          <div className="btns">
            <button className="site">
              <a href="https://firebase-auth-gokulraj.netlify.app">View Site</a>
            </button>
            <button className="code">
              <a href="https://github.com/sgokulraj/firebase-auth.git">
                View Source Code
              </a>
            </button>
          </div>
        </div>
        <div className="project">
          <img src={forms} alt="memoryCards" height={250} width={250} />
          <h4>React Forms</h4>
          <div className="btns">
            <button className="site">
              <a href="https://reactformvalidation-gokulraj.netlify.app">
                View Site
              </a>
            </button>
            <button className="code">
              <a href="https://github.com/sgokulraj/firebase-auth.git">
                View Source Code
              </a>
            </button>
          </div>
        </div>
        <div className="project">
          <img src={accordion} alt="memoryCards" height={250} width={250} />
          <h4>React Accordion</h4>
          <div className="btns">
            <button className="site">
              <a href="https://react-accordion-gokulraj.netlify.app">
                View Site
              </a>
            </button>
            <button className="code">
              <a href="https://github.com/sgokulraj/React/tree/master/accordion">
                View Source Code
              </a>
            </button>
          </div>
        </div>
      </section>
      <p className="info">
        <span>Note:</span> You can views my other works in{" "}
        <a href="https://github.com/sgokulraj">GitHub</a>
      </p>
      <div id="contact">
        <Contact />
      </div>
    </main>
  );
}

export default Projects;
