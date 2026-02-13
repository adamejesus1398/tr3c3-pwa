# TR3C3 OS - PWA Personal System

**TR3C3 OS** is a comprehensive Progressive Web App (PWA) designed for personal productivity, habit tracking, financial management, journaling, and growth with AI coaching integration.

## 🚀 Features

### Core Modules
- **🏠 Inicio** - Dashboard with daily overview and statistics
- **✅ Hábitos** - Daily habit tracking with streak counters
- **🤖 Coach IA** - AI-powered personal coach (OpenAI GPT-4o-mini)
- **💰 Finanzas** - Personal finance tracker with savings goals
- **📓 Diario** - Daily journaling with mood tracking
- **⏱ Rutina** - Daily routine planner and weekly cleaning schedule
- **🚀 Roadmap** - 30-day business plan to reach €1,000
- **📵 Desconexión** - 4-week digital detox program
- **✨ Interior** - Spiritual growth and personal development

### Technical Features
- ✅ **Offline First** - Works without internet connection
- ✅ **Installable** - Add to home screen on mobile devices
- ✅ **Responsive** - Optimized for mobile (max-width: 430px)
- ✅ **Dark Mode** - Premium dark theme with gold accents
- ✅ **LocalStorage** - All data persists locally
- ✅ **Service Worker** - Caching for offline functionality

## 📦 Installation

### GitHub Pages Deployment

1. **Fork/Clone this repository**

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: `main` / `master` (root directory)
   - Save

3. **Access your PWA**
   - URL: `https://[your-username].github.io/tr3c3-pwa/`
   - Wait 1-2 minutes for initial deployment

### Local Development

```bash
# Clone the repository
git clone https://github.com/[your-username]/tr3c3-pwa.git
cd tr3c3-pwa

# Serve with any static server
# Option 1: Python
python -m http.server 8000

# Option 2: Node.js
npx serve

# Option 3: PHP
php -S localhost:8000

# Open browser
# Navigate to http://localhost:8000
```

## 🛠️ Project Structure

```
tr3c3-pwa/
├── index.html          # Main HTML entry point
├── styles.css          # All CSS styles
├── app.js             # JavaScript application logic
├── manifest.json      # PWA manifest
├── sw.js             # Service Worker
├── .nojekyll        # GitHub Pages config
├── icons/
│   ├── icon-192.svg  # App icon 192x192
│   └── icon-512.svg  # App icon 512x512
└── README.md
```

## 🎨 Customization

### Modify Theme Colors
Edit CSS variables in `styles.css`:

```css
:root {
  --gold: #f5c400;    /* Primary accent color */
  --bg: #000;         /* Background */
  --white: #f5f0e8;   /* Text color */
}
```

### Add/Remove Modules
Edit the navigation in `app.js` and corresponding screen sections in the HTML.

### Configure AI Coach
1. Open the app
2. Navigate to "Coach IA"
3. Enter your OpenAI API key
4. Key is stored in session memory only (not persisted)

## 🔐 Privacy & Data

- **All data is stored locally** in your browser's localStorage
- **No external servers** receive your personal data
- **AI Coach**: API key stored in session memory only
- **OpenAI API**: Your messages are sent to OpenAI when using the coach

## 📱 Installing as PWA

### Android (Chrome/Edge)
1. Open the PWA in Chrome/Edge
2. Tap the menu (⋮)
3. Select "Add to Home screen"
4. Confirm installation

### iOS (Safari)
1. Open the PWA in Safari
2. Tap the Share button
3. Scroll and tap "Add to Home Screen"
4. Confirm installation

### Desktop (Chrome/Edge)
1. Click the install icon in the address bar
2. Or: Menu → "Install TR3C3 OS"

## 🧪 Testing Offline Functionality

1. Open the app in browser
2. Open DevTools (F12)
3. Go to Network tab
4. Select "Offline" from throttling dropdown
5. App should still work fully

## 🔄 Updating the PWA

After making changes:

```bash
# Update service worker version
# Edit sw.js and change CACHE_NAME
const CACHE_NAME = 'tr3c3-v2'; // increment version

# Commit and push
git add .
git commit -m "Update PWA"
git push origin main
```

Users will receive the update on next visit (service worker auto-updates).

## 🐛 Troubleshooting

### Icons not showing on GitHub Pages
- Ensure icons are in `/icons/` directory
- Check manifest.json paths are correct
- Icons must be PNG or SVG format

### Service Worker not working
- Must be served over HTTPS (GitHub Pages provides this)
- Check browser console for errors
- Clear cache and hard reload (Ctrl+Shift+R)

### Data not persisting
- Check browser localStorage is enabled
- Some browsers clear data in private/incognito mode
- Export important data regularly

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Credits

- **Fonts**: Google Fonts (Bebas Neue, DM Sans, DM Serif Display)
- **AI**: OpenAI GPT-4o-mini for coaching features
- **Design**: Custom minimalist dark theme with gold accents

## 📞 Support

For issues or questions:
- Open an issue on GitHub
- Check browser console for errors
- Ensure you're using a modern browser (Chrome, Edge, Safari, Firefox)

---

**Made with 🔥 for personal growth and productivity**
