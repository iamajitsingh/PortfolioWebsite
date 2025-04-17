module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', // ← tell Tailwind to use a class instead of media-query
  theme: {
    extend: {
  keyframes: {
    shimmer: {
      '0%': { backgroundPosition: '-200% 0' },
      '100%': { backgroundPosition: '200% 0' },
    },
    'hue-rotate': {
      '0%': { filter: 'hue-rotate(0deg)' },
      '100%': { filter: 'hue-rotate(360deg)' },
    },
  },
  animation: {
    shimmer: 'shimmer 2s linear infinite',
    'spin-slow': 'spin 3s linear infinite',
    'hue-rotate': 'hue-rotate 30s linear infinite',
    pulse: 'pulse 2.5s ease-in-out infinite',
    'pulse-glow': 'pulse 4s ease-in-out infinite',


  },
},
  },
  plugins: [],
}
