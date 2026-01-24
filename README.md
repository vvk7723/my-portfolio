# Portfolio Website

## Overview
This is a modern, high-performance professional portfolio website built with React, TypeScript, and Vite. It features a premium design system, dark mode support, and smooth animations using Framer Motion.

## Features
- ⚡ **Performance**: Built on Vite for lightning-fast HMR and building.
- 🎨 **Design**: Custom design system using Tailwind CSS 4 and `oklch` standard colors.
- 📱 **Responsive**: Fully responsive layouts for all devices.
- 🌙 **Dark Mode**: Built-in dark mode support.
- 🎭 **Animations**: Smooth transitions and scroll animations powered by Motion (prev. Framer Motion).
- ♿ **Accessible**: Using Radix UI primitives for accessible interactive components.

## Tech Stack
- **Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4, PostCSS
- **Animations**: Motion (Framer Motion)
- **Icons**: Lucide React
- **UI Components**: Radix UI Primitives

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or pnpm

### Installation
1. Clone the repository
   ```bash
   git clone <repository-url>
   cd my-portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start development server
   ```bash
   npm run dev
   ```

4. Build for production
   ```bash
   npm run build
   ```

5. Preview production build
   ```bash
   npm run preview
   ```

## Project Structure
```
src/
├── app/
│   ├── components/  # Reusable UI components
│   ├── contexts/    # React Context providers
│   └── App.tsx      # Main application component
├── styles/          # Global styles and theme definitions
├── data/            # Static data files
└── main.tsx         # Application entry point
```

## Customization
See [CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md) for details on how to personalize content and theme.

## Deployment
This project is ready for deployment on Vercel, Netlify, or GitHub Pages.
Run `npm run build` to generate the `dist` folder.
