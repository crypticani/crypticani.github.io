import React, { useEffect, useState } from "react";
import "./ClusterStatusPanel.css";

const SPARK_HEIGHTS = [30, 55, 40, 70, 52, 85, 64, 95];

// Career start in production — the uptime counter ticks live from here.
const CAREER_START = new Date("2022-06-01T09:00:00");

function formatUptime() {
  let seconds = Math.floor((Date.now() - CAREER_START.getTime()) / 1000);
  const years = Math.floor(seconds / (365.25 * 24 * 3600));
  seconds -= Math.floor(years * 365.25 * 24 * 3600);
  const days = Math.floor(seconds / 86400);
  seconds -= days * 86400;
  const hh = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const mm = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");
  return `${years}y ${days}d ${hh}:${mm}:${ss}`;
}

function useUptime() {
  const [uptime, setUptime] = useState(formatUptime);
  useEffect(() => {
    const id = setInterval(() => setUptime(formatUptime()), 1000);
    return () => clearInterval(id);
  }, []);
  return uptime;
}

export default function ClusterStatusPanel({ theme }) {
  const border = theme.border || theme.headerColor;
  const panel = theme.panel || theme.highlight;
  const ok = theme.ok || theme.imageHighlight;
  const uptime = useUptime();
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
        <span style={{ color: theme.secondaryText }}>uptime</span>
        <span className="cluster-uptime" style={{ color: theme.text }}>
          {uptime}
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
