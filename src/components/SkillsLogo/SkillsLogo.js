import React from "react";
import "./SkillsLogo.css";
function SkillsLogo(props) {
  const url = props.urlValue;
  const alt = props.altValue;
  return (
    <div className="logoContainer">
      <img src={`/assets/${url}`} alt={`${alt} logo`} />
      <br />
      <span>{alt}</span>
    </div>
  );
}

export default SkillsLogo;
