# Portfolio Customization Guide

This guide will help you customize and maintain Vivek Patel's portfolio website.

## 🎯 Quick Updates

### Update Personal Information
**File**: `/src/data/personalInfo.json`

```json
{
  "name": "Your Name",
  "role": "Your Role",
  "email": "your.email@example.com",
  // ... other fields
}
```

### Add/Update Skills
**File**: `/src/data/skills.json`

Add a new skill to any category:
```json
{
  "name": "New Skill",
  "level": 85  // 0-100
}
```

Available categories:
- frontend
- backend
- database
- devops
- tools

### Add New Project
**File**: `/src/data/projects.json`

```json
{
  "id": "proj-4",
  "title": "Project Name",
  "subtitle": "One-line description",
  "description": "Detailed description of the project",
  "role": "Your Role",
  "status": "Production", // or "Live", "In Progress"
  "featured": true, // or false
  "technologies": ["Tech1", "Tech2"],
  "highlights": ["Achievement 1", "Achievement 2"],
  "image": "keyword for unsplash" // e.g., "technology dashboard"
}
```

### Update Work Experience
**File**: `/src/data/experience.json`

Add new position or update existing:
```json
{
  "id": "exp-4",
  "title": "Job Title",
  "company": "Company Name",
  "location": "City",
  "type": "Full-time",
  "startDate": "Month Year",
  "endDate": "Present", // or "Month Year"
  "current": true, // or false
  "responsibilities": [
    "Responsibility 1",
    "Responsibility 2"
  ],
  "technologies": ["Tech1", "Tech2"]
}
```

### Update Education
**File**: `/src/data/education.json`

```json
{
  "id": "edu-2",
  "degree": "Degree Name",
  "shortDegree": "Abbr",
  "institution": "Institution Name",
  "location": "City",
  "startYear": "2023",
  "endYear": "2025",
  "cgpa": "8.94",
  "description": "Brief description"
}
```

### Update Social Links
**File**: `/src/data/socialLinks.json`

```json
{
  "id": "linkedin",
  "name": "LinkedIn",
  "url": "https://linkedin.com/in/yourprofile",
  "icon": "linkedin" // linkedin, github, mail, twitter, etc.
}
```

## 🎨 Theme Customization

### Colors
**File**: `/src/styles/theme.css`

The portfolio uses CSS custom properties. Main colors:
- Primary gradient: Blue (#3b82f6) to Purple (#9333ea)
- Background: White/Dark Gray
- Text: Dark/Light based on theme

To change the gradient colors, update in components:
- Look for: `from-blue-600 to-purple-600`
- Replace with your colors: `from-red-600 to-orange-600`

### Typography
**File**: `/src/styles/theme.css`

Default font properties are defined in the theme. To use different fonts:
1. Import font in `/src/styles/fonts.css`
2. Apply in theme CSS or component classes

## 🔧 Advanced Customization

### Add New Section

1. Create component in `/src/app/components/`
2. Create data file in `/src/data/`
3. Import and add to `/src/app/App.tsx`

Example:
```tsx
import NewSection from '@/app/components/NewSection';

// In App.tsx
<main>
  {/* ... existing sections ... */}
  <NewSection />
</main>
```

### Modify Animations

Animations use Motion (Framer Motion). Common patterns:

**Fade In**:
```tsx
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5 }}
```

**Hover Effect**:
```tsx
whileHover={{ y: -5, scale: 1.02 }}
```

**Tap Effect**:
```tsx
whileTap={{ scale: 0.95 }}
```

### Change Icon Set

Icons use Lucide React. To use different icons:

1. Find icon at: https://lucide.dev/icons
2. Import: `import { IconName } from 'lucide-react'`
3. Use: `<IconName size={20} />`

### Modify Layout

The portfolio uses Tailwind CSS utility classes:
- `grid md:grid-cols-2` - Two columns on medium screens
- `gap-8` - Gap between items
- `p-6` - Padding
- `rounded-xl` - Border radius

## 📱 Responsive Breakpoints

- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up

## 🚀 Performance Tips

1. **Images**: Use descriptive Unsplash queries for relevant images
2. **Loading**: Adjust loading time in `/src/app/App.tsx` (currently 1500ms)
3. **Animations**: Keep animation durations under 0.5s for snappiness

## 🎯 SEO Optimization

**File**: `/src/app/components/SEOHead.tsx`

Update meta information:
- Title format
- Description
- Keywords

## 📝 Content Best Practices

### Skills
- Be honest about proficiency levels
- 80-100: Expert/Advanced
- 60-79: Intermediate
- 40-59: Basic/Learning

### Projects
- Use action verbs in descriptions
- Highlight measurable achievements
- Include relevant technologies
- Keep descriptions under 150 words

### Experience
- Use bullet points (4-6 per role)
- Start with action verbs
- Include specific achievements
- Mention technologies used

## 🔄 Regular Updates

1. **Weekly**: Check for outdated information
2. **Monthly**: Update current projects and skills
3. **Quarterly**: Review and refresh project descriptions
4. **Yearly**: Major design refresh if needed

## 🐛 Troubleshooting

### Theme Not Switching
- Check browser console for errors
- Clear localStorage
- Verify ThemeContext is wrapping App

### Animations Not Working
- Ensure Motion is properly imported
- Check viewport settings
- Verify element is in view

### Content Not Updating
- Hard refresh browser (Ctrl+Shift+R)
- Check JSON syntax
- Verify file paths

## 📦 Adding New Dependencies

```bash
pnpm add package-name
```

Then import in your component:
```tsx
import Something from 'package-name';
```

## 🎨 Design System

The portfolio follows these principles:
- **Consistency**: Same spacing, colors, and patterns
- **Hierarchy**: Clear visual hierarchy with headings
- **Whitespace**: Generous spacing for readability
- **Contrast**: Sufficient contrast for accessibility
- **Responsiveness**: Mobile-first approach

## 📞 Support

For questions or issues with customization:
1. Review this guide
2. Check component comments
3. Review JSON data structure in `/src/data/README.md`
4. Inspect similar components for patterns

---

**Remember**: The portfolio is JSON-driven, so most updates only require editing JSON files!
