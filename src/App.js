import Home from "./Home";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="#skills" element={<Skills />} />
        <Route path="#projects" element={<Projects />} />
        <Route path="#contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
