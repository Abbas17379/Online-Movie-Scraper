import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { UserProvider } from "./components/contexts/UserContext";
import QueryWidget from "./components/QueryWidget"; // Import the QueryWidget component

function App() {
  return (
    // Wrap the Router in the UserProvider
    <UserProvider>  
      <Router>
        <Routes>
          {/* Home route */}
          <Route path="/" element={<Home />} />
          
          {/* New route for QueryWidget */}
          <Route path="/query" element={<QueryWidget />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
