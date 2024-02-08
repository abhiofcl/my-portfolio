import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import SkillsLogo from "./components/SkillsLogo/SkillsLogo";
import About from "./components/About/About.js";
import Contact from "./components/Contact/Contact";
import Project from "./components/Projects/Project";

function App() {
  return (
    <div className="index">
      <NavBar />
      {/* <About></About>
      <SkillsLogo /> */}
      <Project />
      {/* <footer>
        <Contact />
      </footer> */}
    </div>
  );
}

export default App;
