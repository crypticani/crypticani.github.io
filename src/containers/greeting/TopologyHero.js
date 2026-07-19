import React, { useEffect, useRef } from "react";
import "./TopologyHero.css";

// Living infrastructure map: request packets flow users → lb → k8s pods →
// data layer → prometheus, forever. Canvas-rendered, pauses off-screen,
// static under prefers-reduced-motion.

const NODES = [
  { x: 0.07, y: 0.5, r: 13, label: "users", color: "#8FA3BF" },
  { x: 0.27, y: 0.5, r: 15, label: "nginx/lb", color: "#60A5FA" },
  { x: 0.51, y: 0.2, r: 12, label: "pod·api", color: "#2DD4BF" },
  { x: 0.51, y: 0.53, r: 12, label: "pod·web", color: "#2DD4BF" },
  { x: 0.51, y: 0.85, r: 12, label: "pod·worker", color: "#2DD4BF" },
  { x: 0.76, y: 0.28, r: 13, label: "postgres", color: "#F59E0B" },
  { x: 0.76, y: 0.68, r: 11, label: "redis", color: "#F87171" },
  { x: 0.93, y: 0.47, r: 11, label: "prometheus", color: "#34D399" },
];

const EDGES = [
  [0, 1],
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 5],
  [3, 5],
  [4, 6],
  [2, 6],
  [5, 7],
  [6, 7],
  [3, 7],
];

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function TopologyHero({ theme }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext("2d");
    const reduced = prefersReducedMotion();
    let packets = [];
    let hovered = null;
    let running = true;
    let disposed = false;
    let t = 0;

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function pos(node) {
      return {
        x: node.x * canvas.clientWidth,
        y: node.y * canvas.clientHeight,
      };
    }

    function spawn() {
      const edge = EDGES.at(Math.floor(Math.random() * EDGES.length));
      packets.push({
        from: NODES.at(edge.at(0)),
        to: NODES.at(edge.at(1)),
        p: 0,
        sp: 0.009 + Math.random() * 0.013,
      });
    }

    function draw() {
      if (disposed) return;
      t += 0.02;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);

      EDGES.forEach((edge) => {
        const a = pos(NODES.at(edge.at(0)));
        const b = pos(NODES.at(edge.at(1)));
        ctx.strokeStyle = "rgba(45, 212, 191, 0.16)";
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      });

      if (!reduced && Math.random() < 0.22 && packets.length < 24) spawn();
      packets = packets.filter((pk) => pk.p <= 1);
      packets.forEach((pk) => {
        pk.p += pk.sp;
        const a = pos(pk.from);
        const b = pos(pk.to);
        const x = a.x + (b.x - a.x) * pk.p;
        const y = a.y + (b.y - a.y) * pk.p;
        ctx.fillStyle = "rgba(45, 212, 191, 0.25)";
        ctx.beginPath();
        ctx.arc(x, y, 4.5, 0, 7);
        ctx.fill();
        ctx.fillStyle = "#2DD4BF";
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, 7);
        ctx.fill();
      });

      NODES.forEach((node) => {
        const c = pos(node);
        const pulse = 1 + Math.sin(t + c.x) * 0.05;
        const r = node.r * pulse * (hovered === node ? 1.25 : 1);
        ctx.fillStyle = theme.panel || theme.highlight;
        ctx.strokeStyle = node.color;
        ctx.lineWidth = hovered === node ? 2.2 : 1.4;
        ctx.beginPath();
        ctx.arc(c.x, c.y, r, 0, 7);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = hovered === node ? "#F1F5F9" : theme.secondaryText;
        ctx.font =
          (hovered === node ? "700 " : "") + "10px 'JetBrains Mono', monospace";
        ctx.textAlign = "center";
        ctx.fillText(node.label, c.x, c.y + r + 13);
        if (hovered === node) {
          ctx.fillStyle = theme.ok || "#34D399";
          ctx.fillText("● healthy · 0 restarts", c.x, c.y - r - 7);
        }
      });

      if (running && !reduced) window.requestAnimationFrame(draw);
    }

    function onMove(event) {
      const rect = canvas.getBoundingClientRect();
      const mx = event.clientX - rect.left;
      const my = event.clientY - rect.top;
      hovered = null;
      NODES.forEach((node) => {
        const c = pos(node);
        const hit = (node.r + 10) * (node.r + 10);
        if ((mx - c.x) * (mx - c.x) + (my - c.y) * (my - c.y) < hit) {
          hovered = node;
        }
      });
      if (reduced) draw();
    }

    resize();
    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", onMove);

    let observer = null;
    if ("IntersectionObserver" in window && !reduced) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const was = running;
            running = entry.isIntersecting;
            if (running && !was) window.requestAnimationFrame(draw);
          });
        },
        { threshold: 0.05 },
      );
      observer.observe(canvas);
    }

    if (reduced) {
      for (let i = 0; i < 12; i += 1) spawn();
      packets.forEach((pk) => {
        pk.p = Math.random();
      });
    }
    window.requestAnimationFrame(draw);
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        if (!disposed) draw();
      });
    }

    return () => {
      disposed = true;
      running = false;
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMove);
      if (observer) observer.disconnect();
    };
  }, [theme]);

  return (
    <div
      className="topology-hero"
      style={{
        borderColor: theme.border || theme.headerColor,
        backgroundColor: theme.dark,
      }}
    >
      <div
        className="topology-title"
        style={{ color: theme.secondaryText, borderColor: theme.border }}
      >
        <span>cluster/production — live traffic</span>
        <span style={{ color: theme.ok || theme.imageHighlight }}>
          ● healthy
        </span>
      </div>
      <canvas
        ref={canvasRef}
        className="topology-canvas"
        aria-label="Animated map of production infrastructure: users, load balancer, Kubernetes pods, databases, and Prometheus"
        role="img"
      />
    </div>
  );
}
