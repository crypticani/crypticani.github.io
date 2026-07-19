import React from "react";
import {
  Route,
  Routes,
  BrowserRouter,
  Navigate,
  useLocation,
} from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio.js";
import Error404 from "../pages/errors/error404/Error";
import KeyboardNav from "../components/keyboardNav/KeyboardNav";
import CommandPalette from "../components/commandPalette/CommandPalette";
import "./Main.css";

// Keyed by pathname so every route change replays the tmux-style pane wipe.
function AnimatedRoutes({ theme }) {
  const location = useLocation();
  return (
    <div className="pane-wipe" key={location.pathname}>
      <Routes location={location}>
        <Route
          path="/"
          element={
            settings.isSplash ? (
              <Splash theme={theme} />
            ) : (
              <Home theme={theme} />
            )
          }
        />
        <Route path="/home" element={<Home theme={theme} />} />
        <Route path="/experience" element={<Experience theme={theme} />} />
        <Route path="/education" element={<Education theme={theme} />} />
        <Route path="/contact" element={<Contact theme={theme} />} />
        <Route path="/projects" element={<Projects theme={theme} />} />
        <Route
          path="/splash"
          element={
            settings.isSplash ? (
              <Splash theme={theme} />
            ) : (
              <Navigate to="/home" replace />
            )
          }
        />
        <Route
          path="/opensource"
          element={<Navigate to="/projects" replace />}
        />
        <Route path="*" element={<Error404 theme={theme} />} />
      </Routes>
    </div>
  );
}

export default function Main({ theme }) {
  return (
    <BrowserRouter basename="/">
      <KeyboardNav />
      <CommandPalette theme={theme} />
      <AnimatedRoutes theme={theme} />
    </BrowserRouter>
  );
}
