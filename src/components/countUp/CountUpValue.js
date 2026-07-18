import React, { useEffect, useState } from "react";
import { useInView } from "react-reveal";

// Renders values like "4+ yrs", "−25%", "<30 min", "20+" and counts the
// numeric part up from 0 when the element scrolls into view.
const DIGITS = /\d+/;

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function CountUpValue({ value, duration = 900, ...rest }) {
  const [ref, inView] = useInView();
  const match = DIGITS.exec(value);
  const target = match ? parseInt(match[0], 10) : null;
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

  const prefix = value.slice(0, match.index);
  const suffix = value.slice(match.index + match[0].length);

  return (
    <span ref={ref} {...rest}>
      {prefix}
      {inView ? current : 0}
      {suffix}
    </span>
  );
}
