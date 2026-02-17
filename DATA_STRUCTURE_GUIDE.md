# Data Structure Reference Guide

Complete reference for all JSON data files in the portfolio.

## 📋 Table of Contents

1. [personalInfo.json](#personalinfojson)
2. [skills.json](#skillsjson)
3. [experience.json](#experiencejson)
4. [projects.json](#projectsjson)
5. [education.json](#educationjson)
6. [socialLinks.json](#sociallinksjson)
7. [testimonials.json](#testimonialsjson) (Bonus)
8. [achievements.json](#achievementsjson) (Bonus)
9. [currentFocus.json](#currentfocusjson) (Bonus)

---

## personalInfo.json

**Purpose**: Core personal and contact information

```json
{
  "name": "Full Name",
  "role": "Job Title/Role",
  "tagline": "Professional tagline",
  "location": "City, Country",
  "email": "email@example.com",
  "phone": "+XX XXXXXXXXXX",
  "summary": "Professional summary paragraph",
  "avatar": "profile",
  "availability": "Availability status"
}
```

**Fields Explained:**
- `name`: Your full name (displayed prominently)
- `role`: Your primary professional role
- `tagline`: Short professional statement
- `location`: Your city and country
- `email`: Contact email (used in multiple places)
- `phone`: Contact phone number
- `summary`: 2-3 sentence professional summary
- `avatar`: Profile image identifier
- `availability`: Current availability status

**Used In:**
- Hero section
- About section
- Contact section
- Footer
- SEO metadata

---

## skills.json

**Purpose**: Technical skills organized by category

```json
{
  "categories": [
    {
      "id": "category-id",
      "name": "Category Name",
      "icon": "icon-name",
      "skills": [
        { "name": "Skill Name", "level": 85 }
      ]
    }
  ]
}
```

**Category Structure:**
- `id`: Unique identifier (frontend, backend, etc.)
- `name`: Display name for category
- `icon`: Lucide icon name (monitor, server, database, cloud, wrench)
- `skills`: Array of skill objects

**Skill Structure:**
- `name`: Skill/technology name
- `level`: Proficiency level (0-100)

**Proficiency Guidelines:**
- 90-100: Expert/Master
- 80-89: Advanced/Very Good
- 70-79: Intermediate/Good
- 60-69: Working Knowledge
- Below 60: Learning/Basic

**Available Icons:**
- `monitor` - Frontend
- `server` - Backend
- `database` - Database
- `cloud` - Cloud/DevOps
- `wrench` - Tools/Others

**Used In:**
- Skills section

---

## experience.json

**Purpose**: Work experience timeline

```json
{
  "positions": [
    {
      "id": "exp-1",
      "title": "Job Title",
      "company": "Company Name",
      "location": "City",
      "type": "Full-time",
      "startDate": "Month Year",
      "endDate": "Present",
      "current": true,
      "responsibilities": [
        "Responsibility 1",
        "Responsibility 2"
      ],
      "technologies": ["Tech1", "Tech2"]
    }
  ]
}
```

**Fields Explained:**
- `id`: Unique identifier (exp-1, exp-2, etc.)
- `title`: Job title/position
- `company`: Company name
- `location`: City or location
- `type`: Employment type (Full-time, Part-time, Contract)
- `startDate`: Start date (Month Year format)
- `endDate`: End date or "Present"
- `current`: Boolean - is this the current position?
- `responsibilities`: Array of key responsibilities (4-6 items)
- `technologies`: Array of technologies used

**Best Practices:**
- Start responsibilities with action verbs
- Be specific and measurable
- List 4-6 responsibilities per role
- Include technologies relevant to the role
- Most recent position first

**Used In:**
- Experience section (timeline layout)

---

## projects.json

**Purpose**: Portfolio project showcase

```json
{
  "projects": [
    {
      "id": "proj-1",
      "title": "Project Name",
      "subtitle": "Short Description",
      "description": "Detailed description of the project...",
      "role": "Your Role",
      "status": "Production",
      "featured": true,
      "technologies": ["Tech1", "Tech2"],
      "highlights": [
        "Achievement 1",
        "Achievement 2"
      ],
      "image": "search keywords"
    }
  ]
}
```

**Fields Explained:**
- `id`: Unique identifier (proj-1, proj-2, etc.)
- `title`: Project name/title
- `subtitle`: One-line description
- `description`: Detailed project description (100-150 words)
- `role`: Your role in the project
- `status`: Project status (see options below)
- `featured`: Boolean - show featured badge?
- `technologies`: Array of technologies used
- `highlights`: Array of key achievements (3-5 items)
- `image`: Keywords for Unsplash image search

**Status Options:**
- `Production` - Live and in production
- `Live` - Currently live/active
- `In Progress` - Currently being developed
- `Completed` - Finished project
- `Archived` - No longer active

**Image Search Tips:**
- Use 2-3 relevant keywords
- Be descriptive but not too specific
- Examples: "technology dashboard", "fitness app", "business analytics"

**Used In:**
- Projects section (filterable grid)

---

## education.json

**Purpose**: Academic qualifications

```json
{
  "degrees": [
    {
      "id": "edu-1",
      "degree": "Full Degree Name",
      "shortDegree": "Abbreviation",
      "institution": "Institution Name",
      "location": "City",
      "startYear": "2020",
      "endYear": "2024",
      "cgpa": "8.5",
      "description": "Brief description of degree or achievements"
    }
  ]
}
```

**Fields Explained:**
- `id`: Unique identifier (edu-1, edu-2, etc.)
- `degree`: Full degree name
- `shortDegree`: Abbreviated form (B.Tech, M.Com, etc.)
- `institution`: Full institution name
- `location`: City/location
- `startYear`: Start year
- `endYear`: Graduation year
- `cgpa`: Grade point average or percentage
- `description`: Optional description or achievements

**Used In:**
- Education section

---

## socialLinks.json

**Purpose**: Social media and contact links

```json
{
  "links": [
    {
      "id": "platform-id",
      "name": "Platform Name",
      "url": "https://...",
      "icon": "icon-name"
    }
  ]
}
```

**Fields Explained:**
- `id`: Unique identifier (linkedin, github, etc.)
- `name`: Platform display name
- `url`: Full URL to profile
- `icon`: Lucide icon name

**Available Icons:**
- `linkedin` - LinkedIn
- `github` - GitHub
- `mail` - Email
- `twitter` - Twitter
- `globe` - Website
- `youtube` - YouTube

**Used In:**
- Hero section
- Contact section
- Footer

---

## testimonials.json

**Purpose**: Client/colleague testimonials (Optional)

```json
{
  "testimonials": [
    {
      "id": "test-1",
      "name": "Person Name",
      "role": "Their Role",
      "company": "Their Company",
      "avatar": "Initials",
      "text": "Testimonial text...",
      "rating": 5
    }
  ]
}
```

**Fields Explained:**
- `id`: Unique identifier
- `name`: Person's name
- `role`: Their job title
- `company`: Their company
- `avatar`: Initials for avatar (2 letters)
- `text`: Testimonial text
- `rating`: Star rating (1-5)

**To Activate:**
1. Update with real testimonials
2. Import component in App.tsx
3. Add `<Testimonials />` to desired location

---

## achievements.json

**Purpose**: Key achievements and milestones (Optional)

```json
{
  "achievements": [
    {
      "id": "ach-1",
      "title": "Achievement Title",
      "description": "Achievement description",
      "icon": "trophy",
      "year": "2024"
    }
  ]
}
```

**Fields Explained:**
- `id`: Unique identifier
- `title`: Achievement title
- `description`: Brief description
- `icon`: Lucide icon name (trophy, award, zap, code)
- `year`: Year achieved

**Available Icons:**
- `trophy` - Awards/achievements
- `award` - Certifications
- `zap` - Performance
- `code` - Technical
- `star` - Recognition

---

## currentFocus.json

**Purpose**: Current projects or learning focus (Optional)

```json
{
  "currentFocus": {
    "title": "Section Title",
    "items": [
      {
        "id": "focus-1",
        "title": "Focus Area",
        "description": "Description...",
        "progress": 75,
        "color": "blue"
      }
    ]
  }
}
```

**Fields Explained:**
- `title`: Section title
- `items`: Array of focus items
  - `id`: Unique identifier
  - `title`: Focus area title
  - `description`: Brief description
  - `progress`: Progress percentage (0-100)
  - `color`: Color theme (blue, purple, green, red, yellow)

---

## 🎯 Quick Reference

### Common Tasks

**Add New Skill:**
```json
// In skills.json, add to appropriate category
{ "name": "New Skill", "level": 85 }
```

**Add New Project:**
```json
// In projects.json
{
  "id": "proj-4",
  "title": "New Project",
  "subtitle": "Brief description",
  "description": "Full description...",
  "role": "Developer",
  "status": "Production",
  "featured": false,
  "technologies": ["React", "Node.js"],
  "highlights": ["Feature 1", "Feature 2"],
  "image": "technology startup"
}
```

**Update Contact Info:**
```json
// In personalInfo.json
{
  "email": "new@email.com",
  "phone": "+XX XXXXXXXXXX"
}
```

---

## ⚠️ Important Notes

### JSON Syntax Rules:
1. Use double quotes for strings
2. No trailing commas
3. Valid JSON structure required
4. Arrays use square brackets `[]`
5. Objects use curly braces `{}`

### Best Practices:
1. Keep descriptions concise
2. Use consistent formatting
3. Validate JSON before saving
4. Maintain chronological order (newest first)
5. Use meaningful IDs
6. Keep proficiency levels realistic
7. Update regularly

### Validation:
Use a JSON validator to check syntax:
- jsonlint.com
- jsonformatter.org
- VS Code built-in validator

---

## 🔄 Update Workflow

1. Open JSON file in editor
2. Make changes following structure
3. Validate JSON syntax
4. Save file
5. Refresh browser
6. Verify changes

**No code restart needed!** Just refresh the browser.

---

## 📞 Support

For questions about data structure:
1. Check this guide
2. Review example data in files
3. Validate JSON syntax
4. Check component expecting the data

---

**Remember**: All content updates happen through these JSON files. No code changes needed for content updates!
