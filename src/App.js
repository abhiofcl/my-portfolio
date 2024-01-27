import "./App.css";
import NavBar from "./components/NavBar/NavBar";
// import { styled } from "styled-components";
import { useState, useRef, useEffect } from "react";
import SkillsLogo from "./components/SkillsLogo/SkillsLogo";
function App() {
  const [isView, setisView] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setisView(entry.isIntersecting);
      console.log("entry", entry);
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="index">
      <NavBar />
      <div className="intro">
        <section className="intro">THis is the introduction page</section>
      </div>
      <div ref={ref} className="container">
        <section className={`hidden ${isView ? "slide-in" : ""}`}>
          <h1>Hello there </h1>
          <h2>Welcome to my website</h2>
        </section>
        <section className={`hiddenR ${isView ? "slide-in-delayed" : ""}`}>
          <h2>Here you can find many information about me</h2>
          <p>
            Many contents are included like the skills i possess, the projects i
            have done and ways you can contact me
          </p>
        </section>
      </div>
      <div className="second">
        <section>
          <h2>Skills section</h2>
          {/* <img src="/assets/react2.png" alt="" /> */}
          <SkillsLogo urlValue="react.png" altValue="react" />

          <p>
            Many contents are included like the skills i possess, the projects i
            have done and ways you can contact me
          </p>
        </section>
      </div>
      {/* <img src={logo} alt="logo" /> */}
    </div>
  );
}

// const Container = styled.div({
//   display: "grid",
//   placeItems: "center",
//   alignContent: "center",
//   minHeight: "100vh",
// });

export default App;
