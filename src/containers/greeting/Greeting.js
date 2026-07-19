import React from "react";
import "./Greeting.css";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import TopologyHero from "./TopologyHero";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <p
                className="greeting-kicker"
                style={{ color: theme.imageHighlight }}
              >
                {greeting.kicker}
              </p>
              <h1
                className="greeting-text"
                style={{ color: theme.nameColor || theme.text }}
              >
                {greeting.title}
              </h1>
              <h2 className="greeting-headline" style={{ color: theme.text }}>
                {greeting.headline}
              </h2>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <div className="greeting-actions-row">
                <a
                  className="greeting-btn greeting-btn-primary"
                  href={greeting.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: theme.imageHighlight,
                    color: theme.dark,
                  }}
                >
                  ▸ view resume
                </a>
                <a
                  className="greeting-btn"
                  href="#profile-terminal"
                  style={{
                    borderColor: theme.border || theme.headerColor,
                    color: theme.text,
                  }}
                >
                  $ open terminal
                </a>
                <a
                  className="greeting-btn"
                  href={greeting.githubProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    borderColor: theme.border || theme.headerColor,
                    color: theme.text,
                  }}
                >
                  github
                </a>
                <a
                  className="greeting-btn"
                  href={greeting.contactLink}
                  style={{
                    borderColor: theme.border || theme.headerColor,
                    color: theme.text,
                  }}
                >
                  contact
                </a>
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <TopologyHero theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
