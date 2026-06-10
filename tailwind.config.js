/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#050816',
        'dark-2': '#0d1224',
        primary: '#64ffda',
        secondary: '#a855f7',
        'text-primary': '#ccd6f6',
        'text-secondary': '#8892b0',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backdropBlur: {
        glass: '20px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          from: { boxShadow: '0 0 20px rgba(100, 255, 218, 0.2)' },
          to: { boxShadow: '0 0 40px rgba(100, 255, 218, 0.5)' },
        },
      },
    },
  },
  plugins: [],
}
