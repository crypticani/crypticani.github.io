import React, { Component } from "react";

export default class CloudInfrastructureIllustration extends Component {
  render() {
    const theme = this.props.theme;
    const node = (x, y, label, accent = theme.imageHighlight) => (
      <g transform={`translate(${x} ${y})`}>
        <rect
          width="150"
          height="86"
          rx="14"
          fill={theme.highlight}
          stroke={theme.headerColor}
          strokeWidth="3"
        />
        <circle cx="28" cy="28" r="10" fill={accent} />
        <rect
          x="48"
          y="22"
          width="74"
          height="9"
          rx="4"
          fill={theme.text}
          opacity="0.85"
        />
        <rect
          x="24"
          y="50"
          width="102"
          height="7"
          rx="3"
          fill={theme.secondaryText}
          opacity="0.7"
        />
        <text
          x="24"
          y="76"
          fill={theme.secondaryText}
          fontSize="13"
          fontFamily="Google Sans Regular"
        >
          {label}
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
        aria-labelledby="cloud-infra-title"
      >
        <title id="cloud-infra-title">
          Cloud infrastructure topology illustration
        </title>
        <rect
          x="40"
          y="44"
          width="680"
          height="410"
          rx="26"
          fill={theme.dark}
          stroke={theme.headerColor}
          strokeWidth="3"
        />
        <text
          x="72"
          y="92"
          fill={theme.text}
          fontSize="25"
          fontFamily="Google Sans Medium"
        >
          Cloud &amp; HA Infrastructure
        </text>
        <text x="72" y="122" fill={theme.secondaryText} fontSize="15">
          regions, clusters, load balancers, backups, and failover paths
        </text>
        <path
          d="M380 170v70M228 282h304M228 282v70M532 282v70"
          fill="none"
          stroke={theme.headerColor}
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="8 10"
        />
        {node(305, 152, "Load Balancer", "#60A5FA")}
        {node(104, 352, "Primary Region")}
        {node(305, 352, "Kubernetes")}
        {node(506, 352, "DR / Backups", "#F59E0B")}
        <g transform="translate(504 162)">
          <path
            d="M48 62c-22 0-36-13-36-31 0-17 14-30 33-30 7-17 24-28 45-28 25 0 46 18 49 42 17 4 29 17 29 34 0 20-16 34-38 34H48Z"
            fill="none"
            stroke={theme.imageHighlight}
            strokeWidth="8"
            strokeLinejoin="round"
            transform="scale(.72)"
          />
          <text x="2" y="82" fill={theme.secondaryText} fontSize="13">
            OCI / AWS / GCP
          </text>
        </g>
      </svg>
    );
  }
}
