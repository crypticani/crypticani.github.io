import React, { Component } from "react";

export default class DataPlatformHaIllustration extends Component {
  render() {
    const theme = this.props.theme;
    const database = (x, y, label, accent) => (
      <g transform={`translate(${x} ${y})`}>
        <ellipse cx="70" cy="20" rx="58" ry="18" fill={accent} opacity="0.9" />
        <path
          d="M12 20v66c0 10 26 18 58 18s58-8 58-18V20"
          fill={theme.highlight}
          stroke={theme.headerColor}
          strokeWidth="3"
        />
        <ellipse
          cx="70"
          cy="20"
          rx="58"
          ry="18"
          fill="none"
          stroke={theme.headerColor}
          strokeWidth="3"
        />
        <rect
          x="20"
          y="118"
          width="100"
          height="28"
          rx="8"
          fill={theme.dark}
          stroke={theme.headerColor}
        />
        <text
          x="70"
          y="137"
          fill={theme.text}
          fontSize="13"
          fontFamily="Google Sans Medium"
          textAnchor="middle"
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
        aria-labelledby="data-ha-title"
      >
        <title id="data-ha-title">
          Database high availability illustration
        </title>
        <rect
          x="46"
          y="52"
          width="668"
          height="402"
          rx="26"
          fill={theme.dark}
          stroke={theme.headerColor}
          strokeWidth="3"
        />
        <text
          x="82"
          y="102"
          fill={theme.text}
          fontSize="25"
          fontFamily="Google Sans Medium"
        >
          Data Platforms &amp; HA
        </text>
        <text x="82" y="132" fill={theme.secondaryText} fontSize="15">
          replication, failover, backups, restores, and recovery runbooks
        </text>
        <path
          d="M230 276c74-80 226-80 300 0M230 318c74 80 226 80 300 0"
          fill="none"
          stroke={theme.headerColor}
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="9 10"
        />
        {database(96, 212, "Primary", theme.imageHighlight)}
        {database(314, 162, "Replica", "#60A5FA")}
        {database(532, 212, "Backup", "#F59E0B")}
        <g transform="translate(146 386)">
          <rect
            width="130"
            height="34"
            rx="10"
            fill={theme.highlight}
            stroke={theme.headerColor}
          />
          <text
            x="65"
            y="22"
            fill={theme.secondaryText}
            fontSize="12"
            textAnchor="middle"
          >
            SQL Replication
          </text>
        </g>
        <g transform="translate(314 386)">
          <rect
            width="132"
            height="34"
            rx="10"
            fill={theme.highlight}
            stroke={theme.headerColor}
          />
          <text
            x="66"
            y="22"
            fill={theme.secondaryText}
            fontSize="12"
            textAnchor="middle"
          >
            Cache Failover
          </text>
        </g>
        <g transform="translate(484 386)">
          <rect
            width="130"
            height="34"
            rx="10"
            fill={theme.highlight}
            stroke={theme.headerColor}
          />
          <text
            x="65"
            y="22"
            fill={theme.secondaryText}
            fontSize="12"
            textAnchor="middle"
          >
            Restore Plans
          </text>
        </g>
      </svg>
    );
  }
}
