/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0B0F17',
          surface: '#111722',
          card: '#161B22',
          cardHover: '#1C2128',
          border: '#30363D',
          borderHover: '#484F58',
          text: '#E5E7EB',
          textMuted: '#94A3B8',
        },
        light: {
          bg: '#F3F4F6',
          surface: '#F8FAFC',
          card: '#FFFFFF',
          cardHover: '#FFFFFF',
          border: '#E2E8F0',
          borderHover: '#CBD5E1',
          text: '#0F172A',
          textMuted: '#64748B',
        },
        emerald: {
          DEFAULT: '#10B981',
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
        },
        cyan: {
          subtle: '#38BDF8',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'card-light': '0 1px 3px 0 rgba(0, 0, 0, 0.06), 0 1px 2px -1px rgba(0, 0, 0, 0.06)',
        'card-light-hover': '0 8px 20px -4px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)',
        'card-dark': '0 4px 20px -2px rgba(0, 0, 0, 0.5)',
        'card-dark-hover': '0 8px 30px -4px rgba(0, 0, 0, 0.7)',
        'emerald-subtle': '0 0 20px -3px rgba(16, 185, 129, 0.25)',
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.16, 1, 0.3, 1)',
      }
    },
  },
  plugins: [],
};