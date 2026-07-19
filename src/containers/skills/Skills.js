import React from "react";
import "./Skills.css";
import ConsoleHeader from "../../components/consoleHeader/ConsoleHeader";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Skills(props) {
  const theme = props.theme;
  return (
    <div className="main" id="skills">
      <Fade bottom duration={1200} distance="20px">
        <ConsoleHeader
          theme={theme}
          command="cat /etc/aniket/capabilities.conf"
          title="Capabilities"
          description="A compact view of how my DevOps, platform, SRE, security, and full-stack work fits together."
        />
      </Fade>
      <div className="skill-depth-grid" aria-label="Skill depth groups">
        {skills.depthGroups.map((group) => (
          <Fade bottom duration={900} distance="20px" key={group.title}>
            <article
              className="skill-depth-card"
              style={{
                backgroundColor: theme.dark,
                borderColor: theme.headerColor,
              }}
            >
              <div className="skill-depth-card-header">
                <h2 className="skill-depth-title" style={{ color: theme.text }}>
                  {group.title}
                </h2>
                <span
                  className="skill-depth-label"
                  style={{
                    color: theme.imageHighlight,
                    borderColor: theme.imageHighlight,
                  }}
                >
                  {group.label}
                </span>
              </div>
              <div className="skill-depth-chip-row">
                {group.items.map((item) => (
                  <span
                    className="skill-depth-chip"
                    key={item}
                    style={{
                      color: theme.secondaryText,
                      borderColor: theme.headerColor,
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          </Fade>
        ))}
      </div>
      <div className="capability-grid">
        {skills.summary.map((capability) => (
          <Fade bottom duration={1000} distance="20px" key={capability.title}>
            <article
              className="capability-card"
              style={{
                backgroundColor: theme.highlight,
                borderColor: theme.headerColor,
              }}
            >
              <h2 className="capability-title" style={{ color: theme.text }}>
                {capability.title}
              </h2>
              <p
                className="capability-description"
                style={{ color: theme.secondaryText }}
              >
                {capability.description}
              </p>
            </article>
          </Fade>
        ))}
      </div>
    </div>
  );
}
