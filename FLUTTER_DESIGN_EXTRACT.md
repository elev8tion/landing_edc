# Flutter Design System - Extracted Values

This document contains the exact design values extracted from the Everyday Christian Flutter app for implementation on the landing page.

## 🎨 **EXACT COLOR VALUES**

### Primary Brand Colors
```dart
primaryColor: #6366F1    // Modern indigo
accentColor: #8B5CF6     // Beautiful purple
goldColor: #D4AF37       // Gold/amber from logo
toggleActiveColor: #FFA726  // Amber/orange for toggles
```

### CSS Conversion:
```css
--primary-indigo: #6366F1;
--primary-purple: #8B5CF6;
--brand-gold: #D4AF37;
--toggle-amber: #FFA726;
```

---

## 🌈 **EXACT GRADIENTS**

### Primary Gradient (Indigo → Purple)
```dart
LinearGradient(
  colors: [#6366F1, #8B5CF6],
  begin: Alignment.topLeft,
  end: Alignment.bottomRight,
)
```
**CSS:**
```css
background: linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%);
```

### Dark Background Gradient
```dart
LinearGradient(
  colors: [#1A1A2E, #16213E, #0F3460],
  begin: Alignment.topCenter,
  end: Alignment.bottomCenter,
)
```
**CSS:**
```css
background: linear-gradient(180deg, #1A1A2E 0%, #16213E 50%, #0F3460 100%);
```

### Glass Gradient
```dart
LinearGradient(
  begin: Alignment.topLeft,
  end: Alignment.bottomRight,
  colors: [
    rgba(255, 255, 255, 0.125),  // 0x20FFFFFF
    rgba(255, 255, 255, 0.063),  // 0x10FFFFFF
  ],
)
```
**CSS:**
```css
background: linear-gradient(135deg, rgba(255, 255, 255, 0.125), rgba(255, 255, 255, 0.063));
```

---

## 🪟 **GLASSMORPHISM EXACT VALUES**

### Glass Intensity Levels

#### Light (Subtle)
```dart
gradient: [rgba(255, 255, 255, 0.10), rgba(255, 255, 255, 0.05)]
blur: 15px (AppBlur.light)
```

#### Medium (Balanced) - DEFAULT
```dart
gradient: [rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.08)]
blur: 25px (AppBlur.medium)
border: 2px solid rgba(212, 175, 55, 0.6)  // Gold with 60% opacity
borderRadius: 20px (AppRadius.lg)
```

#### Strong (Deep Frosted)
```dart
gradient: [rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.15)]
blur: 40px (AppBlur.strong)
```

#### Very Strong
```dart
blur: 60px (AppBlur.veryStrong)
```

---

## 🔲 **BORDER RADIUS VALUES**

```dart
xs: 8px
sm: 12px
md: 16px
lg: 20px   // Default card radius
xl: 24px   // Large card radius
xxl: 28px  // Button radius
pill: 100px // Fully rounded
```

---

## 📏 **EXACT BORDER STYLES**

### Primary Glass Border (Gold)
```dart
border: 2px solid rgba(212, 175, 55, 0.6)
```
**CSS:**
```css
border: 2px solid rgba(212, 175, 55, 0.6);
```

### Primary Glass Subtle
```dart
border: 1.5px solid rgba(212, 175, 55, 0.5)
```

### Primary Glass Thin
```dart
border: 1px solid rgba(212, 175, 55, 0.3)
```

### Subtle White Border
```dart
border: 1px solid rgba(255, 255, 255, 0.2)
```

### Inner Border (for depth)
```dart
border: 1px solid rgba(255, 255, 255, 0.2)
```

---

## 🌑 **SHADOWS**

### Card Shadow
```dart
BoxShadow(
  color: rgba(0, 0, 0, 0.05),
  blurRadius: 10px,
  offset: (0, 4px),
)
```
**CSS:**
```css
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
```

### Elevated Shadow (with primary color)
```dart
BoxShadow(
  color: rgba(99, 102, 241, 0.2),  // primaryColor with 20% opacity
  blurRadius: 20px,
  offset: (0, 8px),
)
```
**CSS:**
```css
box-shadow: 0 8px 20px rgba(99, 102, 241, 0.2);
```

