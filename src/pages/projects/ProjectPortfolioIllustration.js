import React, { Component } from "react";

export default class ProjectPortfolioIllustration extends Component {
  render() {
    const theme = this.props.theme;
    const card = (x, y, title, detail, accent, status) => (
      <g transform={`translate(${x} ${y})`}>
        <rect
          width="218"
          height="112"
          rx="16"
          fill={theme.highlight}
          stroke={theme.headerColor}
          strokeWidth="3"
        />
        <circle cx="28" cy="30" r="9" fill={accent} />
        <text
          x="48"
          y="36"
          fill={theme.text}
          fontSize="17"
          fontFamily="Google Sans Medium"
        >
          {title}
        </text>
        <rect
          x="28"
          y="58"
          width="150"
          height="9"
          rx="4"
          fill={theme.secondaryText}
          opacity="0.72"
        />
        <text x="28" y="92" fill={theme.secondaryText} fontSize="13">
          {detail}
        </text>
        {status ? (
          <text x="154" y="92" fill={accent} fontSize="12">
            {status}
          </text>
        ) : null}
      </g>
    );

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="760"
        height="520"
        viewBox="0 0 760 520"
        role="img"
        aria-labelledby="project-portfolio-title"
      >
        <title id="project-portfolio-title">
          GitHub project portfolio illustration
        </title>
        <rect
          x="42"
          y="48"
          width="676"
          height="408"
          rx="28"
          fill={theme.dark}
          stroke={theme.headerColor}
          strokeWidth="3"
        />
        <text
          x="78"
          y="96"
          fill={theme.text}
          fontSize="25"
          fontFamily="Google Sans Medium"
        >
          Public Work &amp; Platform Tools
        </text>
        <text x="78" y="126" fill={theme.secondaryText} fontSize="15">
          GitHub-backed projects, CLI tooling, monitoring ideas, and handbooks
        </text>
        {card(78, 176, "qurli", "terminal HTTP client", theme.imageHighlight)}
        {card(272, 302, "handbooks", "DevOps and VAPT notes", "#60A5FA")}
        {card(466, 176, "CloudPulse", "FinOps monitoring", "#F59E0B", "soon")}
        <path
          d="M208 288c72 40 148 40 220 0M272 244h-46M532 244h-46"
          fill="none"
          stroke={theme.headerColor}
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="8 10"
        />
        <g transform="translate(308 172)">
          <path
            d="M72 24c-34 0-62 23-62 52 0 21 15 40 37 48-2 8-8 17-15 23 18-2 30-9 38-19h2c34 0 62-23 62-52S106 24 72 24Z"
            fill={theme.highlight}
            stroke={theme.headerColor}
            strokeWidth="3"
          />
          <text
            x="36"
            y="82"
            fill={theme.secondaryText}
            fontSize="13"
            fontFamily="monospace"
          >
            git push
          </text>
        </g>
      </svg>
    );
  }
}
