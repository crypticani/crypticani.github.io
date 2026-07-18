import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";
import "./assets/font-awesome/css/all.css";

// Clean up service workers left behind by old deployments of this site.
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    registrations.forEach((registration) => registration.unregister());
  });
}

createRoot(document.getElementById("root")).render(<App />);
