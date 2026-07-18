import React, { useEffect, useRef, useState } from "react";
import Button from "../../components/button/Button";
import { greeting, socialMediaLinks } from "../../portfolio";
import "./ProfileTerminal.css";

const prompt = "crypticani@portfolio:~$";

const initialLines = [
  {
    type: "system",
    content:
      "Type `help` to explore Aniket's DevOps, platform, cloud, and security profile.",
  },
];

const linkFor = (name) => socialMediaLinks.find((link) => link.name === name);

function outputFor(command, commandHistory) {
  switch (command) {
    case "help":
      return [
        "Available commands:",
        "whoami, ls, cat about.txt, ls skills/, ls projects/, cat projects/qurli, cat projects/torvix, contact, resume, history, sudo hire-me, clear",
      ];
    case "whoami":
      return [
        "Aniket Kumar aka crypticani",
        "DevOps Engineer focused on production infrastructure, cloud migrations, containers, CI/CD, observability, automation, DevSecOps, and cloud cost optimization.",
      ];
    case "ls":
      return ["about.txt", "skills/", "projects/", "contact", "resume"];
    case "cat about.txt":
      return [
        "Started as a Django/backend-focused full stack engineer, then moved into DevOps and platform engineering.",
        "I work across Linux systems, cloud infrastructure, migrations, CI/CD, monitoring, containers, automation, IAM, and practical DevSecOps.",
        "Current work focuses on reliable production systems, operational visibility, cloud cost optimization, and safer delivery workflows.",
      ];
    case "ls skills/":
      return [
        "linux",
        "docker",
        "kubernetes",
        "terraform",
        "ansible",
        "github-actions",
        "ci-cd",
        "cloud-migration",
        "cloud-cost-optimization",
        "prometheus",
        "grafana",
        "nginx",
        "postgresql",
        "ldap",
        "bash",
        "python",
        "cloud-infrastructure",
      ];
    case "ls projects/":
      return [
        "qurli",
        "Torvix",
        "uptime-lens",
        "spend-meter",
        "work-hours-tracker",
        "The DevOps Handbook",
        "The VAPT Handbook",
      ];
    case "cat projects/qurli":
      return [
        "qurli: a lightweight terminal-native HTTP client for developers, DevOps engineers, and SREs.",
        "Built around fast request workflows, clear output, and command-line ergonomics.",
        "Repo: https://github.com/crypticani/qurli",
      ];
    case "cat projects/torvix":
      return [
        "Torvix: a launched open-source cloud cost intelligence platform focused on OCI cost visibility.",
        "Built around anomaly detection, forecasting, unused-resource detection, PostgreSQL-backed inventory, and Grafana-ready reporting.",
        "Repo: https://github.com/crypticani/torvix",
      ];
    case "contact":
      return [
        {
          text: "Email: aniket.kumar@hotmail.com",
          href: "mailto:aniket.kumar@hotmail.com",
        },
        {
          text: "LinkedIn: linkedin.com/in/crypticani",
          href: greeting.linkedInProfile,
        },
        { text: "GitHub: github.com/crypticani", href: greeting.githubProfile },
        {
          text: "Discord: crypticani",
          href:
            linkFor("Discord")?.link || "https://discord.com/users/crypticani",
        },
      ];
    case "resume":
      return [{ text: "Open resume PDF", href: greeting.resumeLink }];
    case "history":
      return commandHistory.length
        ? commandHistory.map((item, index) => `${index + 1}  ${item}`)
        : ["No commands yet."];
    case "sudo hire-me":
      return [
        "[sudo] password for recruiter: ********",
        "Permission granted.",
        "Aniket is available for conversations around DevOps, platform engineering, cloud migration, cloud infrastructure, CI/CD, observability, automation, cost optimization, and DevSecOps.",
        "Run `contact` to reach out.",
      ];
    default:
      return ["command not found. Try `help`."];
  }
}

function TerminalOutputLine({ line }) {
  if (line.type === "command") {
    return (
      <div className="terminal-line terminal-command-line">
        <span className="terminal-prompt">{prompt}</span>{" "}
        <span className="terminal-command-text">{line.content}</span>
      </div>
    );
  }

  if (line.type === "system") {
    return (
      <div className="terminal-line terminal-system-line">{line.content}</div>
    );
  }

  if (typeof line.content === "object" && line.content.href) {
    return (
      <div className="terminal-line">
        <a
          className="terminal-link"
          href={line.content.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {line.content.text}
        </a>
      </div>
    );
  }

  return <div className="terminal-line">{line.content}</div>;
}

export default function ProfileTerminal({ theme }) {
  const [lines, setLines] = useState(initialLines);
  const [value, setValue] = useState("");
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(null);
  const inputRef = useRef(null);
  const bodyRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [lines]);

  const executeCommand = (rawCommand) => {
    const command = rawCommand.trim();
    if (!command) return;

    if (command === "clear") {
      setLines([]);
      setHistory((current) => [...current, command]);
      setHistoryIndex(null);
      return;
    }

    const nextHistory = [...history, command];
    const output = outputFor(command, nextHistory);
    setHistory(nextHistory);
    setLines((currentLines) => [
      ...currentLines,
      { type: "command", content: command },
      ...output.map((content) => ({ type: "output", content })),
    ]);
    setHistoryIndex(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    executeCommand(value);
    setValue("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowUp") {
      event.preventDefault();
      if (!history.length) return;
      const nextIndex =
        historyIndex === null
          ? history.length - 1
          : Math.max(historyIndex - 1, 0);
      setHistoryIndex(nextIndex);
      setValue(history[nextIndex]);
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (!history.length || historyIndex === null) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= history.length) {
        setHistoryIndex(null);
        setValue("");
      } else {
        setHistoryIndex(nextIndex);
        setValue(history[nextIndex]);
      }
    }
  };

  const focusTerminal = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <section
      id="profile-terminal"
      className="profile-terminal-section"
      aria-labelledby="profile-terminal-heading"
    >
      <div className="profile-terminal-copy">
        <h2 id="profile-terminal-heading" style={{ color: theme.text }}>
          Explore my profile like a terminal
        </h2>
        <p style={{ color: theme.secondaryText }}>
          A recruiter-friendly command line for quickly scanning my background,
          skills, projects, contact links, and resume.
        </p>
      </div>

      <div
        className="profile-terminal-window"
        onClick={focusTerminal}
        style={{
          backgroundColor: theme.dark,
          borderColor: theme.headerColor,
          boxShadow: `0 24px 80px ${theme.dark}66`,
        }}
      >
        <div className="profile-terminal-titlebar">
          <div className="profile-terminal-controls" aria-hidden="true">
            <span className="terminal-dot terminal-dot-red" />
            <span className="terminal-dot terminal-dot-yellow" />
            <span className="terminal-dot terminal-dot-green" />
          </div>
          <span
            className="profile-terminal-title"
            style={{ color: theme.secondaryText }}
          >
            profile.sh
          </span>
        </div>

        <div
          className="profile-terminal-body"
          ref={bodyRef}
          role="log"
          aria-live="polite"
          aria-label="Interactive profile terminal output"
        >
          {lines.map((line, index) => (
            <TerminalOutputLine line={line} key={`${line.type}-${index}`} />
          ))}
          <form className="terminal-input-row" onSubmit={handleSubmit}>
            <label
              className="terminal-input-label"
              htmlFor="profile-terminal-input"
            >
              Terminal command
            </label>
            <span className="terminal-prompt">{prompt}</span>
            <input
              id="profile-terminal-input"
              ref={inputRef}
              value={value}
              onChange={(event) => setValue(event.target.value)}
              onKeyDown={handleKeyDown}
              autoComplete="off"
              spellCheck="false"
              aria-label="Type a terminal command"
              style={{ caretColor: theme.imageHighlight }}
            />
            <span className="terminal-cursor" aria-hidden="true" />
          </form>
        </div>
      </div>
      <div className="profile-terminal-fallback">
        <Button
          text="View Resume"
          newTab={true}
          href={greeting.resumeLink}
          theme={theme}
        />
        <Button
          text="Contact Me"
          newTab={false}
          href={greeting.contactLink}
          theme={theme}
        />
      </div>
    </section>
  );
}
