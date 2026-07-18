import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";

export default function Footer(props) {
  const theme = props.theme;
  return (
    <div className="footer-div">
      <Fade>
        <p
          className="footer-logo"
          style={{ color: theme.imageHighlight }}
          aria-hidden="true"
        >
          <span style={{ color: theme.secondaryText }}>&lt;</span>
          crypticani
          <span style={{ color: theme.secondaryText }}>/&gt;</span>
          <span className="footer-cursor" />
        </p>
        <p className="footer-text" style={{ color: theme.secondaryText }}>
          Made with{" "}
          <span role="img" aria-label="love">
            ❤️
          </span>{" "}
          by {greeting.title} — and, naturally, automated.
        </p>
      </Fade>
    </div>
  );
}
