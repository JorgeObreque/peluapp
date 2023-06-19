import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
  server: {
    strictPort:true,
    proxy: {
      // Configura aquí los endpoints que deseas redirigir
      '/api': {
        target: 'http://localhost:8081',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      // Agrega más configuraciones de proxy si es necesario
    },
    hmr:{
      overlay: false,
    }
  }
});

