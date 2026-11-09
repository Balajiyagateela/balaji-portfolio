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
          bg: '#030712',
          surface: '#080d1a',
          card: '#0c1324',
          cardHover: '#101a33',
          border: 'rgba(59, 130, 246, 0.15)',
          borderHover: 'rgba(59, 130, 246, 0.4)',
        },
        light: {
          bg: '#f8fafc',
          surface: '#ffffff',
          card: '#ffffff',
          cardHover: '#f1f5f9',
          border: '#e2e8f0',
          borderHover: '#93c5fd',
        },
        blue: {
          royal: '#1d4ed8',
          electric: '#2563eb',
          neon: '#3b82f6',
          glow: '#60a5fa',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(59, 130, 246, 0.25)',
        'glow-md': '0 0 30px -5px rgba(59, 130, 246, 0.3)',
        'glow-lg': '0 0 50px -10px rgba(59, 130, 246, 0.35)',
        'glow-card': '0 4px 20px -2px rgba(3, 7, 18, 0.8), 0 0 15px -3px rgba(37, 99, 235, 0.15)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
};
