import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./pages/homepage/index.js";
import MarketPlace from "./pages/marketplace";
import News from "./pages/news";

import logo from "./logo.svg";
import "./App.css";

function App() {
  // const location = useLocation();
  // console.log(location);
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/marketplace" element={<MarketPlace />} />
          <Route path="/news" element={<News />} />
          {/* <Route path="/buy-1block" element={<Buy1Block />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/all-blocks" element={<AllBlocks />} />
          <Route path="/blocks" element={<Blocks />} />
          <Route path="/market" element={<Market />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
