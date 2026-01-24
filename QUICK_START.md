# Quick Start Guide

Get up and running with Vivek Patel's portfolio in 5 minutes!

## ⚡ Installation

```bash
# 1. Install dependencies
pnpm install

# 2. Start development server
pnpm dev

# 3. Open browser
# Visit: http://localhost:5173
```

## 📝 Quick Updates

### Change Personal Info
**File**: `/src/data/personalInfo.json`
```json
{
  "name": "Your Name",
  "email": "your@email.com",
  "phone": "+91 1234567890"
}
```

### Add a Skill
**File**: `/src/data/skills.json`
```json
{
  "name": "New Skill",
  "level": 85
}
```

### Add a Project
**File**: `/src/data/projects.json`
```json
{
  "id": "proj-4",
  "title": "Project Name",
  "description": "Description...",
  "technologies": ["React", "Node.js"],
  "status": "Production",
  "featured": true
}
```

## 🎨 Theme Toggle

Click the sun/moon icon in the header to switch between light and dark modes.

## 📱 Mobile Menu

On mobile devices, click the menu icon to access navigation.

## 🚀 Build for Production

```bash
pnpm build
```

Output will be in `dist/` folder.

## 📚 Documentation

- **README.md** - Overview and features
- **PROJECT_OVERVIEW.md** - Detailed documentation  
- **CUSTOMIZATION_GUIDE.md** - How to customize
- **DEPLOYMENT.md** - Deployment instructions

## 🎯 Key Features

✅ Dark/Light mode
✅ Fully responsive
✅ Smooth animations
✅ JSON-driven content
✅ SEO optimized
✅ Easy to customize

## 📂 Important Files

```
/src/data/           → All content (JSON files)
/src/app/components/ → React components
/src/styles/         → Global styles
/src/app/App.tsx     → Main app
```

## 🔧 Common Tasks

### Update Contact Info
Edit: `/src/data/personalInfo.json`

### Change Colors
Search and replace in components:
- `from-blue-600 to-purple-600` → Your colors

### Add Section
1. Create component in `/src/app/components/`
2. Create data file in `/src/data/`
3. Import in `/src/app/App.tsx`

## ⚠️ Important Notes

- All data in JSON files
- No hardcoded content
- Mobile-first design
- TypeScript enabled
- Tailwind CSS for styling

## 🎓 Learning Path

1. Start with JSON files to update content
2. Explore components to understand structure
3. Modify styles for customization
4. Add new sections as needed

## 💡 Tips

- Test in multiple browsers
- Check mobile responsiveness
- Update resume link
- Verify all social links
- Test contact form

## 🚨 Troubleshooting

**Site not loading?**
- Check terminal for errors
- Verify Node.js version (16+)
- Clear cache and restart

**Content not updating?**
- Hard refresh (Ctrl+Shift+R)
- Check JSON syntax
- Restart dev server

**Theme not working?**
- Check browser console
- Clear localStorage
- Verify ThemeContext

## 📞 Need Help?

1. Check documentation files
2. Review component code
3. Check package documentation
4. Verify JSON structure

## ✅ Pre-Launch Checklist

- [ ] Update all personal info
- [ ] Add your projects
- [ ] Update skills and proficiency
- [ ] Set correct social links
- [ ] Add resume link
- [ ] Test on mobile
- [ ] Check dark mode
- [ ] Verify contact form
- [ ] Test all links

## 🎉 You're Ready!

Your portfolio is set up and ready to customize. Start by updating the JSON files in `/src/data/` with your information.

---

**Questions?** Check the detailed guides:
- CUSTOMIZATION_GUIDE.md
- PROJECT_OVERVIEW.md
- DEPLOYMENT.md
