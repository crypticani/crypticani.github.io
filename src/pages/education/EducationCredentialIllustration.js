import React, { Component } from "react";

export default class EducationCredentialIllustration extends Component {
  render() {
    const theme = this.props.theme;
    const badge = (x, y, title, detail, accent) => (
      <g transform={`translate(${x} ${y})`}>
        <rect
          width="176"
          height="86"
          rx="16"
          fill={theme.highlight}
          stroke={theme.headerColor}
          strokeWidth="3"
        />
        <circle cx="30" cy="30" r="10" fill={accent} />
        <text
          x="50"
          y="34"
          fill={theme.text}
          fontSize="15"
          fontFamily="Google Sans Medium"
        >
          {title}
        </text>
        <text x="26" y="64" fill={theme.secondaryText} fontSize="12">
          {detail}
        </text>
      </g>
    );

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="760"
        height="520"
        viewBox="0 0 760 520"
        role="img"
        aria-labelledby="education-credential-title"
      >
        <title id="education-credential-title">
          Education and certification credentials illustration
        </title>
        <rect
          x="48"
          y="52"
          width="664"
          height="402"
          rx="28"
          fill={theme.dark}
          stroke={theme.headerColor}
          strokeWidth="3"
        />
        <text
          x="84"
          y="102"
          fill={theme.text}
          fontSize="25"
          fontFamily="Google Sans Medium"
        >
          Education &amp; Certifications
        </text>
        <text x="84" y="132" fill={theme.secondaryText} fontSize="15">
          MCA, BCA, cloud architecture, automation, and security credentials
        </text>
        {badge(90, 182, "MCA", "LPU / CGPA 8.97", theme.imageHighlight)}
        {badge(300, 182, "BCA", "DSVV / CGPA 8.0", "#60A5FA")}
        {badge(510, 182, "OCI", "Architect Associate", "#EF4444")}
        {badge(168, 314, "GCP", "Cloud Architecture", "#F59E0B")}
        {badge(378, 314, "Python", "IT Automation", "#2DD4BF")}
      </svg>
    );
  }
}
