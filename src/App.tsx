import React from "react";
import "./App.css";
import LandingScreen from "./screens/LandingScreen/LandingScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFoundScreen from "./screens/PageNotFoundScreen/PageNotFoundScreen";
import PhotographyScreen from "./screens/PhotographyScreen/PhotographyScreen";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingScreen />} />
          <Route path="/photography" element={<PhotographyScreen />} />
          <Route path="*" element={<PageNotFoundScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
