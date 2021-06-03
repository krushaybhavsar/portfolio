import Navbar from "./components/topbar/Topbar.jsx";
import Home from "./sections/home/Home.jsx";
import Education from "./sections/education/Education.jsx";
import Projects from "./sections/projects/Projects.jsx";
import Skills from "./sections/skills/Skills.jsx";
import Contact from "./sections/contact/Contact.jsx";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu.jsx";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalState, setModalState] = useState(false);
  return (
    <div className="app">
      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        modalState={modalState}
        setModalState={setModalState}
      />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Home />
        <Projects
          modalState={modalState}
          setModalState={setModalState}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
        <Skills />
        {/* <Education /> */}
        <Contact />
      </div>
    </div>
  );
}

export default App;
