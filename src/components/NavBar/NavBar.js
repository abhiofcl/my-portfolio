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
          <Link to="#home">Home</Link>
        </li>
        <li>
          <Link to="#about">About</Link>
        </li>
        <li c>
          <Link to="#skills">Skills</Link>
        </li>
        <li>
          <Link to="#projects">Projects</Link>
        </li>
        <li>
          <Link to="#blog">Blog</Link>
        </li>
        <li>
          <Link to="#contact">Contact</Link>
        </li>
      </ul>
      <ul>
        <li>
          <img src="/assets/logo2.png" alt="logo" />
        </li>
        <li className="hideOnMobile">
          <Link smooth to="#home">
            Home
          </Link>
        </li>
        <li className="hideOnMobile">
          <Link smooth to="#about">
            About
          </Link>
        </li>
        <li className="hideOnMobile">
          <Link smooth to="#skills">
            Skills
          </Link>
        </li>
        <li className="hideOnMobile">
          <Link smooth to="#projects">
            Projects
          </Link>
        </li>
        <li className="hideOnMobile">
          <Link smooth to="#blog">
            Blog
          </Link>
        </li>
        <li className="hideOnMobile">
          <Link smooth to="#contact">
            Contact
          </Link>
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
