// -------------------------------------------------------------
// App.js — Root of the entire site (Marketing Pages + Student System)
// -------------------------------------------------------------

import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

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
import Courses from "./pages/Courses";

import Products from "./pages/Products";
import Resources from "./pages/Resources";
import Login from "./pages/Login";
import GetStarted from "./pages/GetStarted";
import CreateAccount from "./pages/CreateAccount";
import BackOffice from "./pages/BackOffice";
import ActivationHub from "./pages/ActivationHub";
import ActivateSolution from "./pages/ActivateSolution";
import RaeAdmin from "./pages/RaeAdmin";

import RequireAuth from "./components/auth/RequireAuth";

import Solutions from "./pages/Solutions";

import SolutionsParents from "./pages/SolutionsParents";
import SolutionsTeensAdults from "./pages/SolutionsTeensAdults";
import SolutionsSchools from "./pages/SolutionsSchools";
import SolutionsOrganizationsWorkplaces from "./pages/SolutionsOrganizationsWorkplaces";
import SolutionsDiscoveryDiagnostic from "./pages/SolutionsDiscoveryDiagnostic";
import SolutionsDiscoveryCharacterBooth from "./pages/SolutionsDiscoveryCharacterBooth";
import SolutionsDiscoveryPathfinder from "./pages/SolutionsDiscoveryPathfinder";
import SolutionsDiscoveryNaturalPredispositions from "./pages/SolutionsDiscoveryNaturalPredispositions";

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
        <Route
          path="/programs"
          element={<Navigate to="/solutions" replace />}
        />

        {/* ✅ Legacy/marketing links used on the Home page */}
        <Route path="/store" element={<Navigate to="/products" replace />} />
        <Route
          path="/vdp-course"
          element={<Navigate to="/courses" replace />}
        />
        <Route path="/vdp-cc" element={<Navigate to="/courses" replace />} />
        <Route
          path="/teen-bootcamp"
          element={<Navigate to="/courses" replace />}
        />
        <Route path="/pag" element={<Navigate to="/get-started" replace />} />
        <Route
          path="/partners"
          element={<Navigate to="/get-started" replace />}
        />
        <Route path="/events" element={<Navigate to="/resources" replace />} />
        <Route
          path="/vie-framework"
          element={<Navigate to="/solutions/schools" replace />}
        />
        <Route
          path="/vdr-program"
          element={<Navigate to="/solutions/teens-adults" replace />}
        />
        <Route
          path="/vdl-coaching"
          element={
            <Navigate to="/solutions/organizations-workplaces" replace />
          }
        />
        <Route path="/courses" element={<Courses />} />

        <Route path="/products" element={<Products />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/get-started/*" element={<GetStarted />} />

        {/* ✅ Post-login: Back Office (portal landing) */}
        <Route
          path="/backoffice"
          element={
            <RequireAuth>
              <BackOffice />
            </RequireAuth>
          }
        />

        {/* ✅ Post-login only: modular tool activation (subscriptions) */}
        <Route
          path="/activate"
          element={
            <RequireAuth>
              <ActivationHub />
            </RequireAuth>
          }
        />
        <Route
          path="/activate/:toolId"
          element={
            <RequireAuth>
              <ActivateSolution />
            </RequireAuth>
          }
        />

        {/* ✅ Admin-only: RAE governed content console */}
        <Route path="/rae-admin/*" element={<RaeAdmin />} />

        <Route path="/solutions" element={<Solutions />} />

        {/* ✅ Solutions (Audience-based) */}
        <Route path="/solutions/parents" element={<SolutionsParents />} />
        <Route
          path="/solutions/teens-adults"
          element={<SolutionsTeensAdults />}
        />
        <Route path="/solutions/schools" element={<SolutionsSchools />} />
        <Route
          path="/solutions/organizations-workplaces"
          element={<SolutionsOrganizationsWorkplaces />}
        />
        <Route
          path="/solutions/discovery-diagnostic"
          element={<SolutionsDiscoveryDiagnostic />}
        />
        <Route
          path="/solutions/discovery-diagnostic/character-booth"
          element={<SolutionsDiscoveryCharacterBooth />}
        />
        <Route
          path="/solutions/discovery-diagnostic/pathfinder"
          element={<SolutionsDiscoveryPathfinder />}
        />
        <Route
          path="/solutions/discovery-diagnostic/natural-predispositions"
          element={<SolutionsDiscoveryNaturalPredispositions />}
        />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
