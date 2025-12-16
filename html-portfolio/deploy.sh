#!/bin/bash

echo "🚀 HTML Portfolio Deployment Script"

# Check if index.html exists
if [ ! -f "index.html" ]; then
    echo "❌ Error: index.html not found in html-portfolio directory"
    exit 1
fi

echo "✅ HTML portfolio found!"

# Create deployment directory
DEPLOY_DIR="deploy-$(date +%Y%m%d-%H%M%S)"
mkdir -p "$DEPLOY_DIR"

# Copy files to deployment directory
cp index.html "$DEPLOY_DIR/"
cp README.md "$DEPLOY_DIR/"

echo "📁 Created deployment directory: $DEPLOY_DIR"

# Show deployment options
echo ""
echo "🌐 Deployment Options:"
echo "1. Upload $DEPLOY_DIR/index.html to any web server"
echo "2. Drag and drop $DEPLOY_DIR/index.html to Netlify"
echo "3. Push $DEPLOY_DIR/ to GitHub Pages"
echo "4. Upload to any hosting provider"
echo ""
echo "📱 Your portfolio is ready for the world!"
echo "🎉 Features: Responsive, Interactive, Professional"