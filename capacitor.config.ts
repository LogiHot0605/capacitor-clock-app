import type { CapacitorConfig } from "@capacitor/cli";

const host = process.env.VITE_DEV_HOST;
const liveReload = process.env.CAP_LIVE_RELOAD;

const config: CapacitorConfig = {
  appId: "com.example.app.CapacitorClock",
  appName: "Capacitor Clock",
  webDir: "dist",
  android: {
    buildOptions: {
      signingType: "apksigner",
    },
  },
};

if (liveReload === "true") {
  config["server"] = {
    hostname: `${host}:42564`,
    iosScheme: "https",
    androidScheme: "https",
    url: host ? `http://${host}:42564` : `http://localhost:42564`,
    cleartext: true,
  };
}

export default config;
