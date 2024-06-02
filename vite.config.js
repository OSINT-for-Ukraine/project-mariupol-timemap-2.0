import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  resolve: {
    alias: {
      Components: "/src/Components",
      assets: "/src/assets",
      providers: "/src/providers",
    },
  },
});
