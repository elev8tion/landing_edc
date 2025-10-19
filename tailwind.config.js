/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: {
            light: '#A78BFA',
            DEFAULT: '#8B5CF6',
            dark: '#7C3AED',
          },
          blue: {
            light: '#60A5FA',
            DEFAULT: '#3B82F6',
            dark: '#2563EB',
          },
          amber: {
            light: '#FCD34D',
            DEFAULT: '#F59E0B',
            dark: '#D97706',
          },
          gold: '#FCA311',
        },
      },
      backgroundImage: {
        'gradient-app': 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 50%, #3B82F6 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(139, 92, 246, 0.15)',
        'glass-hover': '0 12px 40px 0 rgba(139, 92, 246, 0.25)',
      },
    },
  },
  plugins: [],
};
