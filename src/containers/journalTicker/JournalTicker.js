import React, { useEffect, useState } from "react";
import "./JournalTicker.css";

// journalctl-style event stream under the hero. One line, rotating through
// real numbers from production work — plus a live uptime counter.

const CAREER_START = new Date("2022-06-01T09:00:00");

function uptimeText() {
  let seconds = Math.floor((Date.now() - CAREER_START.getTime()) / 1000);
  const years = Math.floor(seconds / (365.25 * 24 * 3600));
  seconds -= Math.floor(years * 365.25 * 24 * 3600);
  const days = Math.floor(seconds / 86400);
  return `${years}y ${days}d`;
}

function buildEvents() {
  return [
    "deploy web@latest → production ok · zero downtime",
    "prometheus: all targets up · 15+ apps @ 99.9% SLA",
    `uptime ${uptimeText()} · load average: 0.42 0.08 0.01`,
    "patroni: primary healthy · replica lag 0s · PITR ready",
    "grype scan: 0 critical · security gate passed",
    "cron: backup validation ok · restore evidence stored",
    "k8s: rolling update complete · 20/20 pods healthy",
    "cost bot: rightsizing applied · cloud spend −25% YoY",
    "alert resolved: MTTR −40% since runbooks shipped",
    "audit: ISO 27001 / SOC 2 evidence collected · ok",
  ];
}

export default function JournalTicker({ theme }) {
  const [index, setIndex] = useState(0);
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((current) => current + 1);
      setNow(new Date());
    }, 3200);
    return () => clearInterval(id);
  }, []);

  const events = buildEvents();
  const message = events.at(index % events.length);
  const time = now.toTimeString().slice(0, 8);

  return (
    <div
      className="journal-ticker"
      style={{
        backgroundColor: theme.dark,
        borderColor: theme.border || theme.headerColor,
        color: theme.secondaryText,
      }}
      aria-live="off"
    >
      <span className="journal-time" style={{ color: theme.ok || "#34D399" }}>
        [{time}]
      </span>{" "}
      {message}
    </div>
  );
}
