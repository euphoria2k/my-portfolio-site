import Topbar from "./components/topbar/Topbar";
import Intro from "./components/introduction/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Navmenu from "./components/navmenu/Navmenu";
import "./app.scss";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Navmenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
