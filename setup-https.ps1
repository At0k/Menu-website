# Complete setup script for HTTPS certificates
# This script does everything in one go

Write-Host "Setting up HTTPS certificates for Vite..." -ForegroundColor Cyan
Write-Host ""

# Step 1: Check if mkcert is installed
try {
    $mkcertVersion = mkcert -version 2>&1
    Write-Host "✓ mkcert is installed" -ForegroundColor Green
} catch {
    Write-Host "✗ mkcert is not found. Please install it first:" -ForegroundColor Red
    Write-Host "  winget install FiloSottile.mkcert" -ForegroundColor Yellow
    exit 1
}

# Step 2: Install local CA (if not already installed)
Write-Host "`nInstalling local CA..." -ForegroundColor Cyan
mkcert -install 2>&1 | Out-Null

# Step 3: Generate certificates
Write-Host "Generating certificates..." -ForegroundColor Cyan
if (Test-Path "localhost+1.pem" -or Test-Path "localhost+1-key.pem") {
    Write-Host "  Certificate files already exist, regenerating..." -ForegroundColor Yellow
    Remove-Item "localhost+1*.pem" -Force -ErrorAction SilentlyContinue
}

mkcert localhost 127.0.0.1 2>&1 | Out-Null

# Step 4: Create .cert directory and copy files
$certDir = ".cert"
if (-not (Test-Path $certDir)) {
    New-Item -ItemType Directory -Path $certDir | Out-Null
    Write-Host "  Created .cert directory" -ForegroundColor Green
}

if (Test-Path "localhost+1-key.pem" -and Test-Path "localhost+1.pem") {
    Copy-Item "localhost+1-key.pem" "$certDir\key.pem" -Force
    Copy-Item "localhost+1.pem" "$certDir\cert.pem" -Force
    
    Write-Host "✓ Certificates copied to .cert directory" -ForegroundColor Green
    Write-Host "  Key: $certDir\key.pem" -ForegroundColor Cyan
    Write-Host "  Cert: $certDir\cert.pem" -ForegroundColor Cyan
    
    # Clean up original files
    Remove-Item "localhost+1*.pem" -Force -ErrorAction SilentlyContinue
    Write-Host "✓ Cleaned up original certificate files" -ForegroundColor Green
    
    Write-Host "`n✓ Setup complete! You can now run 'npm run dev' with HTTPS." -ForegroundColor Green
} else {
    Write-Host "✗ Error: Certificate files were not generated correctly" -ForegroundColor Red
    exit 1
}

