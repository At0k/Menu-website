import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Function to get HTTPS options compatible with Windows
function getHttpsOptions() {
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
    }
  } else {
    console.warn('No SSL certificates found in .cert directory.')
    console.warn('To generate certificates, run: node generate-cert.js')
    console.warn('Or install mkcert: winget install FiloSottile.mkcert')
  }

  // Note: Vite's default HTTPS may have SSL version issues on Windows
  // Recommended: Use mkcert to generate trusted certificates
  // Install: winget install FiloSottile.mkcert
  // Then run: mkcert -install && mkcert localhost 127.0.0.1
  // And copy the generated files to .cert/key.pem and .cert/cert.pem
  
  // For now, return true to attempt HTTPS (may show SSL errors)
  // If you get ERR_SSL_VERSION_OR_CIPHER_MISMATCH, use mkcert instead
  return true
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
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
