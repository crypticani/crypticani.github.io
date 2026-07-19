import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { greeting } from "../../portfolio";
import "./CommandPalette.css";

// Ctrl+K palette: fuzzy-search pages, terminal commands, and actions.
// Terminal commands are forwarded to the ProfileTerminal via a custom event.

function fuzzyMatch(query, text) {
  const q = query.toLowerCase();
  const s = text.toLowerCase();
  let j = 0;
  for (let i = 0; i < s.length && j < q.length; i += 1) {
    if (s.charAt(i) === q.charAt(j)) j += 1;
  }
  return j === q.length;
}

function runTerminalCommand(navigate, command) {
  navigate("/home");
  window.setTimeout(() => {
    window.dispatchEvent(
      new CustomEvent("crypticani:terminal-exec", { detail: { command } }),
    );
  }, 350);
}

export default function CommandPalette({ theme }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const ITEMS = [
    {
      icon: "⌂",
      label: "go: home",
      hint: "page",
      run: () => navigate("/home"),
    },
    {
      icon: "🎓",
      label: "go: education",
      hint: "page",
      run: () => navigate("/education"),
    },
    {
      icon: "⚙",
      label: "go: experience",
      hint: "page",
      run: () => navigate("/experience"),
    },
    {
      icon: "▤",
      label: "go: projects",
      hint: "page",
      run: () => navigate("/projects"),
    },
    {
      icon: "✉",
      label: "go: contact",
      hint: "page",
      run: () => navigate("/contact"),
    },
    {
      icon: "❯",
      label: "run: neofetch",
      hint: "terminal",
      run: () => runTerminalCommand(navigate, "neofetch"),
    },
    {
      icon: "❯",
      label: "run: uptime",
      hint: "terminal",
      run: () => runTerminalCommand(navigate, "uptime"),
    },
    {
      icon: "❯",
      label: "run: sudo hire-me",
      hint: "terminal",
      run: () => runTerminalCommand(navigate, "sudo hire-me"),
    },
    {
      icon: "▼",
      label: "download resume.pdf",
      hint: "action",
      run: () => window.open(greeting.resumeLink, "_blank", "noopener"),
    },
    {
      icon: "◉",
      label: "open github/crypticani",
      hint: "link",
      run: () => window.open(greeting.githubProfile, "_blank", "noopener"),
    },
    {
      icon: "◉",
      label: "open linkedin",
      hint: "link",
      run: () => window.open(greeting.linkedInProfile, "_blank", "noopener"),
    },
    {
      icon: "↺",
      label: "replay boot sequence",
      hint: "action",
      run: () => navigate("/splash"),
    },
  ];

  const shown = query
    ? ITEMS.filter((item) => fuzzyMatch(query, item.label))
    : ITEMS;
  const safeSelected = Math.min(selected, Math.max(shown.length - 1, 0));

  useEffect(() => {
    const onKey = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen(true);
        setQuery("");
        setSelected(0);
      }
    };
    const onOpen = () => {
      setOpen(true);
      setQuery("");
      setSelected(0);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("crypticani:palette-open", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("crypticani:palette-open", onOpen);
    };
  }, []);

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);

  if (!open) return null;

  const execute = (item) => {
    setOpen(false);
    if (item) item.run();
  };

  const onInputKey = (event) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setSelected(Math.min(safeSelected + 1, shown.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setSelected(Math.max(safeSelected - 1, 0));
    } else if (event.key === "Enter") {
      execute(shown.at(safeSelected));
    } else if (event.key === "Escape") {
      setOpen(false);
    }
    event.stopPropagation();
  };

  return (
    <div
      className="palette-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) setOpen(false);
      }}
      role="dialog"
      aria-label="Command palette"
    >
      <div
        className="palette-box"
        style={{
          backgroundColor: theme.panel || theme.highlight,
          borderColor: theme.border || theme.headerColor,
        }}
      >
        <div
          className="palette-input-row"
          style={{ borderColor: theme.border || theme.headerColor }}
        >
          <span style={{ color: theme.imageHighlight }}>❯</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setSelected(0);
            }}
            onKeyDown={onInputKey}
            placeholder="search pages, commands, actions…"
            aria-label="Search commands"
            autoComplete="off"
            spellCheck="false"
            style={{ color: theme.text }}
          />
          <span className="palette-esc" style={{ color: theme.secondaryText }}>
            esc
          </span>
        </div>
        <div className="palette-list">
          {shown.map((item, index) => (
            <div
              key={item.label}
              className={
                "palette-item" + (index === safeSelected ? " selected" : "")
              }
              style={
                index === safeSelected
                  ? { backgroundColor: theme.dark, color: theme.text }
                  : { color: theme.secondaryText }
              }
              onMouseMove={() => setSelected(index)}
              onClick={() => execute(item)}
            >
              <span
                className="palette-ico"
                style={{
                  color:
                    index === safeSelected
                      ? theme.imageHighlight
                      : theme.secondaryText,
                }}
              >
                {item.icon}
              </span>
              {item.label}
              <span className="palette-hint">{item.hint}</span>
            </div>
          ))}
          {shown.length === 0 && (
            <div
              className="palette-item"
              style={{ color: theme.secondaryText }}
            >
              no matches — try `go`, `run`, or `resume`
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
