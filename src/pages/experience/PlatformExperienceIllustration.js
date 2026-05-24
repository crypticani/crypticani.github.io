import React, { Component } from "react";

export default class PlatformExperienceIllustration extends Component {
  render() {
    const theme = this.props.theme;
    const step = (x, y, title, detail, accent) => (
      <g transform={`translate(${x} ${y})`}>
        <circle cx="22" cy="22" r="16" fill={accent} />
        <rect
          x="56"
          width="214"
          height="70"
          rx="14"
          fill={theme.highlight}
          stroke={theme.headerColor}
          strokeWidth="3"
        />
        <text
          x="78"
          y="28"
          fill={theme.text}
          fontSize="15"
          fontFamily="Google Sans Medium"
        >
          {title}
        </text>
        <text x="78" y="52" fill={theme.secondaryText} fontSize="12">
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
        aria-labelledby="experience-platform-title"
      >
        <title id="experience-platform-title">
          DevOps and full stack experience timeline illustration
        </title>
        <rect
          x="48"
          y="46"
          width="664"
          height="414"
          rx="28"
          fill={theme.dark}
          stroke={theme.headerColor}
          strokeWidth="3"
        />
        <text
          x="84"
          y="96"
          fill={theme.text}
          fontSize="25"
          fontFamily="Google Sans Medium"
        >
          Experience Timeline
        </text>
        <text x="84" y="126" fill={theme.secondaryText} fontSize="15">
          software development, full stack engineering, DevOps, and SRE work
        </text>
        <path
          d="M128 184v230"
          stroke={theme.headerColor}
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="9 10"
        />
        {step(106, 166, "AWGP", "software development intern", "#A855F7")}
        {step(
          106,
          248,
          "TheCodeWork",
          "full stack development intern",
          "#60A5FA"
        )}
        {step(
          106,
          330,
          "KocharTech Intern",
          "observability and automation",
          "#2DD4BF"
        )}
        <g transform="translate(430 180)">
          <rect
            width="220"
            height="210"
            rx="18"
            fill={theme.highlight}
            stroke={theme.headerColor}
            strokeWidth="3"
          />
          <text
            x="26"
            y="42"
            fill={theme.text}
            fontSize="18"
            fontFamily="Google Sans Medium"
          >
            DevOps Engineer
          </text>
          <text x="26" y="74" fill={theme.secondaryText} fontSize="13">
            HA infrastructure and CI/CD
          </text>
          <text x="26" y="106" fill={theme.secondaryText} fontSize="13">
            Kubernetes and observability
          </text>
          <text x="26" y="138" fill={theme.secondaryText} fontSize="13">
            database HA/DR and FinOps
          </text>
          <path
            d="M30 174h160"
            stroke={theme.imageHighlight}
            strokeWidth="7"
            strokeLinecap="round"
          />
          <text x="30" y="196" fill={theme.secondaryText} fontSize="12">
            15+ apps / 99.9% SLA
          </text>
        </g>
      </svg>
    );
  }
}
