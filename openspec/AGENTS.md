# Everyday Christian Landing Page - AI Agent Instructions

## Project Overview
This is the landing page for **Everyday Christian**, a faith-based mobile app that provides daily devotionals, Bible studies, prayer reminders, and a supportive community of believers. The landing page serves to introduce the app, highlight key features, and drive downloads.

## Technology Stack
- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS with custom design system matching Flutter app
- **Animations**: Custom CSS animations with scroll-based triggers
- **Deployment**: Vercel (planned)
- **Future Backend**: Supabase (for Phase 2 blog functionality)

## Design System (Exact Flutter Match)
### Colors
- Primary Indigo: `#6366F1`
- Accent Purple: `#8B5CF6`
- Signature Gold: `#D4AF37`
- Active Amber: `#FFA726`

### Glassmorphism
- Blur: 40px (AppBlur.strong)
- Gold border: 2px solid rgba(212, 175, 55, 0.6)
- Background gradient: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.08))
- Border radius: 20px (AppRadius.lg)

### Background
Cosmic aurora with 4 radial gradients:
- Sky blue at 20% 30%
- Purple at 80% 70%
- Pink at 60% 20%
- Green at 40% 80%

## Development Guidelines

### File Organization
```
src/
├── components/        # Reusable UI components
├── data/             # Static data (blog posts, features, etc.)
├── hooks/            # Custom React hooks
├── pages/            # Page components (Landing, Blog)
├── App.tsx           # Main app component
└── index.css         # Global styles and utilities
```

### Code Style
- Use TypeScript for all components
- Prefer functional components with hooks
- Use Tailwind utility classes over inline styles
- Extract repeated patterns into reusable components
- Follow exact Flutter design values (documented in tailwind.config.js)

### Animation Patterns
- Use `scroll-animate` class with `useScrollAnimation` hook
- Apply `opacity-0` initially, animations trigger on scroll
- Use staggered delays with `animationDelay` style prop
- Standard animations: fadeInUp, fadeIn, slideInLeft, slideInRight

### Git Workflow
- Work on `develop` branch for features
- Merge to `main` when ready for deployment
- Use descriptive commit messages documenting design system alignment
- Always fast-forward merge when possible

## Phase 2 Blog Architecture (Planned)

### Database Schema (Supabase)
- `blog_posts`: Core blog content with slug, title, content, metadata
- `blog_comments`: User comments with moderation
- `blog_reactions`: Like/helpful/pray reactions
- Storage bucket for featured images

### Admin Features
- Rich text editor with markdown support
- Image upload and management
- Draft/publish workflow
- Analytics dashboard

### Public Features
- Blog listing with filtering/search
- Individual post pages
- Comments system
- Social sharing
- Newsletter signup integration

## Key Constraints
- **NEVER** deviate from exact Flutter design values
- **ALWAYS** maintain 100% brand consistency across web and mobile
- **PREFER** editing existing files over creating new ones
- **AVOID** creating documentation files unless explicitly requested
- **ENSURE** all animations are performant and non-intrusive

## Current State
- ✅ Landing page with hero, features, testimonials
- ✅ Blog page with static posts
- ✅ Cosmic aurora background
- ✅ Exact Flutter design system implementation
- ⏳ OpenSpec initialization (in progress)
- ⏳ Phase 2 Supabase blog (planned)
- ⏳ Vercel deployment (planned)

## Change Management
All changes should be proposed through OpenSpec:
1. Create change proposal in `openspec/changes/`
2. Document affected components and rationale
3. Update relevant specs in `openspec/specs/`
4. Implement changes following design system
5. Test cross-browser compatibility
6. Commit with descriptive messages

## Contact & Resources
- Flutter App Design: Documented in `tailwind.config.js` and `src/index.css`
- Blog Data: `src/data/blogPosts.ts`
- Component Library: `src/components/`
