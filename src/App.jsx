// -------------------------------------------------------------
// App.js — Root of the entire site (Marketing Pages + Student System)
// -------------------------------------------------------------

import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Marketing Pages
import Home from "./pages/Home";
import FamiliesDetails from "./pages/FamiliesDetails";
import SchoolsDetails from "./pages/SchoolsDetails";
import ChurchesDetails from "./pages/ChurchesDetails";
import OrganizationsDetails from "./pages/OrganizationsDetails";
import VDCToolkit from "./pages/VDCToolkit";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Courses from "./pages/Courses";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />

      <Routes>
        {/* 🌍 Public Website Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/families" element={<FamiliesDetails />} />
        <Route path="/schools" element={<SchoolsDetails />} />
        <Route path="/churches" element={<ChurchesDetails />} />
        <Route path="/organizations" element={<OrganizationsDetails />} />
        <Route path="/vdc-toolkit" element={<VDCToolkit />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
