import React, { Component } from "react";

export default class TechnicalWritingIllustration extends Component {
  render() {
    const theme = this.props.theme;
    const page = (x, y, title, accent) => (
      <g transform={`translate(${x} ${y})`}>
        <rect
          width="170"
          height="128"
          rx="14"
          fill={theme.highlight}
          stroke={theme.headerColor}
          strokeWidth="3"
        />
        <rect x="22" y="24" width="54" height="10" rx="5" fill={accent} />
        <rect
          x="22"
          y="54"
          width="118"
          height="8"
          rx="4"
          fill={theme.secondaryText}
          opacity="0.7"
        />
        <rect
          x="22"
          y="76"
          width="96"
          height="8"
          rx="4"
          fill={theme.secondaryText}
          opacity="0.7"
        />
        <text x="22" y="112" fill={theme.text} fontSize="14">
          {title}
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
        aria-labelledby="technical-writing-title"
      >
        <title id="technical-writing-title">
          Blog and handbook writing illustration
        </title>
        <rect
          x="46"
          y="54"
          width="668"
          height="392"
          rx="28"
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
          Writing &amp; Community
        </text>
        <text x="82" y="134" fill={theme.secondaryText} fontSize="15">
          blog posts, DevOps handbook, VAPT handbook, and learning community
        </text>
        {page(94, 202, "Hashnode Blog", theme.imageHighlight)}
        {page(294, 202, "DevOps Handbook", "#60A5FA")}
        {page(494, 202, "VAPT Handbook", "#F59E0B")}
        <path
          d="M224 372h312"
          stroke={theme.headerColor}
          strokeWidth="5"
          strokeDasharray="8 10"
        />
        <text x="292" y="408" fill={theme.secondaryText} fontSize="14">
          Discord learning server and direct discussions
        </text>
      </svg>
    );
  }
}
