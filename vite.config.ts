import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import generouted from "@generouted/react-router/plugin";

const host = process.env.VITE_DEV_HOST;

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), generouted()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  server: {
    host: host ? host : true,
    port: 42564,
  },
});
