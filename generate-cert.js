import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const certDir = path.join(__dirname, '.cert')

// Create .cert directory
if (!fs.existsSync(certDir)) {
  fs.mkdirSync(certDir, { recursive: true })
}

const keyPath = path.join(certDir, 'key.pem')
const certPath = path.join(certDir, 'cert.pem')

console.log('Generating SSL certificate for localhost...')

try {
  // Try using OpenSSL (common on Windows with Git Bash or WSL)
  execSync(
    `openssl req -x509 -newkey rsa:2048 -keyout "${keyPath}" -out "${certPath}" -days 365 -nodes -subj "/C=US/ST=State/L=City/O=Organization/CN=localhost"`,
    { stdio: 'inherit' }
  )
  console.log('✓ Certificate generated successfully!')
  console.log(`  Key: ${keyPath}`)
  console.log(`  Cert: ${certPath}`)
} catch (error) {
  console.error('Failed to generate certificate with OpenSSL.')
  console.error('Please install OpenSSL or use one of these alternatives:')
  console.error('\nOption 1: Install mkcert (recommended)')
  console.error('  winget install FiloSottile.mkcert')
  console.error('  mkcert -install')
  console.error('  mkcert localhost')
  console.error('\nOption 2: Use PowerShell to generate certificate')
  console.error('  Run PowerShell as Administrator and execute:')
  console.error('  $cert = New-SelfSignedCertificate -DnsName "localhost" -CertStoreLocation "Cert:\\CurrentUser\\My"')
  console.error('  Then export the certificate manually.')
}

