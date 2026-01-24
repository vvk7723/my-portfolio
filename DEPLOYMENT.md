# Deployment Guide

This guide covers deploying Vivek Patel's portfolio to various hosting platforms.

## 🚀 Build for Production

Before deploying, create a production build:

```bash
pnpm build
```

This creates an optimized build in the `dist/` directory.

## 📦 Deployment Options

### 1. Vercel (Recommended)

**Why Vercel?**
- Zero configuration
- Automatic HTTPS
- Global CDN
- Perfect for React/Vite apps
- Free tier available

**Steps:**

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow prompts and your site will be live!

**Or deploy via GitHub:**
1. Push code to GitHub
2. Import project in [Vercel Dashboard](https://vercel.com)
3. Deploy automatically

### 2. Netlify

**Steps:**

1. Install Netlify CLI:
```bash
npm i -g netlify-cli
```

2. Build:
```bash
pnpm build
```

3. Deploy:
```bash
netlify deploy --prod --dir=dist
```

**Or drag & drop:**
1. Build the project
2. Drag `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

### 3. GitHub Pages

**Steps:**

1. Install gh-pages:
```bash
pnpm add -D gh-pages
```

2. Update `package.json`:
```json
{
  "scripts": {
    "deploy": "pnpm build && gh-pages -d dist"
  },
  "homepage": "https://yourusername.github.io/repository-name"
}
```

3. Deploy:
```bash
pnpm deploy
```

### 4. Firebase Hosting

**Steps:**

1. Install Firebase CLI:
```bash
npm i -g firebase-tools
```

2. Login:
```bash
firebase login
```

3. Initialize:
```bash
firebase init hosting
```

Select:
- Public directory: `dist`
- Single-page app: `Yes`
- Automatic builds: `No`

4. Build and deploy:
```bash
pnpm build
firebase deploy
```

### 5. AWS S3 + CloudFront

**Steps:**

1. Build the project:
```bash
pnpm build
```

2. Create S3 bucket
3. Enable static website hosting
4. Upload `dist` contents
5. Create CloudFront distribution
6. Point to S3 bucket

### 6. Custom Server (Node.js/Nginx)

**Using Nginx:**

1. Build:
```bash
pnpm build
```

2. Copy `dist` to server:
```bash
scp -r dist/* user@server:/var/www/portfolio
```

3. Nginx config:
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/portfolio;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## 🔧 Environment Variables

If you add environment variables in the future:

1. Create `.env` file:
```
VITE_API_URL=your_api_url
VITE_ANALYTICS_ID=your_analytics_id
```

2. Use in code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

3. Set in hosting platform:
   - **Vercel**: Project Settings → Environment Variables
   - **Netlify**: Site Settings → Build & Deploy → Environment
   - **Firebase**: Functions config

## 📊 Analytics Setup

### Google Analytics

1. Add to `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Vercel Analytics

1. Install:
```bash
pnpm add @vercel/analytics
```

2. Add to `App.tsx`:
```tsx
import { Analytics } from '@vercel/analytics/react';

// In return:
<Analytics />
```

## 🌐 Custom Domain

### Vercel
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed

### Netlify
1. Go to Domain Settings
2. Add custom domain
3. Update DNS or use Netlify DNS

## ✅ Pre-Deployment Checklist

- [ ] Update all personal information in JSON files
- [ ] Test on multiple devices/browsers
- [ ] Verify all links work
- [ ] Check dark/light mode
- [ ] Optimize images if added
- [ ] Test contact form
- [ ] Verify resume link
- [ ] Check mobile responsiveness
- [ ] Test all animations
- [ ] Review SEO meta tags
- [ ] Remove console.logs
- [ ] Test build locally: `pnpm build && pnpm preview`

## 🔍 SEO Optimization

### Meta Tags
Already implemented in `SEOHead.tsx`:
- Title
- Description
- Keywords
- Author

### Additional Recommendations:

1. **Sitemap**: Generate sitemap.xml
2. **Robots.txt**: Create in `public/` folder:
```
User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap.xml
```

3. **Open Graph**: Add to `index.html`:
```html
<meta property="og:title" content="Vivek Patel - Full-Stack Developer" />
<meta property="og:description" content="Portfolio of Vivek Patel..." />
<meta property="og:image" content="preview-image.jpg" />
<meta property="og:url" content="https://yourdomain.com" />
```

## 🐛 Troubleshooting

### Build Fails
- Check Node.js version (16+)
- Clear node_modules: `rm -rf node_modules && pnpm install`
- Check for TypeScript errors

### 404 on Refresh
- Configure SPA routing in hosting platform
- Vercel/Netlify handle this automatically

### Images Not Loading
- Check image paths
- Verify Unsplash queries
- Use absolute URLs

### Theme Not Persisting
- Check localStorage support
- Verify ThemeContext implementation

## 📈 Performance Optimization

Already implemented:
- Code splitting
- Lazy loading
- Optimized animations
- Minimal dependencies

Additional optimizations:
1. **Image optimization**: Use WebP format
2. **Caching**: Configure in hosting platform
3. **Compression**: Enable Gzip/Brotli
4. **CDN**: Use for assets

## 🔒 Security

- HTTPS enabled by default on modern platforms
- No sensitive data exposed
- Form validation
- No inline scripts (CSP compatible)

## 📱 Progressive Web App (Optional)

To add PWA support:

1. Install plugin:
```bash
pnpm add -D vite-plugin-pwa
```

2. Configure in `vite.config.ts`
3. Add manifest.json
4. Add service worker

## 🎯 Post-Deployment

1. **Test everything**:
   - All links work
   - Forms submit
   - Theme switching works
   - Mobile responsive
   - All sections load

2. **Monitor**:
   - Set up analytics
   - Check for errors
   - Monitor performance

3. **Share**:
   - Update LinkedIn
   - Share on social media
   - Add to resume
   - Send to potential employers

## 📞 Support

If you encounter issues:
1. Check build logs
2. Verify configuration
3. Test locally first
4. Check hosting platform docs

---

**Ready to deploy?** Choose your platform and follow the steps above!

Good luck! 🚀
