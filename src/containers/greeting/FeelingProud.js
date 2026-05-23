import React, { Component } from "react";

class FeelingProud extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="720"
        height="560"
        viewBox="0 0 720 560"
        role="img"
        aria-labelledby="platform-hero-title"
      >
        <title id="platform-hero-title">
          Platform engineering dashboard illustration
        </title>
        <rect
          x="52"
          y="64"
          width="616"
          height="408"
          rx="24"
          fill={theme.highlight}
          stroke={theme.headerColor}
          strokeWidth="3"
        />
        <rect x="52" y="64" width="616" height="58" rx="24" fill={theme.dark} />
        <circle cx="92" cy="94" r="8" fill="#ef4444" />
        <circle cx="120" cy="94" r="8" fill="#f59e0b" />
        <circle cx="148" cy="94" r="8" fill="#22c55e" />

        <rect
          x="84"
          y="154"
          width="250"
          height="126"
          rx="14"
          fill={theme.dark}
        />
        <text
          x="108"
          y="190"
          fill={theme.imageHighlight}
          fontSize="20"
          fontFamily="monospace"
        >
          $ kubectl get pods
        </text>
        <text
          x="108"
          y="224"
          fill={theme.text}
          fontSize="17"
          fontFamily="monospace"
        >
          api-gateway Running
        </text>
        <text
          x="108"
          y="252"
          fill={theme.text}
          fontSize="17"
          fontFamily="monospace"
        >
          workers Healthy
        </text>

        <rect
          x="368"
          y="154"
          width="268"
          height="126"
          rx="14"
          fill={theme.dark}
        />
        <polyline
          points="392,248 430,226 468,234 506,188 544,206 612,174"
          fill="none"
          stroke={theme.imageHighlight}
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text
          x="392"
          y="190"
          fill={theme.secondaryText}
          fontSize="18"
          fontFamily="Google Sans Regular"
        >
          latency / saturation / errors
        </text>

        <g transform="translate(94 326)">
          <rect width="140" height="86" rx="14" fill={theme.dark} />
          <path
            d="M38 52h64M38 34h64"
            stroke={theme.imageHighlight}
            strokeWidth="6"
            strokeLinecap="round"
          />
          <text x="28" y="72" fill={theme.secondaryText} fontSize="15">
            CI/CD
          </text>
        </g>
        <g transform="translate(290 326)">
          <rect width="140" height="86" rx="14" fill={theme.dark} />
          <circle
            cx="70"
            cy="42"
            r="25"
            fill="none"
            stroke={theme.imageHighlight}
            strokeWidth="6"
          />
          <path
            d="M70 18v48M46 42h48"
            stroke={theme.imageHighlight}
            strokeWidth="5"
            strokeLinecap="round"
          />
          <text x="28" y="72" fill={theme.secondaryText} fontSize="15">
            Kubernetes
          </text>
        </g>
        <g transform="translate(486 326)">
          <rect width="140" height="86" rx="14" fill={theme.dark} />
          <path
            d="M42 54c-15 0-24-9-24-21 0-11 9-20 22-20 5-11 16-18 30-18 17 0 31 12 33 28 11 2 19 10 19 21 0 13-10 23-25 23H42Z"
            transform="translate(0 8) scale(.82)"
            fill="none"
            stroke={theme.imageHighlight}
            strokeWidth="7"
            strokeLinejoin="round"
          />
          <text x="34" y="72" fill={theme.secondaryText} fontSize="15">
            Cloud HA
          </text>
        </g>

        <path
          d="M154 326v-28h382v28"
          fill="none"
          stroke={theme.headerColor}
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="8 10"
        />
      </svg>
    );
  }
}

export default FeelingProud;
