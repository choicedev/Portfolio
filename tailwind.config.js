/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        secondary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  safelist: [
    'text-blue-400',
    'text-yellow-400',
    'text-green-400',
    'text-purple-400',
    'text-red-400',
    'text-cyan-400',
    'text-violet-400',
    'bg-blue-500/20',
    'bg-yellow-500/20',
    'bg-green-500/20',
    'bg-purple-500/20',
    'bg-red-500/20',
    'bg-cyan-500/20',
    'bg-violet-500/20',
    'hover:border-blue-500/30',
    'hover:border-yellow-500/30',
    'hover:border-green-500/30',
    'hover:border-purple-500/30',
  ],
  plugins: [],
};

