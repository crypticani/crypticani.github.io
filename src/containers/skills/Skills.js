import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Skills(props) {
  const theme = props.theme;
  return (
    <div className="main" id="skills">
      <div className="skills-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="skills-header" style={{ color: theme.text }}>
            Capabilities
          </h1>
        </Fade>
        <Fade bottom duration={1400} distance="20px">
          <p
            className="skills-header-subtitle"
            style={{ color: theme.secondaryText }}
          >
            A compact view of how my DevOps, platform, SRE, security, and
            full-stack work fits together.
          </p>
        </Fade>
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
      <SkillSection theme={theme} />
    </div>
  );
}
