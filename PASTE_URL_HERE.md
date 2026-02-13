# 📍 PASTE YOUR LIVE DEMO LINK HERE

## 🎯 Quick Start - Add Your URL

You've asked to "paste the live demo link here" - this document shows you exactly how to do that!

---

## 🔗 Paste Your URL Below

**Your Live Demo URL:**

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│  PASTE YOUR DEPLOYED URL HERE                           │
│                                                          │
│  Examples:                                               │
│  • https://idiacoin-demo.vercel.app                     │
│  • https://idiacoin-demo-xyz123.vercel.app              │
│  • https://idiacoin-demo.netlify.app                    │
│  • https://demo.idiacoin.io                             │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

---

## ⚡ Update the URL (3 Easy Methods)

### Method 1: Automated Script (Recommended) ⭐

```bash
# Navigate to demo folder
cd demo

# Run the update script with your URL
./update_live_url.sh https://your-actual-url.vercel.app

# Review changes
git diff README.md demo/README.md

# Commit and push
git add README.md demo/README.md
git commit -m "Update live demo URL"
git push
```

**Features:**
- ✅ Automatic backup creation
- ✅ URL validation
- ✅ Updates both README files
- ✅ Shows confirmation and next steps

---

### Method 2: Manual Edit

Edit these 2 files and replace the placeholder URL:

#### File 1: `/demo/README.md`

**Line 7** - Change from:
```markdown
**[View Live Demo →](https://idiacoin-demo.vercel.app)** _(Coming Soon - Deploy to get your URL)_
```

To:
```markdown
**[View Live Demo →](https://your-actual-url.vercel.app)**
```

#### File 2: `/README.md`

**Line 47** - Change from:
```markdown
**[🚀 View Live Demo](https://idiacoin-demo.vercel.app)** _(Coming Soon - Deploy to get your URL)_
```

To:
```markdown
**[🚀 View Live Demo](https://your-actual-url.vercel.app)**
```

Then commit:
```bash
git add README.md demo/README.md
git commit -m "Update live demo URL"
git push
```

---

### Method 3: GitHub Issue Template

Create an issue with your URL using the pre-made template:

1. Go to GitHub Issues
2. Click "New Issue"
3. Select "Add Live Demo URL" template
4. Paste your URL in the template
5. Submit the issue

Template location: `.github/ISSUE_TEMPLATE/add_live_url.md`

---

## 🚀 Don't Have a URL Yet?

If you haven't deployed yet, here's how to get your live URL in 5 minutes:

### Quick Deploy to Vercel:

```bash
cd demo
npx vercel --prod
```

### Quick Deploy to Netlify:

```bash
cd demo
npm run build
npx netlify deploy --prod --dir=dist
```

📚 **Full deployment guides:**
- [QUICK_DEPLOY.md](./QUICK_DEPLOY.md) - 5-minute guide
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Comprehensive instructions
- [LIVE_DEMO_SETUP.md](./LIVE_DEMO_SETUP.md) - Complete setup

---

## 📋 Current Status

| Item | Status | Location |
|------|--------|----------|
| Placeholder URL | `https://idiacoin-demo.vercel.app` | 2 files |
| Live URL | ⏳ **Awaiting your input** | - |
| Update Script | ✅ Ready | `demo/update_live_url.sh` |
| Documentation | ✅ Complete | Multiple files |

---

## ✅ Verification Checklist

After updating your URL, verify:

- [ ] URL is accessible in browser
- [ ] Demo application loads correctly
- [ ] All tabs work:
  - [ ] Balance view
  - [ ] Transfer interface
  - [ ] Transaction history
  - [ ] Aza AI chat
- [ ] Site is responsive on mobile
- [ ] No console errors
- [ ] Updated in `/demo/README.md`
- [ ] Updated in `/README.md`
- [ ] Changes committed and pushed

---

## 📁 Available Documentation

All files ready for you:

1. **`ADD_LIVE_URL.md`** ⭐ (This file) - Main instructions
2. **`LIVE_URL.md`** - Configuration tracking
3. **`update_live_url.sh`** - Automated update script
4. **`QUICK_DEPLOY.md`** - Fast deployment guide
5. **`DEPLOYMENT.md`** - Full deployment documentation
6. **`LIVE_DEMO_SETUP.md`** - Complete setup guide
7. **`.github/ISSUE_TEMPLATE/add_live_url.md`** - Issue template

---

## 🎯 What Happens Next?

1. **You paste your URL** (in this document or use the script)
2. **Script updates** both README files automatically
3. **You commit and push** the changes
4. **Everyone sees** your live demo link in the README! 🎉

---

## 💡 Example Workflow

```bash
# 1. Deploy (if you haven't already)
cd demo
npx vercel --prod
# ✅ Get URL: https://idiacoin-demo-abc123.vercel.app

# 2. Update with script
./update_live_url.sh https://idiacoin-demo-abc123.vercel.app
# ✅ Script updates both files

# 3. Commit
git add README.md demo/README.md
git commit -m "Add live demo URL: https://idiacoin-demo-abc123.vercel.app"
git push
# ✅ Done!
```

---

## 📞 Need Help?

- Script not working? Check it's executable: `chmod +x update_live_url.sh`
- URL validation fails? Make sure it starts with `https://`
- Not sure which files to edit? Use the automated script!

---

## 🎉 Ready to Paste Your URL?

**Choose your method:**
- 🚀 **Fast**: Run `./update_live_url.sh YOUR_URL`
- ✏️ **Manual**: Edit the 2 README files  
- 📝 **Issue**: Use the GitHub issue template

**Your URL goes here:** _[Paste above]_

---

**Last Updated:** 2026-02-13  
**Status:** ⏳ Awaiting your live demo URL
