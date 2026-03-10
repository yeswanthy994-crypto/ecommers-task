import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/ecommers-task/",
  server: {
    port: 5173
  }
});
