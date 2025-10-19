# Design System Specification

**Version**: 1.0
**Last Updated**: 2025-10-19
**Status**: Active

## Overview
The Everyday Christian landing page uses a design system that **exactly matches** the Flutter mobile app to ensure 100% brand consistency across platforms.

## Color Palette

### Brand Colors
```
Primary Indigo:  #6366F1  (Flutter: primaryColor)
Accent Purple:   #8B5CF6  (Flutter: accentColor)
Signature Gold:  #D4AF37  (Flutter: goldColor - THE signature color)
Active Amber:    #FFA726  (Flutter: toggleActiveColor)
```

### Usage Guidelines
- **Gold** is the signature color - use for CTAs, highlights, and brand moments
- **Indigo → Purple** gradient for primary UI elements
- **Amber** for active states and toggles
- Text colors: white primary, blue-200 secondary, blue-300 tertiary

## Glassmorphism

### Glass Card (Medium Intensity)
```css
backdrop-filter: blur(40px);          /* AppBlur.strong */
background: linear-gradient(
  135deg,
  rgba(255, 255, 255, 0.15),
  rgba(255, 255, 255, 0.08)
);
border: 2px solid rgba(212, 175, 55, 0.6);  /* Gold at 60% */
border-radius: 20px;                   /* AppRadius.lg */
box-shadow:
  0 8px 20px rgba(99, 102, 241, 0.2),  /* elevatedShadow */
  inset 0 0 0 1px rgba(255, 255, 255, 0.2);
```

### Hover State
```css
background: linear-gradient(
  135deg,
  rgba(255, 255, 255, 0.20),
  rgba(255, 255, 255, 0.12)
);
border-color: rgba(212, 175, 55, 0.8);  /* Gold at 80% */
box-shadow:
  0 12px 24px rgba(99, 102, 241, 0.3),
  inset 0 0 0 1px rgba(255, 255, 255, 0.3);
transform: scale(1.02);
transition: all 400ms;
```

## Typography

### Text Gradient (Gold Accent)
```css
background-image: linear-gradient(
  135deg,
  #D4AF37 0%,    /* Gold */
  #FFA726 50%,   /* Amber */
  #D4AF37 100%   /* Gold */
);
background-clip: text;
-webkit-background-clip: text;
color: transparent;
```

### Font Sizes
- Hero: `text-5xl md:text-7xl` (80px-96px desktop)
- Section Headers: `text-4xl md:text-5xl` (48px-60px)
- Subsections: `text-3xl md:text-4xl` (36px-48px)
- Body Large: `text-xl md:text-2xl` (20px-24px)
- Body: `text-lg` (18px)

## Background

### Cosmic Aurora
```css
background-color: #0a0a0a;
background-image:
  radial-gradient(ellipse at 20% 30%, rgba(56, 189, 248, 0.4) 0%, transparent 60%),
  radial-gradient(ellipse at 80% 70%, rgba(139, 92, 246, 0.3) 0%, transparent 70%),
  radial-gradient(ellipse at 60% 20%, rgba(236, 72, 153, 0.25) 0%, transparent 50%),
  radial-gradient(ellipse at 40% 80%, rgba(34, 197, 94, 0.2) 0%, transparent 65%);
```

## Border Radius

```
xs:   8px   (Small elements)
sm:   12px  (Form inputs)
md:   16px  (Medium cards)
lg:   20px  (Default cards - matches Flutter AppRadius.lg)
xl:   24px  (Large cards)
2xl:  28px  (Buttons - matches Flutter)
pill: 100px (Fully rounded)
```

## Shadows

### Glass Shadow
```
0 8px 20px rgba(99, 102, 241, 0.2)     /* elevatedShadow */
```

### Glass Hover
```
0 12px 24px rgba(99, 102, 241, 0.3)
```

### Glass Dark
```
0 10px 20px rgba(0, 0, 0, 0.1)          /* glassShadow */
```

### Card Shadow
```
0 4px 10px rgba(0, 0, 0, 0.05)          /* cardShadow */
```

## Blur Values

```
xs: 15px  (AppBlur.light)
sm: 25px  (AppBlur.medium)
md: 40px  (AppBlur.strong - default for cards)
lg: 60px  (AppBlur.veryStrong)
```

## Buttons

### Primary CTA (Gold Gradient)
```tsx
className="bg-gradient-to-r from-brand-gold via-brand-amber to-brand-gold
           text-blue-900 font-semibold px-8 py-4 rounded-2xl
           hover:shadow-lg hover:shadow-brand-gold/50
           transition-all transform hover:scale-105"
```

### Secondary (Glass)
```tsx
className="glass-card glass-card-hover px-8 py-4 text-white font-semibold"
```

## Animations

### Keyframes
- `fadeInUp`: Fade in + translate up 30px
- `fadeIn`: Simple opacity transition
- `slideInLeft`: Slide from left with fade
- `slideInRight`: Slide from right with fade
- `float`: Continuous up/down motion (20px range)

### Scroll Animations
All sections use `.scroll-animate` class:
```css
opacity: 0;  /* Initial state */
```

Triggered by `useScrollAnimation` hook when element enters viewport.

### Stagger Pattern
```tsx
style={{ animationDelay: `${index * 0.1}s` }}
```

## Implementation Notes

1. **Always reference Flutter values** - Comments in code should cite exact Flutter equivalents
2. **No arbitrary values** - Every design token must come from the Flutter app
3. **Test in dark mode** - Cosmic aurora background is dark by default
4. **Performance** - Use `will-change` sparingly, prefer transforms over position changes
5. **Accessibility** - Maintain WCAG AA contrast ratios despite glassmorphism

## Cross-Platform Consistency

| Element | Flutter | Web |
|---------|---------|-----|
| Primary Color | `#6366F1` | `brand-indigo` |
| Accent Color | `#8B5CF6` | `brand-purple` |
| Gold Color | `#D4AF37` | `brand-gold` |
| Card Blur | 40px | `backdrop-blur-md` |
| Card Radius | 20px | `rounded-lg` |
| Button Radius | 28px | `rounded-2xl` |
| Gold Border | 2px @ 60% | `border-2 border-brand-gold/60` |
