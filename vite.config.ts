import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo: any) => {
          var info = assetInfo.name.split(".");
          var extType = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = "img";
          } else if (/woff|woff2/.test(extType)) {
            extType = "css";
          }
          return `assets_home/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: "assets_home/js/[name]-[hash].js",
        entryFileNames: "assets_home/js/[name]-[hash].js",
      },
    },
  },
});
