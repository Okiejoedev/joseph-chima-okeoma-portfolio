#!/bin/bash

echo "🚀 Deploying Joseph Chima Okeoma Portfolio to GitHub Pages..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Run type checking
echo "🔍 Running type check..."
npm run type-check

# Run linting
echo "🧹 Running linter..."
npm run lint

# Build and export for GitHub Pages
echo "🏗️ Building project for GitHub Pages..."
NODE_ENV=production npm run export

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Deploy to GitHub Pages using gh-pages
    if command -v gh-pages &> /dev/null; then
        echo "📤 Deploying to GitHub Pages..."
        npx gh-pages -d out -b main
        echo "🎉 Deployment successful!"
        echo ""
        echo "🌐 Your portfolio will be available at:"
        echo "https://yourusername.github.io/joseph-chima-okeoma-portfolio"
        echo ""
        echo "⏱️ Please wait 2-5 minutes for GitHub Pages to update..."
    else
        echo "📦 Installing gh-pages..."
        npm install --save-dev gh-pages
        
        echo "📤 Deploying to GitHub Pages..."
        npx gh-pages -d out -b main
        echo "🎉 Deployment successful!"
        echo ""
        echo "🌐 Your portfolio will be available at:"
        echo "https://yourusername.github.io/joseph-chima-okeoma-portfolio"
        echo ""
        echo "⏱️ Please wait 2-5 minutes for GitHub Pages to update..."
    fi
else
    echo "❌ Build failed. Please fix the errors above."
    exit 1
fi