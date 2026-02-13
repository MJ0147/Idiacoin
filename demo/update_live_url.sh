#!/bin/bash

# Update Live Demo URL Script
# This script updates the live demo URL in all README files

set -e

echo "🔗 Idiacoin Demo - Live URL Updater"
echo "===================================="
echo ""

# Check if URL is provided
if [ -z "$1" ]; then
    echo "❌ Error: No URL provided"
    echo ""
    echo "Usage: ./update_live_url.sh <your-live-url>"
    echo ""
    echo "Examples:"
    echo "  ./update_live_url.sh https://idiacoin-demo.vercel.app"
    echo "  ./update_live_url.sh https://idiacoin-demo.netlify.app"
    echo "  ./update_live_url.sh https://demo.idiacoin.io"
    echo ""
    exit 1
fi

LIVE_URL="$1"

# Validate URL format
if [[ ! "$LIVE_URL" =~ ^https?:// ]]; then
    echo "❌ Error: URL must start with http:// or https://"
    exit 1
fi

echo "📝 New URL: $LIVE_URL"
echo ""

# Backup files
echo "💾 Creating backups..."
cp demo/README.md demo/README.md.backup
cp README.md README.md.backup
echo "✅ Backups created"
echo ""

# Update demo/README.md
echo "📝 Updating demo/README.md..."
sed -i "s|https://idiacoin-demo\.vercel\.app)\*\* _(Coming Soon - Deploy to get your URL)_|${LIVE_URL})**|g" demo/README.md
echo "✅ Updated demo/README.md"

# Update main README.md
echo "📝 Updating README.md..."
sed -i "s|https://idiacoin-demo\.vercel\.app)\*\* _(Coming Soon - Deploy to get your URL)_|${LIVE_URL})**|g" README.md
echo "✅ Updated README.md"

echo ""
echo "🎉 Success! Live URL updated to: $LIVE_URL"
echo ""
echo "📋 Next steps:"
echo "1. Review the changes:"
echo "   git diff README.md demo/README.md"
echo ""
echo "2. Test the URL in your browser"
echo ""
echo "3. Commit and push:"
echo "   git add README.md demo/README.md"
echo "   git commit -m \"Update live demo URL to ${LIVE_URL}\""
echo "   git push"
echo ""
echo "💡 Backups saved as:"
echo "   - demo/README.md.backup"
echo "   - README.md.backup"
echo ""
