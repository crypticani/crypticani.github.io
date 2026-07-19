import React from "react";
import "./InfoPanel.css";

// Console-style key/value summary panel — balances page headers the same
// way the topology panel balances the home hero.
export default function InfoPanel({ theme, title, rows }) {
  const border = theme.border || theme.headerColor;
  return (
    <div
      className="info-panel"
      style={{
        backgroundColor: theme.panel || theme.highlight,
        borderColor: border,
      }}
    >
      <div
        className="info-panel-title"
        style={{ color: theme.secondaryText, borderColor: border }}
      >
        <span>{title}</span>
        <span style={{ color: theme.ok || theme.imageHighlight }}>● ok</span>
      </div>
      {rows.map((row) => (
        <div
          className="info-panel-row"
          key={row.k}
          style={{ borderColor: border }}
        >
          <span style={{ color: theme.secondaryText }}>{row.k}</span>
          <span
            style={{
              color: row.accent ? theme.imageHighlight : theme.text,
            }}
          >
            {row.v}
          </span>
        </div>
      ))}
    </div>
  );
}
