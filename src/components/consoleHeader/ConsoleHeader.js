import React from "react";
import "./ConsoleHeader.css";

// Console-style section/page header: a prompt line, a tight left-aligned
// title, and an optional one-line description. Replaces the old template's
// giant centered headings.
export default function ConsoleHeader({ theme, command, title, description }) {
  return (
    <div className="console-header">
      <p className="console-header-cmd" style={{ color: theme.secondaryText }}>
        <span style={{ color: theme.imageHighlight }}>crypticani@prod:~$</span>{" "}
        {command}
      </p>
      <h1 className="console-header-title" style={{ color: theme.text }}>
        {title}
      </h1>
      {description && (
        <p
          className="console-header-desc"
          style={{ color: theme.secondaryText }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
