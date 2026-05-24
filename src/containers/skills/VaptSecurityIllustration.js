import React, { Component } from "react";

export default class VaptSecurityIllustration extends Component {
  render() {
    const theme = this.props.theme;
    const finding = (y, label, severityColor) => (
      <g>
        <circle cx="444" cy={y} r="7" fill={severityColor} />
        <rect
          x="462"
          y={y - 6}
          width="124"
          height="10"
          rx="5"
          fill={theme.secondaryText}
          opacity="0.7"
        />
        <text x="602" y={y + 5} fill={theme.secondaryText} fontSize="12">
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
        aria-labelledby="vapt-title"
      >
        <title id="vapt-title">VAPT workflow illustration</title>
        <rect
          x="46"
          y="54"
          width="668"
          height="392"
          rx="26"
          fill={theme.dark}
          stroke={theme.headerColor}
          strokeWidth="3"
        />
        <text
          x="82"
          y="104"
          fill={theme.text}
          fontSize="25"
          fontFamily="Google Sans Medium"
        >
          Application Security &amp; VAPT
        </text>
        <text x="82" y="134" fill={theme.secondaryText} fontSize="15">
          recon, web/API testing, auth checks, evidence, and reporting
        </text>
        <rect
          x="84"
          y="178"
          width="300"
          height="210"
          rx="18"
          fill={theme.highlight}
          stroke={theme.headerColor}
          strokeWidth="3"
        />
        <text x="112" y="220" fill={theme.imageHighlight} fontSize="16">
          GET /api/accounts/42
        </text>
        <rect
          x="112"
          y="246"
          width="182"
          height="10"
          rx="5"
          fill={theme.text}
        />
        <rect
          x="112"
          y="274"
          width="232"
          height="10"
          rx="5"
          fill={theme.secondaryText}
          opacity="0.65"
        />
        <rect
          x="112"
          y="302"
          width="150"
          height="10"
          rx="5"
          fill={theme.secondaryText}
          opacity="0.65"
        />
        <path
          d="M118 350h88M118 364h144"
          stroke={theme.imageHighlight}
          strokeWidth="5"
          strokeLinecap="round"
        />
        <rect
          x="420"
          y="178"
          width="250"
          height="210"
          rx="18"
          fill={theme.highlight}
          stroke={theme.headerColor}
          strokeWidth="3"
        />
        <text x="444" y="220" fill={theme.text} fontSize="17">
          Evidence Report
        </text>
        {finding(256, "auth/session", "#EF4444")}
        {finding(296, "web/API", "#F59E0B")}
        {finding(336, "cloud surface", "#2DD4BF")}
      </svg>
    );
  }
}
