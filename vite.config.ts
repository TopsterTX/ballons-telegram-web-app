import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    // basicSsl({
    //   name: "cert",
    //   domains: ["*"],
    //   certDir: "./secrets",
    // }),
  ],
  server: {
    // https: {
    //   cert: fs.readFileSync("./secrets/cert.crt"),
    //   key: fs.readFileSync("./secrets/cert.key"),
    // },
    host: true,
    port: 8000,
    watch: {
      usePolling: true,
    },
  },
});
