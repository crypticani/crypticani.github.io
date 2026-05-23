import React from "react";
import { proofPoints } from "../../portfolio";
import "./ProofBar.css";

export default function ProofBar({ theme }) {
  return (
    <section className="proof-bar-section" aria-label="Portfolio highlights">
      <div className="proof-bar-grid">
        {proofPoints.map((point) => (
          <article
            className="proof-card"
            key={point.label}
            style={{
              backgroundColor: theme.highlight,
              borderColor: theme.headerColor,
            }}
          >
            <p className="proof-label" style={{ color: theme.imageHighlight }}>
              {point.label}
            </p>
            <h2 className="proof-value" style={{ color: theme.text }}>
              {point.value}
            </h2>
            <p className="proof-detail" style={{ color: theme.secondaryText }}>
              {point.detail}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
