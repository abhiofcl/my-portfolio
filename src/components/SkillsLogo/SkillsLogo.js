import React from "react";
import "./SkillsLogo.css";

function SkillsLogo(props) {
  return (
    <>
      <div
        className="heading"
        style={{ top: "0", fontSize: "40px", color: "orange" }}
      >
        Skills
      </div>
      <div className="container">
        <div className="main">
          <div className="webapp">
            <span style={{ fontSize: "20px" }} className="sectionHeading">
              Front End Development
            </span>

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
              <br />
              <span>CSS</span>
            </div>
            <div className="logoContainer">
              <img src="/assets/js.png" alt="CSS" />
              <span>JavaScript</span>
            </div>
          </div>

          <div className="mobileapp">
            <span style={{ fontSize: "20px" }} className="sectionHeading">
              Mobile App Development
            </span>
            <div className="logoContainer">
              <img src="/assets/Flutter.png" alt="Flutter" />
              <span>Flutter</span>
            </div>
          </div>

          <div className="backend">
            <span style={{ fontSize: "20px" }} className="sectionHeading">
              BackEnd Development
            </span>
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
            <span style={{ fontSize: "20px" }} className="sectionHeading">
              {" "}
              Development Tools
            </span>
            <div className="logoContainer">
              <img src="/assets/vscode.png" alt="Vscode" />
              <span>VSCode</span>
            </div>
            <div className="logoContainer">
              <img src="/assets/git.png" alt="Vscode" />
              <br />
              <span>Git</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillsLogo;
