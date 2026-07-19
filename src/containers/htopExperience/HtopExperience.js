import React, { useEffect, useState } from "react";
import { htopProcesses } from "../../portfolio";
import "./HtopExperience.css";

// htop-style summary of roles: each position is a running process.
// CPU bars wiggle gently (frozen under prefers-reduced-motion).

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function wiggle(value) {
  const next = value + (Math.random() * 10 - 5);
  return Math.max(4, Math.min(97, Math.round(next)));
}

export default function HtopExperience({ theme }) {
  const [cpus, setCpus] = useState(() => htopProcesses.map((proc) => proc.cpu));

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;
    const id = setInterval(() => {
      setCpus((current) => current.map((value) => wiggle(value)));
    }, 1500);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="htop-section"
      aria-label="Experience summary, htop style"
    >
      <div
        className="htop-window"
        style={{
          backgroundColor: theme.dark,
          borderColor: theme.border || theme.headerColor,
        }}
      >
        <p className="htop-cmdline" style={{ color: theme.secondaryText }}>
          <span style={{ color: theme.imageHighlight }}>
            crypticani@prod:~$
          </span>{" "}
          htop -u aniket
        </p>
        <p className="htop-meta" style={{ color: theme.secondaryText }}>
          Tasks: <b style={{ color: theme.text }}>4 total</b>, 1 running · Load:{" "}
          <b style={{ color: theme.text }}>0.42 0.08 0.01</b> · Uptime:{" "}
          <b style={{ color: theme.ok || theme.imageHighlight }}>4y+</b>
        </p>
        <div className="htop-scroll">
          <table className="htop-table">
            <thead>
              <tr
                style={{
                  backgroundColor: theme.imageHighlight,
                  color: theme.dark,
                }}
              >
                <th>PID</th>
                <th>ROLE</th>
                <th>CPU%</th>
                <th>TIME</th>
                <th>COMMAND</th>
              </tr>
            </thead>
            <tbody>
              {htopProcesses.map((proc, index) => (
                <tr key={proc.pid} style={{ borderColor: theme.border }}>
                  <td style={{ color: theme.secondaryText }}>{proc.pid}</td>
                  <td style={{ color: theme.text }}>
                    {proc.role}{" "}
                    <span style={{ color: theme.secondaryText }}>
                      · {proc.org}
                    </span>
                  </td>
                  <td>
                    <span className="htop-cpu">
                      <span
                        className="htop-bar"
                        style={{ backgroundColor: theme.panel }}
                      >
                        <i
                          style={{
                            width: `${cpus.at(index)}%`,
                            background: `linear-gradient(90deg, ${theme.imageHighlight}, ${theme.ok || theme.imageHighlight})`,
                          }}
                        />
                      </span>
                      <span
                        className="htop-pc"
                        style={{ color: theme.ok || theme.imageHighlight }}
                      >
                        {cpus.at(index)}
                      </span>
                    </span>
                  </td>
                  <td style={{ color: theme.secondaryText }}>{proc.time}</td>
                  <td
                    className="htop-command"
                    style={{ color: theme.secondaryText }}
                  >
                    {proc.command}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
