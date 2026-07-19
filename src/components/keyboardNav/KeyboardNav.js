import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// TTY-style keyboard shortcuts (documented in the terminal's `help`):
// 0–4 switch pages (tmux window numbers), j/k scroll. Never fires while typing.
const ROUTES = new Map([
  ["0", "/home"],
  ["1", "/education"],
  ["2", "/experience"],
  ["3", "/projects"],
  ["4", "/contact"],
]);

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

      if (ROUTES.has(event.key)) {
        navigate(ROUTES.get(event.key));
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
