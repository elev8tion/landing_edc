# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Quick Links
- [Full Improvement Backlog](./IMPROVEMENTS.md) - Complete list of pending features and enhancements

## Project Overview

This is a React + TypeScript landing page for "Everyday Christian", a mobile app for faith-based content. The site is built with Vite, uses Tailwind CSS for styling, and React Router for navigation.

## Tech Stack

- **Build Tool**: Vite
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom utilities and animations
- **Routing**: React Router DOM v7
- **Icons**: lucide-react
- **Backend Ready**: Supabase client configured (not yet in use)

## Development Commands

```bash
# Start development server
npm run dev

# Type check without emitting files
npm run typecheck

# Lint code
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

- **src/pages/**: Page components (LandingPage, BlogPage, TermsOfService, PrivacyPolicy)
- **src/components/**: Reusable components (Navbar, Footer)
- **src/App.tsx**: Router configuration with route definitions
- **src/main.tsx**: Application entry point
- **src/index.css**: Global styles, custom Tailwind utilities, and animations

## Architecture Notes

### Routing
All routes are defined in `src/App.tsx` using React Router v7. The app uses `BrowserRouter` with the following routes:
- `/` - LandingPage
- `/blog` - BlogPage
- `/terms` - TermsOfService
- `/privacy` - PrivacyPolicy

### Styling System
Custom Tailwind utilities defined in `src/index.css`:
- `.text-gradient` - Blue-purple gradient text effect
- `.glass-card` - Glassmorphism card with backdrop blur and amber border
- `.glass-card-hover` - Hover state for glass cards
- `.gradient-bg` - Blue-purple gradient background

### Custom Animations
Keyframe animations available:
- `fadeInUp` - Fade in with upward translation
- `fadeIn` - Simple fade in
- `slideInLeft` - Slide in from left
- `slideInRight` - Slide in from right
- `float` - Floating effect for background elements

Apply via classes like `.animate-fadeInUp`, `.animate-float`, etc.

### Scroll Animations
LandingPage uses IntersectionObserver to trigger animations on scroll. Elements with `.scroll-animate` class and `opacity-0` will receive `.animate-fadeInUp` when they enter the viewport.

## Important Configuration

### Vite Config
- React plugin enabled
- `lucide-react` excluded from optimization to prevent build issues

### TypeScript
- Strict mode enabled
- Separate configs for app code (`tsconfig.app.json`) and node config (`tsconfig.node.json`)

## When Adding New Features

1. New pages go in `src/pages/` and must be added to routes in `src/App.tsx`
2. Reusable components go in `src/components/`
3. Use existing Tailwind utilities (`.glass-card`, `.text-gradient`, etc.) for consistency
4. Follow the scroll animation pattern: add `.scroll-animate opacity-0` to elements that should animate on scroll
5. Use `lucide-react` for icons to maintain consistency
