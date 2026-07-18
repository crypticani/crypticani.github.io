import React from "react";
import "./SoftwareSkill.css";

class SoftwareSkill extends React.Component {
  render() {
    return (
      <div>
        <div className="software-skills-main-div">
          <ul className="dev-icons">
            {this.props.logos.map((logo) => {
              return (
                <li
                  key={logo.skillName}
                  className="software-skill-inline"
                  name={logo.skillName}
                  title={logo.skillName}
                >
                  {logo.fontAwesomeClassname && (
                    <span
                      className="iconify"
                      data-icon={logo.fontAwesomeClassname}
                      style={logo.style}
                      data-inline="false"
                    ></span>
                  )}
                  {!logo.fontAwesomeClassname && logo.imageSrc && (
                    <img
                      className="skill-image"
                      style={logo.style}
                      src={`/skills/${logo.imageSrc}`}
                      alt={logo.skillName}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default SoftwareSkill;
