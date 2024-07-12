import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      Components: path.resolve(__dirname, "./src/Components"),
      assets: path.resolve(__dirname, "./src/assets"),
      providers: path.resolve(__dirname, "./src/providers"),
      utils: path.resolve(__dirname, "./src/utils"),
    },
  },
});
