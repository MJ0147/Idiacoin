# 🌐 Add Your Live Demo URL Here

## Current Configuration

The demo application has placeholder URLs that need to be replaced with your actual deployment URL.

---

## ⚡ Quick Update (Paste Your URL Here)

### Your Live Demo URL:

```
PASTE_YOUR_URL_HERE (e.g., https://idiacoin-demo.vercel.app)
```

---

## 🔧 How to Update

### Method 1: Use the Update Script (Easiest)

```bash
cd demo
./update_live_url.sh https://your-actual-url.vercel.app
```

The script will automatically update both README files.

### Method 2: Manual Update

Edit these two files and replace the placeholder URL:

#### File 1: `/demo/README.md` (Line 7)

**Before:**
```markdown
**[View Live Demo →](https://idiacoin-demo.vercel.app)** _(Coming Soon - Deploy to get your URL)_
```

**After:**
```markdown
**[View Live Demo →](https://your-actual-url.vercel.app)**
```

#### File 2: `/README.md` (Line 47)

**Before:**
```markdown
**[🚀 View Live Demo](https://idiacoin-demo.vercel.app)** _(Coming Soon - Deploy to get your URL)_
```

**After:**
```markdown
**[🚀 View Live Demo](https://your-actual-url.vercel.app)**
```

---

## 📋 URLs to Update

| File | Line | Current URL | Status |
|------|------|-------------|--------|
| `/demo/README.md` | 7 | `https://idiacoin-demo.vercel.app` | ⏳ Placeholder |
| `/README.md` | 47 | `https://idiacoin-demo.vercel.app` | ⏳ Placeholder |

---

## ✅ After Updating

1. **Test the URL** - Open it in your browser
2. **Verify functionality**:
   - ✅ Balance tab loads
   - ✅ Transfer tab works
   - ✅ History tab displays
   - ✅ Aza AI chat responds
3. **Commit changes**:
   ```bash
   git add README.md demo/README.md
   git commit -m "Update live demo URL"
   git push
   ```

---

## 🚀 Don't Have a URL Yet?

Deploy in 5 minutes:

1. **Quick Deploy**: Follow [QUICK_DEPLOY.md](./QUICK_DEPLOY.md)
2. **Vercel** (Recommended):
   ```bash
   cd demo
   npx vercel --prod
   ```
3. **Netlify**:
   ```bash
   cd demo
   npm run build
   npx netlify deploy --prod --dir=dist
   ```

---

## 📞 Need Help?

- [QUICK_DEPLOY.md](./QUICK_DEPLOY.md) - Fast deployment guide
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Detailed platform instructions
- [LIVE_DEMO_SETUP.md](./LIVE_DEMO_SETUP.md) - Complete setup guide

---

**Ready?** Paste your URL above and run the update script! 🎉
