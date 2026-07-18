import React, { Component } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink } from "react-router-dom";
import { greeting } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";

const onMouseEnter = (event, color) => {
  const el = event.target;
  el.style.backgroundColor = color;
};

const onMouseOut = (event) => {
  const el = event.target;
  el.style.backgroundColor = "transparent";
};

const NAV_LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/education", label: "Education" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact Me" },
];

class Header extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <Fade top duration={1000} distance="20px">
        <SeoHeader />
        <div>
          <header className="header">
            <NavLink to="/home" className="logo">
              <span style={{ color: theme.secondaryText }}> &lt;</span>
              <span
                className="logo-name"
                style={{ color: theme.imageHighlight }}
              >
                {greeting.logo_name}
              </span>
              <span style={{ color: theme.secondaryText }}>/&gt;</span>
            </NavLink>
            <span
              className="header-status"
              style={{ color: theme.ok || theme.imageHighlight }}
              title="crypticani.dev status"
            >
              <i className="header-status-pulse" aria-hidden="true"></i>
              all systems operational
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
                    style={({ isActive }) => ({
                      color: theme.text,
                      fontWeight: isActive ? "bold" : "normal",
                    })}
                    onMouseEnter={(event) =>
                      onMouseEnter(event, theme.highlight)
                    }
                    onMouseOut={(event) => onMouseOut(event)}
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
}
export default Header;
