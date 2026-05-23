import React, { Component } from "react";

export default class DataScienceImg extends Component {
  render() {
    const theme = this.props.theme;
    const row = (y, label, statusColor) => (
      <g>
        <circle cx="104" cy={y} r="7" fill={statusColor} />
        <rect
          x="124"
          y={y - 6}
          width="150"
          height="10"
          rx="5"
          fill={theme.secondaryText}
          opacity="0.65"
        />
        <text x="292" y={y + 5} fill={theme.secondaryText} fontSize="13">
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
        aria-labelledby="observability-title"
      >
        <title id="observability-title">
          Observability dashboard illustration
        </title>
        <rect
          x="44"
          y="48"
          width="672"
          height="406"
          rx="24"
          fill={theme.dark}
          stroke={theme.headerColor}
          strokeWidth="3"
        />
        <text
          x="78"
          y="94"
          fill={theme.text}
          fontSize="25"
          fontFamily="Google Sans Medium"
        >
          Observability Platform
        </text>
        <text x="78" y="124" fill={theme.secondaryText} fontSize="15">
          metrics, logs, alerts, PromQL, dashboards, and exporters
        </text>
        <rect
          x="78"
          y="154"
          width="286"
          height="220"
          rx="16"
          fill={theme.highlight}
          stroke={theme.headerColor}
        />
        <polyline
          points="104,320 138,280 172,294 206,226 240,248 274,204 332,184"
          fill="none"
          stroke={theme.imageHighlight}
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="398"
          y="154"
          width="244"
          height="100"
          rx="16"
          fill={theme.highlight}
          stroke={theme.headerColor}
        />
        <text x="424" y="194" fill={theme.text} fontSize="18">
          Alertmanager
        </text>
        <text x="402" y="224" fill={theme.secondaryText} fontSize="14">
          noise-aware alerts and on-call signals
        </text>
        <rect
          x="398"
          y="274"
          width="244"
          height="100"
          rx="16"
          fill={theme.highlight}
          stroke={theme.headerColor}
        />
        <text x="424" y="314" fill={theme.text} fontSize="18">
          Log Pipeline
        </text>
        <text x="424" y="344" fill={theme.secondaryText} fontSize="14">
          Loki + Fluent Bit + service context
        </text>
        {row(410, "hosts / containers", "#22C55E")}
        {row(438, "custom exporters", "#2DD4BF")}
      </svg>
    );
  }
}
