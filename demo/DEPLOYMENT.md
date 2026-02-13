# Deployment Guide for Idiacoin Demo

This guide provides step-by-step instructions for deploying the Idiacoin demo web application to various hosting platforms.

## Table of Contents
- [Vercel Deployment](#vercel-deployment)
- [Netlify Deployment](#netlify-deployment)
- [Other Platforms](#other-platforms)
- [Environment Configuration](#environment-configuration)

## Vercel Deployment

Vercel is the recommended platform for deploying this React/Vite application.

### Method 1: Vercel CLI (Fastest)

1. **Install Vercel CLI globally**:
   ```bash
   npm install -g vercel
   ```

2. **Navigate to the demo directory**:
   ```bash
   cd demo
   ```

3. **Login to Vercel**:
   ```bash
   vercel login
   ```

4. **Deploy**:
   ```bash
   vercel
   ```
   
   For production deployment:
   ```bash
   vercel --prod
   ```

5. **Follow the CLI prompts**:
   - Set up and deploy: `Y`
   - Which scope: Select your account
   - Link to existing project: `N` (for first time)
   - Project name: `idiacoin-demo` (or your choice)
   - In which directory is your code located: `./`
   - Want to override the settings: `N`

6. **Your app is now live!** The CLI will provide a URL like:
   ```
   https://idiacoin-demo.vercel.app
   ```

### Method 2: Vercel Dashboard (GitHub Integration)

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Add Idiacoin demo"
   git push origin main
   ```

2. **Visit [vercel.com](https://vercel.com)** and sign in with GitHub

3. **Click "New Project"**

4. **Import your repository**:
   - Search for your repository
   - Click "Import"

5. **Configure project**:
   - Framework Preset: `Vite`
   - Root Directory: `demo`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

6. **Click "Deploy"**

7. **Wait for deployment** (usually 1-2 minutes)

8. **Get your live URL**: `https://your-project.vercel.app`

### Vercel Custom Domain

To add a custom domain:

1. Go to your project in Vercel dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Update DNS records as instructed
5. Wait for DNS propagation (can take up to 48 hours)

## Netlify Deployment

### Method 1: Netlify CLI

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Navigate to demo directory**:
   ```bash
   cd demo
   ```

3. **Build the application**:
   ```bash
   npm install
   npm run build
   ```

4. **Deploy to Netlify**:
   ```bash
   netlify deploy
   ```

5. **For production deployment**:
   ```bash
   netlify deploy --prod
   ```

6. **Follow the prompts**:
   - Authorize with Netlify
   - Create & configure a new site
   - Team: Select your team
   - Site name: `idiacoin-demo` (or your choice)
   - Publish directory: `dist`

7. **Your site is live!** URL will be like:
   ```
   https://idiacoin-demo.netlify.app
   ```

### Method 2: Netlify Dashboard

#### Drag and Drop Method:

1. **Build locally**:
   ```bash
   cd demo
   npm install
   npm run build
   ```

2. **Visit [netlify.com](https://netlify.com)** and sign in

3. **Drag and drop** the `dist` folder onto the Netlify dashboard

4. **Site is deployed!** You'll get a random URL like `random-name-123.netlify.app`

5. **Customize site name**:
   - Go to Site settings → General → Site details
   - Click "Change site name"
   - Enter your preferred name

#### Git Integration Method:

1. **Push to GitHub** (if not already done)

2. **In Netlify dashboard**:
   - Click "Add new site" → "Import an existing project"
   - Connect to Git provider (GitHub)
   - Select your repository
   - Configure build settings:
     - Base directory: `demo`
     - Build command: `npm run build`
     - Publish directory: `demo/dist`

3. **Click "Deploy site"**

4. **Automatic deployments**: Now every push to your repo triggers a new deployment!

## GitHub Pages

1. **Install gh-pages**:
   ```bash
   cd demo
   npm install --save-dev gh-pages
   ```

2. **Update package.json**:
   ```json
   {
     "homepage": "https://yourusername.github.io/Idiacoin/demo",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `root`
   - Save

5. **Visit**: `https://yourusername.github.io/Idiacoin/demo`

## Other Platforms

### AWS Amplify

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Connect your Git repository
3. Configure build settings:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - cd demo
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: demo/dist
       files:
         - '**/*'
   ```

### Cloudflare Pages

1. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
2. Connect Git repository
3. Build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: `demo`

### Render

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. New → Static Site
3. Connect repository
4. Settings:
   - Build command: `cd demo && npm install && npm run build`
   - Publish directory: `demo/dist`

## Environment Configuration

### Environment Variables

If you need to add environment variables (for API keys, etc.):

**For Vercel**:
```bash
vercel env add VITE_API_KEY
```
Or in dashboard: Settings → Environment Variables

**For Netlify**:
Dashboard → Site settings → Environment variables

**For local development**:
Create `.env` file in demo directory:
```env
VITE_API_KEY=your_api_key_here
VITE_API_URL=https://api.example.com
```

Access in code:
```javascript
const apiKey = import.meta.env.VITE_API_KEY;
```

## Troubleshooting

### Build Fails

- **Check Node version**: Requires Node 16+
  ```bash
  node --version
  ```
- **Clear cache and reinstall**:
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  ```

### 404 on Refresh

Add this to your platform's redirect rules:
- **Vercel**: Automatically handled by vercel.json
- **Netlify**: Automatically handled by netlify.toml
- **Others**: Configure SPA fallback to index.html

### Slow Build Times

- Use production builds for deployment
- Check if dependencies are in `dependencies` not `devDependencies`

## Post-Deployment Checklist

✅ Site loads correctly  
✅ All routes work (refresh on any page)  
✅ Images and assets load  
✅ Aza AI chat functions properly  
✅ All tabs work (Balance, Transfer, History)  
✅ Responsive on mobile  
✅ Console has no errors  
✅ Custom domain configured (if applicable)  

## Continuous Deployment

Both Vercel and Netlify support automatic deployments:

1. **Push to main branch** → Automatic production deployment
2. **Push to other branches** → Preview deployments
3. **Pull requests** → Preview URLs for review

## Getting Help

- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)

---

**Ready to deploy?** Choose your platform and follow the steps above. For most users, we recommend **Vercel** for the smoothest experience.
