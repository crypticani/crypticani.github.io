import React, { Component } from "react";
import "./CertificationCard.css";
import { assetImage } from "../../lib/assetImage";
import { Fade } from "react-reveal";

class CertificationCard extends Component {
  render() {
    const certificate = this.props.certificate;
    const theme = this.props.theme;
    return (
      <Fade bottom duration={1200} distance="20px">
        <a
          className="cert-card"
          href={certificate.certificate_link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: theme.panel || theme.highlight,
            borderColor: theme.border || theme.headerColor,
          }}
        >
          <span
            className="cert-logo-tile"
            style={{ borderColor: theme.border || theme.headerColor }}
          >
            <img
              className="cert-logo-img"
              src={assetImage(certificate.logo_path)}
              alt={certificate.alt_name}
            />
          </span>
          <span className="cert-info">
            <span className="cert-title" style={{ color: theme.text }}>
              {certificate.title}
            </span>
            <span
              className="cert-issuer"
              style={{ color: theme.secondaryText }}
            >
              {certificate.subtitle}
            </span>
            <span
              className="cert-verify"
              style={{ color: theme.imageHighlight }}
            >
              verify ↗
            </span>
          </span>
        </a>
      </Fade>
    );
  }
}

export default CertificationCard;
