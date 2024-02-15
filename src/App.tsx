import React from "react";
import "./App.css";
import LandingScreen from "./screens/LandingScreen/LandingScreen";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <LandingScreen />
      </BrowserRouter>
    </div>
  );
}

export default App;
