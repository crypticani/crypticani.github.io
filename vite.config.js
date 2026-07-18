import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Local IntersectionObserver-based shim with the same API surface
      "react-reveal": path.resolve(__dirname, "src/lib/reveal/index.jsx"),
    },
  },
  // The codebase keeps JSX in .js files (CRA heritage)
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.(js|jsx)$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: { ".js": "jsx" },
    },
  },
  build: {
    outDir: "build",
  },
  test: {
    environment: "jsdom",
  },
});
