import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import SkillsLogo from "./components/SkillsLogo/SkillsLogo";
function App() {
  return (
    <div className="index">
      <NavBar />

      <div className="logos">
        <SkillsLogo />
      </div>
    </div>
  );
}

export default App;
