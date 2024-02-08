import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
  function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
  }
  function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
  }
  return (
    <nav>
      <ul className="sidebar">
        <li onClick={hideSidebar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="50"
            viewBox="0 -960 960 960"
            width="50"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </li>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li c>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#blog">Blog</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <ul>
        <li>
          <img src="/assets/logo2.png" alt="logo" />
        </li>
        <li className="hideOnMobile">
          <a smooth href="#home">
            Home
          </a>
        </li>
        <li className="hideOnMobile">
          <a smooth href="#about">
            About
          </a>
        </li>
        <li className="hideOnMobile">
          <a smooth href="#skills">
            Skills
          </a>
        </li>
        <li className="hideOnMobile">
          <a smooth href="#projects">
            Projects
          </a>
        </li>
        <li className="hideOnMobile">
          <a smooth href="#blog">
            Blog
          </a>
        </li>
        <li className="hideOnMobile">
          <a smooth href="#contact">
            Contact
          </a>
        </li>
        <li className="menubutton" onClick={showSidebar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="50"
            viewBox="0 -960 960 960"
            width="50"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
          {/* Add your SVG code or component here */}
        </li>
      </ul>
      {/* Display the current section in the search bar */}
      {/* <input type="text" value={currentSection} readOnly /> */}
    </nav>
  );
}

export default NavBar;
