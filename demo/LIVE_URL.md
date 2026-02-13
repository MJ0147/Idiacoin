# 🔗 Live Demo URL Configuration

## Current Status: Awaiting Deployment URL

This file tracks the live demo URL for the Idiacoin demo application.

---

## 📝 Instructions to Add Live URL

### Step 1: Paste Your Live Demo URL Below

**Live Demo URL:**
```
https://idiacoin-demo.vercel.app
```

> Replace the URL above with your actual deployment URL after deploying to Vercel, Netlify, or another platform.

---

### Step 2: Run the Update Script

After pasting your URL above, you have two options:

#### Option A: Manual Update (Recommended)

Update the following files with your live URL:

1. **`/demo/README.md`** - Line 7
2. **`/README.md`** - Line 47

Replace:
```markdown
**[View Live Demo →](https://idiacoin-demo.vercel.app)** _(Coming Soon - Deploy to get your URL)_
```

With:
```markdown
**[View Live Demo →](YOUR_ACTUAL_URL)**
```

#### Option B: Automated Update Script

Run this command from the repository root:

```bash
# Set your live URL
LIVE_URL="https://your-actual-url.vercel.app"

# Update demo/README.md
sed -i "s|https://idiacoin-demo.vercel.app)** _(Coming Soon - Deploy to get your URL)_|${LIVE_URL})**|g" demo/README.md

# Update main README.md  
sed -i "s|https://idiacoin-demo.vercel.app)** _(Coming Soon - Deploy to get your URL)_|${LIVE_URL})**|g" README.md

# Commit changes
git add README.md demo/README.md
git commit -m "Update live demo URL to ${LIVE_URL}"
git push
```

---

## 🎯 Quick Reference

### Common Deployment URLs

**Vercel:**
- Format: `https://project-name.vercel.app`
- Example: `https://idiacoin-demo.vercel.app`
- With hash: `https://idiacoin-demo-abc123xyz.vercel.app`

**Netlify:**
- Format: `https://site-name.netlify.app`
- Example: `https://idiacoin-demo.netlify.app`

**GitHub Pages:**
- Format: `https://username.github.io/repository-name/demo`
- Example: `https://mj0147.github.io/Idiacoin/demo`

**Custom Domain:**
- Example: `https://demo.idiacoin.io`

---

## ✅ Verification Checklist

After updating the URL, verify:

- [ ] URL is accessible and loads the demo
- [ ] All tabs work (Balance, Transfer, History)
- [ ] Aza AI chat responds to messages
- [ ] URL is updated in `/demo/README.md`
- [ ] URL is updated in `/README.md`
- [ ] "Coming Soon" text is removed
- [ ] Changes are committed and pushed

---

## 🚀 Current Deployment Status

**Deployment Platform:** _Not yet deployed / Pending_  
**Live URL:** _To be added_  
**Deployed Date:** _Pending_  
**Last Updated:** 2026-02-13

---

## 📞 Need Help?

- See [QUICK_DEPLOY.md](./QUICK_DEPLOY.md) for deployment instructions
- See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed platform guides
- See [LIVE_DEMO_SETUP.md](./LIVE_DEMO_SETUP.md) for complete setup

---

## 🔄 Update History

| Date | URL | Platform | Notes |
|------|-----|----------|-------|
| 2026-02-13 | Placeholder | N/A | Initial setup |
| _Pending_ | _To be added_ | _TBD_ | Awaiting deployment |

---

**Ready to deploy?** Follow [QUICK_DEPLOY.md](./QUICK_DEPLOY.md) to get your live URL in 5 minutes!
