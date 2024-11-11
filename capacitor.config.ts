import type { CapacitorConfig } from "@capacitor/cli";

const host = process.env.VITE_DEV_HOST;

const config: CapacitorConfig = {
  appId: "com.example.app.CapacitorClock",
  appName: "Capacitor Clock",
  webDir: "dist",
  server: {
    url: host ? `http://${host}:42564` : `http://localhost:42564`,
    cleartext: true,
  },
  android:{
    buildOptions: {
      signingType: 'apksigner'
    }
  }
  
};

export default config;
