# Royal Chai - Coming Soon Landing Page

Premium landing page for Royal Chai, an authentic instant chai tea brand inspired by royal Indian households.

## 🚀 Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Email capture with form validation
- ✅ Smooth animations and transitions
- ✅ Social media integration
- ✅ SEO optimized
- ✅ Fast loading with Vite
- ✅ Clean, maintainable React code

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```


### Deploy to GitHub Pages

```bash
npm run build
# Upload the 'dist' folder to your GitHub Pages branch
```

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Google Fonts** - Typography (Playfair Display, Crimson Text)

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🎯 Performance

- Optimized assets
- Lazy loading
- Minimal dependencies
- CSS-based animations (no heavy JS animation libraries)
- Production build ~40KB gzipped

## 📧 Email Integration

Currently stores emails in component state for demo purposes. For production:

1. Add backend API endpoint
2. Integrate with email service (Mailchimp, SendGrid, etc.)
3. Update `handleSubmit` function in `src/App.jsx`

