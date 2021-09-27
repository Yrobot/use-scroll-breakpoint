import { defineConfig } from "vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: "esnext",

    lib: {
      entry: "./src/index.ts",
      formats: ["es"],
      fileName: "index",
    },

    outDir: "lib",

    sourcemap: true,

    minify: "terser",

    rollupOptions: {
      external: ["react", "react-dom"],
    },
  },
});
