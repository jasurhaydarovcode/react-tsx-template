import { defineConfig, Plugin, ViteDevServer } from 'vite'
import react from '@vitejs/plugin-react'

// console plugin
const Project_NAME = (): Plugin => {
  return {
    name: 'console-plugin',
    configureServer(server: ViteDevServer) {
      server.httpServer?.once('listening', () => {
        console.log('\n Happy Hacking, 🫠 🫠 😴\n Project_NAME\n');
      });
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), Project_NAME()],
  define: {
    global: 'window',
  },
  server: {
    host: '0.0.0.0',
    port: 99
  }
})
