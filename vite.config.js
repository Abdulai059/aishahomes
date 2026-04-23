import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Enable code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          router: ["react-router", "react-router-dom"],
          ui: ["lucide-react", "@heroicons/react"],
          utils: ["aos", "html2canvas", "jspdf", "pdfmake"],
        },
      },
    },
    // Optimize chunks
    chunkSizeWarningLimit: 1000,
    // Enable compression
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  // Optimize dev server
  server: {
    hmr: true,
    open: true,
  },
  // Optimize preview
  preview: {
    port: 4173,
  },
});
