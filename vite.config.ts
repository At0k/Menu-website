import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Function to get HTTPS options compatible with Windows
// Only used in development mode, not during build
function getHttpsOptions(): { key: Buffer; cert: Buffer } | undefined {
  // Only enable HTTPS in development (not during build or on Vercel)
  if (process.env.NODE_ENV === 'production' || process.env.VERCEL) {
    return undefined
  }

  const certDir = path.join(__dirname, '.cert')
  const keyPath = path.join(certDir, 'key.pem')
  const certPath = path.join(certDir, 'cert.pem')

  // Create .cert directory if it doesn't exist
  if (!fs.existsSync(certDir)) {
    fs.mkdirSync(certDir, { recursive: true })
  }

  // If certificates exist, use them
  if (fs.existsSync(keyPath) && fs.existsSync(certPath)) {
    try {
      return {
        key: fs.readFileSync(keyPath),
        cert: fs.readFileSync(certPath),
      }
    } catch (error) {
      console.warn('Error reading certificate files, falling back to default HTTPS')
      return undefined
    }
  }

  // Note: Vite's default HTTPS may have SSL version issues on Windows
  // Recommended: Use mkcert to generate trusted certificates
  // Install: winget install FiloSottile.mkcert
  // Then run: mkcert -install && mkcert localhost 127.0.0.1
  // And copy the generated files to .cert/key.pem and .cert/cert.pem
  
  // Return undefined if no certificates found (will use HTTP instead)
  return undefined
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.VERCEL ? '/' : './',
  build: {
    target: 'es2015',
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  server: {
    host: true,
    https: getHttpsOptions()
  }
})
