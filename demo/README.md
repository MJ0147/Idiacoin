# Idiacoin Demo Web Application

A modern, user-friendly web application showcasing the main features of Idiacoin blockchain, built on The Open Network (TON). This demo features an integrated AI assistant called "Aza" to help users navigate and understand blockchain operations.

![Idiacoin Demo](../Idia%20logo.png)

## 🌟 Features

### Core Functionality
- **Balance Viewing**: Real-time display of your Idiacoin balance with USD conversion
- **Transfer Coins**: Intuitive interface for sending IDIA tokens to other addresses
- **Transaction History**: Comprehensive view of all your blockchain transactions
- **Aza AI Assistant**: Intelligent chatbot that helps with common tasks and questions

### Key Highlights
- ⚡ **Fast Transactions**: Built on TON blockchain for lightning-fast processing
- 🔒 **Secure**: Military-grade encryption and best security practices
- 💰 **Low Fees**: Minimal transaction costs (0.001 IDIA per transaction)
- 🤖 **AI-Powered Help**: Aza assistant provides instant support and guidance

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm/yarn installed
- A modern web browser

### Installation

1. Navigate to the demo directory:
```bash
cd demo
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:3000
```

## 📦 Build for Production

To create an optimized production build:

```bash
npm run build
```

The build output will be in the `dist` directory.

To preview the production build locally:

```bash
npm run preview
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

Vercel offers the easiest deployment experience for React applications.

#### Option 1: Deploy via Vercel Dashboard

1. **Install Vercel CLI** (optional):
   ```bash
   npm install -g vercel
   ```

2. **Deploy from the demo directory**:
   ```bash
   cd demo
   vercel
   ```

3. **Follow the prompts**:
   - Select your scope
   - Link to existing project or create new one
   - Confirm settings
   - Deploy!

Your app will be live at `https://your-project.vercel.app`

#### Option 2: Deploy via GitHub Integration

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Set the root directory to `demo`
6. Click "Deploy"

**Vercel Configuration** (vercel.json is optional but can be added):
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

### Deploy to Netlify

Netlify is another excellent option for deploying React applications.

#### Option 1: Netlify CLI

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Build and deploy**:
   ```bash
   cd demo
   npm run build
   netlify deploy --prod
   ```

3. **Follow the prompts**:
   - Authorize Netlify
   - Choose "Create & configure a new site"
   - Enter your publish directory: `dist`

#### Option 2: Netlify Dashboard

1. Build your application:
   ```bash
   npm run build
   ```

2. Go to [netlify.com](https://netlify.com) and sign in
3. Drag and drop your `dist` folder to deploy
4. Or connect your Git repository for automatic deployments

**Netlify Configuration** (netlify.toml):
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Deploy to GitHub Pages

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json**:
   ```json
   {
     "homepage": "https://yourusername.github.io/Idiacoin",
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

### Other Platforms

The demo can also be deployed to:
- **AWS Amplify**: Connect your Git repository
- **Firebase Hosting**: Use `firebase deploy`
- **Cloudflare Pages**: Connect via dashboard
- **Render**: Deploy as static site

## 🎨 Customization

### Styling
The app uses Tailwind CSS for styling. Customize colors in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      'idiacoin-primary': '#0098EA',
      'idiacoin-dark': '#005A8C',
      'idiacoin-light': '#33AFEE',
    },
  },
}
```

### Components
All React components are in `src/components/`:
- `BalanceView.jsx` - Balance display and stats
- `TransferCoins.jsx` - Send/transfer interface
- `TransactionHistory.jsx` - Transaction list and filters
- `AzaChat.jsx` - AI assistant chatbot

### Aza AI Assistant
The Aza chatbot can be customized in `src/components/AzaChat.jsx`. Modify the `getAzaResponse()` function to add new responses or integrate with a real AI backend.

## 🔧 Technology Stack

- **React 18**: Modern UI library
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icon library
- **TON Blockchain**: Underlying blockchain technology

## 📱 Features Overview

### Balance View
- Display total balance in IDIA and USD
- Show available vs locked balances
- Quick stats (24h change, total transactions, last activity)
- Privacy toggle to hide/show balance

### Transfer Coins
- User-friendly transfer form
- Real-time transaction summary
- Fee calculation
- Success/error feedback
- Demo mode for safe testing

### Transaction History
- Comprehensive transaction list
- Filter by type (sent/received)
- Search functionality
- Pagination support
- Visual indicators for transaction types

### Aza AI Assistant
- Context-aware responses
- Quick action buttons
- Chat history
- Typing indicators
- Helpful guidance for common tasks

## 🔐 Security Notes

This is a **DEMO APPLICATION** for demonstration purposes only:
- No real blockchain transactions are processed
- No private keys or sensitive data are handled
- All balances and transactions are simulated
- The AI responses are pre-programmed, not connected to a live AI service

For production use, you would need to:
- Integrate with real TON blockchain APIs
- Implement proper wallet connection (TON Connect)
- Add secure key management
- Implement real transaction signing
- Connect to a live AI service for Aza

## 📚 Additional Resources

- [TON Documentation](https://ton.org/docs)
- [TON Blockchain](https://ton.org)
- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)

## 🤝 Support

For questions or issues with this demo:
1. Check the [TON documentation](https://ton.org/docs)
2. Visit [TON Community](https://t.me/toncoin)
3. Ask Aza in the demo app!

## 📄 License

This demo application is part of the Idiacoin/TON project. See the main repository LICENSE files for details.

---

**Built with ❤️ for the Idiacoin community**