### Glass Shadow
```dart
BoxShadow(
  color: rgba(0, 0, 0, 0.1),
  blurRadius: 20px,
  offset: (0, 10px),
)
```
**CSS:**
```css
box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
```

---

## 📐 **SPACING SCALE**

```dart
xs: 4px
sm: 8px
md: 12px
lg: 16px   // Card padding
xl: 20px   // Screen padding, large card padding
xxl: 24px  // Button padding horizontal
xxxl: 32px
huge: 40px
```

**Card Padding:**
```dart
cardPadding: 16px all sides
cardPaddingLarge: 20px all sides
```

---

## ✨ **TEXT SHADOWS**

### Subtle
```dart
Shadow(
  color: rgba(0, 0, 0, 0.15),
  offset: (0, 1px),
  blurRadius: 2px,
)
```

### Medium
```dart
Shadow(
  color: rgba(0, 0, 0, 0.30),
  offset: (0, 1px),
  blurRadius: 3px,
)
```

### Strong
```dart
Shadow(
  color: rgba(0, 0, 0, 0.40),
  offset: (0, 2px),
  blurRadius: 4px,
)
```

---

## 🎯 **EXACT COMPONENT VALUES**

### Frosted Glass Card (Most Common)
```css
.frosted-glass-card {
  backdrop-filter: blur(40px);
  background: linear-gradient(135deg,
    rgba(255, 255, 255, 0.15),
    rgba(255, 255, 255, 0.08)
  );
  border: 2px solid rgba(212, 175, 55, 0.6);
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(99, 102, 241, 0.2);
  /* Inner border for depth */
  box-shadow:
    0 8px 20px rgba(99, 102, 241, 0.2),
    inset 0 0 0 1px rgba(255, 255, 255, 0.2);
}
```

### Glass Button Style
```css
.glass-button {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 28px;
  padding: 16px 24px;
  backdrop-filter: blur(25px);
}
```

### Primary Glass Button (with color)
```css
.primary-glass-button {
  background: rgba(99, 102, 241, 0.8);
  border-radius: 28px;
  padding: 16px 24px;
  box-shadow: 0 8px 20px rgba(99, 102, 241, 0.4);
}
```

---

## 🔢 **ANIMATION DURATIONS**

```dart
fast: 200ms
normal: 400ms
slow: 600ms
verySlow: 800ms

fadeIn: 600ms
slideIn: 400ms
scaleIn: 400ms
```

---

## 📱 **ICON SIZES**

```dart
iconXs: 16px
iconSm: 20px
iconMd: 24px
iconLg: 32px
iconXl: 40px
```

---

## 🎨 **SEMANTIC COLOR TOKENS**

### Text on Dark Backgrounds
```dart
primaryText: white (100%)
secondaryText: white (80%)
tertiaryText: white (60%)
disabledText: white (40%)
```

### Glass Overlays
```dart
glassOverlayLight: rgba(255, 255, 255, 0.15)
glassOverlayMedium: rgba(255, 255, 255, 0.10)
glassOverlaySubtle: rgba(255, 255, 255, 0.05)
```

### Accent Borders
```dart
accentBorder: rgba(212, 175, 55, 0.6)  // Gold
primaryBorder: rgba(255, 255, 255, 0.2)  // White
subtleBorder: rgba(255, 255, 255, 0.1)
```

---

## 📝 **NOTES**

- Font: Plus Jakarta Sans (primary), Space Grotesk (secondary)
- All gradients use topLeft → bottomRight (135deg in CSS) or topCenter → bottomCenter (180deg)
- Gold color (#D4AF37) is THE signature color for borders and accents
- Blur values: 15px (light), 25px (medium), 40px (strong), 60px (very strong)
- Border widths: 1px (thin), 1.5px (subtle), 2px (standard)
- Card padding: 16px (standard), 20px (large)
- Button radius: 28px (very rounded, pill-like)

---

## 🚀 **IMPLEMENTATION PRIORITY**

1. ✅ Update primary/accent colors to exact values
2. ✅ Fix glass gradient opacity levels
3. ✅ Update blur strength to 40px for cards
4. ✅ Change border to 2px gold (#D4AF37 at 60% opacity)
5. ✅ Add inner white border for depth
6. ✅ Update shadows to match exact blur/offset values
7. ✅ Ensure border-radius is 20px for cards, 28px for buttons
