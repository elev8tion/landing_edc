# OpenSpec: Everyday Christian Landing Page

This directory contains specifications and change proposals for the Everyday Christian landing page project, following the OpenSpec framework for specification-driven development.

## Directory Structure

```
openspec/
├── README.md                          # This file
├── AGENTS.md                          # Instructions for AI assistants
├── changes/                           # Change proposals and history
│   └── 001-initialize-openspec.md    # OpenSpec initialization
└── specs/                             # Technical specifications
    ├── design-system.md              # Design system documentation
    └── phase2-blog-architecture.md   # Phase 2 blog specifications
```

## Quick Start

### For AI Assistants
Read `AGENTS.md` first to understand the project, technology stack, design system, and development guidelines.

### For Developers
1. Read specs in `specs/` to understand architecture
2. Review recent changes in `changes/` to see what's been updated
3. Propose new changes by creating markdown files in `changes/`

## Specifications

### [Design System](./specs/design-system.md)
Complete documentation of the Flutter-matched design system including:
- Color palette (indigo, purple, gold, amber)
- Glassmorphism specifications
- Typography and animations
- Cross-platform consistency

### [Phase 2 Blog Architecture](./specs/phase2-blog-architecture.md)
Full specification for the Supabase-powered blogging system:
- Database schema and RLS policies
- Admin dashboard features
- Public blog features
- Implementation roadmap

## Change Proposals

### [001: Initialize OpenSpec](./changes/001-initialize-openspec.md)
Setup of OpenSpec framework with initial documentation.

## How to Use OpenSpec

### Proposing Changes
1. Create a new markdown file in `changes/` with format: `NNN-short-description.md`
2. Include: Summary, Motivation, Changes, Impact, Implementation, Testing
3. Update relevant specs in `specs/` after implementation
4. Mark proposal as "Completed" when done

### Creating Specifications
1. Create markdown file in `specs/` for new features or systems
2. Include: Overview, Technical Details, API/Schema, Implementation Notes
3. Keep specs updated as implementation evolves
4. Reference related change proposals

### Working with AI
- AI assistants read `AGENTS.md` to understand project context
- Specs provide technical reference for implementations
- Change proposals document the "why" behind decisions
- All documentation uses exact values from Flutter design system

## Current Project State

### ✅ Completed
- Landing page with hero section, features, testimonials
- Blog page with static post data
- Cosmic aurora background
- Exact Flutter design system implementation
- OpenSpec framework initialization

### ⏳ In Progress
- Planning Phase 2 Supabase blog

### 📋 Planned
- Phase 2a: Core blog functionality
- Phase 2b: Engagement features (comments, reactions)
- Phase 2c: Analytics and SEO optimization
- Vercel deployment

## Key Principles

1. **Exact Flutter Match**: Every design value must match the Flutter mobile app
2. **Specification First**: Document before implementing
3. **Change Tracking**: All changes go through proposals
4. **AI-Friendly**: Maintain AGENTS.md with current context
5. **Living Documentation**: Update specs as implementation evolves

## References

- **Design System Source**: `tailwind.config.js`, `src/index.css`
- **Flutter Values**: Documented in design-system.md
- **Current Blog Data**: `src/data/blogPosts.ts`
- **Git Workflow**: develop → main (fast-forward merge)

## Contact

For questions about specifications or proposals, review existing docs or create a new change proposal.
