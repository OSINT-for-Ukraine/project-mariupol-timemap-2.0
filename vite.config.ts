import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
import generateFile from "vite-plugin-generate-file";

// https://vitejs.dev/config/

export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  console.log(`process.env.VITE_TEST = ${process.env.VITE_TEST}`);

  return {
    plugins: [
      react(),
      generateFile([
        {
          output: "./_redirects",
          type: "template",
          template: "./template.ejs",
        },
      ]),
    ],
    resolve: {
      alias: {
        Components: path.resolve(__dirname, "./src/Components"),
        assets: path.resolve(__dirname, "./src/assets"),
        providers: path.resolve(__dirname, "./src/providers"),
        utils: path.resolve(__dirname, "./src/utils"),
      },
    },
    build: {
      commonjsOptions: {
        transformMixedEsModules: true,
      },
    },
  };
});
