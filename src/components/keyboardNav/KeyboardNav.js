import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// TTY-style keyboard shortcuts (easter egg, documented in the terminal's
// `help`): 1–5 switch pages, j/k scroll. Never fires while typing.
const ROUTES = {
  1: "/home",
  2: "/education",
  3: "/experience",
  4: "/projects",
  5: "/contact",
};

export default function KeyboardNav() {
  const navigate = useNavigate();

  useEffect(() => {
    const handler = (event) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      const target = event.target;
      if (
        target &&
        (target.closest("input, textarea, select, [contenteditable]") ||
          target.isContentEditable)
      ) {
        return;
      }
      // Don't hijack keys while the boot splash is running (any key skips it)
      if (document.querySelector(".boot-screen")) return;

      if (ROUTES[event.key]) {
        navigate(ROUTES[event.key]);
      } else if (event.key === "j") {
        window.scrollBy({ top: 140, behavior: "smooth" });
      } else if (event.key === "k") {
        window.scrollBy({ top: -140, behavior: "smooth" });
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [navigate]);

  return null;
}
