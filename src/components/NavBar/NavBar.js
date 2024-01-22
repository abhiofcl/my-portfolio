import React from "react";
import "./Navbar.css";
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
            height="30"
            viewBox="0 -960 960 960"
            width="30"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </li>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Skills</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#">Logo</a>
        </li>
        <li className="hideOnMobile">
          <a href="#">Home</a>
        </li>
        <li className="hideOnMobile">
          <a href="#">About</a>
        </li>
        <li className="hideOnMobile">
          <a href="#">Skills</a>
        </li>
        <li className="hideOnMobile">
          <a href="#">Projects</a>
        </li>
        <li className="hideOnMobile">
          <a href="#">Blog</a>
        </li>
        <li className="hideOnMobile">
          <a href="#">Contact</a>
        </li>
        <li className="menubutton" onClick={showSidebar}>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="26"
              viewBox="0 -960 960 960"
              width="26"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
