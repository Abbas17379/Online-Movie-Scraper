import React, { useState, useEffect, useRef, createContext } from "react";
import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.js";
import { UserContext } from "./components/contexts/UserContext";


function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
  );
}

export default App;