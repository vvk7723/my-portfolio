# Portfolio Data Management

This directory contains all the JSON data files that power Vivek Patel's portfolio website. All content is dynamically loaded from these files, making it easy to update without touching the code.

## Data Files

### personalInfo.json
Contains personal information displayed in the Hero section and throughout the site.
- Name, role, tagline
- Contact information (email, phone, location)
- Resume URL
- Availability status

### socialLinks.json
Social media links displayed in Hero and Footer.
- LinkedIn, GitHub, Email
- Each link has: id, name, url, icon

### skills.json
Technical skills organized by category.
- Categories: Frontend, Backend, Database, DevOps & Cloud, Tools & Others
- Each skill has a proficiency level (0-100)

### experience.json
Work experience timeline.
- Job positions with company, location, dates
- Responsibilities and technologies used
- Current position flag

### projects.json
Portfolio projects showcase.
- Project details: title, subtitle, description
- Role, status, featured flag
- Technologies and highlights
- Image search query for Unsplash

### education.json
Academic qualifications.
- Degree information
- Institution, location, years
- CGPA and description

## How to Update

1. **Adding a new skill:**
   - Open `skills.json`
   - Add to the appropriate category's skills array
   - Include name and level (0-100)

2. **Adding a new project:**
   - Open `projects.json`
   - Add new project object with all required fields
   - Set `featured: true` for important projects
   - Use descriptive image search terms

3. **Updating experience:**
   - Open `experience.json`
   - Add new position or update existing
   - Set `current: true` for current role

4. **Changing personal info:**
   - Open `personalInfo.json`
   - Update any field as needed
   - Changes reflect across entire site

## Icon Reference

Icons use lucide-react. Available icons:
- monitor, server, database, cloud, wrench (skills)
- linkedin, github, mail (social)
- briefcase, map-pin, calendar (experience)
- graduation-cap, award (education)

## Tips

- Keep descriptions concise and professional
- Use consistent formatting
- Proficiency levels should be realistic
- Featured projects appear prominently
- Image queries should be 2-3 relevant keywords
