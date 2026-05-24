import React, { Component } from "react";

export default class ContactChannelsIllustration extends Component {
  render() {
    const theme = this.props.theme;
    const channel = (y, label, detail, accent) => (
      <g transform={`translate(120 ${y})`}>
        <circle cx="22" cy="22" r="13" fill={accent} />
        <rect
          x="56"
          width="250"
          height="58"
          rx="14"
          fill={theme.highlight}
          stroke={theme.headerColor}
          strokeWidth="3"
        />
        <text
          x="76"
          y="24"
          fill={theme.text}
          fontSize="15"
          fontFamily="Google Sans Medium"
        >
          {label}
        </text>
        <text x="76" y="44" fill={theme.secondaryText} fontSize="12">
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
        aria-labelledby="contact-channels-title"
      >
        <title id="contact-channels-title">Contact channels illustration</title>
        <rect
          x="48"
          y="50"
          width="664"
          height="404"
          rx="28"
          fill={theme.dark}
          stroke={theme.headerColor}
          strokeWidth="3"
        />
        <text
          x="84"
          y="100"
          fill={theme.text}
          fontSize="25"
          fontFamily="Google Sans Medium"
        >
          Contact Channels
        </text>
        <text x="84" y="130" fill={theme.secondaryText} fontSize="15">
          email, LinkedIn, GitHub, Discord, and portfolio conversations
        </text>
        {channel(
          178,
          "Email",
          "aniket.kumar@hotmail.com",
          theme.imageHighlight
        )}
        {channel(252, "LinkedIn / GitHub", "@crypticani", "#60A5FA")}
        {channel(326, "Discord", "crypticani", "#5865F2")}
        <g transform="translate(510 202)">
          <rect
            width="118"
            height="156"
            rx="24"
            fill={theme.highlight}
            stroke={theme.headerColor}
            strokeWidth="3"
          />
          <circle cx="59" cy="52" r="24" fill={theme.imageHighlight} />
          <path
            d="M30 124c8-22 50-22 58 0"
            fill="none"
            stroke={theme.secondaryText}
            strokeWidth="8"
            strokeLinecap="round"
          />
        </g>
      </svg>
    );
  }
}
