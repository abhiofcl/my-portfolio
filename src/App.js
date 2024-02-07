import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import SkillsLogo from "./components/SkillsLogo/SkillsLogo";
import About from "./components/About/About.js";

function App() {
  return (
    <div className="index">
      <NavBar />
      <About></About>
      <SkillsLogo />
    </div>
  );
}

export default App;
