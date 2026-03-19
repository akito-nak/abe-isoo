#!/bin/bash

# Download Abe Isoo official portrait from National Diet Library
echo "📸 Downloading official Abe Isoo portrait..."

# Create images directory if it doesn't exist
mkdir -p public/images

# Download the official portrait
curl -L -o public/images/abe-isoo-portrait.jpg "https://www.ndl.go.jp/portrait/img/portrait/0375_1.jpg"

# Check if download was successful
if [ -f "public/images/abe-isoo-portrait.jpg" ]; then
    echo "✅ Successfully downloaded Abe Isoo portrait!"
    echo "📁 Saved to: public/images/abe-isoo-portrait.jpg"
    echo "🌐 The image will now appear on your homepage"
else
    echo "❌ Download failed. Please manually download from:"
    echo "🔗 https://www.ndl.go.jp/portrait/img/portrait/0375_1.jpg"
    echo "💾 Save as: public/images/abe-isoo-portrait.jpg"
fi