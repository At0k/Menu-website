# Script to set up SSL certificates for Vite development server
# Run this after installing mkcert and generating certificates

$certDir = Join-Path $PSScriptRoot ".cert"

# Create .cert directory if it doesn't exist
if (-not (Test-Path $certDir)) {
    New-Item -ItemType Directory -Path $certDir | Out-Null
    Write-Host "Created .cert directory" -ForegroundColor Green
}

# Look for mkcert generated files
$certFiles = Get-ChildItem -Path $PSScriptRoot -Filter "localhost*.pem" -ErrorAction SilentlyContinue

if ($certFiles.Count -eq 0) {
    Write-Host "No certificate files found. Please run:" -ForegroundColor Yellow
    Write-Host "  mkcert -install" -ForegroundColor Cyan
    Write-Host "  mkcert localhost 127.0.0.1" -ForegroundColor Cyan
    exit 1
}

# Find key and cert files
$keyFile = $certFiles | Where-Object { $_.Name -like "*key*" } | Select-Object -First 1
$certFile = $certFiles | Where-Object { $_.Name -notlike "*key*" } | Select-Object -First 1

if ($keyFile -and $certFile) {
    Copy-Item $keyFile.FullName (Join-Path $certDir "key.pem") -Force
    Copy-Item $certFile.FullName (Join-Path $certDir "cert.pem") -Force
    
    Write-Host "✓ Certificates copied to .cert directory" -ForegroundColor Green
    Write-Host "  Key: $certDir\key.pem" -ForegroundColor Cyan
    Write-Host "  Cert: $certDir\cert.pem" -ForegroundColor Cyan
    
    # Optionally remove original files
    Write-Host "`nOriginal certificate files:" -ForegroundColor Yellow
    $certFiles | ForEach-Object { Write-Host "  $_" }
    $remove = Read-Host "Remove original certificate files? (Y/N)"
    if ($remove -eq 'Y' -or $remove -eq 'y') {
        $certFiles | Remove-Item -Force
        Write-Host "✓ Original files removed" -ForegroundColor Green
    }
} else {
    Write-Host "Could not find both key and certificate files" -ForegroundColor Red
    exit 1
}

Write-Host "`n✓ Setup complete! You can now run 'npm run dev' with HTTPS." -ForegroundColor Green

