import React, { useEffect, useState } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink } from "react-router-dom";
import { greeting } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";

// tmux-style window list: numbers match the global 0–4 keyboard shortcuts.
const NAV_LINKS = [
  { to: "/", label: "0:home", end: true },
  { to: "/education", label: "1:education" },
  { to: "/experience", label: "2:experience" },
  { to: "/projects", label: "3:projects" },
  { to: "/contact", label: "4:contact" },
];

function HeaderClock({ theme }) {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="header-clock" style={{ color: theme.secondaryText }}>
      {now.toTimeString().slice(0, 8)}
    </span>
  );
}

export default function Header({ theme }) {
  const openPalette = () => {
    window.dispatchEvent(new CustomEvent("crypticani:palette-open"));
  };

  return (
    <Fade top duration={1000} distance="20px">
      <SeoHeader />
      <div>
        <header className="header">
          <NavLink to="/home" className="logo">
            <span style={{ color: theme.secondaryText }}> &lt;</span>
            <span className="logo-name" style={{ color: theme.imageHighlight }}>
              {greeting.logo_name}
            </span>
            <span style={{ color: theme.secondaryText }}>/&gt;</span>
          </NavLink>
          <span className="header-right">
            <button
              type="button"
              className="header-palette-btn"
              onClick={openPalette}
              style={{
                color: theme.secondaryText,
                borderColor: theme.border || theme.headerColor,
              }}
              title="Open command palette (Ctrl+K)"
            >
              ⌘K
            </button>
            <HeaderClock theme={theme} />
            <span
              className="header-status"
              style={{ color: theme.ok || theme.imageHighlight }}
              title="crypticani.dev status"
            >
              <i className="header-status-pulse" aria-hidden="true"></i>
              operational
            </span>
          </span>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label
            className="menu-icon"
            htmlFor="menu-btn"
            style={{ color: theme.text }}
          >
            <span className="navicon"></span>
          </label>
          <ul className="menu" style={{ backgroundColor: theme.body }}>
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  className="tmux-tab"
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: theme.dark,
                          backgroundColor: theme.imageHighlight,
                          fontWeight: 700,
                        }
                      : { color: theme.secondaryText }
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </header>
      </div>
    </Fade>
  );
}
