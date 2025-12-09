# PowerShell script to generate SSL certificate for localhost
# Run this script as Administrator

$certDir = Join-Path $PSScriptRoot ".cert"

# Create .cert directory if it doesn't exist
if (-not (Test-Path $certDir)) {
    New-Item -ItemType Directory -Path $certDir | Out-Null
}

$keyPath = Join-Path $certDir "key.pem"
$certPath = Join-Path $certDir "cert.pem"

Write-Host "Generating SSL certificate for localhost..." -ForegroundColor Green

try {
    # Generate certificate using PowerShell
    $cert = New-SelfSignedCertificate `
        -DnsName "localhost", "127.0.0.1" `
        -CertStoreLocation "Cert:\CurrentUser\My" `
        -KeyAlgorithm RSA `
        -KeyLength 2048 `
        -Provider "Microsoft Enhanced RSA and AES Cryptographic Provider" `
        -KeyExportPolicy Exportable `
        -NotAfter (Get-Date).AddYears(1)

    # Export certificate to PFX
    $pfxPath = Join-Path $certDir "cert.pfx"
    $password = ConvertTo-SecureString -String "vite-dev" -Force -AsPlainText
    Export-PfxCertificate -Cert $cert -FilePath $pfxPath -Password $password | Out-Null

    # Convert PFX to PEM format using OpenSSL (if available)
    # Note: This requires OpenSSL to be installed
    $opensslPath = Get-Command openssl -ErrorAction SilentlyContinue
    
    if ($opensslPath) {
        # Extract private key
        & openssl pkcs12 -in $pfxPath -nocerts -nodes -out $keyPath -passin pass:vite-dev
        
        # Extract certificate
        & openssl pkcs12 -in $pfxPath -clcerts -nokeys -out $certPath -passin pass:vite-dev
        
        Write-Host "✓ Certificate generated successfully!" -ForegroundColor Green
        Write-Host "  Key: $keyPath" -ForegroundColor Cyan
        Write-Host "  Cert: $certPath" -ForegroundColor Cyan
        
        # Clean up PFX file
        Remove-Item $pfxPath -ErrorAction SilentlyContinue
        
        # Clean up certificate from store (optional)
        Remove-Item "Cert:\CurrentUser\My\$($cert.Thumbprint)" -ErrorAction SilentlyContinue
    } else {
        Write-Host "OpenSSL not found. Install OpenSSL to complete certificate generation." -ForegroundColor Yellow
        Write-Host "Alternative: Install mkcert (recommended):" -ForegroundColor Yellow
        Write-Host "  winget install FiloSottile.mkcert" -ForegroundColor Cyan
        Write-Host "  mkcert -install" -ForegroundColor Cyan
        Write-Host "  mkcert localhost 127.0.0.1" -ForegroundColor Cyan
    }
} catch {
    Write-Host "Error generating certificate: $_" -ForegroundColor Red
    Write-Host "Make sure you're running PowerShell as Administrator" -ForegroundColor Yellow
}

