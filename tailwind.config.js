/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          // EXACT Flutter colors from app_theme.dart
          indigo: '#6366F1',      // primaryColor
          purple: '#8B5CF6',      // accentColor
          gold: '#D4AF37',        // goldColor - THE signature color
          amber: '#FFA726',       // toggleActiveColor
        },
      },
      backgroundImage: {
        // EXACT Flutter gradient: primaryColor → accentColor
        'gradient-primary': 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
        // EXACT Flutter dark gradient
        'gradient-dark': 'linear-gradient(180deg, #1A1A2E 0%, #16213E 50%, #0F3460 100%)',
        // EXACT Flutter glass gradient
        'gradient-glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.125), rgba(255, 255, 255, 0.063))',
        // Glass card gradient (medium intensity)
        'gradient-glass-medium': 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.08))',
      },
      boxShadow: {
        // EXACT Flutter elevatedShadow
        'glass': '0 8px 20px rgba(99, 102, 241, 0.2)',
        'glass-hover': '0 12px 24px rgba(99, 102, 241, 0.3)',
        // EXACT Flutter glassShadow
        'glass-dark': '0 10px 20px rgba(0, 0, 0, 0.1)',
        // EXACT Flutter cardShadow
        'card': '0 4px 10px rgba(0, 0, 0, 0.05)',
      },
      backdropBlur: {
        // EXACT Flutter blur values
        'xs': '15px',    // AppBlur.light
        'sm': '25px',    // AppBlur.medium
        'md': '40px',    // AppBlur.strong
        'lg': '60px',    // AppBlur.veryStrong
      },
      borderRadius: {
        // EXACT Flutter radius values
        'xs': '8px',
        'sm': '12px',
        'md': '16px',
        'lg': '20px',    // Default card radius
        'xl': '24px',    // Large card radius
        '2xl': '28px',   // Button radius
        'pill': '100px', // Fully rounded
      },
    },
  },
  plugins: [],
};
