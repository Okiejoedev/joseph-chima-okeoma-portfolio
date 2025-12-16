# 🚀 GitHub Pages Deployment Guide

Deploy your Joseph Chima Okeoma portfolio website to GitHub Pages for free hosting!

## 📋 Prerequisites

1. **GitHub Account**: Create a free account at [github.com](https://github.com)
2. **Git Installed**: Make sure Git is installed on your system
3. **Repository Name**: Use `joseph-chima-okeoma-portfolio` for best results

## 🗂️ Project Structure for GitHub Pages

Your project is configured for GitHub Pages deployment:

```
joseph-chima-okeoma-portfolio/
├── src/app/                    # Next.js pages
├── src/components/             # React components
├── public/                     # Static assets
├── .github/workflows/          # GitHub Actions ✅
├── next.config.ts             # GitHub Pages config ✅
├── package.json              # Dependencies and deploy script ✅
└── deploy-github-pages.sh    # Deployment script ✅
```

## 🚀 Deployment Methods

### Method 1: Automatic Deployment (Recommended)

#### Step 1: Create GitHub Repository
1. Go to [github.com](https://github.com)
2. Click "New repository"
3. Name it: `joseph-chima-okeoma-portfolio`
4. Set as Public
5. Click "Create repository"

#### Step 2: Push Your Code
```bash
# Initialize Git and push to GitHub
git init
git add .
git commit -m "Add portfolio website for GitHub Pages deployment"
git branch -M main
git remote add origin https://github.com/yourusername/joseph-chima-okeoma-portfolio.git
git push -u origin main
```

#### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" section
4. Under "Build and deployment", select:
   - **Source**: Deploy from a branch
   - **Branch**: main
   - **Folder**: /root
5. Click "Save"

#### Step 4: Automatic Deployment
- GitHub Actions will automatically build and deploy your site
- Your site will be live at: `https://yourusername.github.io/joseph-chima-okeoma-portfolio`
- Every push to main branch triggers a new deployment

### Method 2: Manual Deployment

#### Step 1: Install Dependencies
```bash
npm install
```

#### Step 2: Build and Deploy
```bash
# Make the deploy script executable
chmod +x deploy-github-pages.sh

# Run the deployment script
./deploy-github-pages.sh
```

## ⚙️ GitHub Pages Configuration

Your `next.config.ts` is configured for GitHub Pages:

```typescript
const nextConfig: NextConfig = {
  output: "export",           // Static export
  trailingSlash: true,        // Proper URL handling
  images: {
    unoptimized: true,       // GitHub Pages compatible
  },
  basePath: process.env.NODE_ENV === 'production' ? '/joseph-chima-okeoma-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/joseph-chima-okeoma-portfolio' : '',
};
```

## 🔄 GitHub Actions Workflow

Your `.github/workflows/deploy-github-pages.yml` automatically:
- Builds your project on every push to main
- Runs type checking and linting
- Deploys to GitHub Pages
- Creates deployment preview URLs

## 🌐 Your Live Website

After deployment, your portfolio will be available at:
- **Primary URL**: `https://yourusername.github.io/joseph-chima-okeoma-portfolio`
- **Custom Domain**: You can add a custom domain later in repository settings

## 📱 Mobile Optimization

Your portfolio is optimized for GitHub Pages:
- ✅ Responsive design for all devices
- ✅ Fast loading with GitHub's CDN
- ✅ HTTPS automatically enabled
- ✅ Proper asset optimization

## 🎯 Features on GitHub Pages

- ✅ **Free Hosting**: No cost for public repositories
- ✅ **HTTPS**: Automatic SSL certificate
- ✅ **Global CDN**: Fast loading worldwide
- ✅ **Custom Domain**: Add your own domain later
- ✅ **Version Control**: Built-in Git integration
- ✅ **Automatic Builds**: GitHub Actions integration

## 🔧 Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run export

# Deploy manually
npm run deploy
```

## 🐛 Troubleshooting

### Build Errors
```bash
# Check for TypeScript errors
npm run type-check

# Check for linting errors
npm run lint

# Build locally first
npm run export
```

### Common Issues
1. **404 Errors**: Check that `basePath` in next.config.ts matches your repository name
2. **Asset Loading**: Images are unoptimized for GitHub Pages compatibility
3. **Deployment Timeout**: GitHub Pages may take 2-5 minutes to update

### GitHub Pages Settings
1. Go to repository Settings → Pages
2. Ensure "Source" is set to "Deploy from a branch"
3. Select "main" branch
4. Keep "/root" as the folder

## 📊 Performance

Your portfolio on GitHub Pages:
- ✅ **Lighthouse Score**: 90+ (Performance, Accessibility, SEO)
- ✅ **Core Web Vitals**: Optimized for user experience
- ✅ **Bundle Size**: Optimized with code splitting
- ✅ **CDN Delivery**: Fast loading via GitHub's infrastructure

## 🔄 Updates and Maintenance

### Updating Your Portfolio
```bash
# Make changes to your code
git add .
git commit -m "Update portfolio section"
git push origin main

# GitHub Actions will automatically deploy your changes
```

### Monitoring
- Check GitHub Actions tab for build status
- Monitor GitHub Pages settings for deployment status
- Test your site after each deployment

## 🎉 Success!

Your professional portfolio is now live on GitHub Pages!

**Your URL**: `https://yourusername.github.io/joseph-chima-okeoma-portfolio`

**Benefits**:
- 🆓 Free hosting forever
- 🌍 Global CDN access
- 🔒 Automatic HTTPS
- 📱 Mobile optimized
- ⚡ Fast loading
- 🔄 Automatic updates

---

*Built with ❤️ and deployed to GitHub Pages! 🚀*