/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
      colors: {
        // NDR Elegant Dark Theme
        charcoal: '#121212',
        gold: '#D4AF37',
        'soft-white': '#F5F5F5',
        'warm-gray': '#B0B0B0',
        bronze: '#A67C00',
        'graphite': '#2C2C2C',
      },
      backgroundColor: {
        dark: '#121212',
      },
      textColor: {
        light: '#F5F5F5',
        muted: '#B0B0B0',
      },
      spacing: {
        safe: 'max(1rem, env(safe-area-inset-bottom))',
      },
    },
  },
  plugins: [],
  // PurgeCSS configuration for production
  safelist: [
    'animate-pulse',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-blue-500',
    'focus:ring-offset-2',
  ],
};
