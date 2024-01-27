import React from "react";
import "./SkillsLogo.css";
function SkillsLogo(props) {
  return (
    <div className="main">
      <span className="heading" style={{ fontSize: "40px", color: "orange" }}>
        Skills
      </span>

      <div className="webapp">
        <span>Front End Development</span>
        <br />
        <div className="logoContainer">
          <img src="/assets/react.png" alt="React" />
          <span>React</span>
        </div>
        <div className="logoContainer">
          <img src="/assets/html.png" alt="HTML" />
          <span>HTML</span>
        </div>
        <div className="logoContainer">
          <img src="/assets/css.png" alt="CSS" />
          <span>CSS</span>
        </div>
        <div className="logoContainer">
          <img src="/assets/js.png" alt="CSS" />
          <span>JavaScript</span>
        </div>
      </div>

      <div className="mobileapp">
        <div className="logoContainer">
          <img src="/assets/Flutter.png" alt="Flutter" />
          <span>Flutter</span>
        </div>

        <span>Mobile App Development</span>
      </div>
      <div className="backend">
        <span>BackEnd Development</span>
        <div className="logoContainer">
          <img src="/assets/nodejs.png" alt="MongoDB" />
          <span>NodeJS</span>
        </div>
        <div className="logoContainer">
          <img src="/assets/express.png" alt="MongoDB" />
          <span>ExpressJs</span>
        </div>
        <div className="logoContainer">
          <img src="/assets/mongodb.png" alt="MongoDB" />
          <span>MongoDB</span>
        </div>
        <div className="logoContainer">
          <img src="/assets/mysql.png" alt="MySql" />
          <span>MySQL</span>
        </div>
      </div>
      <div className="tools">
        <div className="logoContainer">
          <img src="/assets/vscode.png" alt="Vscode" />
          <span>VSCode</span>
        </div>
        <div className="logoContainer">
          <img src="/assets/git.png" alt="Vscode" />
          <span>VSCode</span>
        </div>
        <span> Development Tools</span>
      </div>
    </div>
  );
}

export default SkillsLogo;
