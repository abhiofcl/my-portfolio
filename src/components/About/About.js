import React from "react";
import "./About.css";
function About() {
  return (
    <>
      <div id="about">
        <div className="mainContainer">
          <img
            style={{ width: "200px", height: "200px" }}
            src="/assets/pp3.png"
            alt="my image"
          />

          <h2>Hello there</h2>

          <h1>
            <b> I am Abhishek V</b>
          </h1>

          <p>
            I am currently pursuing a B.Tech in Electronics and Communication
            Engineering (ECE) at NSS College of Engineering. Alongside my
            academic studies, I have developed proficiency in React and Flutter
            , enabling me to create intuitive user interfaces and develop
            interactive applications. I also have a keen interest in
            Cybersecurity , specifically Red teaming, and I actively engage in
            personal projects and contribute to open-source initiatives. I am
            seeking opportunities to apply my skills and make a positive impact
            in a professional setting, leveraging my ECE education, React and
            Flutter expertise, and cybersecurity knowledge.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
