# Royal Chai Landing Page - Deployment Guide

## 📋 Pre-Deployment Checklist

Before deploying, ensure you have:
- [ ] Node.js installed (v18 or higher)
- [ ] Git installed and configured
- [ ] GitHub account created
- [ ] Chosen deployment platform account (Netlify/Vercel/GitHub Pages)

## 🚀 Quick Deploy (Recommended)

### Option 1: Deploy to Netlify (Easiest)

**Step 1: Prepare Your Repository**
```bash
cd royal-chai-project
git init
git add .
git commit -m "Initial commit: Royal Chai landing page"
```

**Step 2: Push to GitHub**
```bash
# Create a new repository on GitHub first, then:
git remote add origin https://github.com/YOUR_USERNAME/royal-chai-landing.git
git branch -M main
git push -u origin main
```

**Step 3: Deploy on Netlify**
1. Go to https://app.netlify.com/
2. Click "Add new site" → "Import an existing project"
3. Choose "GitHub" and authorize Netlify
4. Select your `royal-chai-landing` repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click "Deploy site"
7. Your site will be live in ~2 minutes at a URL like: `https://royal-chai-abc123.netlify.app`

**Step 4: Custom Domain (Optional)**
1. In Netlify dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Follow DNS configuration instructions

---

### Option 2: Deploy to Vercel

**Step 1-2: Same as Netlify** (Prepare repo and push to GitHub)

**Step 3: Deploy on Vercel**
1. Go to https://vercel.com/
2. Click "New Project"
3. Import your GitHub repository
4. Vercel auto-detects Vite configuration
5. Click "Deploy"
6. Live URL provided instantly

---

### Option 3: Deploy to GitHub Pages

**Step 1: Install gh-pages package**
```bash
npm install --save-dev gh-pages
```

**Step 2: Update package.json**
Add these lines:
```json
{
  "homepage": "https://YOUR_USERNAME.github.io/royal-chai-landing",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

**Step 3: Update vite.config.js**
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/royal-chai-landing/', // Your repo name
})
```

**Step 4: Deploy**
```bash
npm run deploy
```

Your site will be live at: `https://YOUR_USERNAME.github.io/royal-chai-landing`

---

## 🔧 Post-Deployment Tasks

### 1. Update Social Media Links
Edit `src/App.jsx` and replace placeholder links:
```jsx
<a href="https://instagram.com/YOUR_HANDLE" ...>
<a href="https://facebook.com/YOUR_PAGE" ...>
<a href="https://twitter.com/YOUR_HANDLE" ...>
```

### 2. Add Your Logo
Replace the placeholder logo in `src/App.jsx`:
```jsx
{/* Replace this placeholder */}
<div className="w-32 h-32 bg-gradient-to-br from-amber-700 to-orange-800...">

{/* With your actual logo */}
<img 
  src="/logo.png" 
  alt="Royal Chai Logo" 
  className="w-32 h-32 sm:w-40 sm:h-40 object-contain"
/>
```

### 3. Set Up Email Collection Backend
The form currently captures emails in state. For production:

**Option A: Use Formspree**
```jsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <input type="email" name="email" required />
  <button type="submit">Notify Me</button>
</form>
```

**Option B: Use EmailJS**
```bash
npm install @emailjs/browser
```

**Option C: Custom Backend**
- Create API endpoint
- Integrate with Mailchimp, SendGrid, or ConvertKit
- Update handleSubmit function

### 4. Add Analytics (Optional)
**Google Analytics:**
1. Create GA4 property
2. Add tracking code to `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🐛 Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Routing Issues on GitHub Pages
Add a `404.html` in public folder:
```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="refresh" content="0; url=/royal-chai-landing/">
  </head>
</html>
```

### Images Not Loading
- Ensure images are in `public` folder
- Use absolute paths: `/logo.png` not `./logo.png`
- Check case sensitivity (Linux servers are case-sensitive)

---

## 📊 Performance Optimization

After deployment, check performance:
1. **PageSpeed Insights**: https://pagespeed.web.dev/
2. **GTmetrix**: https://gtmetrix.com/

**Tips:**
- Images should be < 200KB (use WebP format)
- Lighthouse score target: 90+ across all metrics
- Enable Netlify/Vercel CDN (automatic)

---

## 🔐 Security Headers (Netlify)

Create `netlify.toml` in root:
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

---

## 📱 Testing Checklist

Before submitting:
- [ ] Test on mobile devices (iOS & Android)
- [ ] Test on multiple browsers (Chrome, Safari, Firefox)
- [ ] Verify email form validation works
- [ ] Check all social links open correctly
- [ ] Test responsive breakpoints (320px, 768px, 1024px, 1440px)
- [ ] Verify animations work smoothly
- [ ] Check loading speed (< 3 seconds)
- [ ] Validate HTML: https://validator.w3.org/

---

## 📝 Submission Package

For your internship submission, provide:

**1. Live Link**
```
https://your-deployed-site.netlify.app
```

**2. GitHub Repository**
```
https://github.com/YOUR_USERNAME/royal-chai-landing
```

**3. Design Rationale** (Include this in README or separate doc):
```
The design balances royal elegance with modern accessibility. Warm amber 
and brown tones evoke premium chai while Playfair Display and Crimson Text 
fonts communicate heritage without appearing dated. Layered backgrounds and 
subtle animations create depth and polish appropriate for a luxury product 
launch. The responsive layout ensures the regal experience translates 
beautifully across all devices.
```

---

## 🎓 Additional Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/)
- [Netlify Docs](https://docs.netlify.com/)
- [Vercel Docs](https://vercel.com/docs)

---

**Good luck with your internship submission! 🎉**
