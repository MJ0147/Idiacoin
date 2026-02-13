---
name: Add Live Demo URL
about: Submit the live demo URL for the Idiacoin demo application
title: '[LIVE URL] Add deployed demo URL'
labels: documentation, deployment
assignees: ''

---

## 🔗 Live Demo URL

**Paste your deployed demo URL here:**

```
https://your-deployed-app.vercel.app
```

---

## 📋 Deployment Information

**Platform:** (e.g., Vercel, Netlify, GitHub Pages)
**Deployment Date:** YYYY-MM-DD
**Deployed By:** @username

---

## ✅ Verification Checklist

Before submitting, please verify:

- [ ] The URL is accessible and loads correctly
- [ ] All features work:
  - [ ] Balance view displays
  - [ ] Transfer interface functions
  - [ ] Transaction history loads
  - [ ] Aza AI chat responds
- [ ] The site is responsive on mobile
- [ ] No console errors in browser

---

## 📝 Additional Notes

<!-- Add any additional information about the deployment -->

---

## 🔄 Auto-Update Instructions

To automatically update the README files with this URL, run:

```bash
cd demo
./update_live_url.sh https://your-deployed-app.vercel.app
git add README.md demo/README.md
git commit -m "Update live demo URL to https://your-deployed-app.vercel.app"
git push
```

---

**Files to update manually (if not using script):**
- [ ] `/demo/README.md` - Line 7
- [ ] `/README.md` - Line 47

**Current placeholder:** `https://idiacoin-demo.vercel.app`
