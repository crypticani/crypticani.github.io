import React, { Component } from "react";

class PlatformHeroIllustration extends Component {
  render() {
    const theme = this.props.theme;
    const accent = theme.imageHighlight;
    const muted = theme.secondaryText;
    const panel = theme.highlight;
    const dark = theme.dark;
    const line = theme.headerColor;

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
          DevOps command center with Linux terminal, cloud infrastructure,
          containers, observability, and security
        </title>

        <defs>
          <filter id="hero-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow
              dx="0"
              dy="18"
              stdDeviation="18"
              floodColor="#000000"
              floodOpacity="0.28"
            />
          </filter>
          <linearGradient id="hero-panel" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor={panel} />
            <stop offset="1" stopColor={dark} />
          </linearGradient>
          <linearGradient id="terminal-glow" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#0B1724" />
            <stop offset="1" stopColor="#050816" />
          </linearGradient>
          <marker
            id="ci-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M0 0l10 5-10 5Z" fill={accent} opacity="0.92" />
          </marker>
        </defs>

        <g filter="url(#hero-shadow)">
          <rect
            x="16"
            y="24"
            width="688"
            height="512"
            rx="30"
            fill="url(#hero-panel)"
            stroke={line}
            strokeWidth="3"
          />

          <g opacity="0.16" stroke={line} strokeWidth="1">
            <path d="M56 72h608M56 122h608M56 172h608M56 222h608M56 272h608M56 322h608M56 372h608M56 422h608M56 472h608" />
            <path d="M76 50v462M136 50v462M196 50v462M256 50v462M316 50v462M376 50v462M436 50v462M496 50v462M556 50v462M616 50v462" />
          </g>

          <g opacity="0.78" stroke={accent} strokeLinecap="round">
            <path d="M500 142h28" strokeWidth="3" />
            <path d="M500 250h28" strokeWidth="3" />
            <path d="M500 358h28" strokeWidth="3" />
            <path d="M286 416v30h82" strokeWidth="3" />
            <circle cx="528" cy="142" r="4" fill={accent} stroke="none" />
            <circle cx="528" cy="250" r="4" fill={accent} stroke="none" />
            <circle cx="528" cy="358" r="4" fill={accent} stroke="none" />
            <circle cx="368" cy="446" r="4" fill={accent} stroke="none" />
          </g>

          <g transform="translate(48 58)">
            <rect
              width="464"
              height="356"
              rx="22"
              fill="url(#terminal-glow)"
              stroke={line}
              strokeWidth="3"
            />
            <rect width="464" height="54" rx="22" fill="#050816" />
            <path d="M0 54h464" stroke={line} strokeWidth="2" opacity="0.9" />
            <circle cx="28" cy="26" r="7" fill="#ef4444" />
            <circle cx="52" cy="26" r="7" fill="#f59e0b" />
            <circle cx="76" cy="26" r="7" fill="#22c55e" />
            <text x="312" y="32" fill={muted} fontSize="13" opacity="0.78">
              command-center.sh
            </text>

            <text
              x="24"
              y="88"
              fill={accent}
              fontSize="18"
              fontFamily="monospace"
            >
              crypticani@linux:~$
            </text>
            <text
              x="24"
              y="124"
              fill={theme.text}
              fontSize="16"
              fontFamily="monospace"
            >
              $ kubectl get nodes
            </text>
            <text x="42" y="154" fill={muted} fontSize="15" fontFamily="monospace">
              node-01 Ready
            </text>
            <text x="42" y="181" fill={muted} fontSize="15" fontFamily="monospace">
              node-02 Ready
            </text>
            <text
              x="24"
              y="218"
              fill={theme.text}
              fontSize="16"
              fontFamily="monospace"
            >
              $ docker ps
            </text>
            <text x="42" y="248" fill={muted} fontSize="15" fontFamily="monospace">
              api-gateway Up
            </text>
            <text
              x="24"
              y="286"
              fill={theme.text}
              fontSize="16"
              fontFamily="monospace"
            >
              $ terraform plan
            </text>
            <text x="210" y="286" fill={accent} fontSize="16" fontFamily="monospace">
              Plan: 3 to add
            </text>
            <text
              x="24"
              y="317"
              fill={theme.text}
              fontSize="16"
              fontFamily="monospace"
            >
              $ ./deploy-portfolio.sh
            </text>
            <text x="42" y="342" fill={accent} fontSize="15" fontFamily="monospace">
              portfolio online
            </text>
            <rect x="360" y="78" width="68" height="26" rx="13" fill="#10202B" />
            <text x="377" y="96" fill={accent} fontSize="12" fontFamily="monospace">
              prod
            </text>
          </g>

          <g transform="translate(536 78)">
            <rect
              width="136"
              height="92"
              rx="18"
              fill={dark}
              stroke={line}
              strokeWidth="2"
            />
            <path
              d="M42 55h53c13 0 23-9 23-21 0-11-9-20-21-20-5 0-10 2-14 5C76 8 65 3 52 6 39 8 30 18 29 31h-2c-10 0-18 7-18 16s8 8 18 8Z"
              fill="#0B1724"
              stroke={accent}
              strokeWidth="4"
              strokeLinejoin="round"
            />
            <text x="68" y="78" fill={muted} fontSize="14" textAnchor="middle">
              cloud node
            </text>
          </g>

          <g transform="translate(536 186)">
            <rect
              width="136"
              height="92"
              rx="18"
              fill={dark}
              stroke={line}
              strokeWidth="2"
            />
            <text x="68" y="25" fill={muted} fontSize="14" textAnchor="middle">
              observability
            </text>
            <path
              d="M20 68C38 44 52 58 68 38s30 22 48-9"
              fill="none"
              stroke={accent}
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M20 74h96" stroke={line} strokeWidth="2" />
            <circle cx="68" cy="38" r="4" fill={accent} />
            <circle cx="116" cy="29" r="4" fill={accent} />
          </g>

          <g transform="translate(536 294)">
            <rect
              width="136"
              height="92"
              rx="18"
              fill={dark}
              stroke={line}
              strokeWidth="2"
            />
            <text x="68" y="22" fill={muted} fontSize="14" textAnchor="middle">
              DevSecOps
            </text>
            <path
              d="M68 40l18 8v13c0 11-7 19-18 23-11-4-18-12-18-23V48l18-8Z"
              fill="#0B1724"
              stroke={accent}
              strokeWidth="3.5"
              strokeLinejoin="round"
            />
            <path
              d="M59 63l7 7 15-19"
              fill="none"
              stroke={accent}
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>

          <g transform="translate(72 444)">
            <rect
              width="576"
              height="68"
              rx="18"
              fill={dark}
              stroke={line}
              strokeWidth="2"
            />
            <g
              fill="none"
              stroke={accent}
              strokeWidth="3"
              strokeLinecap="round"
              markerEnd="url(#ci-arrow)"
              opacity="0.9"
            >
              <path d="M128 34h36" />
              <path d="M266 34h36" />
              <path d="M404 34h36" />
            </g>
            <g fill={panel} stroke={line} strokeWidth="2">
              <rect x="36" y="17" width="92" height="34" rx="9" />
              <rect x="174" y="17" width="92" height="34" rx="9" />
              <rect x="312" y="17" width="92" height="34" rx="9" />
              <rect x="450" y="17" width="92" height="34" rx="9" />
            </g>
            <text x="57" y="39" fill={theme.text} fontSize="13">
              commit
            </text>
            <text x="202" y="39" fill={theme.text} fontSize="13">
              build
            </text>
            <text x="342" y="39" fill={theme.text} fontSize="13">
              scan
            </text>
            <text x="477" y="39" fill={theme.text} fontSize="13">
              deploy
            </text>
          </g>

          <g transform="translate(106 414)">
            <rect width="36" height="34" rx="9" fill={panel} stroke={line} />
            <rect x="54" width="36" height="34" rx="9" fill={panel} stroke={line} />
            <rect x="108" width="36" height="34" rx="9" fill={panel} stroke={line} />
            <path
              d="M18 12v10M72 12v10M126 12v10"
              stroke={accent}
              strokeWidth="4"
              strokeLinecap="round"
            />
          </g>

          <g transform="translate(382 414)">
            <rect width="98" height="34" rx="10" fill={panel} stroke={line} />
            <path
              d="M19 11h60M19 23h60"
              stroke={accent}
              strokeWidth="3"
              strokeLinecap="round"
            />
          </g>
        </g>
      </svg>
    );
  }
}

export default PlatformHeroIllustration;
