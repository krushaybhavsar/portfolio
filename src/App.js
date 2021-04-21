import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills";
import Contact from "./pages/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/education" exact>
            <Education />
          </Route>
          <Route path="/projects" exact>
            <Projects />
          </Route>
          <Route path="/skills" exact>
            <Skills />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
