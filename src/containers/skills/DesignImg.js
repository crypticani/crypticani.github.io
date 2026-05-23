import React, { Component } from "react";

export default class DesignImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="760"
        height="520"
        viewBox="0 0 760 520"
        role="img"
        aria-labelledby="security-title"
      >
        <title id="security-title">Security and identity illustration</title>
        <rect
          x="48"
          y="54"
          width="664"
          height="392"
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
          Security, IAM &amp; DevSecOps
        </text>
        <text x="82" y="132" fill={theme.secondaryText} fontSize="15">
          identity, access control, scans, VAPT evidence, and release guardrails
        </text>
        <path
          d="M380 166l104 40v76c0 70-46 118-104 146-58-28-104-76-104-146v-76l104-40Z"
          fill={theme.highlight}
          stroke={theme.imageHighlight}
          strokeWidth="6"
        />
        <path
          d="M342 286l28 28 58-72"
          fill="none"
          stroke={theme.imageHighlight}
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g transform="translate(86 210)">
          <rect
            width="158"
            height="76"
            rx="14"
            fill={theme.highlight}
            stroke={theme.headerColor}
          />
          <text x="24" y="33" fill={theme.text} fontSize="16">
            Keycloak
          </text>
          <text x="24" y="58" fill={theme.secondaryText} fontSize="13">
            SAML / OIDC
          </text>
        </g>
        <g transform="translate(516 210)">
          <rect
            width="158"
            height="76"
            rx="14"
            fill={theme.highlight}
            stroke={theme.headerColor}
          />
          <text x="24" y="33" fill={theme.text} fontSize="16">
            CI/CD Gates
          </text>
          <text x="24" y="58" fill={theme.secondaryText} fontSize="13">
            Grype scanning
          </text>
        </g>
        <g transform="translate(86 330)">
          <rect
            width="158"
            height="76"
            rx="14"
            fill={theme.highlight}
            stroke={theme.headerColor}
          />
          <text x="24" y="33" fill={theme.text} fontSize="16">
            LDAP
          </text>
          <text x="24" y="58" fill={theme.secondaryText} fontSize="13">
            access mapping
          </text>
        </g>
        <g transform="translate(516 330)">
          <rect
            width="158"
            height="76"
            rx="14"
            fill={theme.highlight}
            stroke={theme.headerColor}
          />
          <text x="24" y="33" fill={theme.text} fontSize="16">
            VAPT Notes
          </text>
          <text x="24" y="58" fill={theme.secondaryText} fontSize="13">
            evidence reports
          </text>
        </g>
        <path
          d="M244 248h40M476 248h40M244 368h56M460 368h56"
          stroke={theme.headerColor}
          strokeWidth="4"
          strokeDasharray="7 9"
        />
      </svg>
    );
  }
}
