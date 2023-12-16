import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Appp from "./Appp";
import { Navigationn } from "./components/navigation";
import VideoAnalysis from "./componentsjs/Video";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import TextA from "./componentsjs/TextA";
import Audanalysis from './componentsjs/TweetA';
import Twet from "./componentsjs/Tweet";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <div>
        <Navigationn />
        <Routes>
          <Route path="/" element={<Appp />} />
          <Route path="/text" element={<TextA />} />
          <Route path="/video" element={<VideoAnalysis />} />
          <Route path="/audio" element={<Audanalysis />} />
          <Route path="/tweet" element={<Twet/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
