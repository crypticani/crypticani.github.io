import React from "react";
import "./ClusterStatusPanel.css";

const SPARK_HEIGHTS = [30, 55, 40, 70, 52, 85, 64, 95];

export default function ClusterStatusPanel({ theme }) {
  const border = theme.border || theme.headerColor;
  const panel = theme.panel || theme.highlight;
  const ok = theme.ok || theme.imageHighlight;
  return (
    <div
      className="cluster-panel"
      style={{ backgroundColor: panel, borderColor: border }}
      aria-label="Production cluster summary"
    >
      <div className="cluster-row" style={{ borderColor: border }}>
        <span style={{ color: theme.secondaryText }}>cluster/production</span>
        <span className="cluster-up" style={{ color: ok }}>
          ● healthy
        </span>
      </div>
      <div className="cluster-row" style={{ borderColor: border }}>
        <span style={{ color: theme.secondaryText }}>apps in prod</span>
        <span style={{ color: theme.text }}>15+ · 99.9% SLA</span>
      </div>
      <div className="cluster-row" style={{ borderColor: border }}>
        <span style={{ color: theme.secondaryText }}>deploy freq</span>
        <span style={{ color: theme.text }}>
          daily <span style={{ color: ok }}>▲</span>
        </span>
      </div>
      <div className="cluster-row" style={{ borderColor: border }}>
        <span style={{ color: theme.secondaryText }}>mttr</span>
        <span style={{ color: theme.text }}>
          −40% <span style={{ color: ok }}>▼</span>
        </span>
      </div>
      <div className="cluster-row cluster-row-last">
        <span style={{ color: theme.secondaryText }}>traffic</span>
        <span className="cluster-spark" aria-hidden="true">
          {SPARK_HEIGHTS.map((height, index) => (
            <i
              key={index}
              style={{
                height: `${height}%`,
                backgroundColor:
                  index === SPARK_HEIGHTS.length - 1
                    ? theme.imageHighlight
                    : `${theme.imageHighlight}55`,
              }}
            />
          ))}
        </span>
      </div>
    </div>
  );
}
