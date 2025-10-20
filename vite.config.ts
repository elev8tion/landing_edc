import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Listen on all network interfaces (both IPv4 and IPv6)
    port: 5173,
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
