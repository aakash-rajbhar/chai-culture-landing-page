# Royal Chai - Coming Soon Landing Page

Premium landing page for Royal Chai, an authentic instant chai tea brand inspired by royal Indian households.

## 🎨 Design Choices

**1. Royal Elegance with Modern Sensibility**: The design marries traditional Indian luxury with contemporary web aesthetics. Using warm amber and deep brown gradients creates an immediate sense of premium quality while maintaining approachability.

**2. Typography as Heritage**: Playfair Display for headlines and Crimson Text for body copy were chosen for their sophisticated, editorial quality that evokes the timeless nature of royal traditions without appearing dated. These fonts communicate both heritage and refinement.

**3. Immersive Visual Atmosphere**: Layered background elements including gradient meshes, decorative patterns, and ornamental corner borders create depth and richness. Subtle animations on load and hover states add polish while maintaining the regal, composed tone appropriate for a premium product launch.

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

## 🌐 Deployment

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Vercel will auto-detect Vite settings
6. Click "Deploy"

### Deploy to GitHub Pages

```bash
npm run build
# Upload the 'dist' folder to your GitHub Pages branch
```

## 📝 Customization

### Adding Your Logo

Replace the placeholder logo in `src/App.jsx`:

```jsx
{/* Current placeholder logo */}
<div className="w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-amber-700 to-orange-800...">
  {/* Your logo code */}
</div>

{/* Replace with */}
<img 
  src="/path-to-your-logo.png" 
  alt="Royal Chai Logo" 
  className="w-32 h-32 sm:w-40 sm:h-40 object-contain"
/>
```

### Updating Social Links

In `src/App.jsx`, update the href attributes:

```jsx
<a href="https://instagram.com/yourhandle" ...>
<a href="https://facebook.com/yourpage" ...>
<a href="https://twitter.com/yourhandle" ...>
```

### Color Customization

Colors are defined using Tailwind CSS utilities. Main colors:
- Primary: `amber-700`, `orange-800`
- Backgrounds: `amber-50`, `orange-50`
- Text: `amber-950`, `amber-900`

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

## 📄 License

MIT

## 🤝 Support

For questions or issues, please open an issue on GitHub.

---

**Crafted with tradition. Built for the future.**
