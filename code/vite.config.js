import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

const activeHost = process.env.HMR_HOST || 'globalstd-challenge.local'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [vue()],
    base: env.VITE_APP_BASE || '/',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    server: {
      allowedHosts: ['globalstd-challenge.local'],
      host: '0.0.0.0',
      port: 3000,
      strictPort: true,
      watch: {
        usePolling: true,
      },
      hmr: {
        host: activeHost,
        protocol: 'ws',
        port: 5173
      }
    },
  }
})
