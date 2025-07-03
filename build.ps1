# Beautiful Green Theme Extension Build Script
# This script builds the extension for both Chrome and Firefox

Write-Host "🌿 Building Beautiful Green Theme Extension..." -ForegroundColor Green

# Create build directories
$chromeDir = "build\chrome"
$firefoxDir = "build\firefox"

if (Test-Path "build") {
    Remove-Item -Recurse -Force "build"
}

New-Item -ItemType Directory -Force -Path $chromeDir
New-Item -ItemType Directory -Force -Path $firefoxDir

# Copy common files
$commonFiles = @(
    "popup.html",
    "popup.js", 
    "content-script.js",
    "styles\*",
    "images\*",
    "icons\*"
)

foreach ($file in $commonFiles) {
    if (Test-Path $file) {
        Copy-Item -Path $file -Destination $chromeDir -Recurse -Force
        Copy-Item -Path $file -Destination $firefoxDir -Recurse -Force
    }
}

# Copy Chrome manifest
Copy-Item -Path "manifest.json" -Destination "$chromeDir\manifest.json"

# Copy Firefox manifest
Copy-Item -Path "manifest_firefox.json" -Destination "$firefoxDir\manifest.json"

Write-Host "✅ Chrome extension built in: $chromeDir" -ForegroundColor Green
Write-Host "✅ Firefox extension built in: $firefoxDir" -ForegroundColor Green

# Create ZIP packages
Write-Host "📦 Creating ZIP packages..." -ForegroundColor Yellow

if (Get-Command "7z" -ErrorAction SilentlyContinue) {
    7z a -tzip "beautiful-green-theme-chrome.zip" ".\$chromeDir\*"
    7z a -tzip "beautiful-green-theme-firefox.zip" ".\$firefoxDir\*"
    Write-Host "✅ ZIP packages created successfully!" -ForegroundColor Green
} else {
    Write-Host "⚠️ 7-Zip not found. Please install 7-Zip to create ZIP packages." -ForegroundColor Yellow
    Write-Host "📁 Extension files are ready in build folders" -ForegroundColor Green
}

Write-Host "🎉 Build completed successfully!" -ForegroundColor Green
Write-Host "📋 Next steps:" -ForegroundColor Cyan
Write-Host "   1. Test the extension in Chrome Developer Mode" -ForegroundColor White
Write-Host "   2. Test the extension in Firefox Add-ons Debug Mode" -ForegroundColor White
Write-Host "   3. Submit to Chrome Web Store and Firefox Add-ons" -ForegroundColor White 