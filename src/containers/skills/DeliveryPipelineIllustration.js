import React, { Component } from "react";

export default class DeliveryPipelineIllustration extends Component {
  render() {
    const theme = this.props.theme;
    const stage = (x, label, detail, accent = theme.imageHighlight) => (
      <g transform={`translate(${x} 232)`}>
        <rect
          width="112"
          height="112"
          rx="16"
          fill={theme.highlight}
          stroke={theme.headerColor}
          strokeWidth="3"
        />
        <circle cx="56" cy="36" r="18" fill={accent} opacity="0.9" />
        <path
          d="M46 36h20M56 26v20"
          stroke={theme.dark}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <text
          x="56"
          y="76"
          fill={theme.text}
          fontSize="15"
          fontFamily="Google Sans Medium"
          textAnchor="middle"
        >
          {label}
        </text>
        <text
          x="56"
          y="98"
          fill={theme.secondaryText}
          fontSize="12"
          textAnchor="middle"
        >
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
        aria-labelledby="delivery-pipeline-title"
      >
        <title id="delivery-pipeline-title">
          CI/CD and container delivery pipeline illustration
        </title>
        <rect
          x="44"
          y="54"
          width="672"
          height="396"
          rx="26"
          fill={theme.dark}
          stroke={theme.headerColor}
          strokeWidth="3"
        />
        <text
          x="78"
          y="104"
          fill={theme.text}
          fontSize="25"
          fontFamily="Google Sans Medium"
        >
          Containers &amp; CI/CD
        </text>
        <text x="78" y="134" fill={theme.secondaryText} fontSize="15">
          build, scan, deploy, verify, and roll forward safely
        </text>
        <line
          x1="154"
          y1="288"
          x2="622"
          y2="288"
          stroke={theme.headerColor}
          strokeWidth="6"
          strokeLinecap="round"
        />
        <line
          x1="154"
          y1="288"
          x2="622"
          y2="288"
          stroke={theme.imageHighlight}
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.85"
        />
        {stage(98, "Build", "Jenkins")}
        {stage(254, "Scan", "Grype", "#F59E0B")}
        {stage(410, "Deploy", "Kubernetes", "#60A5FA")}
        <g transform="translate(566 232)">
          <rect
            width="112"
            height="112"
            rx="16"
            fill={theme.highlight}
            stroke={theme.headerColor}
            strokeWidth="3"
          />
          <path
            d="M38 58l14 14 28-42"
            fill="none"
            stroke={theme.imageHighlight}
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            x="56"
            y="98"
            fill={theme.secondaryText}
            fontSize="12"
            textAnchor="middle"
          >
            release
          </text>
        </g>
      </svg>
    );
  }
}
