import React, { useEffect, useState } from "react";
import "./App.css";
import LandingScreen from "./screens/LandingScreen/LandingScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFoundScreen from "./screens/PageNotFoundScreen/PageNotFoundScreen";
import PhotographyScreen from "./screens/PhotographyScreen/PhotographyScreen";
import BlogScreen from "./screens/BlogScreen/BlogScreen";
import { Client } from "@notionhq/client";

function App() {
  // const [notionClient, setNotionClient] = useState<Client | undefined>();

  // useEffect(() => {
  //   try {
  //     const notion = new Client({
  //       auth: process.env.REACT_APP_NOTION_API_KEY,
  //     });
  //     setNotionClient(notion);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingScreen />} />
          <Route path="/photography" element={<PhotographyScreen />} />
          <Route path="/blog" element={<BlogScreen />} />
          <Route path="*" element={<PageNotFoundScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
