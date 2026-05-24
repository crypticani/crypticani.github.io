import React, { Component } from "react";

export default class DevelopmentAutomationIllustration extends Component {
  render() {
    const theme = this.props.theme;
    const stage = (x, title, detail) => (
      <g transform={`translate(${x} 198)`}>
        <rect
          width="150"
          height="116"
          rx="16"
          fill={theme.highlight}
          stroke={theme.headerColor}
          strokeWidth="3"
        />
        <rect
          x="24"
          y="26"
          width="102"
          height="10"
          rx="5"
          fill={theme.imageHighlight}
        />
        <rect
          x="24"
          y="50"
          width="76"
          height="8"
          rx="4"
          fill={theme.secondaryText}
          opacity="0.75"
        />
        <text
          x="24"
          y="82"
          fill={theme.text}
          fontSize="16"
          fontFamily="Google Sans Medium"
        >
          {title}
        </text>
        <text x="24" y="104" fill={theme.secondaryText} fontSize="12">
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
        aria-labelledby="automation-title"
      >
        <title id="automation-title">
          Development and automation illustration
        </title>
        <rect
          x="48"
          y="58"
          width="664"
          height="390"
          rx="26"
          fill={theme.dark}
          stroke={theme.headerColor}
          strokeWidth="3"
        />
        <text
          x="82"
          y="106"
          fill={theme.text}
          fontSize="25"
          fontFamily="Google Sans Medium"
        >
          Development &amp; Automation
        </text>
        <text x="82" y="136" fill={theme.secondaryText} fontSize="15">
          APIs, exporters, CLIs, scripts, portals, and platform workflow tooling
        </text>
        {stage(86, "API", "Django / DRF")}
        {stage(306, "Exporter", "Python / PromQL")}
        {stage(526, "CLI", "Go / Bash")}
        <path
          d="M236 256h68M456 256h68"
          stroke={theme.imageHighlight}
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="10 10"
        />
        <rect
          x="188"
          y="362"
          width="384"
          height="50"
          rx="14"
          fill={theme.highlight}
          stroke={theme.headerColor}
        />
        <text
          x="198"
          y="394"
          fill={theme.secondaryText}
          fontSize="15"
          fontFamily="monospace"
        >
          automate -&gt; observe -&gt; release -&gt; improve
        </text>
      </svg>
    );
  }
}
