import React, { useEffect, useState } from "react";
import { useInView } from "react-reveal";

// Renders values like "4+ yrs", "−25%", "<30 min", "20+" and counts the
// numeric part up from 0 when the element scrolls into view.
const VALUE_PATTERN = /^([^0-9]*)(\d+)(.*)$/;

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function CountUpValue({ value, duration = 900, ...rest }) {
  const [ref, inView] = useInView();
  const match = VALUE_PATTERN.exec(value);
  const target = match ? parseInt(match[2], 10) : null;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!inView || target === null) return undefined;
    if (prefersReducedMotion()) {
      setCurrent(target);
      return undefined;
    }
    let frame;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target, duration]);

  if (!match) {
    return <span {...rest}>{value}</span>;
  }

  return (
    <span ref={ref} {...rest}>
      {match[1]}
      {inView ? current : 0}
      {match[3]}
    </span>
  );
}
