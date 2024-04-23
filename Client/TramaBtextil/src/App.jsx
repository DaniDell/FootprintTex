import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import CssBaseline from "@mui/material/CssBaseline";

import Landing from "./Views/Landing";

function App() {
  return (
    <Router>
      <CssBaseline />

      <div style={{ width: "100vw", height: "100vh" }}>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      

        <Footer />
      </div>
    </Router>
  );
}

export default App;
