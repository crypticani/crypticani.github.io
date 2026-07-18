import React from "react";
import { proofPoints } from "../../portfolio";
import CountUpValue from "../../components/countUp/CountUpValue";
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
              backgroundColor: theme.panel || theme.highlight,
              borderColor: theme.border || theme.headerColor,
            }}
          >
            <h2
              className="proof-value"
              style={{ color: theme.imageHighlight }}
            >
              <CountUpValue value={point.value} />
            </h2>
            <p className="proof-label" style={{ color: theme.text }}>
              {point.label}
            </p>
            <p className="proof-detail" style={{ color: theme.secondaryText }}>
              {point.detail}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
