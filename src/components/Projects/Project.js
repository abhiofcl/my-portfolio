import React from "react";
import "./Project.css";

const projects = [
  "/assets/projects/netflix.png",
  //   "/assets/projects/clarifai.png",
  //   "/assets/projects/clarifai.png",
  //   "/assets/projects/clarifai.png",
  //   "/assets/projects/clarifai.png",
];

function Project() {
  return (
    <>
      <div id="projects">
        {projects.map((pr) => (
          <div key={pr} className="card">
            <p>This is the project description with the link</p>
            <img src={pr} alt="" />
          </div>
        ))}
      </div>
    </>
  );
}

export default Project;
