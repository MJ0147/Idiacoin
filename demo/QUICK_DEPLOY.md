# Quick Deploy Guide - Get Your Live Demo URL

This guide will help you deploy the Idiacoin demo to get a live URL in minutes.

## 🚀 Fastest Method: Deploy to Vercel (Recommended)

### Option 1: Deploy via Vercel Dashboard (No CLI needed)

1. **Fork or Push this repository to GitHub** (if not already done)

2. **Go to [vercel.com](https://vercel.com)** and sign in with GitHub

3. **Click "Add New..." → "Project"**

4. **Import your repository**:
   - Find `MJ0147/Idiacoin` (or your fork)
   - Click "Import"

5. **Configure the project**:
   ```
   Framework Preset: Vite
   Root Directory: demo
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

6. **Click "Deploy"**

7. **Wait 1-2 minutes** for deployment to complete

8. **Get your live URL**: It will be like `https://idiacoin-demo.vercel.app` or `https://idiacoin-demo-xyz123.vercel.app`

9. **Update the README files** with your live URL:
   - Edit `/demo/README.md` line 7
   - Edit `/README.md` line 47
   - Replace `https://idiacoin-demo.vercel.app` with your actual URL

10. **Commit and push** the updated README files

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to demo directory
cd demo

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

Your live URL will be displayed in the terminal output.

## 🎯 Alternative: Deploy to Netlify

### Via Netlify Dashboard

1. **Build the app locally**:
   ```bash
   cd demo
   npm install
   npm run build
   ```

2. **Go to [netlify.com](https://netlify.com)** and sign in

3. **Drag and drop** the `demo/dist` folder onto Netlify

4. **Get your live URL**: Like `https://idiacoin-demo.netlify.app`

5. **Update README files** with your URL (same as step 9-10 above)

### Via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Navigate to demo
cd demo

# Deploy
netlify deploy --prod
```

## 📝 After Deployment Checklist

- [ ] You have a live URL (e.g., `https://your-app.vercel.app`)
- [ ] The demo loads in your browser
- [ ] All tabs work (Balance, Transfer, History)
- [ ] Aza AI chat responds to messages
- [ ] Updated `/demo/README.md` line 7 with live URL
- [ ] Updated `/README.md` line 47 with live URL
- [ ] Committed and pushed the README updates

## 🔗 Where to Update URLs

**File: `/demo/README.md`** - Line 7:
```markdown
**[View Live Demo →](YOUR_LIVE_URL_HERE)**
```

**File: `/README.md`** - Line 47:
```markdown
**[🚀 View Live Demo](YOUR_LIVE_URL_HERE)**
```

## 🎉 Done!

Your Idiacoin demo is now live! Share the URL with others to showcase the project.

## 💡 Tips

- **Custom Domain**: You can add a custom domain in Vercel/Netlify settings
- **Auto Deploy**: Both platforms will redeploy automatically on git push
- **Free Tier**: Both Vercel and Netlify offer generous free tiers

## ❓ Need Help?

- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
- Check [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions
