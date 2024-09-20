import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import HeaderMain from "./pages/Header/HeaderMain";

const App: React.FC = () => {
  return (
      <Router>
        <HeaderMain></HeaderMain>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* 404 페이지 처리 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
  );
};

export default App;
