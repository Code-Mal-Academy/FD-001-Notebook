import { defineConfig, ViteDevServer } from 'vite'
import react from '@vitejs/plugin-react'
import app from "./backend/app"




function expressPlugin() {
  return {
    name: 'express-plugin',
    configureServer(server: ViteDevServer) {
      server.middlewares.use(app)
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), expressPlugin()],
})
