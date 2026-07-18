import React, { useEffect, useRef, useState } from "react";

// Drop-in replacement for the subset of react-reveal this site uses
// (<Fade bottom|top|left|right duration distance> and <Flip left|right>),
// built on IntersectionObserver so it works with React 18.

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function useInView() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
      setInView(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
}

function offsetTransform({ bottom, top, left, right, distance }) {
  const d = distance || "20px";
  if (bottom) return `translate3d(0, ${d}, 0)`;
  if (top) return `translate3d(0, -${d}, 0)`;
  if (left) return `translate3d(-${d}, 0, 0)`;
  if (right) return `translate3d(${d}, 0, 0)`;
  return "none";
}

export function Fade({
  children,
  bottom,
  top,
  left,
  right,
  duration = 1000,
  distance,
  delay = 0,
  ...rest
}) {
  const [ref, inView] = useInView();
  const hidden = offsetTransform({ bottom, top, left, right, distance });
  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : hidden,
        transition: `opacity ${duration}ms ease ${delay}ms, transform ${duration}ms ease ${delay}ms`,
        willChange: "opacity, transform",
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

export function Flip({
  children,
  left,
  right,
  duration = 1000,
  delay = 0,
  ...rest
}) {
  const [ref, inView] = useInView();
  const angle = right ? "-90deg" : "90deg";
  return (
    <div ref={ref} style={{ perspective: "1000px" }} {...rest}>
      <div
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "none" : `rotateY(${angle})`,
          transition: `opacity ${duration * 0.6}ms ease ${delay}ms, transform ${duration}ms ease ${delay}ms`,
          willChange: "opacity, transform",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default { Fade, Flip };
