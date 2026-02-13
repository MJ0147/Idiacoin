# Live Demo URL - Setup Complete! 🎉

## What's Been Done

I've prepared everything you need to deploy the Idiacoin demo and get a live URL. Here's what has been set up:

### ✅ Files Created/Updated

1. **`/demo/QUICK_DEPLOY.md`** - Fast deployment guide (5-minute setup)
2. **`/demo/README.md`** - Added live demo section with placeholder URL
3. **`/README.md`** - Added live demo link in main README
4. **`/demo/DEPLOYMENT.md`** - Updated with URL replacement instructions

### 📍 Placeholder URLs Added

The following placeholder URLs have been added and are ready for you to update:

**In `/demo/README.md` (line 7):**
```markdown
**[View Live Demo →](https://idiacoin-demo.vercel.app)** _(Coming Soon - Deploy to get your URL)_
```

**In `/README.md` (line 47):**
```markdown
**[🚀 View Live Demo](https://idiacoin-demo.vercel.app)** _(Coming Soon - Deploy to get your URL)_
```

## 🚀 Next Steps - Get Your Live URL

### Option 1: Fastest - Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "Add New..." → "Project"
3. Import the `MJ0147/Idiacoin` repository
4. Configure:
   - Root Directory: `demo`
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click "Deploy"
6. Wait 1-2 minutes
7. **Copy your live URL** (e.g., `https://idiacoin-demo-xyz123.vercel.app`)

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to demo
cd demo

# Login to Vercel
vercel login

# Deploy to production
vercel --prod

# Copy the URL shown in the output
```

### Option 3: Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the app
cd demo
npm install
npm run build

# Deploy
netlify deploy --prod

# Copy the URL shown in the output
```

## 📝 After Deployment - Update URLs

Once you have your live URL, update these files:

### 1. Update `/demo/README.md`

Replace line 7:
```markdown
**[View Live Demo →](YOUR_ACTUAL_URL_HERE)**
```

### 2. Update `/README.md`

Replace the live demo link:
```markdown
**[🚀 View Live Demo](YOUR_ACTUAL_URL_HERE)**
```

### 3. Commit and Push

```bash
git add README.md demo/README.md
git commit -m "Update live demo URL"
git push
```

## 📚 Documentation Available

- **`QUICK_DEPLOY.md`** - 5-minute deployment guide
- **`DEPLOYMENT.md`** - Comprehensive deployment instructions for all platforms
- **`README.md`** - Full feature documentation

## ✨ What Your Live Demo Will Show

Once deployed, your live demo will showcase:

✅ **Balance View** - Real-time wallet balance with USD conversion  
✅ **Transfer Coins** - Intuitive token transfer interface  
✅ **Transaction History** - Comprehensive transaction browsing  
✅ **Aza AI Assistant** - Interactive AI chatbot for user help  

All features work in demo mode with simulated data (no real blockchain transactions).

## 🎯 Quick Reference

**Deploy Command (Vercel):**
```bash
cd demo && vercel --prod
```

**Deploy Command (Netlify):**
```bash
cd demo && npm run build && netlify deploy --prod
```

**URLs to Update After Deployment:**
- `/demo/README.md` - Line 7
- `/README.md` - Line 47 (in the demo section)

## 🆘 Need Help?

See the detailed guides:
- Quick Start: [QUICK_DEPLOY.md](./QUICK_DEPLOY.md)
- Full Guide: [DEPLOYMENT.md](./DEPLOYMENT.md)

---

**Ready?** Deploy now and get your live URL in minutes! 🚀
