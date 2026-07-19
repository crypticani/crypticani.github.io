import React, { useEffect, useRef, useState } from "react";
import Button from "../../components/button/Button";
import { greeting, socialMediaLinks } from "../../portfolio";
import "./ProfileTerminal.css";

const prompt = "crypticani@portfolio:~$";

const initialLines = [
  {
    type: "system",
    content:
      "Type `help` to explore Aniket's DevOps, platform, cloud, and security profile. Tab completes commands.",
  },
];

const COMMANDS = [
  "help",
  "whoami",
  "neofetch",
  "uptime",
  "ls",
  "cat about.txt",
  "ls skills/",
  "ls projects/",
  "cat projects/qurli",
  "cat projects/torvix",
  "contact",
  "resume",
  "history",
  "ping recruiter",
  "python3",
  "sudo hire-me",
  "clear",
];

const CAREER_START = new Date("2022-06-01T09:00:00");

function yearsInProduction() {
  const years =
    (Date.now() - CAREER_START.getTime()) / (365.25 * 24 * 3600 * 1000);
  return Math.floor(years);
}

const linkFor = (name) => socialMediaLinks.find((link) => link.name === name);

function neofetchLines() {
  const years = yearsInProduction();
  const info = [
    "crypticani@production",
    "─────────────────────",
    "OS       crypticaniOS 4.2 (I use Linux, btw)",
    "Role     Senior DevOps Engineer · Technical Lead",
    `Uptime   ${years}+ years in production`,
    "Shell    bash + python3 (automation daemon)",
    "Clouds   OCI · AWS · GCP · Azure",
    "K8s      20+ services, zero-downtime deploys",
    "SLA      99.9% · MTTR −40% · Cloud spend −25%",
    "Coffee   [██████████] 100%",
  ];
  const tux = [
    "    .--.    ",
    "   |o_o |   ",
    "   |:_/ |   ",
    "  //   \\ \\  ",
    " (|     | ) ",
    "/'\\_   _/`\\ ",
    "\\___)=(___/ ",
    "            ",
    "            ",
    "            ",
  ];
  return tux.map((art, index) => ({
    type: "pre",
    content: `${art}  ${info.at(index) || ""}`,
  }));
}

function uptimeLines() {
  const time = new Date().toTimeString().slice(0, 8);
  return [
    `${time} up ${yearsInProduction()}+ years, 15+ apps @ 99.9% SLA, load average: 0.42, 0.08, 0.01`,
    "All systems operational. Nothing is on fire (verified by Prometheus, not vibes).",
  ];
}

function outputFor(command, commandHistory) {
  switch (command) {
    case "help":
      return [
        "Available commands:",
        COMMANDS.filter((item) => item !== "clear").join(", ") + ", clear",
        "Site shortcuts (outside this terminal): 0–4 switch pages, j/k scroll, Ctrl+K command palette.",
      ];
    case "neofetch":
      return neofetchLines();
    case "uptime":
      return uptimeLines();
    case "ping recruiter":
      return [
        "PING recruiter (you): 56 data bytes",
        "64 bytes from recruiter: icmp_seq=1 ttl=64 time=0.042 ms — hello!",
        "--- recruiter ping statistics ---",
        "1 packets transmitted, 1 received, 0% packet loss",
        "Run `sudo hire-me` to establish a persistent connection.",
      ];
    case "python3":
    case "python":
      return [
        "Python 3.12 (crypticani build) on linux — automation daemon attached",
        ">>> import automation",
        ">>> automation.rule",
        "'If it happens twice, script it. If it happens three times, it gets a pipeline, alerts, and a dashboard.'",
        ">>> exit()",
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
    case "torvix":
      return [
        "Torvix: a launched open-source cloud cost intelligence platform focused on OCI cost visibility.",
        "Built around anomaly detection, forecasting, unused-resource detection, PostgreSQL-backed inventory, and Grafana-ready reporting.",
        "Repo: https://github.com/crypticani/torvix",
      ];
    case "qurli":
      return outputFor("cat projects/qurli", commandHistory);
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
    case "rm -rf /":
      return [
        "rm: it would be a shame if something happened to this production system.",
        "Request logged, alert fired, incident channel created. Try `help` instead.",
      ];
    default:
      return [`bash: ${command}: command not found. Try \`help\`.`];
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

  if (line.type === "pre") {
    return (
      <div className="terminal-line terminal-pre-line">{line.content}</div>
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

  // Commands forwarded from the command palette (Ctrl+K → "run: …")
  const executeRef = useRef(null);
  useEffect(() => {
    const onExec = (event) => {
      const command = event.detail && event.detail.command;
      if (!command) return;
      const section = document.getElementById("profile-terminal");
      if (section) section.scrollIntoView({ behavior: "smooth" });
      if (executeRef.current) executeRef.current(command);
    };
    window.addEventListener("crypticani:terminal-exec", onExec);
    return () => window.removeEventListener("crypticani:terminal-exec", onExec);
  }, []);

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
      ...output.map((content) =>
        content && content.type ? content : { type: "output", content },
      ),
    ]);
    setHistoryIndex(null);
  };

  executeRef.current = executeCommand;

  const handleSubmit = (event) => {
    event.preventDefault();
    executeCommand(value);
    setValue("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      const partial = value.trimStart();
      if (!partial) return;
      const matches = COMMANDS.filter((item) => item.startsWith(partial));
      if (matches.length === 1) {
        setValue(matches[0]);
      } else if (matches.length > 1) {
        setLines((currentLines) => [
          ...currentLines,
          { type: "command", content: partial },
          { type: "output", content: matches.join("   ") },
        ]);
      }
      return;
    }

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
        <p
          className="profile-terminal-cmdline"
          style={{ color: theme.secondaryText }}
        >
          <span style={{ color: theme.imageHighlight }}>
            crypticani@prod:~$
          </span>{" "}
          ssh recruiter@crypticani.dev
        </p>
        <h2 id="profile-terminal-heading" style={{ color: theme.text }}>
          Explore my profile like a terminal
        </h2>
        <p style={{ color: theme.secondaryText }}>
          A recruiter-friendly command line — try `neofetch`, `sudo hire-me`, or
          Tab completion.
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
